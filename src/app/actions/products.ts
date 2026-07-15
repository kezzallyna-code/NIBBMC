'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function createProduct(formData: FormData) {
  const supabase = await createClient()

  // Extract form fields
  const name = formData.get('name') as string
  const description = formData.get('description') as string
  const price = formData.get('price_da') as string
  const sku = formData.get('sku') as string
  const stock = formData.get('stock') as string
  const category_id = formData.get('category_id') as string
  const collection_id = formData.get('collection_id') as string
  const status = formData.get('status') as string

  // Handle files
  const files = formData.getAll('images') as File[]

  // Insert product
  const { data: product, error: productError } = await supabase
    .from('products')
    .insert([
      {
        name,
        slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
        description,
        price: parseFloat(price) || 0,
        sku,
        status: status === 'Publié' ? 'published' : 'draft',
        category_id: category_id || null,
        collection_id: collection_id || null,
      }
    ])
    .select()
    .single()

  if (productError) {
    console.error('Error creating product:', productError)
    return { success: false, error: productError.message }
  }

  // Upload images
  const imageUrls = []
  if (files && files.length > 0) {
    // Try to ensure bucket exists, ignore error if it already exists
    await supabase.storage.createBucket('products', { public: true })

    for (const file of files) {
      if (file.size === 0) continue

      const fileExt = file.name.split('.').pop()
      const fileName = `${product.id}-${Math.random().toString(36).substring(7)}.${fileExt}`
      const filePath = `product-images/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('products')
        .upload(filePath, file)

      if (uploadError) {
        console.error('Error uploading image:', uploadError)
        continue;
      }

      const { data: publicUrlData } = supabase.storage
        .from('products')
        .getPublicUrl(filePath)
        
      imageUrls.push(publicUrlData.publicUrl)
    }

    // Insert image URLs to product_images
    if (imageUrls.length > 0) {
      const imageInserts = imageUrls.map((url, index) => ({
        product_id: product.id,
        image_url: url,
        sort_order: index
      }))

      await supabase.from('product_images').insert(imageInserts)
      
      // Update cover image on product
      await supabase.from('products').update({ cover_image: imageUrls[0] }).eq('id', product.id)
    }
  }

  // Insert inventory if stock provided
  if (stock) {
    // First we need a default variant
    const { data: variant } = await supabase
      .from('product_variants')
      .insert([{ product_id: product.id, stock: parseInt(stock) || 0, sku: sku }])
      .select()
      .single()
      
    if (variant) {
      await supabase.from('inventory_movements').insert([{
        product_variant_id: variant.id,
        quantity: parseInt(stock) || 0,
        movement_type: 'IN',
        reason: 'Initial stock'
      }])
    }
  }

  revalidatePath('/admin/products')
  return { success: true, product }
}

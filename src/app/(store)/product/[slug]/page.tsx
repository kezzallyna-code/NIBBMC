import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import ProductDetailsClient from "./ProductDetailsClient";

export default async function ProductDetailsPage({ params }: { params: { slug: string } }) {
  const supabase = await createClient();

  const { data: product, error } = await supabase
    .from('products')
    .select(`
      *,
      category:categories(id, name, slug),
      collection:collections(id, name, slug)
    `)
    .eq('slug', params.slug)
    .single();

  if (error || !product) {
    notFound();
  }

  // Parse images if it's a string, or keep as array
  let imagesArray: string[] = [];
  if (product.images) {
    try {
      imagesArray = typeof product.images === 'string' ? JSON.parse(product.images) : product.images;
    } catch (e) {
      imagesArray = [];
    }
  }

  const cleanProduct = {
    ...product,
    images: imagesArray,
    category: Array.isArray(product.category) ? product.category[0] : product.category,
    collection: Array.isArray(product.collection) ? product.collection[0] : product.collection,
  };

  return <ProductDetailsClient product={cleanProduct} />;
}

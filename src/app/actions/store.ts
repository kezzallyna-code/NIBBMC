'use server'

import { createClient } from '@/utils/supabase/server'

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
  color?: string;
}

export async function submitCheckout(formData: FormData, cartItems: CartItem[], total_da: number) {
  const supabase = await createClient();

  const full_name = formData.get('full_name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const country = formData.get('country') as string;
  const wilaya = formData.get('wilaya') as string;
  const commune = formData.get('commune') as string;
  const postal_code = formData.get('postal_code') as string;
  const address = formData.get('address') as string;
  const delivery_method = formData.get('delivery_method') as string;

  if (!full_name || !phone || !wilaya || !address) {
    return { success: false, error: 'Veuillez remplir tous les champs obligatoires.' }
  }

  // 1. Find or create a profile for this customer (without password/login)
  let customer_id = null;
  
  if (email || phone) {
    let query = supabase.from('profiles').select('id');
    if (email) {
      query = query.eq('email', email);
    } else {
      query = query.eq('phone', phone);
    }
    
    const { data: existingProfile } = await query.single();
    
    if (existingProfile) {
      customer_id = existingProfile.id;
    } else {
      // Create new silent profile
      const { data: newProfile, error: profileError } = await supabase
        .from('profiles')
        .insert([{
          id: crypto.randomUUID(),
          full_name,
          phone,
          email: email || null
        }])
        .select()
        .single();
        
      if (!profileError && newProfile) {
        customer_id = newProfile.id;
      }
    }
  }

  // 2. Insert Order
  const order_number = `#LCH-${Math.floor(1000 + Math.random() * 9000)}`;

  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert([{
      order_number,
      customer_id,
      full_name,
      email,
      phone,
      wilaya,
      commune,
      postal_code,
      address,
      delivery_method: delivery_method === 'yalidine' ? 'Yalidine (Point relais)' : 'Livraison à domicile',
      payment_method: 'Paiement à la livraison',
      subtotal_da: total_da,
      shipping_cost_da: 0,
      total_da,
      status: 'Pending'
    }])
    .select()
    .single();

  if (orderError) {
    console.error('Order Error:', orderError);
    return { success: false, error: orderError.message };
  }

  // 3. Insert Order Items (optional, if we create an order_items table. Let's check if we have one)
  // Our schema didn't explicitly mention order_items, let me verify.

  return { success: true, order_number };
}

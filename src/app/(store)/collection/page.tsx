import { createClient } from "@/utils/supabase/server";
import CollectionClient from "./CollectionClient";

export default async function CollectionPage() {
  const supabase = await createClient();

  // Fetch all published products
  const { data: rawProducts } = await supabase
    .from('products')
    .select(`
      id, name, slug, description, price, stock, main_image,
      category:categories(name),
      collection:collections(name)
    `)
    .eq('status', 'Published')
    .order('created_at', { ascending: false });

  const products = (rawProducts || []).map(p => ({
    ...p,
    category: Array.isArray(p.category) ? p.category[0] : p.category,
    collection: Array.isArray(p.collection) ? p.collection[0] : p.collection,
  }));

  return <CollectionClient initialProducts={products} />;
}

import NewProductClient from "./NewProductClient";
import { createClient } from "@/utils/supabase/server";

export default async function NewProductPage() {
  const supabase = await createClient();
  
  const { data: categories } = await supabase.from('categories').select('id, name').order('name');
  const { data: collections } = await supabase.from('collections').select('id, name').order('name');

  return <NewProductClient categories={categories || []} collections={collections || []} />;
}

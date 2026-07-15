'use client';

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import ImageUploadClient from "../../components/ImageUploadClient";
import { useState } from "react";
import { createProduct } from "@/app/actions/products";
import { useRouter } from "next/navigation";

type Category = { id: string; name: string; }
type Collection = { id: string; name: string; }

export default function NewProductClient({ categories, collections }: { categories: Category[], collections: Collection[] }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Append images
    selectedImages.forEach((file) => {
      formData.append('images', file);
    });

    const result = await createProduct(formData);
    
    if (result.success) {
      router.push('/admin/products');
    } else {
      alert("Erreur: " + result.error);
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex items-center gap-4">
          <Link href="/admin/products" className="p-2 border border-outline-variant rounded-md text-secondary hover:text-primary hover:bg-surface-variant transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="font-headline-md text-headline-md">Ajouter un produit</h1>
            <p className="text-secondary font-body-sm mt-1">Créez un nouveau produit dans votre catalogue</p>
          </div>
        </div>
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="flex items-center gap-2 px-6 py-2 bg-primary text-on-primary font-body-md rounded-md hover:bg-[#C8A96A] transition-colors shadow-sm disabled:opacity-50"
        >
          <Save size={18} />
          {isSubmitting ? 'Enregistrement...' : 'Enregistrer le produit'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-6 space-y-4">
            <h2 className="font-headline-md text-body-lg mb-4">Informations générales</h2>
            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Nom du produit</label>
              <input name="name" required type="text" placeholder="Ex: Caftan en Soie Brodée" className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Description</label>
              <textarea name="description" rows={5} placeholder="Décrivez votre produit en détail..." className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-6 space-y-4">
            <h2 className="font-headline-md text-body-lg mb-4">Photos du produit</h2>
            <ImageUploadClient 
              label="Cliquez pour uploader les photos" 
              recommendedSize="Taille recommandée: 1080x1440 (PNG, JPG). Jusqu'à 5 photos." 
              multiple={true} 
              onChange={setSelectedImages}
            />
          </div>

          <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-6 space-y-4">
            <h2 className="font-headline-md text-body-lg mb-4">Tarification et Inventaire</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Prix (DA)</label>
                <input name="price_da" required type="number" placeholder="Ex: 150000" className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">SKU</label>
                <input name="sku" type="text" placeholder="Ex: CSB-G-01" className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Taille(s)</label>
                <input name="sizes" type="text" placeholder="Ex: S, M, L, XL" className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Quantité en stock</label>
                <input name="stock" type="number" placeholder="Ex: 10" className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-6 space-y-4">
            <h2 className="font-headline-md text-body-lg mb-4">Organisation</h2>
            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Catégorie</label>
              <select name="category_id" className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors bg-white">
                <option value="">Sélectionnez une catégorie...</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Collection</label>
              <select name="collection_id" className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors bg-white">
                <option value="">Sélectionnez une collection...</option>
                {collections.map(col => (
                  <option key={col.id} value={col.id}>{col.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Statut</label>
              <select name="status" className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors bg-white">
                <option value="Brouillon">Brouillon</option>
                <option value="Publié">Publié</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

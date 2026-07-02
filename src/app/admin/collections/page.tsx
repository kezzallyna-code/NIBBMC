"use client";

import { Plus, Search, Filter, MoreVertical, Edit, Trash2, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export default function CollectionsPage() {
  const collections = [
    { id: "COL-01", name: "Série Signature Hiver '24", products: 24, status: "Actif", order: 1, featured: true },
    { id: "COL-02", name: "Abayas de luxe", products: 45, status: "Actif", order: 2, featured: true },
    { id: "COL-03", name: "Robes de soirée", products: 32, status: "Actif", order: 3, featured: false },
    { id: "COL-04", name: "Couture nuptiale", products: 18, status: "Brouillon", order: 4, featured: false },
    { id: "COL-05", name: "Collection lin d'été", products: 30, status: "Inactif", order: 5, featured: false },
  ];

  return (
    <div className="pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="font-headline-md text-headline-md">Collections</h1>
          <p className="text-secondary font-body-sm mt-1">Gérer les collections de produits et les catégories en vedette</p>
        </div>
        <Link 
          href="/admin/collections/new"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary font-body-md rounded-md hover:bg-[#C8A96A] transition-colors shadow-sm"
        >
          <Plus size={18} />
          Créer une collection
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Collections List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden">
            <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-variant/30">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={16} />
                <input 
                  type="text" 
                  placeholder="Rechercher des collections..." 
                  className="w-full pl-9 pr-4 py-1.5 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors bg-white"
                />
              </div>
              <button className="p-2 border border-outline-variant rounded-md text-secondary hover:text-primary hover:bg-surface-variant transition-colors">
                <Filter size={16} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-body-sm">
                <thead className="bg-surface-variant font-label-caps text-secondary text-[10px] uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-4 w-12">Ordre</th>
                    <th className="px-4 py-4">Nom de la collection</th>
                    <th className="px-4 py-4">Produits</th>
                    <th className="px-4 py-4">Statut</th>
                    <th className="px-4 py-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {collections.map((col, i) => (
                    <tr key={i} className="hover:bg-surface-variant/30 transition-colors group">
                      <td className="px-4 py-4 font-mono text-secondary">{col.order}</td>
                      <td className="px-4 py-4">
                        <p className="font-medium text-on-surface flex items-center gap-2">
                          {col.name}
                          {col.featured && <span className="px-1.5 py-0.5 bg-yellow-100 text-yellow-800 rounded text-[9px] font-bold uppercase tracking-widest">En vedette</span>}
                        </p>
                      </td>
                      <td className="px-4 py-4">{col.products} articles</td>
                      <td className="px-4 py-4">
                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider
                          ${col.status === 'Actif' ? 'bg-green-100 text-green-800' : 
                            col.status === 'Brouillon' ? 'bg-gray-100 text-gray-800' : 
                            'bg-red-100 text-red-800'}`}>
                          {col.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <div className="flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors" title="Edit">
                            <Edit size={16} />
                          </button>
                          <button className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors" title="Delete">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Create/Edit Quick Form */}
        <div className="bg-white rounded-xl border border-outline-variant shadow-sm flex flex-col h-fit">
          <div className="p-6 border-b border-outline-variant">
            <h2 className="font-headline-md text-body-lg">Édition rapide de la collection</h2>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Nom de la collection</label>
              <input type="text" defaultValue="Série Signature Hiver '24" className="w-full px-3 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary" />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Image de bannière</label>
              <div className="border-2 border-dashed border-outline-variant rounded-md p-8 flex flex-col items-center justify-center text-secondary hover:bg-surface-variant/50 transition-colors cursor-pointer group">
                <ImageIcon size={32} className="mb-2 group-hover:text-primary transition-colors" />
                <p className="font-body-sm">Cliquez pour uploader la bannière</p>
                <p className="text-xs mt-1 opacity-70">1920x1080 recommandé</p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Description</label>
              <textarea rows={3} className="w-full px-3 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary resize-none" defaultValue="Chaque fil de notre série signature raconte une histoire d'héritage et de précision."></textarea>
            </div>

            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm text-on-surface cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded border-outline-variant text-primary focus:ring-primary" />
                Collection en vedette
              </label>
            </div>
          </div>
          <div className="p-4 border-t border-outline-variant bg-surface-variant/30 flex justify-end gap-3 rounded-b-xl">
            <button className="px-4 py-2 text-sm text-secondary hover:text-primary transition-colors">Annuler</button>
            <button 
              onClick={() => alert("Modifications enregistrées avec succès.")}
              className="px-4 py-2 bg-primary text-on-primary text-sm rounded-md hover:bg-[#C8A96A] transition-colors"
            >
              Enregistrer les modifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

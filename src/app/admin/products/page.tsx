"use client";

import { Plus, Search, Filter, MoreVertical, Edit, Trash2 } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  const products = [
    { id: "PROD-001", image: "/images/products/caftan-soie.png", name: "Caftan en Soie Brodée", sku: "CSB-G-01", price: "172,000 DA", stock: 12, category: "Caftans", status: "Publié" },
    { id: "PROD-002", image: "/images/products/lux_trousers.png", name: "Signature Silk Trousers", sku: "SST-W-M", price: "122,000 DA", stock: 45, category: "Prêt-à-porter", status: "Publié" },
    { id: "PROD-003", image: "/images/products/robe-emeraude.png", name: "Robe de Soirée Émeraude", sku: "RSE-V-01", price: "330,000 DA", stock: 3, category: "Robes de Soirée", status: "Brouillon" },
    { id: "PROD-004", image: "/images/products/lux_coat.png", name: "Wool Heritage Coat", sku: "WHC-C-L", price: "427,000 DA", stock: 8, category: "Vêtements d'extérieur", status: "Publié" },
    { id: "PROD-005", image: "/images/products/lux_abaya.png", name: "Midnight Velvet Abaya", sku: "MVA-B-F", price: "285,000 DA", stock: 0, category: "Abayas", status: "Rupture de stock" },
  ];

  return (
    <div className="pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="font-headline-md text-headline-md">Catalogue de produits</h1>
          <p className="text-secondary font-body-sm mt-1">Gérez la collection, le stock et les prix de votre boutique</p>
        </div>
        <Link 
          href="/admin/products/new"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary font-body-md rounded-md hover:bg-[#C8A96A] transition-colors shadow-sm"
        >
          <Plus size={18} />
          Ajouter un produit
        </Link>
      </div>

      <div className="bg-white p-4 rounded-t-xl border border-outline-variant border-b-0 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={18} />
          <input 
            type="text" 
            placeholder="Rechercher des produits par nom ou SKU..." 
            className="w-full pl-10 pr-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors bg-surface-variant/50"
          />
        </div>
        <div className="flex gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <select className="border border-outline-variant rounded-md px-3 py-2 text-sm bg-white focus:outline-none">
            <option>Toutes les catégories</option>
            <option>Prêt-à-porter</option>
            <option>Caftans</option>
            <option>Abayas</option>
            <option>Robes de Soirée</option>
          </select>
          <select className="border border-outline-variant rounded-md px-3 py-2 text-sm bg-white focus:outline-none">
            <option>Tous les statuts</option>
            <option>Publié</option>
            <option>Brouillon</option>
            <option>Rupture de stock</option>
          </select>
          <button className="flex items-center gap-2 px-3 py-2 border border-outline-variant rounded-md text-sm hover:bg-surface-variant transition-colors whitespace-nowrap">
            <Filter size={16} />
            Filtres
          </button>
        </div>
      </div>

      <div className="bg-white rounded-b-xl border border-outline-variant shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-body-sm whitespace-nowrap">
            <thead className="bg-surface-variant font-label-caps text-secondary text-[10px] uppercase tracking-wider">
              <tr>
                <th className="px-4 py-4 w-12">
                  <input type="checkbox" className="rounded border-outline-variant text-primary focus:ring-primary" />
                </th>
                <th className="px-4 py-4">Produit</th>
                <th className="px-4 py-4">SKU</th>
                <th className="px-4 py-4">Catégorie</th>
                <th className="px-4 py-4">Prix</th>
                <th className="px-4 py-4">Stock</th>
                <th className="px-4 py-4">Statut</th>
                <th className="px-4 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {products.map((prod, i) => (
                <tr key={i} className="hover:bg-surface-variant/30 transition-colors group">
                  <td className="px-4 py-4">
                    <input type="checkbox" className="rounded border-outline-variant text-primary focus:ring-primary" />
                  </td>
                  <td className="px-4 py-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded bg-surface-variant bg-cover bg-center border border-outline-variant/30" style={{ backgroundImage: `url('${prod.image}')`}}></div>
                    <span className="font-medium text-on-surface">{prod.name}</span>
                  </td>
                  <td className="px-4 py-4 text-secondary">{prod.sku}</td>
                  <td className="px-4 py-4 text-on-surface">{prod.category}</td>
                  <td className="px-4 py-4 font-bold">{prod.price}</td>
                  <td className="px-4 py-4">
                    <span className={`font-medium ${prod.stock === 0 ? 'text-red-600' : prod.stock < 5 ? 'text-orange-600' : 'text-green-600'}`}>
                      {prod.stock} en stock
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider
                      ${prod.status === 'Publié' ? 'bg-green-100 text-green-800' : 
                        prod.status === 'Brouillon' ? 'bg-gray-100 text-gray-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {prod.status}
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
                      <button className="p-1.5 text-secondary hover:bg-surface-variant rounded transition-colors" title="More">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-outline-variant flex items-center justify-between text-sm text-secondary">
          <p>Affichage de 1 à 5 sur 156 produits</p>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-variant" disabled>Préc</button>
            <button className="px-3 py-1 bg-primary text-on-primary rounded">1</button>
            <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-variant">2</button>
            <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-variant">3</button>
            <span className="px-2 py-1">...</span>
            <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-variant">Suiv</button>
          </div>
        </div>
      </div>
    </div>
  );
}


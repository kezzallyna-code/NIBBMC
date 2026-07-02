import Link from "next/link";
import { ArrowLeft, Save, Image as ImageIcon } from "lucide-react";

export default function NewCollectionPage() {
  return (
    <div className="pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex items-center gap-4">
          <Link href="/admin/collections" className="p-2 border border-outline-variant rounded-md text-secondary hover:text-primary hover:bg-surface-variant transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="font-headline-md text-headline-md">Créer une collection</h1>
            <p className="text-secondary font-body-sm mt-1">Regroupez vos produits dans une nouvelle collection thématique</p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-6 py-2 bg-primary text-on-primary font-body-md rounded-md hover:bg-[#C8A96A] transition-colors shadow-sm">
          <Save size={18} />
          Enregistrer
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-6 space-y-4">
            <h2 className="font-headline-md text-body-lg mb-4">Informations générales</h2>
            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Nom de la collection</label>
              <input type="text" placeholder="Ex: Collection d'Été 2026" className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Description</label>
              <textarea rows={5} placeholder="L'histoire derrière cette collection..." className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-6 space-y-4">
            <h2 className="font-headline-md text-body-lg mb-4">Bannière de la collection</h2>
            <div className="border-2 border-dashed border-outline-variant rounded-xl p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-variant/30 transition-colors">
              <div className="w-16 h-16 bg-surface-variant rounded-full flex items-center justify-center text-secondary mb-4">
                <ImageIcon size={24} />
              </div>
              <p className="font-bold text-primary mb-1">Cliquez pour uploader la bannière</p>
              <p className="text-xs text-secondary">Taille recommandée: 1920x1080 (PNG, JPG)</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-6 space-y-4">
            <h2 className="font-headline-md text-body-lg mb-4">Mise en avant</h2>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="featured" className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" />
              <label htmlFor="featured" className="text-sm font-bold text-on-surface cursor-pointer">Collection en vedette</label>
            </div>
            <p className="text-xs text-secondary pl-8">Cette collection apparaîtra sur la page d'accueil et dans les menus principaux.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

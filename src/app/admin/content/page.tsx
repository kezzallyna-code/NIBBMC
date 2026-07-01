import { Layout, FileText, Image as ImageIcon, Type, Edit, Save, Globe } from "lucide-react";

export default function ContentPage() {
  const sections = [
    { id: "hero", name: "Bannière héro de la page d'accueil", type: "Image & Texte", status: "Publié", lastUpdated: "20 Oct 2026" },
    { id: "about", name: "Page À propos de nous", type: "Texte riche", status: "Publié", lastUpdated: "15 Sep 2026" },
    { id: "terms", name: "Conditions générales", type: "Texte riche", status: "Publié", lastUpdated: "10 Jan 2026" },
    { id: "privacy", name: "Politique de confidentialité", type: "Texte riche", status: "Publié", lastUpdated: "10 Jan 2026" },
    { id: "faq", name: "Section FAQ", type: "Liste en accordéon", status: "Brouillon", lastUpdated: "24 Oct 2026" },
  ];

  return (
    <div className="pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="font-headline-md text-headline-md">Contenu du site web</h1>
          <p className="text-secondary font-body-sm mt-1">Gérer les pages statiques, les bannières et le contenu textuel</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-outline-variant text-on-surface font-body-md rounded-md hover:bg-surface-variant transition-colors">
          <Globe size={18} />
          Voir le site en direct
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Content Sections List */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col h-[calc(100vh-220px)]">
            <div className="p-4 border-b border-outline-variant bg-surface-variant/30">
              <h2 className="font-headline-md text-body-lg flex items-center gap-2">
                <Layout size={18} className="text-primary" /> Sections et Pages
              </h2>
            </div>
            <div className="overflow-y-auto flex-1 custom-scrollbar p-2">
              {sections.map((section, i) => (
                <div key={i} className={`p-3 rounded-lg cursor-pointer transition-colors mb-1 ${i === 0 ? 'bg-primary/5 border border-primary/20' : 'hover:bg-surface-variant/50 border border-transparent'}`}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-sm text-on-surface">{section.name}</h3>
                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider
                      ${section.status === 'Publié' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {section.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-secondary mt-2">
                    <span className="flex items-center gap-1 font-medium">
                      {section.type === 'Image & Texte' ? <ImageIcon size={12}/> : <FileText size={12}/>}
                      {section.type}
                    </span>
                    <span>{section.lastUpdated}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Editor Area */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col h-[calc(100vh-220px)]">
            <div className="p-4 border-b border-outline-variant bg-surface-variant/30 flex justify-between items-center">
              <h2 className="font-headline-md text-body-lg">Édition : Bannière héro de la page d'accueil</h2>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-3 py-1.5 border border-outline-variant text-secondary hover:text-primary hover:bg-surface-variant rounded-md text-sm transition-colors">
                  <Edit size={16} /> Annuler les modifications
                </button>
                <button className="flex items-center gap-2 px-4 py-1.5 bg-primary text-on-primary rounded-md text-sm hover:bg-[#C8A96A] transition-colors">
                  <Save size={16} /> Enregistrer et publier
                </button>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto custom-scrollbar space-y-6">
              
              {/* Image Editor */}
              <div>
                <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Image d'arrière-plan</label>
                <div className="border-2 border-dashed border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center bg-surface-variant/30 hover:bg-surface-variant/50 transition-colors cursor-pointer group relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-30 transition-opacity" style={{backgroundImage: "url('/media/winter-collection-banner.jpg')"}}></div>
                  <ImageIcon size={32} className="text-secondary mb-2 relative z-10" />
                  <p className="text-sm font-medium text-on-surface relative z-10">Cliquez pour remplacer l'image</p>
                  <p className="text-xs text-secondary mt-1 relative z-10">Taille recommandée : 1920x1080px</p>
                  <div className="mt-4 px-3 py-1 bg-white border border-outline-variant rounded text-xs font-medium relative z-10">
                    winter-collection-banner.jpg
                  </div>
                </div>
              </div>

              {/* Text Editors */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Type size={14} /> Texte de titre
                  </label>
                  <input 
                    type="text" 
                    defaultValue="Collection Hiver 2026" 
                    className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-md focus:outline-none focus:border-primary transition-colors font-bold text-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Type size={14} /> Texte de sous-titre
                  </label>
                  <input 
                    type="text" 
                    defaultValue="Découvrez la nouvelle série signature mettant en vedette du velours et de la soie de qualité supérieure." 
                    className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors text-secondary"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Libellé du bouton</label>
                    <input 
                      type="text" 
                      defaultValue="Acheter la collection" 
                      className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">URL du lien du bouton</label>
                    <input 
                      type="text" 
                      defaultValue="/collections/winter-26" 
                      className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors font-mono text-xs"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

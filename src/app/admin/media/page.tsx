import { UploadCloud, Search, Filter, Folder, Image as ImageIcon, Trash2, MoreVertical, Grid, List as ListIcon } from "lucide-react";

export default function MediaPage() {
  const media = [
    { id: "M-001", name: "winter-collection-banner.jpg", size: "2.4 MB", date: "Oct 24, 2026", type: "image/jpeg", folder: "Banners" },
    { id: "M-002", name: "abaya-velvet-black-1.jpg", size: "1.1 MB", date: "Oct 24, 2026", type: "image/jpeg", folder: "Products" },
    { id: "M-003", name: "abaya-velvet-black-2.jpg", size: "1.2 MB", date: "Oct 24, 2026", type: "image/jpeg", folder: "Products" },
    { id: "M-004", name: "abaya-velvet-black-detail.jpg", size: "850 KB", date: "Oct 24, 2026", type: "image/jpeg", folder: "Products" },
    { id: "M-005", name: "luxnibal-logo-gold.png", size: "120 KB", date: "Oct 20, 2026", type: "image/png", folder: "Brand Assets" },
    { id: "M-006", name: "hero-video-homepage.mp4", size: "14.5 MB", date: "Oct 15, 2026", type: "video/mp4", folder: "Videos" },
    { id: "M-007", name: "silk-trousers-beige.jpg", size: "1.4 MB", date: "Oct 12, 2026", type: "image/jpeg", folder: "Products" },
    { id: "M-008", name: "size-guide-abayas.pdf", size: "450 KB", date: "Oct 10, 2026", type: "application/pdf", folder: "Documents" },
  ];

  const folders = [
    { name: "Produits", count: 432 },
    { name: "Bannières", count: 24 },
    { name: "Ressources de marque", count: 12 },
    { name: "Vidéos", count: 8 },
    { name: "Documents", count: 3 },
  ];

  return (
    <div className="pb-10 flex flex-col h-[calc(100vh-80px)]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 shrink-0">
        <div>
          <h1 className="font-headline-md text-headline-md">Médiathèque</h1>
          <p className="text-secondary font-body-sm mt-1">Gérer les images de produits, les bannières et les ressources</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary font-body-md rounded-md hover:bg-[#C8A96A] transition-colors shadow-sm">
          <UploadCloud size={18} />
          Téléverser des fichiers
        </button>
      </div>

      <div className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-1 min-h-0">
        
        {/* Sidebar Folders */}
        <div className="w-64 border-r border-outline-variant hidden md:flex flex-col bg-surface-variant/10 shrink-0">
          <div className="p-4 border-b border-outline-variant">
            <h3 className="font-bold text-xs uppercase tracking-wider text-secondary">Dossiers</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
            <button className="w-full flex justify-between items-center px-3 py-2 bg-primary/10 text-primary font-medium rounded-md text-sm transition-colors">
              <span className="flex items-center gap-2"><Folder size={16} className="fill-primary/20" /> Tous les médias</span>
              <span className="text-xs bg-white/50 px-1.5 rounded">479</span>
            </button>
            {folders.map((f, i) => (
              <button key={i} className="w-full flex justify-between items-center px-3 py-2 text-secondary hover:text-on-surface hover:bg-surface-variant font-medium rounded-md text-sm transition-colors group">
                <span className="flex items-center gap-2"><Folder size={16} className="fill-transparent group-hover:fill-surface-variant transition-colors" /> {f.name}</span>
                <span className="text-xs bg-surface-variant px-1.5 rounded">{f.count}</span>
              </button>
            ))}
          </div>
          <div className="p-4 border-t border-outline-variant">
            <div className="flex justify-between items-center text-xs mb-2">
              <span className="text-secondary font-medium">Stockage utilisé</span>
              <span className="font-bold">4.2 GB / 10 GB</span>
            </div>
            <div className="w-full bg-surface-variant rounded-full h-1.5">
              <div className="bg-primary h-1.5 rounded-full" style={{width: '42%'}}></div>
            </div>
          </div>
        </div>

        {/* Media Grid/List */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-variant/30 shrink-0">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={16} />
              <input 
                type="text" 
                placeholder="Rechercher des fichiers multimédias..." 
                className="w-full pl-9 pr-4 py-1.5 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors bg-white"
              />
            </div>
            <div className="flex gap-2">
              <button className="p-2 border border-outline-variant rounded-md text-primary bg-white shadow-sm transition-colors">
                <Grid size={16} />
              </button>
              <button className="p-2 border border-outline-variant rounded-md text-secondary hover:text-primary hover:bg-white transition-colors">
                <ListIcon size={16} />
              </button>
              <div className="w-px h-8 bg-outline-variant mx-1"></div>
              <button className="p-2 border border-outline-variant rounded-md text-secondary hover:text-primary hover:bg-white transition-colors">
                <Filter size={16} />
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 bg-surface/30 custom-scrollbar">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {media.map((item, i) => (
                <div key={i} className="bg-white border border-outline-variant rounded-lg overflow-hidden group hover:border-primary transition-colors hover:shadow-sm cursor-pointer flex flex-col">
                  <div className="aspect-square bg-surface-variant relative flex items-center justify-center p-4">
                    <ImageIcon size={32} className="text-secondary opacity-50" />
                    
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button className="p-2 bg-white text-on-surface hover:text-primary rounded-full transition-colors"><Search size={16} /></button>
                      <button className="p-2 bg-white text-red-600 hover:bg-red-50 rounded-full transition-colors"><Trash2 size={16} /></button>
                    </div>
                  </div>
                  <div className="p-3 flex flex-col justify-between flex-1 border-t border-outline-variant">
                    <p className="text-xs font-medium text-on-surface truncate mb-1" title={item.name}>{item.name}</p>
                    <div className="flex justify-between items-center text-[10px] text-secondary">
                      <span>{item.size}</span>
                      <span className="uppercase font-mono">{item.type.split('/')[1]}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

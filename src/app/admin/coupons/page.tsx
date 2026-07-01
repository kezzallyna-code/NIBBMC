import { Plus, Search, Filter, Trash2, Edit, Copy, Tag } from "lucide-react";

export default function CouponsPage() {
  const coupons = [
    { id: "C-001", code: "WELCOME10", type: "Pourcentage", value: "10%", usage: "142 / Illimité", expiry: "31 Déc 2026", status: "Actif" },
    { id: "C-002", code: "WINTER24", type: "Montant fixe", value: "5,000 DA", usage: "45 / 100", expiry: "30 Nov 2026", status: "Actif" },
    { id: "C-003", code: "FREESHIP", type: "Livraison gratuite", value: "Gratuit", usage: "89 / Illimité", expiry: "31 Oct 2026", status: "Actif" },
    { id: "C-004", code: "VIP20", type: "Pourcentage", value: "20%", usage: "12 / 50", expiry: "31 Déc 2026", status: "Actif" },
    { id: "C-005", code: "SUMMEREND", type: "Pourcentage", value: "30%", usage: "200 / 200", expiry: "30 Sep 2026", status: "Expiré" },
  ];

  return (
    <div className="pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="font-headline-md text-headline-md">Coupons et remises</h1>
          <p className="text-secondary font-body-sm mt-1">Créer et gérer les codes promotionnels</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary font-body-md rounded-md hover:bg-[#C8A96A] transition-colors shadow-sm">
          <Plus size={18} />
          Créer un coupon
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Coupons List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden">
            <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-variant/30">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={16} />
                <input 
                  type="text" 
                  placeholder="Rechercher des coupons..." 
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
                    <th className="px-4 py-4">Code</th>
                    <th className="px-4 py-4">Type / Valeur</th>
                    <th className="px-4 py-4">Limite d'utilisation</th>
                    <th className="px-4 py-4">Date d'expiration</th>
                    <th className="px-4 py-4">Statut</th>
                    <th className="px-4 py-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {coupons.map((coupon, i) => (
                    <tr key={i} className="hover:bg-surface-variant/30 transition-colors group">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">{coupon.code}</span>
                          <button className="text-secondary hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            <Copy size={14} />
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <p className="font-medium text-on-surface">{coupon.value}</p>
                        <p className="text-secondary text-[10px]">{coupon.type}</p>
                      </td>
                      <td className="px-4 py-4 text-secondary">{coupon.usage}</td>
                      <td className="px-4 py-4 text-on-surface">{coupon.expiry}</td>
                      <td className="px-4 py-4">
                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider
                          ${coupon.status === 'Actif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {coupon.status}
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
            <h2 className="font-headline-md text-body-lg flex items-center gap-2">
              <Tag size={18} className="text-primary" /> Créer un nouveau coupon
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Code du coupon</label>
              <div className="flex gap-2">
                <input type="text" placeholder="ex. ETE20" className="w-full px-3 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary font-mono uppercase" />
                <button className="px-3 py-2 bg-surface-variant text-secondary rounded-md text-xs font-medium hover:text-primary transition-colors border border-outline-variant whitespace-nowrap">Générer</button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Type de remise</label>
                <select className="w-full px-3 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary bg-white">
                  <option>Pourcentage (%)</option>
                  <option>Montant fixe (DA)</option>
                  <option>Livraison gratuite</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Valeur de la remise</label>
                <input type="number" placeholder="0" className="w-full px-3 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Date d'expiration</label>
              <input type="date" className="w-full px-3 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary text-secondary" />
            </div>

            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Limite d'utilisation (Optionnelle)</label>
              <input type="number" placeholder="Laissez vide pour illimité" className="w-full px-3 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary" />
            </div>
          </div>
          <div className="p-4 border-t border-outline-variant bg-surface-variant/30 flex justify-end gap-3 rounded-b-xl">
            <button className="px-4 py-2 text-sm text-secondary hover:text-primary transition-colors">Effacer</button>
            <button className="px-4 py-2 bg-primary text-on-primary text-sm rounded-md hover:bg-[#C8A96A] transition-colors">Créer un coupon</button>
          </div>
        </div>
      </div>
    </div>
  );
}

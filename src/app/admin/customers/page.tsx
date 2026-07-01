import { Search, Filter, Download, Mail, Phone, ShoppingBag, Eye } from "lucide-react";

export default function CustomersPage() {
  const customers = [
    { id: "CUST-842", name: "Amina Benali", email: "amina.benali@example.com", phone: "0555 12 34 56", orders: 4, total: "850,000 DA", lastOrder: "24 Oct 2026", status: "VIP" },
    { id: "CUST-841", name: "Sarah Khaled", email: "sarah.kh@example.com", phone: "0770 98 76 54", orders: 1, total: "120,000 DA", lastOrder: "24 Oct 2026", status: "Actif" },
    { id: "CUST-840", name: "Fatima Zohra", email: "fatimazohra@example.com", phone: "0661 11 22 33", orders: 2, total: "245,000 DA", lastOrder: "20 Oct 2026", status: "Actif" },
    { id: "CUST-839", name: "Rym Yelles", email: "rym.yelles@example.com", phone: "0550 44 55 66", orders: 8, total: "1,255,000 DA", lastOrder: "18 Oct 2026", status: "VIP" },
    { id: "CUST-838", name: "Ines Mansouri", email: "ines.m@example.com", phone: "0771 99 88 77", orders: 1, total: "210,000 DA", lastOrder: "15 Oct 2026", status: "Actif" },
    { id: "CUST-837", name: "Meriem Taleb", email: "meriem.t@example.com", phone: "0660 33 44 55", orders: 0, total: "0 DA", lastOrder: "Jamais", status: "Inactif" },
  ];

  return (
    <div className="pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="font-headline-md text-headline-md">Clients</h1>
          <p className="text-secondary font-body-sm mt-1">Gérer les profils clients, l'historique des achats et l'engagement</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-outline-variant text-on-surface font-body-md rounded-md hover:bg-surface-variant transition-colors">
          <Download size={18} />
          Exporter CSV
        </button>
      </div>

      <div className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 border-b border-outline-variant flex flex-col md:flex-row gap-4 justify-between items-center bg-surface-variant/30">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={18} />
            <input 
              type="text" 
              placeholder="Rechercher par nom, email ou téléphone..." 
              className="w-full pl-10 pr-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors bg-white"
            />
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <select className="border border-outline-variant rounded-md px-3 py-2 text-sm bg-white focus:outline-none">
              <option>Tous les clients</option>
              <option>VIP (5+ Commandes)</option>
              <option>Actif</option>
              <option>Inactif</option>
            </select>
            <button className="flex items-center gap-2 px-3 py-2 border border-outline-variant rounded-md text-sm hover:bg-surface-variant transition-colors bg-white">
              <Filter size={16} />
              Filtres
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left font-body-sm whitespace-nowrap">
            <thead className="bg-surface-variant font-label-caps text-secondary text-[10px] uppercase tracking-wider">
              <tr>
                <th className="px-4 py-4 w-12">
                  <input type="checkbox" className="rounded border-outline-variant text-primary focus:ring-primary" />
                </th>
                <th className="px-4 py-4">Nom du client</th>
                <th className="px-4 py-4">Coordonnées</th>
                <th className="px-4 py-4 text-center">Commandes</th>
                <th className="px-4 py-4 text-right">Total dépensé</th>
                <th className="px-4 py-4">Dernière commande</th>
                <th className="px-4 py-4">Statut</th>
                <th className="px-4 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {customers.map((customer, i) => (
                <tr key={i} className="hover:bg-surface-variant/30 transition-colors group">
                  <td className="px-4 py-4">
                    <input type="checkbox" className="rounded border-outline-variant text-primary focus:ring-primary" />
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs uppercase">
                        {customer.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-medium text-on-surface">{customer.name}</p>
                        <p className="text-secondary text-[10px] font-mono">{customer.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-xs text-on-surface">
                        <Mail size={12} className="text-secondary" /> {customer.email}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-on-surface">
                        <Phone size={12} className="text-secondary" /> {customer.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <ShoppingBag size={14} className="text-secondary" />
                      <span className="font-medium">{customer.orders}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right font-bold">{customer.total}</td>
                  <td className="px-4 py-4 text-secondary">{customer.lastOrder}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider
                      ${customer.status === 'VIP' ? 'bg-purple-100 text-purple-800' : 
                        customer.status === 'Actif' ? 'bg-green-100 text-green-800' : 
                        'bg-gray-100 text-gray-800'}`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button className="p-1.5 text-primary hover:bg-surface-variant rounded transition-colors opacity-0 group-hover:opacity-100" title="Voir le profil">
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-outline-variant flex items-center justify-between text-sm text-secondary">
          <p>Affichage de 1 à 6 sur 842 clients</p>
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

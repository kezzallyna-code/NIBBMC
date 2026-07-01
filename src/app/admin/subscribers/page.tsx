import { Search, Filter, Download, Mail, Trash2 } from "lucide-react";

export default function SubscribersPage() {
  const subscribers = [
    { id: "SUB-1042", email: "amina.benali@example.com", date: "24 Oct 2026", source: "Formulaire pied de page", status: "Abonné" },
    { id: "SUB-1041", email: "y.karim@example.com", date: "23 Oct 2026", source: "Paiement", status: "Abonné" },
    { id: "SUB-1040", email: "nour.h@example.com", date: "22 Oct 2026", source: "Pop-up", status: "Désabonné" },
    { id: "SUB-1039", email: "contact@lereve.dz", date: "20 Oct 2026", source: "Formulaire pied de page", status: "Abonné" },
    { id: "SUB-1038", email: "sarah.kh@example.com", date: "15 Oct 2026", source: "Création de compte", status: "Abonné" },
  ];

  return (
    <div className="pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="font-headline-md text-headline-md">Abonnés à la newsletter</h1>
          <p className="text-secondary font-body-sm mt-1">Gérer votre liste de diffusion et exporter les abonnés</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-outline-variant text-on-surface font-body-md rounded-md hover:bg-surface-variant transition-colors">
            <Download size={18} />
            Exporter CSV
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary font-body-md rounded-md hover:bg-[#C8A96A] transition-colors shadow-sm">
            <Mail size={18} />
            Créer une campagne
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 border-b border-outline-variant flex flex-col md:flex-row gap-4 justify-between items-center bg-surface-variant/30">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={18} />
            <input 
              type="text" 
              placeholder="Rechercher par e-mail..." 
              className="w-full pl-10 pr-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors bg-white"
            />
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <select className="border border-outline-variant rounded-md px-3 py-2 text-sm bg-white focus:outline-none">
              <option>Tous les abonnés</option>
              <option>Abonné</option>
              <option>Désabonné</option>
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
                <th className="px-4 py-4">Adresse e-mail</th>
                <th className="px-4 py-4">Date d'abonnement</th>
                <th className="px-4 py-4">Source</th>
                <th className="px-4 py-4">Statut</th>
                <th className="px-4 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {subscribers.map((sub, i) => (
                <tr key={i} className="hover:bg-surface-variant/30 transition-colors group">
                  <td className="px-4 py-4">
                    <input type="checkbox" className="rounded border-outline-variant text-primary focus:ring-primary" />
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <Mail size={16} className="text-secondary" />
                      <span className="font-medium text-on-surface">{sub.email}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-secondary">{sub.date}</td>
                  <td className="px-4 py-4 text-secondary">{sub.source}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider
                      ${sub.status === 'Abonné' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {sub.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors opacity-0 group-hover:opacity-100" title="Supprimer">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-outline-variant flex items-center justify-between text-sm text-secondary">
          <p>Affichage de 1 à 5 sur 1 042 abonnés</p>
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

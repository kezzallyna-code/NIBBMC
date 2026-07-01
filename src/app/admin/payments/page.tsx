import { Plus } from "lucide-react";
import { Search, Filter, Download, CreditCard, Banknote, Landmark, CheckCircle, RefreshCcw, MoreVertical } from "lucide-react";

export default function PaymentsPage() {
  const transactions = [
    { id: "TRX-9824-A", orderId: "#LCH-9824", customer: "Amina Benali", amount: "420 000 DA", method: "Paiement à la livraison", date: "24 Oct 2026, 14:30", status: "En attente" },
    { id: "TRX-9823-C", orderId: "#LCH-9823", customer: "Sarah Khaled", amount: "120 000 DA", method: "CIB/Edahabia", date: "24 Oct 2026, 11:15", status: "Terminé" },
    { id: "TRX-9822-A", orderId: "#LCH-9822", customer: "Fatima Zohra", amount: "85 000 DA", method: "Paiement à la livraison", date: "23 Oct 2026, 09:45", status: "Terminé" },
    { id: "TRX-9821-B", orderId: "#LCH-9821", customer: "Rym Yelles", amount: "155 000 DA", method: "Virement bancaire", date: "23 Oct 2026, 16:20", status: "En cours" },
    { id: "TRX-9820-C", orderId: "#LCH-9820", customer: "Ines Mansouri", amount: "210 000 DA", method: "Espèces", date: "22 Oct 2026, 10:00", status: "Terminé" },
    { id: "TRX-9819-C", orderId: "#LCH-9819", customer: "Meriem Taleb", amount: "95 000 DA", method: "CIB/Edahabia", date: "21 Oct 2026, 13:55", status: "Remboursé" },
  ];

  const getMethodIcon = (method: string) => {
    switch(method) {
      case 'CIB/Edahabia': return <CreditCard size={16} className="text-blue-600" />;
      case 'Virement bancaire': return <Landmark size={16} className="text-purple-600" />;
      default: return <Banknote size={16} className="text-green-600" />;
    }
  };

  return (
    <div className="pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="font-headline-md text-headline-md">Paiements et Transactions</h1>
          <p className="text-secondary font-body-sm mt-1">Surveiller toutes les transactions financières, remboursements et règlements</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-outline-variant text-on-surface font-body-md rounded-md hover:bg-surface-variant transition-colors">
          <Download size={18} />
          Exporter le rapport
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col gap-2">
          <p className="font-body-sm text-secondary">Total traité (Ce mois)</p>
          <p className="font-headline-md text-body-lg text-primary">3 450 000 DA</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col gap-2">
          <p className="font-body-sm text-secondary">Paiement à la livraison en attente</p>
          <p className="font-headline-md text-body-lg text-orange-600">840 000 DA</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col gap-2">
          <p className="font-body-sm text-secondary">Virements bancaires en attente</p>
          <p className="font-headline-md text-body-lg text-purple-600">310 000 DA</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col gap-2">
          <p className="font-body-sm text-secondary">Remboursé</p>
          <p className="font-headline-md text-body-lg text-red-600">95 000 DA</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 border-b border-outline-variant flex flex-col md:flex-row gap-4 justify-between items-center bg-surface-variant/30">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={18} />
            <input 
              type="text" 
              placeholder="Rechercher par ID de transaction, commande ou client..." 
              className="w-full pl-10 pr-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors bg-white"
            />
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <select className="border border-outline-variant rounded-md px-3 py-2 text-sm bg-white focus:outline-none">
              <option>Toutes les méthodes</option>
              <option>CIB/Edahabia</option>
              <option>Paiement à la livraison</option>
              <option>Virement bancaire</option>
            </select>
            <select className="border border-outline-variant rounded-md px-3 py-2 text-sm bg-white focus:outline-none">
              <option>Tous les statuts</option>
              <option>Terminé</option>
              <option>En attente</option>
              <option>En cours</option>
              <option>Remboursé</option>
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
                <th className="px-4 py-4">ID de transaction</th>
                <th className="px-4 py-4">Commande & Client</th>
                <th className="px-4 py-4">Montant</th>
                <th className="px-4 py-4">Méthode de paiement</th>
                <th className="px-4 py-4">Date & Heure</th>
                <th className="px-4 py-4">Statut</th>
                <th className="px-4 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {transactions.map((trx, i) => (
                <tr key={i} className="hover:bg-surface-variant/30 transition-colors group">
                  <td className="px-4 py-4">
                    <input type="checkbox" className="rounded border-outline-variant text-primary focus:ring-primary" />
                  </td>
                  <td className="px-4 py-4">
                    <span className="font-mono text-primary font-bold">{trx.id}</span>
                  </td>
                  <td className="px-4 py-4">
                    <p className="font-medium text-on-surface hover:underline cursor-pointer">{trx.orderId}</p>
                    <p className="text-secondary text-xs">{trx.customer}</p>
                  </td>
                  <td className="px-4 py-4 font-bold text-on-surface">{trx.amount}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      {getMethodIcon(trx.method)}
                      <span className="text-secondary">{trx.method}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-secondary">{trx.date}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-max
                      ${trx.status === 'Terminé' ? 'bg-green-100 text-green-800' : 
                        trx.status === 'En attente' ? 'bg-yellow-100 text-yellow-800' : 
                        trx.status === 'En cours' ? 'bg-blue-100 text-blue-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {trx.status === 'Terminé' && <CheckCircle size={10} />}
                      {trx.status === 'En cours' && <RefreshCcw size={10} className="animate-spin-slow" />}
                      {trx.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button className="p-1.5 text-secondary hover:text-primary hover:bg-surface-variant rounded transition-colors" title="Options">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-outline-variant flex items-center justify-between text-sm text-secondary">
          <p>Affichage de 1 à 6 sur 1 432 transactions</p>
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

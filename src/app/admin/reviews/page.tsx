import { Search, Filter, Star, CheckCircle, XCircle, Trash2 } from "lucide-react";

export default function ReviewsPage() {
  const reviews = [
    { id: "REV-01", customer: "Amina Benali", product: "Iconic Leather Clutch", rating: 5, text: "Absolument magnifique ! La qualité du cuir est phénoménale et il contient tous mes essentiels. Vaut chaque dinar.", date: "24 Oct 2026", status: "En attente" },
    { id: "REV-02", customer: "Sarah Khaled", product: "Signature Silk Trousers", rating: 4, text: "Très élégant, mais la longueur est un peu trop grande pour moi. J'ai dû les faire retoucher. Sinon parfait.", date: "23 Oct 2026", status: "Approuvé" },
    { id: "REV-03", customer: "Fatima Zohra", product: "Midnight Velvet Abaya", rating: 5, text: "Le velours est si doux et luxueux. J'ai reçu tellement de compliments en le portant à un mariage.", date: "20 Oct 2026", status: "Approuvé" },
    { id: "REV-04", customer: "Rym Yelles", product: "Pearl Essence Necklace", rating: 2, text: "Les perles paraissent un peu plus petites en vrai que sur les photos. Un peu déçue.", date: "19 Oct 2026", status: "En attente" },
    { id: "REV-05", customer: "Ines Mansouri", product: "Wool Heritage Coat", rating: 5, text: "Le meilleur manteau que j'aie jamais acheté ! Si chaud et la couleur camel est parfaite.", date: "15 Oct 2026", status: "Approuvé" },
  ];

  return (
    <div className="pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="font-headline-md text-headline-md">Avis clients</h1>
          <p className="text-secondary font-body-sm mt-1">Modérer et gérer les avis sur les produits</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 border-b border-outline-variant flex flex-col md:flex-row gap-4 justify-between items-center bg-surface-variant/30">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={18} />
            <input 
              type="text" 
              placeholder="Rechercher par produit, client ou contenu..." 
              className="w-full pl-10 pr-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors bg-white"
            />
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <select className="border border-outline-variant rounded-md px-3 py-2 text-sm bg-white focus:outline-none">
              <option>Toutes les notes</option>
              <option>5 Étoiles</option>
              <option>4 Étoiles</option>
              <option>3 Étoiles</option>
              <option>2 Étoiles</option>
              <option>1 Étoile</option>
            </select>
            <select className="border border-outline-variant rounded-md px-3 py-2 text-sm bg-white focus:outline-none">
              <option>Tous les statuts</option>
              <option>En attente</option>
              <option>Approuvé</option>
              <option>Rejeté</option>
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
                <th className="px-4 py-4">Client et Produit</th>
                <th className="px-4 py-4">Note</th>
                <th className="px-4 py-4">Contenu de l'avis</th>
                <th className="px-4 py-4">Date</th>
                <th className="px-4 py-4">Statut</th>
                <th className="px-4 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {reviews.map((review, i) => (
                <tr key={i} className="hover:bg-surface-variant/30 transition-colors group">
                  <td className="px-4 py-4 align-top pt-5">
                    <input type="checkbox" className="rounded border-outline-variant text-primary focus:ring-primary" />
                  </td>
                  <td className="px-4 py-4 align-top pt-4">
                    <p className="font-medium text-on-surface">{review.customer}</p>
                    <p className="text-secondary text-xs mt-1 font-medium">{review.product}</p>
                  </td>
                  <td className="px-4 py-4 align-top pt-4">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={14} className={star <= review.rating ? "fill-yellow-400 text-yellow-400" : "fill-surface-variant text-outline-variant"} />
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-4 align-top pt-4">
                    <p className="text-on-surface text-sm max-w-md whitespace-normal leading-relaxed">{review.text}</p>
                  </td>
                  <td className="px-4 py-4 align-top pt-4 text-secondary">{review.date}</td>
                  <td className="px-4 py-4 align-top pt-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider
                      ${review.status === 'Approuvé' ? 'bg-green-100 text-green-800' : 
                        review.status === 'En attente' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {review.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 align-top pt-4 text-center">
                    <div className="flex justify-center items-center gap-1">
                      <button className="p-1.5 text-green-600 hover:bg-green-50 rounded transition-colors" title="Approuver">
                        <CheckCircle size={18} />
                      </button>
                      <button className="p-1.5 text-orange-600 hover:bg-orange-50 rounded transition-colors" title="Rejeter">
                        <XCircle size={18} />
                      </button>
                      <button className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors" title="Supprimer">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-outline-variant flex items-center justify-between text-sm text-secondary">
          <p>Affichage de 1 à 5 sur 342 avis</p>
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

import { Truck, MapPin, Search, Edit, Power, Check, AlertTriangle } from "lucide-react";

export default function DeliveryPage() {
  const zones = [
    { id: "Z-01", name: "Alger et ses environs", wilayas: "16 (Alger), 09 (Blida), 35 (Boumerdes), 42 (Tipaza)", time: "1-2 jours ouvrables", price: "400 DA", status: "Actif" },
    { id: "Z-02", name: "Grandes villes (Nord)", wilayas: "31 (Oran), 25 (Constantine), 23 (Annaba), 13 (Tlemcen)", time: "2-3 jours ouvrables", price: "600 DA", status: "Actif" },
    { id: "Z-03", name: "Hauts Plateaux", wilayas: "19 (Setif), 05 (Batna), 14 (Tiaret), 34 (BBA)", time: "3-4 jours ouvrables", price: "800 DA", status: "Actif" },
    { id: "Z-04", name: "Wilayas du Sud", wilayas: "30 (Ouargla), 01 (Adrar), 11 (Tamanrasset)", time: "5-7 jours ouvrables", price: "1200 DA", status: "Inactif" },
  ];

  return (
    <div className="pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="font-headline-md text-headline-md">Gestion de la livraison</h1>
          <p className="text-secondary font-body-sm mt-1">Configurer les méthodes d'expédition, les zones et les prix</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Content - Delivery Zones */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden">
            <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-surface-variant/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <h2 className="font-headline-md text-body-lg">Zones d'expédition</h2>
                  <p className="text-xs text-secondary mt-0.5">Gérer les zones de livraison et la tarification</p>
                </div>
              </div>
              <button className="text-sm font-medium text-primary hover:text-on-surface transition-colors">
                Ajouter une zone
              </button>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {zones.map((zone, i) => (
                  <div key={i} className="border border-outline-variant rounded-lg p-4 hover:border-primary transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-on-surface">{zone.name}</h3>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider
                          ${zone.status === 'Actif' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                          {zone.status}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-secondary hover:text-primary transition-colors" title="Modifier">
                          <Edit size={16} />
                        </button>
                        <button className={`${zone.status === 'Actif' ? 'text-green-600 hover:text-red-600' : 'text-secondary hover:text-green-600'} transition-colors`} title="Basculer le statut">
                          <Power size={16} />
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-secondary mb-3"><span className="font-medium text-on-surface">Wilayas :</span> {zone.wilayas}</p>
                    <div className="flex items-center gap-4 text-sm bg-surface-variant/50 p-2 rounded">
                      <div className="flex items-center gap-2">
                        <span className="text-secondary">Temps estimé :</span>
                        <span className="font-medium">{zone.time}</span>
                      </div>
                      <div className="w-px h-4 bg-outline-variant"></div>
                      <div className="flex items-center gap-2">
                        <span className="text-secondary">Frais de livraison :</span>
                        <span className="font-bold text-primary">{zone.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          
          <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-6">
            <h2 className="font-headline-md text-body-lg mb-4 flex items-center gap-2">
              <Truck size={20} className="text-primary" /> Partenaires de livraison
            </h2>
            <div className="space-y-4">
              <div className="border border-outline-variant rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-on-surface text-sm">Yalidine Express</h3>
                  <p className="text-xs text-green-600 flex items-center gap-1 mt-1"><Check size={12}/> API Connectée</p>
                </div>
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="toggle" id="toggle1" checked className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-primary"/>
                    <label htmlFor="toggle1" className="toggle-label block overflow-hidden h-5 rounded-full bg-primary cursor-pointer"></label>
                </div>
              </div>

              <div className="border border-outline-variant rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-on-surface text-sm">Zid Express</h3>
                  <p className="text-xs text-secondary flex items-center gap-1 mt-1">Non configuré</p>
                </div>
                <button className="text-xs font-medium text-primary hover:underline">Configurer</button>
              </div>

              <div className="border border-outline-variant rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-on-surface text-sm">Retrait en boutique</h3>
                  <p className="text-xs text-secondary mt-1">Boutique Hydra uniquement</p>
                </div>
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="toggle" id="toggle2" checked className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-primary"/>
                    <label htmlFor="toggle2" className="toggle-label block overflow-hidden h-5 rounded-full bg-primary cursor-pointer"></label>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-xl border border-orange-200 shadow-sm p-6">
            <div className="flex gap-3">
              <AlertTriangle className="text-orange-500 shrink-0" size={20} />
              <div>
                <h3 className="font-bold text-orange-900 text-sm mb-1">Seuil de livraison gratuite</h3>
                <p className="text-xs text-orange-800 leading-relaxed mb-3">
                  Actuellement, les commandes supérieures à 150 000 DA bénéficient automatiquement de la livraison gratuite. Cela remplace la tarification de la zone.
                </p>
                <button className="text-xs font-bold text-orange-900 bg-orange-200 px-3 py-1.5 rounded hover:bg-orange-300 transition-colors">
                  Modifier le seuil
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

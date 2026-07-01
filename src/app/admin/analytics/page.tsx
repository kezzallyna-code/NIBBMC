import { TrendingUp, Users, ShoppingBag, DollarSign, Calendar } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="font-headline-md text-headline-md">Analyses et Rapports</h1>
          <p className="text-secondary font-body-sm mt-1">Plongez au cœur des indicateurs de performance de votre boutique</p>
        </div>
        <div className="flex gap-3 bg-white border border-outline-variant rounded-md p-1">
          <button className="px-3 py-1.5 text-sm font-medium rounded bg-surface-variant text-primary">Ce mois-ci</button>
          <button className="px-3 py-1.5 text-sm font-medium rounded text-secondary hover:text-on-surface transition-colors">Mois dernier</button>
          <button className="px-3 py-1.5 text-sm font-medium rounded text-secondary hover:text-on-surface transition-colors flex items-center gap-2"><Calendar size={14} /> Personnalisé</button>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <DollarSign size={20} />
            </div>
            <span className="flex items-center text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded">
              <TrendingUp size={12} className="mr-1" /> +12.5%
            </span>
          </div>
          <p className="font-body-sm text-secondary">Revenu brut</p>
          <p className="font-headline-md text-body-lg">3 450 000 DA</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <ShoppingBag size={20} />
            </div>
            <span className="flex items-center text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded">
              <TrendingUp size={12} className="mr-1" /> +5.2%
            </span>
          </div>
          <p className="font-body-sm text-secondary">Commandes totales</p>
          <p className="font-headline-md text-body-lg">432</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
              <DollarSign size={20} />
            </div>
            <span className="flex items-center text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded">
              <TrendingUp size={12} className="mr-1" /> +2.1%
            </span>
          </div>
          <p className="font-body-sm text-secondary">Valeur moyenne des commandes</p>
          <p className="font-headline-md text-body-lg">7,986 DA</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
              <Users size={20} />
            </div>
            <span className="flex items-center text-red-600 text-xs font-bold bg-red-50 px-2 py-1 rounded">
              <TrendingUp size={12} className="mr-1 rotate-180" /> -1.4%
            </span>
          </div>
          <p className="font-body-sm text-secondary">Taux de conversion</p>
          <p className="font-headline-md text-body-lg">2.8%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Sales by Collection (Mock Chart) */}
        <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-6">
          <h2 className="font-headline-md text-body-lg mb-6">Ventes par collection</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-on-surface">Série Signature Hiver '24</span>
                <span className="font-bold text-primary">1 250 000 DA</span>
              </div>
              <div className="w-full bg-surface-variant rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{width: '65%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-on-surface">Abayas de luxe</span>
                <span className="font-bold text-primary">980 000 DA</span>
              </div>
              <div className="w-full bg-surface-variant rounded-full h-2">
                <div className="bg-[#5a430e] h-2 rounded-full" style={{width: '45%'}}></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-on-surface">Prêt-à-porter</span>
                <span className="text-secondary font-body-sm">45%</span>
              </div>
              <div className="w-full bg-surface-variant rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "45%" }}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-medium text-on-surface">Caftans</span>
                <span className="text-secondary font-body-sm">25%</span>
              </div>
              <div className="w-full bg-surface-variant rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "25%" }}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-medium text-on-surface">Robes de Soirée</span>
                <span className="text-secondary font-body-sm">20%</span>
              </div>
              <div className="w-full bg-surface-variant rounded-full h-2">
                <div className="bg-[#f2e6d0] h-2 rounded-full" style={{width: '10%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Sales by Wilaya (Mock Chart) */}
        <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-6">
          <h2 className="font-headline-md text-body-lg mb-6">Top Wilayas par Revenu</h2>
          <div className="space-y-4">
            {[
              { w: "16 - Alger", r: "1 520 000 DA", p: 75 },
              { w: "31 - Oran", r: "640 000 DA", p: 40 },
              { w: "25 - Constantine", r: "420 000 DA", p: 25 },
              { w: "09 - Blida", r: "310 000 DA", p: 18 },
              { w: "13 - Tlemcen", r: "180 000 DA", p: 10 },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-8 font-mono text-secondary text-xs">{i+1}</div>
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-on-surface">{item.w}</span>
                    <span className="font-bold text-primary">{item.r}</span>
                  </div>
                  <div className="w-full bg-surface-variant rounded-full h-1.5">
                    <div className="bg-primary/80 h-1.5 rounded-full" style={{width: `${item.p}%`}}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

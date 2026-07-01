import { ShoppingBag, DollarSign, Users, TrendingUp, Package, Layers, Clock, CheckCircle, AlertTriangle } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="pb-10">
      <h1 className="font-headline-md text-headline-md mb-8">Aperçu du tableau de bord</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4 hover-lift transition-transform">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <DollarSign size={24} />
          </div>
          <div>
            <p className="font-body-sm text-secondary">Revenu total</p>
            <p className="font-headline-md text-body-lg">1,245,000 DA</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4 hover-lift transition-transform">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <ShoppingBag size={24} />
          </div>
          <div>
            <p className="font-body-sm text-secondary">Commandes totales</p>
            <p className="font-headline-md text-body-lg">1,432</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4 hover-lift transition-transform">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            <Users size={24} />
          </div>
          <div>
            <p className="font-body-sm text-secondary">Clients totaux</p>
            <p className="font-headline-md text-body-lg">842</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4 hover-lift transition-transform">
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
            <TrendingUp size={24} />
          </div>
          <div>
            <p className="font-body-sm text-secondary">Revenu mensuel</p>
            <p className="font-headline-md text-body-lg">340,000 DA</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4 hover-lift transition-transform">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
            <Package size={24} />
          </div>
          <div>
            <p className="font-body-sm text-secondary">Produits totaux</p>
            <p className="font-headline-md text-body-lg">156</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4 hover-lift transition-transform">
          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
            <Layers size={24} />
          </div>
          <div>
            <p className="font-body-sm text-secondary">Collections</p>
            <p className="font-headline-md text-body-lg">12</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4 hover-lift transition-transform">
          <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
            <Clock size={24} />
          </div>
          <div>
            <p className="font-body-sm text-secondary">Commandes en attente</p>
            <p className="font-headline-md text-body-lg">24</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4 hover-lift transition-transform">
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
            <CheckCircle size={24} />
          </div>
          <div>
            <p className="font-body-sm text-secondary">Commandes livrées</p>
            <p className="font-headline-md text-body-lg">1,280</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Revenue Charts Placeholder */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-outline-variant shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-headline-md text-body-lg">Aperçu des revenus</h2>
            <select className="border border-outline-variant rounded-md px-3 py-1 text-sm bg-surface-variant focus:outline-none">
              <option>7 derniers jours</option>
              <option>Ce mois-ci</option>
              <option>Cette année</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-between gap-2 pb-6 border-b border-outline-variant/30">
            {/* Mock Chart Bars */}
            {[40, 70, 45, 90, 65, 85, 100].map((height, i) => (
              <div key={i} className="w-1/12 bg-primary/20 hover:bg-primary transition-colors rounded-t-md relative group cursor-pointer" style={{ height: `${height}%` }}>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface text-on-surface text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 shadow-sm transition-opacity">
                  {height * 2000} DA
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-secondary font-label-caps">
            <span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span><span>Dim</span>
          </div>
        </div>

        {/* Low Stock Alerts */}
        <div className="bg-white rounded-xl border border-outline-variant shadow-sm flex flex-col">
          <div className="p-6 border-b border-outline-variant flex items-center gap-2">
            <AlertTriangle className="text-red-500" size={20} />
            <h2 className="font-headline-md text-body-lg">Alertes de stock faible</h2>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            <ul className="divide-y divide-outline-variant/50">
              {[
                { name: "Velvet Gilded Noir", sku: "VGN-01", stock: 2 },
                { name: "Summer Linen Sand", sku: "SLS-04", stock: 0 },
                { name: "Imperial Emerald", sku: "IE-09", stock: 1 },
                { name: "Pearl Essence Necklace", sku: "PEN-12", stock: 3 }
              ].map((item, i) => (
                <li key={i} className="p-4 hover:bg-surface-variant/50 transition-colors flex justify-between items-center rounded-lg">
                  <div>
                    <p className="font-body-md font-medium text-on-surface">{item.name}</p>
                    <p className="text-xs text-secondary">SKU: {item.sku}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-bold ${item.stock === 0 ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'}`}>
                    il en reste {item.stock}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 border-t border-outline-variant">
            <button className="w-full py-2 text-primary font-label-caps text-xs hover:bg-surface-variant rounded transition-colors">Voir tout l'inventaire</button>
          </div>
        </div>
      </div>

      {/* Best Selling Products & Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Recent Orders Table */}
        <div className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden">
          <div className="p-6 border-b border-outline-variant flex justify-between items-center">
            <h2 className="font-headline-md text-body-lg">Commandes récentes</h2>
            <button className="text-primary text-sm hover:underline">Voir tout</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-body-md">
              <thead className="bg-surface-variant font-label-caps text-secondary text-[10px] uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">ID de commande</th>
                  <th className="px-6 py-4">Client</th>
                  <th className="px-6 py-4">Total</th>
                  <th className="px-6 py-4">Statut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {[
                  { id: "#LCH-9824", name: "Amina Benali", total: "420,000 DA", status: "En attente", color: "yellow" },
                  { id: "#LCH-9823", name: "Sarah Khaled", total: "120,000 DA", status: "Expédiée", color: "blue" },
                  { id: "#LCH-9822", name: "Fatima Zohra", total: "85,000 DA", status: "Livrée", color: "green" },
                  { id: "#LCH-9821", name: "Rym Yelles", total: "155,000 DA", status: "En préparation", color: "orange" },
                  { id: "#LCH-9820", name: "Ines Mansouri", total: "210,000 DA", status: "Confirmée", color: "purple" }
                ].map((order, i) => (
                  <tr key={i} className="hover:bg-surface-variant/30 transition-colors">
                    <td className="px-6 py-4 font-medium">{order.id}</td>
                    <td className="px-6 py-4">{order.name}</td>
                    <td className="px-6 py-4">{order.total}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 bg-${order.color}-100 text-${order.color}-800 rounded-full text-xs font-bold`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Best Selling Products */}
        <div className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-outline-variant">
            <h2 className="font-headline-md text-body-lg">Produits les plus vendus</h2>
          </div>
          <div className="flex-1 overflow-y-auto">
            <ul className="divide-y divide-outline-variant">
              {[
                { name: "Caftan en soie", sales: 124, revenue: "21,328,000 DA", img: "/images/products/lux_caftan.png" },
                { name: "Signature Silk Trousers", sales: 98, revenue: "11,956,000 DA", img: "/images/products/lux_trousers.png" },
                { name: "Robe de Soirée Émeraude", sales: 76, revenue: "25,080,000 DA", img: "/images/products/lux_evening_dress.png" }
              ].map((prod, i) => (
                <li key={i} className="p-4 flex items-center gap-4 hover:bg-surface-variant/30 transition-colors">
                  <div className="w-16 h-16 rounded bg-surface-variant bg-cover bg-center flex-shrink-0" style={{ backgroundImage: `url('${prod.img}')`}}></div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body-md font-medium text-on-surface truncate">{prod.name}</p>
                    <p className="text-xs text-secondary mt-1">{prod.sales} ventes</p>
                  </div>
                  <div className="text-right">
                    <p className="font-body-md font-bold text-primary">{prod.revenue}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


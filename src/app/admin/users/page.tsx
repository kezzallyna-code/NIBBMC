import { Users, Shield, UserPlus, Search, Edit, Trash2, Key } from "lucide-react";

export default function UsersPage() {
  const staff = [
    { id: "USR-01", name: "Karim Admin", email: "admin@luxnibal.com", role: "Super Administrateur", status: "Actif", lastLogin: "il y a 2 min" },
    { id: "USR-02", name: "Samira Manager", email: "samira@luxnibal.com", role: "Directeur de magasin", status: "Actif", lastLogin: "il y a 2 heures" },
    { id: "USR-03", name: "Amine Content", email: "amine@luxnibal.com", role: "Éditeur de contenu", status: "Actif", lastLogin: "Hier" },
    { id: "USR-04", name: "Nadia Support", email: "support@luxnibal.com", role: "Support client", status: "Actif", lastLogin: "il y a 3 heures" },
    { id: "USR-05", name: "Developer Account", email: "dev@luxnibal.com", role: "Super Administrateur", status: "Inactif", lastLogin: "il y a 1 mois" },
  ];

  return (
    <div className="pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="font-headline-md text-headline-md">Utilisateurs et Rôles</h1>
          <p className="text-secondary font-body-sm mt-1">Gérer les comptes du personnel, les permissions et la sécurité</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary font-body-md rounded-md hover:bg-[#C8A96A] transition-colors shadow-sm">
          <UserPlus size={18} />
          Ajouter un membre du personnel
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Main Users List */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
            <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-variant/30">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={16} />
                <input 
                  type="text" 
                  placeholder="Rechercher des membres du personnel..." 
                  className="w-full pl-9 pr-4 py-1.5 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors bg-white"
                />
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left font-body-sm whitespace-nowrap">
                <thead className="bg-surface-variant font-label-caps text-secondary text-[10px] uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Utilisateur</th>
                    <th className="px-6 py-4">Rôle</th>
                    <th className="px-6 py-4">Statut</th>
                    <th className="px-6 py-4">Dernière connexion</th>
                    <th className="px-6 py-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {staff.map((user, i) => (
                    <tr key={i} className="hover:bg-surface-variant/30 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs uppercase">
                            {user.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium text-on-surface">{user.name}</p>
                            <p className="text-secondary text-xs">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`flex items-center gap-1.5 text-xs font-medium 
                          ${user.role === 'Super Administrateur' ? 'text-purple-600' : 'text-secondary'}`}>
                          {user.role === 'Super Administrateur' && <Shield size={12} />}
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider
                          ${user.status === 'Actif' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-secondary text-xs">{user.lastLogin}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors" title="Modifier">
                            <Edit size={16} />
                          </button>
                          <button className="p-1.5 text-orange-600 hover:bg-orange-50 rounded transition-colors" title="Réinitialiser le mot de passe">
                            <Key size={16} />
                          </button>
                          {user.role !== 'Super Administrateur' && (
                            <button className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors" title="Supprimer">
                              <Trash2 size={16} />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Roles & Permissions Summary */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-6">
            <h2 className="font-headline-md text-body-lg mb-4 flex items-center gap-2">
              <Shield size={18} className="text-primary" /> Rôles du système
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-sm text-on-surface">Super Administrateur</h3>
                  <span className="text-xs bg-surface-variant px-2 py-0.5 rounded text-secondary font-medium">2 utilisateurs</span>
                </div>
                <p className="text-xs text-secondary leading-relaxed">Accès complet à tous les paramètres, utilisateurs et données financières.</p>
              </div>
              <div className="w-full h-px bg-outline-variant"></div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-sm text-on-surface">Directeur de magasin</h3>
                  <span className="text-xs bg-surface-variant px-2 py-0.5 rounded text-secondary font-medium">1 utilisateur</span>
                </div>
                <p className="text-xs text-secondary leading-relaxed">Peut gérer les produits, les commandes et consulter les analyses. Aucun paramètre système.</p>
              </div>
              <div className="w-full h-px bg-outline-variant"></div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-sm text-on-surface">Éditeur de contenu</h3>
                  <span className="text-xs bg-surface-variant px-2 py-0.5 rounded text-secondary font-medium">1 utilisateur</span>
                </div>
                <p className="text-xs text-secondary leading-relaxed">Peut mettre à jour le contenu du site, les bannières et la médiathèque.</p>
              </div>
              <div className="w-full h-px bg-outline-variant"></div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-sm text-on-surface">Support client</h3>
                  <span className="text-xs bg-surface-variant px-2 py-0.5 rounded text-secondary font-medium">1 utilisateur</span>
                </div>
                <p className="text-xs text-secondary leading-relaxed">Peut voir les commandes et répondre aux messages/avis des clients.</p>
              </div>
            </div>
            <button className="w-full mt-6 py-2 text-sm font-medium text-primary border border-outline-variant rounded-md hover:bg-surface-variant transition-colors">
              Gérer les rôles
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

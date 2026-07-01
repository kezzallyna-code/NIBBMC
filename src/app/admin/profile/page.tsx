import { User, Mail, Phone, Lock, Save, Camera } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="font-headline-md text-headline-md">Mon profil</h1>
          <p className="text-secondary font-body-sm mt-1">Gérez vos informations personnelles et vos paramètres de sécurité</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary font-body-md rounded-md hover:bg-[#C8A96A] transition-colors shadow-sm">
          <Save size={18} />
          Enregistrer les modifications
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-6 text-center">
            <div className="relative inline-block mb-4 group cursor-pointer">
              <div className="w-32 h-32 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-4xl uppercase mx-auto overflow-hidden">
                KA
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera size={24} className="text-white" />
                </div>
              </div>
            </div>
            <h2 className="font-headline-md text-body-lg">Karim Admin</h2>
            <p className="text-primary font-medium text-sm mb-4">Super Administrateur</p>
            <div className="flex flex-col gap-2 text-left bg-surface-variant/30 p-4 rounded-lg border border-outline-variant">
              <div className="flex items-center gap-2 text-sm text-secondary">
                <Mail size={14} /> admin@luxnibal.com
              </div>
              <div className="flex items-center gap-2 text-sm text-secondary">
                <Phone size={14} /> +213 555 00 00 01
              </div>
            </div>
          </div>
        </div>

        {/* Edit Form */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-6">
            <h2 className="font-headline-md text-body-lg mb-6 flex items-center gap-2">
              <User size={18} className="text-primary" /> Informations personnelles
            </h2>
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Prénom</label>
                  <input 
                    type="text" 
                    defaultValue="Karim" 
                    className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Nom</label>
                  <input 
                    type="text" 
                    defaultValue="Admin" 
                    className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Adresse e-mail</label>
                  <input 
                    type="email" 
                    defaultValue="admin@luxnibal.com" 
                    className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Numéro de téléphone</label>
                  <input 
                    type="tel" 
                    defaultValue="+213 555 00 00 01" 
                    className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-6">
            <h2 className="font-headline-md text-body-lg mb-6 flex items-center gap-2">
              <Lock size={18} className="text-primary" /> Changer le mot de passe
            </h2>
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Mot de passe actuel</label>
                <input 
                  type="password" 
                  placeholder="Entrez le mot de passe actuel" 
                  className="w-full md:w-1/2 px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Nouveau mot de passe</label>
                  <input 
                    type="password" 
                    placeholder="Entrez le nouveau mot de passe" 
                    className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Confirmer le nouveau mot de passe</label>
                  <input 
                    type="password" 
                    placeholder="Confirmer le nouveau mot de passe" 
                    className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <button className="px-4 py-2 border border-primary text-primary font-body-md rounded-md hover:bg-surface-variant transition-colors mt-2">
                Mettre à jour le mot de passe
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

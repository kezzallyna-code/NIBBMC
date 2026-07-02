import { Settings as SettingsIcon, Globe, Store, Mail, Bell, CreditCard, Shield, Save } from "lucide-react";
import { storeSettings } from "@/lib/storeSettings";

export default function SettingsPage() {
  return (
    <div className="pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="font-headline-md text-headline-md">Paramètres de la boutique</h1>
          <p className="text-secondary font-body-sm mt-1">Configurer les préférences globales, les notifications et les intégrations</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary font-body-md rounded-md hover:bg-[#C8A96A] transition-colors shadow-sm">
          <Save size={18} />
          Enregistrer les modifications
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Settings Navigation */}
        <div className="w-full lg:w-64 shrink-0">
          <div className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-surface-variant/50 border-l-4 border-primary text-primary font-bold text-sm text-left transition-colors">
              <Store size={18} /> Configuration générale
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 border-l-4 border-transparent text-secondary hover:text-on-surface hover:bg-surface-variant/30 font-medium text-sm text-left transition-colors">
              <Globe size={18} /> Domaines et SEO
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 border-l-4 border-transparent text-secondary hover:text-on-surface hover:bg-surface-variant/30 font-medium text-sm text-left transition-colors">
              <CreditCard size={18} /> Paiements et Taxes
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 border-l-4 border-transparent text-secondary hover:text-on-surface hover:bg-surface-variant/30 font-medium text-sm text-left transition-colors">
              <Mail size={18} /> Modèles d'e-mails
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 border-l-4 border-transparent text-secondary hover:text-on-surface hover:bg-surface-variant/30 font-medium text-sm text-left transition-colors">
              <Bell size={18} /> Notifications
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 border-l-4 border-transparent text-secondary hover:text-on-surface hover:bg-surface-variant/30 font-medium text-sm text-left transition-colors">
              <Shield size={18} /> Légal et Confidentialité
            </button>
          </div>
        </div>

        {/* Settings Content - General Setup */}
        <div className="flex-1 space-y-6">
          
          <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-6">
            <h2 className="font-headline-md text-body-lg mb-6">Informations sur la boutique</h2>
            
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Nom de la boutique</label>
                  <input 
                    type="text" 
                    defaultValue={storeSettings.boutiqueName} 
                    className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Founder Name</label>
                  <input 
                    type="text" 
                    defaultValue={storeSettings.founderName} 
                    className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Adresse e-mail</label>
                  <input 
                    type="email" 
                    defaultValue={storeSettings.emailAddress} 
                    className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Numéro de téléphone</label>
                  <input 
                    type="tel" 
                    defaultValue={storeSettings.phoneNumber} 
                    className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Numéro WhatsApp (wa.me)</label>
                  <input 
                    type="text" 
                    defaultValue={storeSettings.whatsappNumber} 
                    className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Adresse de la boutique</label>
                <textarea 
                  className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  rows={2}
                  defaultValue={storeSettings.address}
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Site Web Officiel</label>
                  <input 
                    type="url" 
                    defaultValue={storeSettings.websiteUrl} 
                    className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Lien Google Maps (Embed URL)</label>
                  <input 
                    type="url" 
                    defaultValue={storeSettings.googleMapsUrl} 
                    className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">URL Instagram</label>
                  <input 
                    type="url" 
                    defaultValue={storeSettings.instagramUrl} 
                    className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">URL Facebook</label>
                  <input 
                    type="url" 
                    defaultValue={storeSettings.facebookUrl} 
                    className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Heures d'ouverture (Une par ligne)</label>
                <textarea 
                  className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  rows={3}
                  defaultValue={storeSettings.businessHours.join('\n')}
                ></textarea>
              </div>

            </div>
          </div>

          <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-6">
            <h2 className="font-headline-md text-body-lg mb-6">Localisation</h2>
            
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Devise principale</label>
                  <select className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary bg-white transition-colors">
                    <option>Dinar algérien (DZD / DA)</option>
                    <option>Euro (EUR / €)</option>
                    <option>Dollar américain (USD / $)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Fuseau horaire</label>
                  <select className="w-full px-4 py-2 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary bg-white transition-colors">
                    <option>(GMT+01:00) Heure d'Afrique de l'Ouest - Alger</option>
                    <option>(GMT+00:00) Heure moyenne de Greenwich</option>
                    <option>(GMT+02:00) Heure d'été d'Europe centrale</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Langues de la boutique</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-sm text-on-surface">
                    <input type="checkbox" defaultChecked className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" />
                    Anglais (Par défaut)
                  </label>
                  <label className="flex items-center gap-2 text-sm text-on-surface">
                    <input type="checkbox" defaultChecked className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" />
                    Français
                  </label>
                  <label className="flex items-center gap-2 text-sm text-on-surface">
                    <input type="checkbox" className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" />
                    العربية
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-6">
            <h2 className="font-headline-md text-body-lg mb-6 text-red-600">Zone de danger</h2>
            <div className="border border-red-200 rounded-lg p-4 bg-red-50 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-red-900 text-sm">Mode maintenance</h3>
                <p className="text-xs text-red-800 mt-1">Rendre la boutique invisible aux clients. Seuls les administrateurs y ont accès.</p>
              </div>
              <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" name="toggle" id="toggle-maintenance" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-outline-variant"/>
                  <label htmlFor="toggle-maintenance" className="toggle-label block overflow-hidden h-5 rounded-full bg-surface-variant cursor-pointer"></label>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

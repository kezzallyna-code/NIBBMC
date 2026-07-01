"use client";

import { storeSettings } from "@/lib/storeSettings";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { useState } from "react";

export default function CheckoutPage() {
  const [selectedDelivery, setSelectedDelivery] = useState<'domicile' | 'yalidine'>('domicile');
  return (
    <main className="pt-32 pb-section-gap-desktop px-container-padding max-w-[1440px] mx-auto bg-background flex justify-center">
      <div className="max-w-[800px] w-full">
        
        {/* Customer Details */}
        <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Détails du client</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="flex flex-col">
            <label className="font-label-caps text-label-caps tracking-[0.1em] uppercase text-primary mb-2">Nom complet</label>
            <input 
              type="text" 
              defaultValue="John Doe"
              className="border border-outline-variant bg-transparent px-4 py-3 font-body-md text-on-surface-variant focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-label-caps text-label-caps tracking-[0.1em] uppercase text-primary mb-2">Adresse e-mail</label>
            <input 
              type="email" 
              defaultValue="john@example.com"
              className="border border-outline-variant bg-transparent px-4 py-3 font-body-md text-on-surface-variant focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-label-caps text-label-caps tracking-[0.1em] uppercase text-primary mb-2">Numéro de téléphone</label>
            <input 
              type="tel" 
              defaultValue="+213 555 000 000"
              className="border border-outline-variant bg-transparent px-4 py-3 font-body-md text-on-surface-variant focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex flex-col relative">
            <label className="font-label-caps text-label-caps tracking-[0.1em] uppercase text-primary mb-2">Pays</label>
            <div className="relative">
              <select 
                defaultValue="Algérie"
                className="w-full border border-outline-variant bg-transparent px-4 py-3 font-body-md text-primary appearance-none focus:outline-none focus:border-primary"
              >
                <option>Algérie</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 transform -translate-y-1/2 text-on-surface-variant pointer-events-none">
                expand_more
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="font-label-caps text-label-caps tracking-[0.1em] uppercase text-primary mb-2">Ville</label>
            <input 
              type="text" 
              defaultValue="Alger"
              className="border border-outline-variant bg-transparent px-4 py-3 font-body-md text-on-surface-variant focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-label-caps text-label-caps tracking-[0.1em] uppercase text-primary mb-2">Code postal</label>
            <input 
              type="text" 
              defaultValue="16000"
              className="border border-outline-variant bg-transparent px-4 py-3 font-body-md text-on-surface-variant focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="font-label-caps text-label-caps tracking-[0.1em] uppercase text-primary mb-2">Adresse de livraison</label>
            <input 
              type="text" 
              defaultValue="Boulevard des Martyrs, No. 42"
              className="border border-outline-variant bg-transparent px-4 py-3 font-body-md text-on-surface-variant focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        {/* Delivery Method */}
        <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Mode de livraison</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          
          {/* Option 1 */}
          <div 
            className={`flex flex-col cursor-pointer transition-opacity ${selectedDelivery === 'domicile' ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
            onClick={() => setSelectedDelivery('domicile')}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-primary text-[24px]">home</span>
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedDelivery === 'domicile' ? 'border-primary' : 'border-outline-variant'}`}>
                {selectedDelivery === 'domicile' && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
              </div>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2">Livraison à domicile</h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Service premium en porte-à-porte sous 3 à 5 jours ouvrables.
            </p>
          </div>

          {/* Option 2 */}
          <div 
            className={`flex flex-col cursor-pointer transition-opacity ${selectedDelivery === 'yalidine' ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
            onClick={() => setSelectedDelivery('yalidine')}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-primary text-[24px]">local_shipping</span>
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedDelivery === 'yalidine' ? 'border-primary' : 'border-outline-variant'}`}>
                {selectedDelivery === 'yalidine' && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
              </div>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2">Point relais Yalidine</h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Récupérez votre colis dans votre centre Yalidine local à votre convenance.
            </p>
          </div>

        </div>

        {/* Order Action */}
        <div className="flex justify-center mb-20">
          <button 
            type="button" 
            className="w-full md:w-auto px-16 py-5 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest hover:bg-[#C8A96A] transition-colors shadow-sm"
            onClick={() => {
              document.getElementById('thank-you-section')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
          >
            Confirmer la commande
          </button>
        </div>

        {/* Support Section */}
        <div className="mt-16 pt-16 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center bg-surface p-8 rounded-lg">
          <div>
            <h3 className="font-headline-md text-headline-sm text-primary mb-2">Besoin d'aide ?</h3>
            <p className="font-body-sm text-on-surface-variant mb-6 md:mb-0">Notre équipe est à votre disposition pour vous assister dans votre commande.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href={`tel:${storeSettings.phoneNumber.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
              <Phone size={18} />
              <span className="font-body-sm">{storeSettings.phoneNumber}</span>
            </a>
            <a href={`https://wa.me/${storeSettings.whatsappNumber}`} target="_blank" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
              <MessageCircle size={18} />
              <span className="font-body-sm">WhatsApp</span>
            </a>
            <a href={`mailto:${storeSettings.emailAddress}`} className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
              <Mail size={18} />
              <span className="font-body-sm">Nous écrire</span>
            </a>
          </div>
        </div>

        {/* Thank You Section */}
        <div id="thank-you-section" className="flex flex-col items-center text-center mt-20">
          <div className="w-16 h-16 rounded-full border border-secondary flex items-center justify-center mb-8">
             <span className="material-symbols-outlined text-secondary text-[32px]">check</span>
          </div>
          <h1 className="font-display-lg text-[48px] md:text-display-lg text-primary mb-6">
            Merci pour votre commande
          </h1>
          <p className="font-body-md text-on-surface-variant max-w-lg leading-relaxed">
            Votre sélection exquise est en cours de préparation avec le plus grand soin. Un e-mail de confirmation a été envoyé à votre adresse enregistrée.
          </p>
        </div>

      </div>
    </main>
  );
}

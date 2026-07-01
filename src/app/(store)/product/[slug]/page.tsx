"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProductDetailsPage() {
  const [quantity, setQuantity] = useState(1);
  const [expanded, setExpanded] = useState("description");
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("S");

  return (
    <main className="pt-32 pb-section-gap-desktop px-container-padding max-w-[1440px] mx-auto bg-background">
      
      {/* Breadcrumbs */}
      <div className="mb-8 font-label-caps text-label-caps text-on-surface-variant uppercase">
        <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
        <span className="mx-2">›</span>
        <Link href="/collection" className="hover:text-primary transition-colors">Collections</Link>
        <span className="mx-2">›</span>
        <span className="text-primary">Abaya Noire de Luxe</span>
      </div>

      <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
        
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full aspect-[3/4] bg-surface-variant">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/products/lux_abaya.png')" }}
            />
          </div>
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2 md:pt-10">
          
          {/* Color */}
          <div className="mb-8">
            <h3 className="font-label-caps text-label-caps text-primary uppercase mb-4 tracking-widest">Couleur : {['Noir Obsidienne', 'Sable du Désert', 'Terre Cuite'][selectedColor]}</h3>
            <div className="flex space-x-3">
              <button onClick={() => setSelectedColor(0)} className={`w-6 h-6 rounded-full bg-[#E5B571] border-2 transition-all ${selectedColor === 0 ? 'border-primary ring-2 ring-offset-2 ring-transparent' : 'border-transparent hover:border-primary'}`}></button>
              <button onClick={() => setSelectedColor(1)} className={`w-6 h-6 rounded-full bg-[#C68656] border-2 transition-all ${selectedColor === 1 ? 'border-primary ring-2 ring-offset-2 ring-transparent' : 'border-transparent hover:border-primary'}`}></button>
              <button onClick={() => setSelectedColor(2)} className={`w-6 h-6 rounded-full bg-[#F35532] border-2 transition-all ${selectedColor === 2 ? 'border-primary ring-2 ring-offset-2 ring-transparent' : 'border-transparent hover:border-primary'}`}></button>
            </div>
          </div>

          {/* Size */}
          <div className="mb-10">
            <div className="flex justify-between items-end mb-4">
              <h3 className="font-label-caps text-label-caps text-primary uppercase tracking-widest">Sélectionner la taille</h3>
              <button className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary uppercase border-b border-outline-variant pb-0.5 transition-colors">Guide des tailles</button>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 font-label-caps text-[10px] sm:text-label-caps uppercase border transition-colors ${size === selectedSize ? 'bg-primary text-on-primary border-primary' : 'bg-transparent text-primary border-outline-variant hover:border-primary'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Price */}
          <div className="flex justify-between items-end mb-8">
            <div className="flex items-center border border-outline-variant bg-transparent">
              <button 
                className="px-4 py-3 text-on-surface-variant hover:text-primary transition-colors"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <span className="material-symbols-outlined text-[16px]">remove</span>
              </button>
              <span className="w-8 text-center font-body-md text-primary">{quantity}</span>
              <button 
                className="px-4 py-3 text-on-surface-variant hover:text-primary transition-colors"
                onClick={() => setQuantity(quantity + 1)}
              >
                <span className="material-symbols-outlined text-[16px]">add</span>
              </button>
            </div>

            <div className="text-right">
              <div className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant mb-1">Sous-total</div>
              <div className="font-headline-lg text-headline-lg text-primary">172 000 DA</div>
            </div>
          </div>

          {/* Shop Now Button */}
          <Link 
            href="/checkout"
            className="w-full block bg-primary text-on-primary text-center py-5 font-label-caps text-label-caps tracking-[0.2em] uppercase mb-8 hover:bg-surface-tint transition-colors"
          >
            Acheter maintenant
          </Link>

          {/* Delivery Info */}
          <div className="flex items-start mb-16 text-on-surface-variant">
            <span className="material-symbols-outlined mr-4 mt-0.5">local_shipping</span>
            <div>
              <p className="font-body-md text-primary">Livraison gants blancs offerte</p>
              <p className="font-body-md text-sm mt-1 opacity-70">Livraison estimée : 3 - 5 jours ouvrables</p>
            </div>
          </div>

          {/* Accordions */}
          <div className="border-t border-outline-variant/30">
            {/* Description */}
            <div className="border-b border-outline-variant/30">
              <button 
                className="w-full py-6 flex justify-between items-center text-left"
                onClick={() => setExpanded(expanded === 'description' ? '' : 'description')}
              >
                <span className="font-headline-md text-headline-md text-primary">Description</span>
                <span className="material-symbols-outlined">{expanded === 'description' ? 'expand_less' : 'expand_more'}</span>
              </button>
              {expanded === 'description' && (
                <div className="pb-6 font-body-md text-on-surface-variant leading-relaxed">
                  Notre Abaya Noire de Luxe est le summum de l'artisanat d'art. Chaque pièce nécessite environ 40 heures de broderie minutieuse à la main par des maîtres tailleurs. Le tissu est choisi pour son tombé supérieur et sa nature respirante, assurant l'élégance sous tous les climats. La coupe est intentionnellement surdimensionnée pour offrir une présence majestueuse tout en maintenant le confort.
                </div>
              )}
            </div>

            {/* Care Instructions */}
            <div className="border-b border-outline-variant/30">
              <button 
                className="w-full py-6 flex justify-between items-center text-left"
                onClick={() => setExpanded(expanded === 'care' ? '' : 'care')}
              >
                <span className="font-headline-md text-headline-md text-primary">Conseils d'entretien</span>
                <span className="material-symbols-outlined">{expanded === 'care' ? 'expand_less' : 'expand_more'}</span>
              </button>
              {expanded === 'care' && (
                <div className="pb-6 font-body-md text-on-surface-variant leading-relaxed">
                  Nettoyage à sec uniquement. Ne pas utiliser d'eau de Javel. Repasser à basse température sur l'envers.
                </div>
              )}
            </div>

            {/* Delivery & Returns */}
            <div className="border-b border-outline-variant/30">
              <button 
                className="w-full py-6 flex justify-between items-center text-left"
                onClick={() => setExpanded(expanded === 'delivery' ? '' : 'delivery')}
              >
                <span className="font-headline-md text-headline-md text-primary">Livraison et Retours</span>
                <span className="material-symbols-outlined">{expanded === 'delivery' ? 'expand_less' : 'expand_more'}</span>
              </button>
              {expanded === 'delivery' && (
                <div className="pb-6 font-body-md text-on-surface-variant leading-relaxed">
                  Nous offrons la livraison internationale gratuite. Les retours sont acceptés dans les 14 jours suivant la réception. Les articles doivent être non portés avec les étiquettes d'origine attachées.
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}

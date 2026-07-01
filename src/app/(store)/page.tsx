"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <main>
  {/*  Full-screen Editorial Hero Banner  */}
  <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-clean.png')" }}></div>
      <div className="absolute inset-0 bg-primary/20"></div>
    </div>
    <div className="relative z-10 text-center text-on-primary px-container-padding max-w-[1000px]">
      <span className="font-label-caps text-label-caps tracking-[0.3em] uppercase block mb-6 animate-fade-in-up">L'Essence de la Sophistication</span>
      <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8 animate-fade-in-up delay-200">Luxury Couture House</h1>
      <p className="font-body-lg text-body-lg mb-10 max-w-2xl mx-auto animate-fade-in-up delay-400">Où l'élégance rencontre la mode intemporelle. Découvrez notre sélection raffinée de pièces sur mesure conçues pour le connaisseur moderne.</p>
      <div className="animate-fade-in-up delay-600">
        <Link className="inline-block px-12 py-5 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest hover:bg-[#C8A96A] hover:-translate-y-1 transition-all duration-500" href="/collection">Explorer la collection</Link>
      </div>
    </div>
  </section>

  {/*  Featured Collections (Bento Grid Style)  */}
  <section className="py-section-gap-desktop px-container-padding max-w-[1440px] mx-auto" id="collections">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
      <div className="max-w-xl">
        <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase">Notre Portfolio</span>
        <h2 className="font-headline-xl text-headline-xl">Collections Raffinées</h2>
      </div>
      <Link className="font-label-caps text-label-caps uppercase border-b border-primary pb-1 mt-6 md:mt-0" href="/collection">Voir toutes les catégories</Link>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter h-auto">
      {/*  Luxury Abayas  */}
      <div className="md:col-span-7 relative group overflow-hidden reveal-on-scroll">
        <div className="w-full h-full min-h-[600px] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('/images/products/lux_abaya.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
        <div className="absolute bottom-10 left-10 text-on-primary">
          <h3 className="font-headline-lg text-headline-lg mb-4">Abayas de luxe</h3>
          <Link className="font-label-caps text-label-caps uppercase tracking-widest border-b border-on-primary pb-1 gold-border-bottom" href="/collection">Découvrir</Link>
        </div>
      </div>
      {/*  Evening Dresses  */}
      <div className="md:col-span-5 relative group overflow-hidden reveal-on-scroll">
        <div className="w-full h-full min-h-[500px] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('/images/products/lux_evening_dress.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
        <div className="absolute bottom-10 left-10 text-on-primary">
          <h3 className="font-headline-lg text-headline-lg mb-4">Robes de soirée</h3>
          <Link className="font-label-caps text-label-caps uppercase tracking-widest border-b border-on-primary pb-1" href="/collection">Découvrir</Link>
        </div>
      </div>
      {/*  Kaftans  */}
      <div className="md:col-span-4 relative group overflow-hidden reveal-on-scroll">
        <div className="w-full h-full min-h-[400px] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('/images/products/lux_caftan.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
        <div className="absolute bottom-10 left-10 text-on-primary">
          <h3 className="font-headline-lg text-headline-lg mb-4">Caftans</h3>
          <Link className="font-label-caps text-label-caps uppercase tracking-widest border-b border-on-primary pb-1" href="/collection">Découvrir</Link>
        </div>
      </div>
      {/*  Wedding Dresses  */}
      <div className="md:col-span-8 relative group overflow-hidden reveal-on-scroll">
        <div className="w-full h-full min-h-[400px] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('/images/products/lux_wedding_dress.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
        <div className="absolute bottom-10 left-10 text-on-primary">
          <h3 className="font-headline-lg text-headline-lg mb-4">Robes de mariée</h3>
          <Link className="font-label-caps text-label-caps uppercase tracking-widest border-b border-on-primary pb-1" href="/collection">Découvrir</Link>
        </div>
      </div>
    </div>
  </section>

  {/*  New Collection Section (Editorial Layout)  */}
  <section className="bg-surface-container py-section-gap-desktop">
    <div className="max-w-[1440px] mx-auto px-container-padding flex flex-col md:flex-row items-center gap-20">
      <div className="w-full md:w-1/2 reveal-on-scroll">
        <div className="relative aspect-[4/5] w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/products/lux_ensemble.png')" }}></div>
      </div>
      <div className="w-full md:w-1/2 reveal-on-scroll">
        <span className="font-label-caps text-label-caps text-secondary mb-6 block uppercase">Édition Limitée</span>
        <h2 className="font-display-lg text-headline-xl md:text-headline-xl mb-8 leading-tight">La Série Signature <br />Hiver '24</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-lg">Chaque fil de notre série signature raconte une histoire d'héritage et de précision. Fabriquées pendant des centaines d'heures, ces pièces redéfinissent le luxe moderne avec des silhouettes qui résistent à l'épreuve du temps.</p>
        <Link className="inline-block px-12 py-5 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest hover:bg-[#C8A96A] transition-all duration-500" href="/collection">Acheter la collection</Link>
      </div>
    </div>
  </section>

  {/*  Best Sellers (Product Grid)  */}
  <section className="py-section-gap-desktop px-container-padding max-w-[1440px] mx-auto">
    <div className="text-center mb-16 reveal-on-scroll">
      <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase">Tendance Actuelle</span>
      <h2 className="font-headline-xl text-headline-xl">Nos Meilleures Ventes</h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-grid-gutter">
      {/*  Product 1  */}
      <div className="group reveal-on-scroll">
        <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-surface-variant">
          <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/images/products/lux_velvet.png')" }}></div>
          <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 font-label-caps text-[10px] tracking-widest uppercase">Nouveau</div>
          <button className="absolute bottom-0 w-full py-4 bg-primary text-on-primary font-label-caps text-label-caps uppercase transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">Ajouter au panier</button>
        </div>
        <h4 className="font-headline-md text-body-lg mb-2">Caftan en soie</h4>
        <p className="font-label-caps text-label-caps text-secondary">172 000 DA</p>
      </div>
      {/*  Product 2  */}
      <div className="group reveal-on-scroll">
        <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-surface-variant">
          <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/images/products/lux_trousers.png')" }}></div>
          <button className="absolute bottom-0 w-full py-4 bg-primary text-on-primary font-label-caps text-label-caps uppercase transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">Ajouter au panier</button>
        </div>
        <h4 className="font-headline-md text-body-lg mb-2">Pantalon en soie signature</h4>
        <p className="font-label-caps text-label-caps text-secondary">122 000 DA</p>
      </div>
      {/*  Product 3  */}
      <div className="group cursor-pointer">
        <div className="relative overflow-hidden aspect-[4/5] mb-6 bg-surface-variant">
          <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/images/products/robe-emeraude.png')" }}></div>
          <div className="absolute top-4 left-4 bg-primary text-on-primary font-label-caps text-[10px] tracking-widest uppercase px-3 py-1">Édition Limitée</div>
          <button className="absolute top-4 right-4 w-10 h-10 bg-surface text-primary rounded-full flex items-center justify-center shadow-sm hover:bg-surface-variant transition-colors">
            <span className="material-symbols-outlined text-[20px]">favorite</span>
          </button>
        </div>
        <h4 className="font-headline-md text-body-lg mb-2">Robe de Soirée Émeraude</h4>
        <p className="font-body-md text-secondary mb-3">Robes de Soirée</p>
        <p className="font-body-lg text-primary">330,000 DA</p>
      </div>
      {/*  Product 4  */}
      <div className="group reveal-on-scroll">
        <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-surface-variant">
          <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/images/products/lux_coat.png')" }}></div>
          <button className="absolute bottom-0 w-full py-4 bg-primary text-on-primary font-label-caps text-label-caps uppercase transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">Ajouter au panier</button>
        </div>
        <h4 className="font-headline-md text-body-lg mb-2">Manteau héritage en laine</h4>
        <p className="font-label-caps text-label-caps text-secondary">427 000 DA</p>
      </div>
    </div>
  </section>

  {/*  Why Choose Us  */}
  <section className="py-section-gap-desktop border-y border-outline-variant/30">
    <div className="max-w-[1440px] mx-auto px-container-padding grid grid-cols-1 md:grid-cols-5 gap-12 text-center">
      <div className="reveal-on-scroll">
        <span className="material-symbols-outlined text-[40px] text-secondary mb-6">workspace_premium</span>
        <h5 className="font-label-caps text-label-caps mb-4 uppercase">Tissus de première qualité</h5>
        <p className="text-on-surface-variant text-sm">Uniquement la soie, la laine et le lin les plus fins provenant du monde entier.</p>
      </div>
      <div className="reveal-on-scroll">
        <span className="material-symbols-outlined text-[40px] text-secondary mb-6">handyman</span>
        <h5 className="font-label-caps text-label-caps mb-4 uppercase">Fait main</h5>
        <p className="text-on-surface-variant text-sm">Chaque pièce est finie par des maîtres artisans.</p>
      </div>
      <div className="reveal-on-scroll">
        <span className="material-symbols-outlined text-[40px] text-secondary mb-6">star</span>
        <h5 className="font-label-caps text-label-caps mb-4 uppercase">Exclusif</h5>
        <p className="text-on-surface-variant text-sm">Séries de production limitées pour garantir la rareté.</p>
      </div>
      <div className="reveal-on-scroll">
        <span className="material-symbols-outlined text-[40px] text-secondary mb-6">local_shipping</span>
        <h5 className="font-label-caps text-label-caps mb-4 uppercase">Livraison</h5>
        <p className="text-on-surface-variant text-sm">Livraison gants blancs internationale offerte.</p>
      </div>
      <div className="reveal-on-scroll">
        <span className="material-symbols-outlined text-[40px] text-secondary mb-6">verified_user</span>
        <h5 className="font-label-caps text-label-caps mb-4 uppercase">Paiement sécurisé</h5>
        <p className="text-on-surface-variant text-sm">Transactions chiffrées selon les normes de l'industrie.</p>
      </div>
    </div>
  </section>


</main>
    </>
  );
}


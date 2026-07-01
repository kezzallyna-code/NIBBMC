"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    title: "Abaya Noire de Luxe",
    description: "Exquisement conçue à partir de crêpe japonais de première qualité avec de la dentelle métallique cousue à la main...",
    image: "/images/products/lux_abaya.png",
    limitedEdition: false,
    slug: "luxury-black-abaya"
  },
  {
    id: 2,
    title: "Ensemble Drapé en Soie",
    description: "Mousseline de soie à double épaisseur avec une silhouette fluide qui passe du jour à...",
    image: "/images/products/lux_ensemble.png",
    limitedEdition: true,
    slug: "silk-drape-ensemble"
  },
  {
    id: 3,
    title: "Anthracite Architectural",
    description: "Une coupe nette rencontre des sensibilités modestes dans ce chef-d'œuvre structurel en mélange de laine.",
    image: "/images/products/lux_evening_dress.png",
    limitedEdition: false,
    slug: "architectural-charcoal"
  },
  {
    id: 4,
    title: "Noir Doré en Velours",
    description: "Filigrane d'or brodé à la main sur du velours de minuit. Le summum de notre soirée...",
    image: "/images/products/lux_velvet.png",
    limitedEdition: false,
    slug: "velvet-gilded-noir"
  },
  {
    id: 5,
    title: "Sable en Lin d'Été",
    description: "Lin italien respirant avec attache perlée artisanale pour une élégance sans effort.",
    image: "/images/products/lux_caftan.png",
    limitedEdition: false,
    slug: "summer-linen-sand"
  },
  {
    id: 6,
    title: "Émeraude Impériale",
    description: "Luxueux velours lourd dans notre teinte émeraude signature, avec un plissé fait main...",
    image: "/images/products/lux_wedding_dress.png",
    limitedEdition: false,
    slug: "imperial-emerald"
  }
];

export default function CollectionPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFavoritesView, setIsFavoritesView] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('luxury_favorites');
    if (saved) setFavorites(JSON.parse(saved));
    
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('view') === 'favorites') setIsFavoritesView(true);
    }
  }, []);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      const next = prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id];
      localStorage.setItem('luxury_favorites', JSON.stringify(next));
      return next;
    });
  };

  const displayedProducts = isFavoritesView 
    ? products.filter(p => favorites.includes(p.id))
    : products;

  return (
    <main className="pt-12 pb-section-gap-desktop px-container-padding max-w-[1440px] mx-auto bg-background">
      
      {/* Header */}
      <div className="mb-16">
        <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">
          Maison de Couture
        </span>
        <h1 className="font-headline-xl text-headline-xl text-primary mb-6">
          {isFavoritesView ? "Mes Favoris" : "Collection de Couture de Luxe"}
        </h1>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Une exploration de la modestie à travers le prisme de la haute couture. Notre dernière collection allie savoir-faire traditionnel et silhouettes avant-gardistes pour la femme moderne pleine de grâce.
          </p>
          
          <div className="flex items-center text-sm font-body-md text-on-surface-variant">
            <span className="mr-2">Trier par</span>
            <button className="flex items-center font-bold text-primary border-none bg-transparent">
              Nouveautés <span className="material-symbols-outlined text-sm ml-1">expand_more</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-grid-gutter mb-20">
        {displayedProducts.length === 0 ? (
          <div className="col-span-full text-center py-20 font-body-lg text-secondary">
            Aucun article dans vos favoris pour le moment.
          </div>
        ) : displayedProducts.map((product) => (
          <div key={product.id} className="group flex flex-col">
            <div className="relative overflow-hidden aspect-[4/5] mb-6 bg-surface-variant">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${product.image}')` }}
              />
              {product.limitedEdition && (
                <div className="absolute top-4 left-4 bg-primary text-on-primary font-label-caps text-[10px] tracking-widest uppercase px-3 py-1">
                  Édition Limitée
                </div>
              )}
              <button 
                onClick={(e) => { e.preventDefault(); toggleFavorite(product.id); }}
                className="absolute top-4 right-4 w-10 h-10 bg-surface text-primary rounded-full flex items-center justify-center shadow-sm hover:bg-surface-variant transition-colors"
              >
                <span 
                  className={`material-symbols-outlined text-[20px] transition-all ${favorites.includes(product.id) ? 'text-red-500 scale-110' : ''}`}
                  style={{ fontVariationSettings: favorites.includes(product.id) ? "'FILL' 1" : "'FILL' 0" }}
                >
                  favorite
                </span>
              </button>
            </div>
            
            <h3 className="font-headline-md text-headline-md text-primary mb-2">
              {product.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4 flex-grow">
              {product.description}
            </p>
            
            <div>
              <Link 
                href={`/product/${product.slug}`}
                className="font-label-caps text-label-caps text-primary uppercase border-b border-primary pb-1 gold-border-bottom"
              >
                VOIR LES DÉTAILS
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 font-body-md text-on-surface-variant">
        <button 
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:text-primary hover:border-primary transition-colors"
        >
          <span className="material-symbols-outlined text-sm">chevron_left</span>
        </button>
        {[1, 2, 3].map(page => (
          <button 
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-10 h-10 flex items-center justify-center transition-colors ${currentPage === page ? 'font-bold text-primary border-b border-primary' : 'hover:text-primary'}`}
          >
            0{page}
          </button>
        ))}
        <span className="px-2">...</span>
        <button 
          onClick={() => setCurrentPage(12)}
          className={`w-10 h-10 flex items-center justify-center transition-colors ${currentPage === 12 ? 'font-bold text-primary border-b border-primary' : 'hover:text-primary'}`}
        >
          12
        </button>
        <button 
          onClick={() => setCurrentPage(Math.min(12, currentPage + 1))}
          className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:text-primary hover:border-primary transition-colors"
        >
          <span className="material-symbols-outlined text-sm">chevron_right</span>
        </button>
      </div>
    </main>
  );
}


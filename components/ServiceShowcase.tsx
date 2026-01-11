
import React from 'react';
import { IMAGES } from '../constants/assets';

const showcaseItems = [
  {
    title: "Vitrines",
    category: "Web",
    image: IMAGES.showcase.vitrines,
    description: "Élégance pure.",
    alt: "Aperçu d'un site vitrine haut de gamme conçu par Soft Current"
  },
  {
    title: "Branding",
    category: "Design",
    image: IMAGES.showcase.branding,
    description: "Identité forte.",
    alt: "Concept de branding et identité visuelle pour une marque de luxe"
  },
  {
    title: "E-Shop",
    category: "Commerce",
    image: IMAGES.showcase.eshop,
    description: "Ventes flash.",
    alt: "Interface de boutique e-commerce moderne et optimisée pour la conversion"
  },
  {
    title: "UX/UI",
    category: "Product",
    image: IMAGES.showcase.uxui,
    description: "Fluidité totale.",
    alt: "Design d'interface utilisateur (UI) et expérience utilisateur (UX) sophistiquée"
  }
];

const ServiceShowcase: React.FC = () => {
  return (
    <section id="services" className="py-12 bg-slate-950 border-b border-slate-900/50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {showcaseItems.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative h-[320px] overflow-hidden rounded-[2rem] cursor-pointer border border-white/5 bg-slate-900 transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 active:scale-95"
            >
              <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-110">
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                {/* Renforcement du dégradé pour lisibilité accrue */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/60 to-slate-950 group-hover:via-slate-950/30 transition-all duration-500" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                <span className="inline-block text-blue-300 text-[10px] font-black uppercase tracking-[0.2em] mb-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 drop-shadow-md">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white font-outfit mb-2 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 delay-75 group-hover:text-white drop-shadow-lg">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-150 group-hover:text-white font-medium">
                  {item.description}
                </p>
                <div className="w-0 group-hover:w-12 h-1 bg-blue-500 mt-4 transition-all duration-700 delay-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;

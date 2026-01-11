
import React, { useState, useEffect } from 'react';
import { Monitor, Palette, ShoppingBag, Layout, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { IMAGES } from '../constants/assets';

const services = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Sites Vitrines",
    description: "Présentez votre expertise avec des sites web élégants, rapides et optimisés pour tous les supports afin de captiver votre audience et renforcer votre crédibilité.",
    image: IMAGES.services[0],
    alt: "Création de site vitrine professionnel haute performance",
    color: "from-blue-600 to-cyan-500"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Branding",
    description: "Créez une identity visuelle unique et cohérente qui capture l'essence de votre marque et marque durablement les esprits de vos futurs clients.",
    image: IMAGES.services[1],
    alt: "Conception d'identité visuelle et branding de marque",
    color: "from-fuchsia-600 to-pink-500"
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "Sites E-commerce",
    description: "Propulsez vos ventes avec des boutiques en ligne performantes, sécurisées et offrant une expérience d'achat fluide et intuitive à chaque clic.",
    image: IMAGES.services[2],
    alt: "Développement de boutique e-commerce avec tunnel de vente optimisé",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Design UX/UI",
    description: "Des interfaces intuitives et esthétiques conçues pour engager vos utilisateurs et transformer chaque visite en un succès business mesurable.",
    image: IMAGES.services[3],
    alt: "Design d'interface utilisateur UI et expérience utilisateur UX",
    color: "from-emerald-500 to-teal-500"
  }
];

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % services.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services-main" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">Notre Expertise</div>
            <h2 className="text-5xl md:text-7xl font-bold font-outfit text-white leading-tight">
              Des solutions <br />
              <span className="text-slate-700">d'exception.</span>
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border border-slate-800 flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-all duration-500 active:scale-90 cursor-pointer"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 rounded-full border border-slate-800 flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-all duration-500 active:scale-90 cursor-pointer"
              aria-label="Suivant"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative h-[700px] md:h-[600px] overflow-hidden rounded-[3rem] glass-card border-slate-800/50 shadow-2xl">
          {services.map((service, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div 
                key={idx}
                className={`absolute inset-0 transition-all duration-[1000ms] cubic-bezier(0.4, 0, 0.2, 1) flex flex-col md:flex-row group cursor-default ${
                  isActive 
                    ? 'opacity-100 translate-x-0 scale-100 z-10' 
                    : 'opacity-0 translate-x-20 scale-95 pointer-events-none'
                }`}
              >
                <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.alt}
                    className={`w-full h-full object-cover transition-transform duration-[3000ms] ${isActive ? 'scale-105 group-hover:scale-125' : 'scale-150'}`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/10 transition-colors duration-700" />
                  
                  <div className={`absolute top-10 left-10 w-24 h-24 rounded-[2rem] bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-blue-500/50 group-hover:ring-4 group-hover:ring-white/20`}>
                    <div className="transition-all duration-500 group-hover:scale-125">
                      {service.icon}
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-20 flex flex-col justify-center bg-slate-950/90 backdrop-blur-2xl border-l border-white/5 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] pointer-events-none" />

                  <div className="mb-6 relative z-10">
                    <span className={`text-blue-400 font-bold text-sm tracking-widest uppercase mb-6 block transform transition-all duration-700 delay-300 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                      0{idx + 1} / 0{services.length}
                    </span>
                    <h3 className={`text-4xl md:text-6xl font-bold font-outfit text-white mb-8 leading-tight transition-all duration-700 delay-500 drop-shadow-md ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-white/90 text-lg md:text-xl leading-relaxed max-w-md mb-12 transition-all duration-700 delay-700 group-hover:text-white drop-shadow-sm group-hover:translate-x-2 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                      {service.description}
                    </p>
                  </div>

                  <div className={`flex items-center gap-10 relative z-10 transition-all duration-700 delay-[900ms] ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
                    <button 
                      onClick={scrollToContact}
                      className="group/btn flex items-center gap-4 px-10 py-5 bg-white text-slate-950 rounded-2xl font-black hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-2xl hover:shadow-blue-500/30 active:scale-95 cursor-pointer"
                    >
                      Démarrer mon projet
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                    <div className="flex gap-3">
                      {services.map((_, dotIdx) => (
                        <button 
                          key={dotIdx}
                          onClick={() => setActiveIndex(dotIdx)}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                            dotIdx === activeIndex ? 'w-12 bg-blue-500' : 'bg-slate-700 hover:bg-slate-500'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full -z-10" />
      </div>
    </section>
  );
};

export default Services;

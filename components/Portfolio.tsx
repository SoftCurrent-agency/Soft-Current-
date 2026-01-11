
import React, { useState } from 'react';
import { ArrowUpRight, FolderOpen, X, Sparkles, LayoutGrid } from 'lucide-react';
import { IMAGES } from '../constants/assets';

const projects = [
  { id: "01", title: "BIBLIO Nova", category: "DIGITAL LIBRARY / ARCHIVE", image: IMAGES.portfolio[0], alt: "Étude de cas BIBLIO Nova : plateforme de bibliothèque numérique d'élite et gestion de savoir" },
  { id: "02", title: "KORA Fashion", category: "E-COMMERCE / LUXE", image: IMAGES.portfolio[1], alt: "Étude de cas KORA Fashion : boutique en ligne de luxe avec design épuré" },
  { id: "03", title: "SAMA Essence", category: "COSMETICS / LUXURY", image: IMAGES.portfolio[2], alt: "Étude de cas SAMA Essence : boutique e-commerce immersive pour produits cosmétiques haut de gamme" },
  { id: "04", title: "YARA Barber Collective", category: "BARBER / GROOMING", image: IMAGES.portfolio[3], alt: "Étude de cas YARA Barber Collective : site web de réservation premium pour salon de coiffure et barbier d'exception" },
  { id: "05", title: "AKOMA Health", category: "HEALTHCARE / UI", image: IMAGES.portfolio[4], alt: "Étude de cas AKOMA Health : interface utilisateur pour application de santé" },
  { id: "06", title: "KILIMA Resorts", category: "TOURISM / IMMERSIVE", image: IMAGES.portfolio[5], alt: "Étude de cas KILIMA Resorts : site web immersif pour l'hôtellerie de luxe" },
  { id: "07", title: "NOX Studio", category: "CREATIVE / PORTFOLIO", image: IMAGES.portfolio[6], alt: "Étude de cas NOX Studio : portfolio créatif minimaliste pour agence photo" },
  { id: "08", title: "ORA Watch", category: "LUXURY / BOUTIQUE", image: IMAGES.portfolio[7], alt: "Étude de cas ORA Watch : e-commerce de montres haut de gamme" },
  { id: "09", title: "TERRA Vision", category: "SUSTAINABILITY / TECH", image: IMAGES.portfolio[8], alt: "Étude de cas TERRA Vision : plateforme technologique pour le développement durable" },
  { id: "10", title: "LUMA Finance", category: "BANKING / INTERFACE", image: IMAGES.portfolio[9], alt: "Étude de cas LUMA Finance : interface bancaire moderne et intuitive" }
];

const Portfolio: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">Archives d'Élite</div>
          <h2 className="text-5xl md:text-7xl font-bold font-outfit text-white leading-tight mb-6">
            L'excellence <br />
            <span className="text-slate-700">documentée.</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Découvrez comment nous transformons les ambitions en succès digitaux mesurables à travers nos dossiers confidentiels.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          {!isOpen ? (
            <button 
              onClick={() => setIsOpen(true)}
              className="group relative w-full max-w-xl aspect-video md:aspect-[21/9] glass-card rounded-[3rem] border-white/10 flex flex-col items-center justify-center gap-6 overflow-hidden hover:border-blue-500/50 hover:bg-blue-600/5 transition-all duration-700 cursor-pointer shadow-2xl active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/10 blur-[60px] rounded-full group-hover:bg-blue-500/20 transition-all duration-700" />
              
              <div className="w-20 h-20 rounded-[2rem] bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-500 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                <FolderOpen className="w-10 h-10" />
              </div>
              
              <div className="text-center relative z-10">
                <div className="text-white font-black text-2xl md:text-3xl font-outfit mb-2 tracking-tight uppercase">
                  Ouvrir le Portfolio
                </div>
                <div className="flex items-center justify-center gap-3 text-slate-500 text-sm font-bold tracking-widest uppercase">
                  <LayoutGrid className="w-4 h-4" />
                  {projects.length} Études de cas
                </div>
              </div>

              <div className="absolute bottom-6 flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                Explorer les archives <ArrowUpRight className="w-3 h-3" />
              </div>
            </button>
          ) : (
            <div className="w-full animate-in fade-in zoom-in-95 duration-700">
              <div className="flex justify-between items-center mb-12 pb-6 border-b border-white/5">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                     <Sparkles className="w-5 h-5" />
                   </div>
                   <span className="text-white font-bold text-lg">Soft Current Archives</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer font-bold text-xs uppercase tracking-widest"
                >
                  Fermer le dossier
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
                {projects.map((project, idx) => (
                  <div 
                    key={project.id}
                    id={`project-${project.id}`}
                    className={`group relative flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700 ${
                      idx % 2 !== 0 ? 'md:mt-32' : ''
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] bg-slate-900 border border-slate-800/50">
                      <img 
                        src={project.image} 
                        alt={project.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-8 left-8">
                        <span className="px-4 py-2 rounded-full glass-card border-white/10 text-[10px] font-bold text-white tracking-widest uppercase backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between items-start">
                      <div>
                        <h3 className="text-3xl font-bold text-white font-outfit mb-2 group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <div className="h-[1px] w-0 group-hover:w-full bg-blue-500 transition-all duration-500" />
                      </div>
                      <div className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500 transform group-hover:rotate-45">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

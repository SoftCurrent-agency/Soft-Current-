
import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-32 relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="relative glass-card rounded-[4rem] p-12 md:p-24 overflow-hidden border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-transparent dark:from-blue-600/10 dark:to-transparent">
          {/* Background Decor */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full opacity-50 dark:opacity-100" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full opacity-50 dark:opacity-100" />
          
          <div className="max-w-4xl relative z-10">
            <h2 className="text-5xl md:text-8xl font-black font-outfit leading-none mb-10 text-slate-900 dark:text-white">
              Votre futur digital <br />
              <span className="text-blue-500 italic">commence ici.</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl leading-relaxed">
              Ne laissez pas vos concurrents prendre l'avantage. Obtenez une plateforme de classe mondiale en 72 heures.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <button 
                onClick={scrollToContact}
                className="group flex items-center gap-3 px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-full font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-blue-500/10 cursor-pointer"
              >
                Lancer mon Sprint
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <div className="flex items-center gap-4 px-8 py-5 border border-slate-200 dark:border-white/10 rounded-full text-slate-700 dark:text-white font-bold backdrop-blur-sm bg-white/50 dark:bg-transparent">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                Disponibilité immédiate
              </div>
            </div>
          </div>
          
          {/* Decorative Number */}
          <div className="absolute bottom-12 right-12 text-[15rem] font-black text-slate-950/5 dark:text-white/5 font-outfit leading-none pointer-events-none hidden lg:block">
            72h
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

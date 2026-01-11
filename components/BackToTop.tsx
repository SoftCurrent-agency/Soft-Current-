
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Gère la visibilité du bouton en fonction du défilement
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-8 right-8 z-[60] transition-all duration-500 transform ${
      isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-12 pointer-events-none'
    }`}>
      <button
        onClick={scrollToTop}
        aria-label="Retour en haut"
        className="group relative flex items-center justify-center w-14 h-14 rounded-2xl glass-card border-white/10 shadow-2xl hover:border-blue-500/50 hover:bg-blue-600/10 transition-all duration-300 cursor-pointer overflow-hidden active:scale-95"
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-300" />
        
        {/* Inner shadow/gradient */}
        <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-blue-500/5 to-transparent rotate-45 group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-1000" />

        <ArrowUp className="w-6 h-6 text-slate-300 group-hover:text-blue-400 group-hover:-translate-y-1 transition-all duration-300" />
        
        {/* Small tooltip (optional, very subtle) */}
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          RETOUR
        </span>
      </button>
    </div>
  );
};

export default BackToTop;

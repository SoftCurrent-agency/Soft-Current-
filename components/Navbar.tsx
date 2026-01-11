
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
  onToggleAI: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, onToggleAI }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleStartProject = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-4 glass-card border-b border-white/5' : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-11 h-11 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-xl font-bold text-xl text-white shadow-lg shadow-blue-500/20 cursor-pointer">
            SC
          </div>
          <span className="text-xl font-bold font-outfit tracking-tight hidden sm:block">Soft<span className="text-blue-400">Current</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#services-main" onClick={(e) => scrollToSection(e, 'services-main')} className="hover:text-blue-600 dark:hover:text-white transition-colors">Services</a>
          <a href="#offres" onClick={(e) => scrollToSection(e, 'offres')} className="hover:text-blue-600 dark:hover:text-white transition-colors">Tarifs</a>
          <a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="hover:text-blue-600 dark:hover:text-white transition-colors">Projets</a>
          <button 
            onClick={onToggleAI} 
            className="flex items-center gap-2 text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-white transition-all font-bold group cursor-pointer"
          >
            <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            Agent IA
          </button>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-blue-600 dark:hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-900 transition-all active:scale-90 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <button 
            onClick={handleStartProject}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white text-sm font-semibold rounded-full transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer"
          >
            Démarrer un projet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

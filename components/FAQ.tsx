
import React, { useState } from 'react';
import { Plus, Minus, ShieldCheck, Zap, Globe, Target, ArrowRight } from 'lucide-react';

const faqs = [
  {
    category: "Valeurs & Vision",
    items: [
      {
        question: "Quelles sont les valeurs fondamentales de Soft Current ?",
        answer: "Notre ADN repose sur la **Vitesse d'exécution** (Sprint 72h), la **Précision esthétique** (Design Pixel Perfect) et l'**Impact Business** (chaque site est conçu comme un outil de conversion massive)."
      },
      {
        question: "En quoi Soft Current est-elle différente des autres agences ?",
        answer: "Là où les autres prennent des mois, nous livrons en **3 jours**. Nous supprimons les intermédiaires pour mettre nos meilleurs experts directement au service de votre projet."
      }
    ]
  },
  {
    category: "L'Importance du Digital",
    items: [
      {
        question: "Pourquoi avoir un site internet est-il vital en 2025 ?",
        answer: "Un site web est votre **commercial d'élite disponible 24/7**. C'est le socle de votre crédibilité. Sans lui, vous n'existez pas pour 80% de vos clients potentiels qui effectuent leurs recherches en ligne."
      },
      {
        question: "Quel impact réel pour mon activité ?",
        answer: "Un site Soft Current est un **accélérateur de croissance**. Il automatise votre acquisition client, renforce votre autorité sur le marché et multiplie vos opportunités de vente grâce à une performance technique irréprochable."
      }
    ]
  },
  {
    category: "Processus & Garantie",
    items: [
      {
        question: "Le délai de 72 heures est-il vraiment garanti ?",
        answer: "Absolument. Notre méthode de **Sprint Intensif** est rôdée pour mobiliser 100% de nos ressources sur votre brief, garantissant un déploiement mondial en 72 heures chrono."
      },
      {
        question: "Puis-je modifier mon site après la livraison ?",
        answer: "Oui. Nous livrons des interfaces **évolutives**. Vous gardez le contrôle total sur vos contenus, avec une structure technique prête à supporter votre croissance future."
      }
    ]
  }
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("1-0");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

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
    <section id="faq" className="py-24 bg-slate-950 border-t border-slate-900/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Static Content */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <div className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">Support & Expertise</div>
              <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-6 leading-tight">
                Clarifions <br />
                <span className="text-slate-700">votre projet.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Tout ce que vous devez savoir pour transformer votre vision en une réalité digitale d'exception.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="p-5 rounded-2xl bg-blue-600/5 border border-blue-500/10 flex flex-col gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-500" />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Garantie 72h</span>
                </div>
                <div className="p-5 rounded-2xl bg-blue-600/5 border border-blue-500/10 flex flex-col gap-3">
                  <Target className="w-5 h-5 text-blue-500" />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Impact Business</span>
                </div>
              </div>

              {/* Redirection Button */}
              <button 
                onClick={scrollToContact}
                className="group w-full flex items-center justify-between px-8 py-5 bg-white text-slate-950 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95 cursor-pointer"
              >
                Poser ma question
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side: Accordion Grid (2 Columns) */}
          <div className="lg:w-2/3">
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-4 items-start">
              {faqs.map((category, catIdx) => (
                <React.Fragment key={catIdx}>
                  {/* Category Header (Full Width of the grid) */}
                  <div className="md:col-span-2 mt-8 first:mt-0 mb-2">
                    <h3 className="text-blue-500 font-black text-[10px] uppercase tracking-[0.4em] border-l-2 border-blue-500 pl-4">
                      {category.category}
                    </h3>
                  </div>
                  
                  {category.items.map((item, itemIdx) => {
                    const id = `${catIdx}-${itemIdx}`;
                    const isOpen = openId === id;
                    
                    return (
                      <div 
                        key={id}
                        className={`group rounded-2xl border transition-all duration-500 overflow-hidden ${
                          isOpen 
                            ? 'bg-slate-900 border-blue-500/30 shadow-2xl shadow-blue-500/5' 
                            : 'bg-slate-950 border-white/5 hover:border-white/10'
                        }`}
                      >
                        <button 
                          onClick={() => toggle(id)}
                          className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                        >
                          <span className={`text-sm font-bold leading-tight transition-colors duration-300 ${isOpen ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                            {item.question}
                          </span>
                          <div className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-800 text-slate-600'}`}>
                            {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                          </div>
                        </button>
                        
                        <div 
                          className={`px-6 transition-all duration-500 ease-in-out ${
                            isOpen ? 'max-h-64 pb-6 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
                          }`}
                        >
                          <p className="text-slate-400 text-xs leading-relaxed border-t border-white/5 pt-4">
                            {item.answer.split('**').map((part, i) => i % 2 === 1 ? <strong key={i} className="text-blue-400 font-bold">{part}</strong> : part)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </div>
      
      {/* Visual background decor */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default FAQ;


import React from 'react';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    time: "H0 - H4",
    title: "Vision & Stratégie",
    desc: "Analyse flash de votre marché, définition de l'architecture et du positionnement unique via votre brief.",
    icon: <Search className="w-6 h-6" />
  },
  {
    time: "H4 - H24",
    title: "Design de Haute Volée",
    desc: "Création de l'interface UI/UX. Un design sur-mesure, audacieux et orienté conversion.",
    icon: <PenTool className="w-6 h-6" />
  },
  {
    time: "H24 - H48",
    title: "Développement Elite",
    desc: "Codage propre, rapide et optimisé pour le SEO. Intégration de vos fonctionnalités clés.",
    icon: <Code className="w-6 h-6" />
  },
  {
    time: "H48 - H72",
    title: "Déploiement & Impact",
    desc: "Tests de performance, optimisation Core Web Vitals et mise en ligne mondiale.",
    icon: <Rocket className="w-6 h-6" />
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-32 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <div className="text-blue-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">Notre Méthodologie</div>
          <h2 className="text-4xl md:text-6xl font-bold font-outfit text-white leading-tight">
            Le Sprint de 72h : <br />
            <span className="text-slate-700">Précision chirurgicale.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="mb-8 flex items-baseline gap-4">
                <span className="text-5xl font-black font-outfit text-blue-500/20 group-hover:text-blue-500/40 transition-colors">
                  {step.time.split(' ')[0]}
                </span>
                <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{step.time.split(' ')[2]}</span>
              </div>
              
              <div className="glass-card p-8 rounded-[2rem] border-slate-800 hover:border-blue-500/30 transition-all duration-500 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>

              {/* Connecting Line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-slate-800 z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

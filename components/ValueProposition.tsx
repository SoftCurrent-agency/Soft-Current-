
import React from 'react';
import { Target, Globe, Zap, BarChart3, UserCheck, Award } from 'lucide-react';
import { IMAGES } from '../constants/assets';

const benefits = [
  { icon: <Target className="w-5 h-5" />, text: "Autorité Digitale" },
  { icon: <Globe className="w-5 h-5" />, text: "Standards Mondiaux" },
  { icon: <Zap className="w-5 h-5" />, text: "Sprint 72h" },
  { icon: <BarChart3 className="w-5 h-5" />, text: "Haute Conversion" },
  { icon: <UserCheck className="w-5 h-5" />, text: "Design Stratégique" },
  { icon: <Award className="w-5 h-5" />, text: "Expertise Senior" }
];

const ValueProposition: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950 border-y border-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="lg:w-1/2 space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                Vitesse & Performance
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-outfit leading-tight mb-6">
                Votre <span className="text-blue-500">autorité digitale</span> d'élite, orchestrée à la <span className="text-white underline decoration-blue-500 underline-offset-8">vitesse du marché</span>.
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                Nous fusionnons stratégie de haut niveau et exécution fulgurante pour déployer votre écosystème web complet en 72 heures de sprint intensif.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div 
                  key={idx} 
                  className="glass-card p-4 rounded-xl flex items-center gap-3 border-slate-800 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    {benefit.icon}
                  </div>
                  <span className="text-slate-200 font-semibold text-xs md:text-sm tracking-tight">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-blue-600/20 blur-[80px] rounded-full opacity-50 animate-pulse" />
            <div className="relative group">
              <div className="overflow-hidden rounded-[2rem] border border-slate-700/50 shadow-2xl shadow-blue-900/20 transform hover:-rotate-1 transition-transform duration-700">
                <img 
                  src={IMAGES.valueProp} 
                  alt="Interface web corporate de haute performance optimisée pour le SEO et la conversion client" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;

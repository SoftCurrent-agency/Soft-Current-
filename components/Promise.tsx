
import React from 'react';
import { Target, Globe, Zap, BarChart3, UserCheck, Award } from 'lucide-react';

const benefits = [
  {
    icon: <Target className="w-5 h-5" />,
    text: "Autorité Digitale"
  },
  {
    icon: <Globe className="w-5 h-5" />,
    text: "Standards Mondiaux"
  },
  {
    icon: <Zap className="w-5 h-5" />,
    text: "Sprint 72h"
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    text: "Haute Conversion"
  },
  {
    icon: <UserCheck className="w-5 h-5" />,
    text: "Design Stratégique"
  },
  {
    icon: <Award className="w-5 h-5" />,
    text: "Expertise Senior"
  }
];

const Promise: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950 border-y border-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Content & Benefits (50%) */}
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

            {/* Benefits Grid inside the left column */}
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

            <div className="flex items-center gap-4 text-white font-bold pt-4">
              <div className="w-12 h-[1px] bg-blue-500"></div>
              <span className="text-sm uppercase tracking-wider">L'excellence au service de votre croissance</span>
            </div>
          </div>

          {/* Right Column: High-End Site Mockup (50%) */}
          <div className="lg:w-1/2 relative">
            {/* Background Glow behind the image */}
            <div className="absolute -inset-4 bg-blue-600/20 blur-[80px] rounded-full opacity-50 animate-pulse" />
            
            <div className="relative group">
              {/* Site Mockup Styling */}
              <div className="overflow-hidden rounded-[2rem] border border-slate-700/50 shadow-2xl shadow-blue-900/20 transform hover:-rotate-1 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                  alt="Corporate Website Showcase" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Overlay with a subtle gradient to blend the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Floating Badge on the image */}
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl border-blue-500/30 animate-float hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <Zap className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Performance 100%</div>
                    <div className="text-slate-400 text-xs">Optimisation Core Web Vitals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Promise;

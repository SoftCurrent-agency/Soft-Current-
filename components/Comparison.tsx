
import React from 'react';
import { X, Check, Clock, Zap, Coffee, Rocket } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold font-outfit mb-6">
            De l'indifférence à une <span className="text-blue-500">présence digitale d'exception</span>, en 72 heures.
          </h2>
          <p className="text-xl text-slate-400">
            Vous avez bâti quelque chose d'incroyable, votre marque devrait le refléter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
          {/* Central Decorative Line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-slate-800 to-transparent -translate-x-1/2" />

          {/* Traditional Agency Card */}
          <div className="glass-card p-10 rounded-[2.5rem] border-red-500/10 hover:border-red-500/20 transition-all duration-500 bg-slate-900/40">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Agence traditionnelle</h3>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                <div>
                  <div className="text-slate-200 font-bold mb-1">1 à 2 mois en moyenne</div>
                  <div className="text-slate-500 text-sm">Délais rallongés par une gestion obsolète.</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                <div>
                  <div className="text-slate-200 font-bold mb-1">Processus long et fastidieux</div>
                  <div className="text-slate-500 text-sm">Réunions interminables et retours sans fin.</div>
                </div>
              </li>
              <li className="flex items-start gap-4 opacity-50">
                <Clock className="w-5 h-5 text-slate-500 shrink-0 mt-1" />
                <div>
                  <div className="text-slate-500 text-sm italic">Approche réactive et peu d'optimisation.</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Soft Current Card */}
          <div className="glass-card p-10 rounded-[2.5rem] border-blue-500/30 hover:border-blue-500/60 transition-all duration-500 relative group overflow-hidden bg-blue-600/5">
            {/* Inner Glow Effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 blur-[60px] rounded-full group-hover:bg-blue-500/30 transition-all duration-700" />
            
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/40">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Soft Current</h3>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Check className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                <div>
                  <div className="text-white font-bold mb-1">Livraison en 72 heures</div>
                  <div className="text-slate-400 text-sm italic">Garanti. Pas de blabla, juste des résultats.</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Check className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                <div>
                  <div className="text-white font-bold mb-1">Commande sans effort</div>
                  <div className="text-slate-400 text-sm">Brief fluide et exécution immédiate.</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Zap className="w-5 h-5 text-yellow-400 shrink-0 mt-1 fill-yellow-400/20" />
                <div>
                  <div className="text-white font-bold mb-1">Standards d'élite</div>
                  <div className="text-slate-400 text-sm">Excellence technique et esthétique irréprochable.</div>
                </div>
              </li>
            </ul>

            <div className="mt-10 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                Délivré pendant que vos concurrents dorment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;

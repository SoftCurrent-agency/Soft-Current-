
import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative glass-card rounded-[3rem] p-12 border-blue-500/20 bg-gradient-to-br from-blue-600/5 to-transparent flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
          
          <div className="max-w-xl text-center lg:text-left relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-outfit text-white mb-4">
              Recevez notre <span className="text-blue-500">Audit de Performance 2025</span>.
            </h2>
            <p className="text-slate-400 font-medium">
              Nous partageons chaque mois une analyse exclusive des meilleures stratégies digitales pour dominer votre marché. Pas de spam, juste de la valeur brute.
            </p>
          </div>

          <div className="w-full max-w-md relative z-10">
            {subscribed ? (
              <div className="flex items-center gap-4 p-6 bg-blue-600/10 border border-blue-500/30 rounded-2xl animate-in zoom-in-95">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
                <div>
                  <div className="text-white font-bold">Bienvenue dans le cercle.</div>
                  <div className="text-blue-400 text-sm font-medium">Vérifiez votre boîte mail sous peu.</div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative flex items-center">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email professionnel" 
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl py-5 px-6 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-slate-700"
                  required
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 px-6 bg-white text-slate-950 font-black text-xs uppercase tracking-widest rounded-xl hover:bg-blue-600 hover:text-white transition-all cursor-pointer shadow-xl"
                >
                  S'inscrire
                </button>
              </form>
            )}
            <p className="mt-4 text-center lg:text-left text-[10px] font-bold text-slate-600 uppercase tracking-widest">
              Rejoignez +2 500 entrepreneurs et leaders digitaux.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

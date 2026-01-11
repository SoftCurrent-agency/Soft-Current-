
import React from 'react';
import { ArrowUpRight, Clock, Tag } from 'lucide-react';

const posts = [
  {
    title: "L'impact de l'IA générative sur le taux de conversion en 2025",
    date: "Mars 2025",
    tag: "STRATÉGIE IA",
    readTime: "4 min"
  },
  {
    title: "Pourquoi le Sprint 72h est la nouvelle norme de l'industrie",
    date: "Fév 2025",
    tag: "MÉTHODOLOGIE",
    readTime: "3 min"
  },
  {
    title: "Psychologie des couleurs dans le luxe digital",
    date: "Jan 2025",
    tag: "DESIGN UX",
    readTime: "6 min"
  }
];

const Journal: React.FC = () => {
  return (
    <section className="py-32 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white">Journal <span className="text-blue-500">&</span> Insights</h2>
          <button className="hidden md:flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest cursor-pointer group">
            Voir tout le journal
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="group relative p-8 rounded-[2rem] bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-all duration-500 cursor-pointer flex flex-col justify-between h-80">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
              
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black tracking-widest uppercase">
                    {post.tag}
                  </span>
                  <div className="flex items-center gap-2 text-slate-600 text-[10px] font-bold">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                  {post.title}
                </h3>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <span className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">{post.date}</span>
                <div className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-500">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;

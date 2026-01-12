
import React from 'react';
// import { Linkedin, Twitter, ExternalLink } from 'lucide-react';

const members = [
  {
    name: "Abdoulaye D.",
    role: "Directeur de Création",
    specialty: "Branding & Luxe Digital",
    // Portrait exécutif premium
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=90&w=800&h=1000&fit=crop",
    bio: "Expert en identité visuelle pour marques de prestige."
  },
  {
    name: "Maryem",
    role: "Lead Developer",
    specialty: "Next.js & Systèmes IA",
    // Portrait professionnel moderne
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=90&w=800&h=1000&fit=crop",
    bio: "Architecte de solutions web haute performance."
  },
  {
    name: "Houzeyfa D.",
    role: "Stratège Digital",
    specialty: "Conversion & Croissance",
    // Portrait exécutif avec profondeur de champ
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=90&w=800&h=1000&fit=crop",
    bio: "Spécialiste en optimisation de tunnels de vente."
  }
];

const Team: React.FC = () => {
  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="text-blue-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-6 flex items-center gap-3">
              <span className="w-12 h-[1px] bg-blue-500/50"></span>
              L'Elite Soft Current
            </div>
            <h2 className="text-5xl md:text-7xl font-bold font-outfit text-white leading-tight">
              Talents d'exception <br />
              <span className="text-slate-800">pour projets critiques.</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-slate-400 text-lg leading-relaxed mb-4 border-l-2 border-blue-600/30 pl-6 italic">
              "Nous ne recrutons pas des employés, nous assemblons une unité d'élite dédiée à l'exécution parfaite."
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {members.map((member, idx) => (
            <div key={idx} className="group relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] bg-slate-900 border border-white/5 transition-all duration-700 group-hover:shadow-[0_40px_100px_rgba(59,130,246,0.2)]">
                <div className="absolute inset-0 z-10 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 scale-[1.02] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                  <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                      </span>
                      {member.role}
                    </div>
                    <h3 className="text-3xl font-bold text-white font-outfit mb-3">{member.name}</h3>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed max-h-0 group-hover:max-h-20 opacity-0 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                      {member.bio}
                    </p>
                    <div className="flex gap-4 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      <button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all cursor-pointer">
                        <Linkedin className="w-3.5 h-3.5" />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all cursor-pointer">
                        <Twitter className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-blue-500/50 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none scale-[0.98] group-hover:scale-100 transform" />
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-[1px] w-12 bg-slate-800 group-hover:w-16 group-hover:bg-blue-500 transition-all duration-500" />
                <span className="text-slate-500 group-hover:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] transition-colors">
                  {member.specialty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;


import React from 'react';

const stats = [
  { label: "Performance Score", value: "100", suffix: "%" },
  { label: "Taux de Conversion", value: "+45", suffix: "%" },
  { label: "Temps de Chargement", value: "<1.2", suffix: "s" },
  { label: "Projets Livrés", value: "120", suffix: "+" }
];

const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-6xl md:text-8xl font-black font-outfit text-white mb-2 tracking-tighter group-hover:text-blue-500 transition-colors duration-500">
                {stat.value}<span className="text-blue-500 text-4xl group-hover:text-white">{stat.suffix}</span>
              </div>
              <div className="text-slate-500 uppercase font-bold tracking-[0.2em] text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

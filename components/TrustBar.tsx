
import React from 'react';

const brands = [
  { name: "BIBLIO", targetId: "project-01" },
  { name: "KORA", targetId: "project-02" },
  { name: "SAMA", targetId: "project-03" },
  { name: "YARA", targetId: "project-04" },
  { name: "AKOMA", targetId: "project-05" },
  { name: "KILIMA", targetId: "project-06" },
  { name: "NOX", targetId: "project-07" },
  { name: "ORA", targetId: "project-08" },
  { name: "TERRA", targetId: "project-09" },
  { name: "LUMA", targetId: "project-10" }
];

const TrustBar: React.FC = () => {
  const scrollToProject = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 border-y border-slate-200 dark:border-slate-900 bg-slate-100/50 dark:bg-slate-950/50 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        {/* Ajustement du contraste pour le mode clair (text-slate-900 et font-black) */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/80 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-10 transition-colors shadow-sm dark:shadow-none">
          Performance validée par les leaders
        </div>
        
        {/* 
            - lg:grid-cols-10 : 1 ligne de 10 en Full Screen
            - md:grid-cols-5 : 2 lignes de 5 en Preview (Medium)
            - grid-cols-2 : 5 lignes de 2 sur Mobile
        */}
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-y-8 gap-x-4 opacity-70 dark:opacity-40 hover:opacity-100 transition-opacity duration-700 max-w-[1400px] mx-auto">
          {brands.map((brand, idx) => (
            <button 
              key={idx} 
              onClick={() => scrollToProject(brand.targetId)}
              className="group flex flex-col items-center justify-center transition-all duration-300"
            >
              {/* Amélioration de la couleur en mode clair (text-slate-800) */}
              <span className="text-[11px] font-black tracking-[0.3em] text-slate-800 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300 font-outfit">
                {brand.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;

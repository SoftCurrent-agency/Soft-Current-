
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Marc-Antoine Lefebvre",
    role: "CEO, BIBLIO Nova",
    content: "Soft Current n'est pas une agence, c'est une force de la nature. Ils ont livré notre écosystème complet en 3 jours alors que d'autres nous demandaient 3 mois.",
  },
  {
    name: "Elena Rodriguez",
    role: "Directrice Artistique, KORA",
    content: "L'esthétique est irréprochable. Ils ont su capturer l'essence de notre marque de luxe avec une précision chirurgicale en un temps record.",
  },
  {
    name: "Samuel Kone",
    role: "Fondateur, SAMA Essence",
    content: "Leur approche du design est purement stratégique. Chaque pixel est là pour une raison : convertir. Notre taux de transformation a doublé dès le premier mois.",
  },
  {
    name: "Awa Diop",
    role: "Co-fondatrice, LUMA Finance",
    content: "L'intégration de notre plateforme bancaire a été d'une fluidité déconcertante. Soft Current comprend les enjeux de sécurité et de performance comme personne d'autre.",
  },
  {
    name: "Thomas Morel",
    role: "Directeur Marketing, ORA Watch",
    content: "Une expérience utilisateur qui frise la perfection. Nos clients adorent la nouvelle interface et les ventes s'en ressentent déjà. Un sprint mémorable.",
  },
  {
    name: "Nadia Tiam",
    role: "CEO, AKOMA Health",
    content: "La réactivité de l'équipe est sans précédent. Nous avons lancé notre plateforme santé en un temps record avec un niveau de finition qui dépasse nos attentes les plus folles.",
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <div className="text-blue-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">La voix de nos partenaires</div>
          <h2 className="text-5xl md:text-7xl font-bold font-outfit text-white">
            Ils nous font <br />
            <span className="text-slate-700">confiance.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className={`glass-card p-10 rounded-[2.5rem] relative group hover:border-blue-500/40 transition-all duration-500 ${
                idx % 3 === 1 ? 'lg:-translate-y-8' : ''
              }`}
            >
              <Quote className="w-12 h-12 text-blue-500/20 absolute top-8 right-8 group-hover:text-blue-500/40 transition-colors" />
              
              <p className="text-xl text-slate-200 leading-relaxed mb-10 italic">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-blue-500 text-sm font-medium">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


import React, { useState, useEffect, useRef } from 'react';
import { Check, Zap, Globe, ArrowRight, FileText, Layers, ShoppingBag, Terminal, X, Info } from 'lucide-react';

interface Plan {
  name: string;
  price: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  icon: React.ReactNode;
  popular: boolean;
  cta: string;
}

const plans: Plan[] = [
  {
    name: "Sprint One-Page",
    price: "50 000",
    shortDesc: "L'essentiel pour un impact immédiat.",
    fullDesc: "Un site simple, composé d’une seule page qui défile avec plusieurs sections (accueil, services, contact, etc.). C’est parfait pour une petite entreprise qui démarre ou un événement ponctuel.",
    features: [
      "Design de base",
      "Sections structurées (À propos, services, contact)",
      "Formulaire de contact",
      "Design adapté à tous les appareils (mobile-friendly)"
    ],
    icon: <FileText className="w-6 h-6" />,
    popular: false,
    cta: "Lancer mon One-Page"
  },
  {
    name: "Sprint Vitrine Plus",
    price: "150 000",
    shortDesc: "Présentation complète de votre expertise.",
    fullDesc: "Un site composé de plusieurs pages qui présente votre entreprise, vos services ou vos produits. C’est idéal pour les artisans, commerçants ou PME.",
    features: [
      "Pages classiques : Accueil, Services/Produits, À propos, Contact",
      "Intégration d’images, vidéos et contenu texte",
      "Formulaire de contact et Google Maps",
      "Design adapté à tous les appareils (mobile-friendly)"
    ],
    icon: <Layers className="w-6 h-6" />,
    popular: true,
    cta: "Lancer ma vitrine"
  },
  {
    name: "Sprint E-Commerce",
    price: "250 000",
    shortDesc: "Votre boutique opérationnelle en 72h.",
    fullDesc: "Un site qui permet de vendre des produits ou services en ligne avec un système de paiement intégré. C’est parfait pour les boutiques physiques ou en ligne qui veulent toucher un large public.",
    features: [
      "Gestion de catalogue (produits, prix, descriptions)",
      "Système de paiement en ligne (Mobile Money, PayPal, carte bancaire)",
      "Intégration d’un panier d’achat",
      "Facturation automatique et suivi des commandes"
    ],
    icon: <ShoppingBag className="w-6 h-6" />,
    popular: false,
    cta: "Lancer mon e-shop"
  },
  {
    name: "Écosystème Sur-Mesure",
    price: "500 000",
    shortDesc: "Puissance et fonctionnalités illimitées.",
    fullDesc: "Un site web créé spécifiquement selon vos besoins et vos objectifs. Cela peut être un portail web, une marketplace, ou une plateforme avec des fonctionnalités complexes.",
    features: [
      "Fonctionnalités avancées spécifiques à votre activité",
      "Design totalement personnalisé",
      "Intégration d’outils comme des systèmes de réservation, des espaces membres, etc.",
      "Architecture évolutive haut de gamme"
    ],
    icon: <Terminal className="w-6 h-6" />,
    popular: false,
    cta: "Demander mon devis"
  }
];

const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: PricingParticle[] = [];
    const particleCount = 25;
    const connectionDistance = 200;

    class PricingParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 1.5 + 0.5;
      }

      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.2)';
        ctx.fill();
      }
    }

    const init = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new PricingParticle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update(canvas.width, canvas.height);
        p1.draw(ctx);

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.05 * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    init();
    animate();
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToContact = (planName: string) => {
    setSelectedPlan(null);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="offres" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Particles Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">Investissement & Performance</div>
          <h2 className="text-5xl md:text-7xl font-bold font-outfit text-white mb-8">
            Tarifs clairs. <br />
            <span className="text-slate-700 font-black italic">Précision Soft Current.</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Propulsez votre vision avec des solutions segmentées. Livraison garantie par notre sprint intensif de 72h.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative group flex flex-col p-8 md:p-10 rounded-[3rem] glass-card border-white/5 transition-all duration-500 hover:border-blue-500/30 ${
                plan.popular ? 'bg-blue-600/5 ring-1 ring-blue-500/20 z-10' : 'hover:bg-white/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-blue-500/40">
                  Le plus populaire
                </div>
              )}

              <div className="mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6 ${
                  plan.popular ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20' : 'bg-slate-900 text-blue-400'
                }`}>
                  {plan.icon}
                </div>
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-white mb-2 font-outfit">{plan.name}</h3>
                  <button 
                    onClick={() => setSelectedPlan(plan)}
                    className="p-2 text-slate-500 hover:text-blue-400 transition-colors cursor-pointer"
                    title="Voir les détails complets"
                  >
                    <Info className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{plan.shortDesc}</p>
              </div>

              <div className="mb-10">
                <div className="text-slate-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-1">À partir de</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-blue-500 font-bold text-sm uppercase tracking-widest">FCFA</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.slice(0, 3).map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-slate-300 text-sm">
                    <div className={`w-1 h-1 rounded-full shrink-0 ${plan.popular ? 'bg-blue-500' : 'bg-slate-700'}`} />
                    {feature}
                  </li>
                ))}
                {plan.features.length > 3 && (
                  <li className="text-blue-500/60 text-[10px] font-bold uppercase tracking-widest pl-4">
                    + {plan.features.length - 3} autres avantages
                  </li>
                )}
              </ul>

              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => scrollToContact(plan.name)}
                  className={`w-full py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-xl shadow-blue-500/20' 
                    : 'bg-white text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setSelectedPlan(plan)}
                  className="w-full py-3 text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-all cursor-pointer"
                >
                  Voir les détails
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Détails */}
        {selectedPlan && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-300">
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setSelectedPlan(null)} />
            
            <div className="relative w-full max-w-2xl glass-card rounded-[3rem] border-white/10 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
              {/* Header de la modale */}
              <div className="relative h-32 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center px-8 md:px-12">
                <button 
                  onClick={() => setSelectedPlan(null)}
                  className="absolute top-6 right-6 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center text-white">
                    {selectedPlan.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white font-outfit uppercase tracking-tight">
                      {selectedPlan.name}
                    </h3>
                    <div className="text-white/80 font-bold text-sm tracking-widest">DÉTAILS DE L'OFFRE</div>
                  </div>
                </div>
              </div>

              {/* Contenu de la modale */}
              <div className="p-8 md:p-12 bg-slate-900/90 max-h-[70vh] overflow-y-auto scrollbar-hide">
                <div className="mb-10">
                  <h4 className="text-blue-400 font-black text-xs uppercase tracking-[0.2em] mb-4">Description</h4>
                  <p className="text-slate-200 text-lg leading-relaxed font-medium">
                    {selectedPlan.fullDesc}
                  </p>
                </div>

                <div className="mb-10">
                  <h4 className="text-blue-400 font-black text-xs uppercase tracking-[0.2em] mb-6">Fonctionnalités Incluses</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedPlan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                        <Check className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                        <span className="text-slate-300 text-sm leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
                  <div className="text-center sm:text-left">
                    <div className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.2em]">Investissement</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-white">{selectedPlan.price}</span>
                      <span className="text-blue-500 font-bold text-sm uppercase tracking-widest">FCFA</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => scrollToContact(selectedPlan.name)}
                    className="w-full sm:w-auto px-10 py-5 bg-white text-slate-950 font-black rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-xl cursor-pointer flex items-center justify-center gap-3"
                  >
                    {selectedPlan.cta}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-24 text-center relative z-10">
          <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
            Les tarifs indiqués sont des estimations de base. Le coût final dépend de la complexité de votre vision et des options spécifiques choisies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

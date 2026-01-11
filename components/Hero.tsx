
import React, { useEffect, useRef } from 'react';
import { IMAGES } from '../constants/assets';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 40;
    const connectionDistance = 150;
    let time = 0;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      originX: number;
      originY: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.originX = this.x;
        this.originY = this.y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Mouse interaction: gentle push
        const dx = this.x - mouseRef.current.x;
        const dy = this.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const angle = Math.atan2(dy, dx);
          const force = (200 - dist) / 200;
          this.x += Math.cos(angle) * force * 2;
          this.y += Math.sin(angle) * force * 2;
        }

        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.4)';
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const drawWaves = (w: number, h: number) => {
      time += 0.005;
      const waveCount = 3;
      for (let j = 0; j < waveCount; j++) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = `rgba(59, 130, 246, ${0.05 / (j + 1)})`;
        
        for (let x = 0; x < w; x += 10) {
          // Interactive displacement
          const dx = x - mouseRef.current.x;
          const dist = Math.abs(dx);
          const influence = Math.max(0, 1 - dist / 400);
          
          const y = h * (0.6 + j * 0.05) + 
                    Math.sin(x * 0.002 + time + j) * 40 + 
                    Math.cos(x * 0.005 - time) * 20 +
                    (influence * (mouseRef.current.y - h * 0.6) * 0.2);
                    
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawWaves(canvas.width, canvas.height);

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
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = 1;
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

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    init();
    animate();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center transition-colors duration-300">
      {/* Canvas for Particle & Wave Animation */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-50 dark:opacity-40"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Expertise Digitale & Performance
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold font-outfit leading-tight mb-8 text-slate-900 dark:text-white">
            Propulsez votre <br />
            <span className="gradient-text text-blue-400">Impact Digital</span> <br />
            avec fluidité.
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
            Soft Current transforme vos ambitions en résultats concrets à travers des sites vitrines d'exception, des boutiques e-commerce performantes et des identités de marque mémorables.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={scrollToContact}
              className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-500/10 cursor-pointer"
            >
              Démarrer un projet
            </button>
            <button 
              onClick={scrollToPortfolio}
              className="px-8 py-4 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-white font-bold rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all cursor-pointer"
            >
              Nos réalisations
            </button>
          </div>
        </div>
      </div>

      {/* Visual background decor - Image Hero */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden lg:block overflow-visible">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Enhanced Glow Effect */}
          <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-full blur-[120px] animate-pulse" />
          
          {/* Main Hero Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src={IMAGES.hero} 
              alt="Design digital futuriste et épuré représentant l'expertise de l'agence Soft Current" 
              className="relative w-[500px] h-[600px] object-cover rounded-[2.5rem] rotate-6 group-hover:rotate-0 animate-float shadow-2xl transition-all duration-700"
              fetchPriority="high"
            />
            {/* Floating UI Elements Decor */}
            <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-2xl border-blue-500/30 animate-bounce-subtle hidden xl:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <div className="w-5 h-5 border-2 border-white rounded-sm rotate-45" />
                </div>
                <div>
                  <div className="text-white font-black text-xs">SOFT CURRENT</div>
                  <div className="text-blue-400 text-[10px] font-bold tracking-widest uppercase">72H Sprint</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded flex items-center justify-center font-bold text-white text-sm shadow-md shadow-blue-500/10">
              SC
            </div>
            <span className="font-bold text-lg font-outfit text-white">Soft Current</span>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="text-sm text-slate-500 font-medium">
              © 2025 Soft Current Agency. Tous droits réservés.
            </div>
            {/* <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em]">
                Build v1.1.0 - Ready for Deployment
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

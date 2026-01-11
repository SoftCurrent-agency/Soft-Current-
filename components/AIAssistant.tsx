
import React, { useState, useRef, useEffect } from 'react';
import { chatWithConsultant } from '../services/geminiService';
import { Send, Bot, Sparkles, Info, Zap, Copy, Check, Headphones, X, MessageSquare, ChevronDown, FileText, Rocket, AlertTriangle } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface AIAssistantProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Bienvenue chez Soft Current. Je suis votre **Agent IA**. Comment puis-je vous aider à propulser votre business aujourd'hui ?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    { label: "Quels sont vos tarifs ?", icon: <Info className="w-3 h-3" /> },
    { label: "Parlez-moi du Sprint 72h", icon: <Zap className="w-3 h-3" /> },
    { label: "Quels services proposez-vous ?", icon: <MessageSquare className="w-3 h-3" /> },
    { label: "Comment lancer mon projet ?", icon: <Rocket className="w-3 h-3" /> }
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, isOpen]);

  const scrollToContact = () => {
    setIsOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent | string) => {
    if (typeof e !== 'string') e.preventDefault();
    
    const userMessage = typeof e === 'string' ? e : input.trim();
    if (!userMessage || loading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    try {
      const response = await chatWithConsultant(history, userMessage);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: "Désolé, une erreur technique est survenue. Contactez-nous à **softcurrentagency@gmail.com**." }]);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text.replace(/\*\*/g, ''));
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const formatText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-white font-black">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const shouldShowCTA = (text: string) => {
    const keywords = ['formulaire', 'brief', 'contact', 'devis', 'cliquer', 'ci-dessous'];
    return keywords.some(key => text.toLowerCase().includes(key));
  };

  const isConfigError = (text: string) => {
    return text.includes("système n'est pas encore configuré") || text.includes("clé d'accès semble invalide");
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className={`fixed bottom-6 left-6 z-[70] transition-all duration-500 transform ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-600 text-white shadow-2xl shadow-blue-500/40 hover:bg-blue-500 hover:scale-110 active:scale-95 transition-all cursor-pointer overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <Bot className="w-7 h-7 md:w-8 md:h-8 relative z-10" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 md:h-4 md:w-4 bg-green-500 border-2 border-blue-600"></span>
          </span>
        </button>
      </div>

      {/* Chat Window Widget */}
      <div className={`fixed bottom-6 left-6 z-[80] w-[92vw] md:w-[420px] h-[650px] max-h-[85vh] flex flex-col glass-card rounded-[2.5rem] border-blue-500/30 shadow-[0_30px_90px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-500 origin-bottom-left ${
        isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-12 pointer-events-none'
      }`}>
        
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-between shrink-0 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-black text-white uppercase tracking-tight leading-none mb-1">Agent IA Expert</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">En ligne</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-3 hover:bg-black/20 rounded-full text-white transition-all cursor-pointer group"
            aria-label="Fermer le chat"
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Chat Area */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-5 md:p-8 space-y-6 scrollbar-hide bg-slate-950/95"
        >
          {messages.map((m, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
            >
              <div className={`p-4 md:p-5 rounded-2xl text-[13px] md:text-[14px] leading-relaxed max-w-[90%] relative group ${
                m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none shadow-lg' 
                  : isConfigError(m.text)
                    ? 'bg-red-500/10 border border-red-500/30 text-red-200 rounded-tl-none'
                    : 'bg-slate-900 border border-white/5 text-slate-300 rounded-tl-none'
              }`}>
                {isConfigError(m.text) && <AlertTriangle className="w-4 h-4 mb-2 text-red-500" />}
                {formatText(m.text)}
                
                {m.role === 'model' && (
                  <button 
                    onClick={() => copyToClipboard(m.text, idx)}
                    className="absolute -right-8 top-1 opacity-0 group-hover:opacity-100 transition-opacity p-1 text-slate-600 hover:text-white cursor-pointer"
                  >
                    {copiedId === idx ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                )}
              </div>

              {m.role === 'model' && shouldShowCTA(m.text) && (
                <button 
                  onClick={scrollToContact}
                  className="mt-4 flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-[11px] font-black text-blue-400 uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all animate-bounce-subtle cursor-pointer shadow-lg"
                >
                  <FileText className="w-4 h-4" />
                  Remplir le brief maintenant
                </button>
              )}
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-slate-900 border border-white/5 p-4 rounded-2xl rounded-tl-none">
                <div className="flex gap-1.5">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-5 md:p-6 bg-slate-900/90 border-t border-white/5 shrink-0">
          <div className="mb-4 flex gap-2 overflow-x-auto scrollbar-hide pb-1">
             {suggestions.map((s, i) => (
               <button 
                key={i} 
                onClick={() => handleSubmit(s.label)}
                className="shrink-0 flex items-center gap-2 text-[10px] font-bold text-slate-400 bg-slate-950 border border-slate-800 py-2.5 px-4 rounded-full hover:border-blue-500 hover:text-white transition-all cursor-pointer whitespace-nowrap"
               >
                 {s.icon} {s.label}
               </button>
             ))}
          </div>
          
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Écrivez votre message..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-6 pr-16 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-slate-700 shadow-inner"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="absolute right-2 top-2 bottom-2 w-12 bg-white text-slate-950 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AIAssistant;

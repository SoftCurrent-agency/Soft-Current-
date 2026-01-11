
import React, { useState, useEffect, useMemo } from 'react';
import { Mail, Instagram, Send, CheckCircle2, Loader2, AlertCircle, XCircle, ArrowRight, Check } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants/assets';

/**
 * CONFIGURATION DE L'HÉBERGEMENT :
 * Le formulaire est lié à votre compte Formspree : https://formspree.io/f/xykzrabp
 */
const FORM_ENDPOINT = "https://formspree.io/f/xykzrabp"; 

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface ContactProps {
  initialMessage?: string;
}

const Contact: React.FC<ContactProps> = ({ initialMessage }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: 'Lancer mon Site Vitrine (Sprint 72h)',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string): string => {
    if (name === 'name') {
      if (!value.trim()) return 'Le nom est requis pour personnaliser votre projet.';
      if (value.trim().length < 2) return 'Le nom doit comporter au moins 2 caractères.';
    }
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) return "L'adresse email est indispensable pour vous recontacter.";
      if (!emailRegex.test(value)) return 'Veuillez saisir une adresse email valide (ex: nom@domaine.com).';
    }
    if (name === 'message') {
      if (!value.trim()) return 'Décrivez votre vision pour que nous puissions l\'analyser.';
      if (value.trim().length < 10) return 'Votre message est trop court pour une analyse pertinente (min. 10 car.).';
    }
    return '';
  };

  const progress = useMemo(() => {
    const requiredFields = ['name', 'email', 'message'];
    const validFields = requiredFields.filter(field => {
      const val = formData[field as keyof FormData];
      return val.trim() !== '' && validateField(field, val) === '';
    });
    return Math.round((validFields.length / requiredFields.length) * 100);
  }, [formData]);

  useEffect(() => {
    if (initialMessage) {
      setFormData(prev => ({ ...prev, message: initialMessage }));
      // On valide immédiatement si un message est pré-rempli
      setErrors(prev => ({ ...prev, message: validateField('message', initialMessage) }));
    }
  }, [initialMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validation en temps réel : on met à jour l'erreur dès que l'utilisateur tape
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // On marque tout comme touché pour afficher toutes les erreurs potentielles
    const allFieldsTouched = { name: true, email: true, message: true, subject: true };
    setTouched(allFieldsTouched);

    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(err => err)) {
      // Optionnel : petit feedback sonore ou vibration si erreur
      return;
    }

    setStatus('submitting');

    const professionalPayload = {
      "_subject": `[SOFT CURRENT] Nouveau Lead : ${formData.name}`,
      "_replyto": formData.email,
      "Identité_Client": formData.name,
      "Email_Contact": formData.email,
      "Type_de_Prestation": formData.subject,
      "Vision_du_Projet": formData.message,
      "Date_Soumission": new Date().toLocaleString('fr-FR')
    };

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(professionalPayload),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: 'Lancer mon Site Vitrine (Sprint 72h)', message: '' });
        setErrors({});
        setTouched({});
      } else {
        throw new Error('Erreur de transmission');
      }
    } catch (error) {
      console.error("Échec de l'envoi:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const getInputClass = (fieldName: keyof FormErrors) => {
    const hasError = errors[fieldName] && touched[fieldName];
    const isValid = touched[fieldName] && !errors[fieldName] && formData[fieldName as keyof FormData].trim() !== '';
    
    const base = "w-full bg-slate-950/40 border rounded-xl px-5 py-4 text-white focus:outline-none transition-all duration-300 backdrop-blur-sm pr-12";
    
    if (hasError) {
      return `${base} border-red-500/50 focus:border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.1)] bg-red-500/5`;
    }
    if (isValid) {
      return `${base} border-green-500/30 focus:border-green-500/60 shadow-[0_0_15px_rgba(34,197,94,0.05)] bg-green-500/5`;
    }
    
    return `${base} border-slate-700/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20`;
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="animate-in fade-in slide-in-from-left-4 duration-700">
            <h2 className="text-5xl md:text-6xl font-bold font-outfit mb-8 text-white leading-tight">Parlons de votre <br /><span className="text-blue-500">vision.</span></h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md leading-relaxed">
              Prêt à transformer votre présence digitale ? Notre équipe analyse votre brief et vous répond sous 24h avec une proposition stratégique.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-500">
                  <Mail className="text-blue-400 w-6 h-6 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Email Direct</div>
                  <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-white font-bold text-lg hover:text-blue-400 transition-colors">{SOCIAL_LINKS.email}</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-500">
                  <Instagram className="text-blue-400 w-6 h-6 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Instagram</div>
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-white font-bold text-lg hover:text-blue-400">@_softcurrent_</a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[600px] flex items-stretch">
            <div className="absolute -inset-4 bg-blue-600/5 blur-2xl rounded-[40px] -z-10" />
            
            <div className={`glass-card w-full p-8 md:p-12 rounded-[40px] border-white/5 transition-all duration-700 ease-in-out relative overflow-hidden ${status === 'success' ? 'opacity-0 translate-y-8 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
              
              <div className="mb-8">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Complexité du Brief</span>
                  <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-500 ${progress === 100 ? 'text-green-400' : 'text-blue-400'}`}>
                    {progress}% Analyse complétée
                  </span>
                </div>
                <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_10px_rgba(37,99,235,0.5)] transition-all duration-700 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 relative">
                    <label className="block text-slate-300 text-xs font-bold uppercase tracking-widest ml-1">Identité</label>
                    <div className="relative">
                      <input name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} className={getInputClass('name')} placeholder="Nom ou Entreprise" />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
                        {errors.name && touched.name && <AlertCircle className="w-4 h-4 text-red-500 animate-in zoom-in" />}
                        {touched.name && !errors.name && formData.name.trim() !== '' && <Check className="w-4 h-4 text-green-500 animate-in zoom-in" />}
                      </div>
                    </div>
                    {errors.name && touched.name && (
                      <div className="flex items-center gap-1.5 text-red-500 text-[11px] mt-1 ml-1 animate-in fade-in slide-in-from-top-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.name}
                      </div>
                    )}
                  </div>
                  <div className="space-y-2 relative">
                    <label className="block text-slate-300 text-xs font-bold uppercase tracking-widest ml-1">Email Professionnel</label>
                    <div className="relative">
                      <input name="email" type="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className={getInputClass('email')} placeholder="contact@domaine.com" />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
                        {errors.email && touched.email && <AlertCircle className="w-4 h-4 text-red-500 animate-in zoom-in" />}
                        {touched.email && !errors.email && formData.email.trim() !== '' && <Check className="w-4 h-4 text-green-500 animate-in zoom-in" />}
                      </div>
                    </div>
                    {errors.email && touched.email && (
                      <div className="flex items-center gap-1.5 text-red-500 text-[11px] mt-1 ml-1 animate-in fade-in slide-in-from-top-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-slate-300 text-xs font-bold uppercase tracking-widest ml-1">Prestation Souhaitée</label>
                  <div className="relative">
                    <select name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-slate-950/40 border border-slate-700/50 rounded-xl px-5 py-4 text-white focus:outline-none appearance-none cursor-pointer">
                      <option>Lancer mon Site Vitrine (Sprint 72h)</option>
                      <option>Déployer ma Boutique E-commerce</option>
                      <option>Refonte Identité Visuelle & Branding</option>
                      <option>Design UX/UI Haute Fidélité</option>
                      <option>Écosystème Digital Sur-Mesure</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ArrowRight className="w-4 h-4 text-slate-500 rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 relative">
                  <label className="block text-slate-300 text-xs font-bold uppercase tracking-widest ml-1">Détails de la Vision</label>
                  <div className="relative">
                    <textarea name="message" rows={4} value={formData.message} onChange={handleChange} onBlur={handleBlur} className={getInputClass('message')} placeholder="Décrivez vos objectifs principaux et vos besoins spécifiques..."></textarea>
                    <div className="absolute right-4 top-4">
                      {errors.message && touched.message && <AlertCircle className="w-4 h-4 text-red-500 animate-in zoom-in" />}
                      {touched.message && !errors.message && formData.message.trim() !== '' && <Check className="w-4 h-4 text-green-500 animate-in zoom-in" />}
                    </div>
                  </div>
                  {errors.message && touched.message && (
                    <div className="flex items-center gap-1.5 text-red-500 text-[11px] mt-1 ml-1 animate-in fade-in slide-in-from-top-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.message}
                    </div>
                  )}
                </div>

                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="group relative w-full py-5 bg-white text-slate-950 font-black text-lg rounded-2xl hover:bg-blue-50 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] active:scale-[0.98] active:rotate-1 active:skew-x-1 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 cursor-pointer shadow-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                  
                  {status === 'submitting' ? (
                    <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
                  ) : (
                    <>
                      <span className="relative z-10">Transmettre ma Vision</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>

                {status === 'error' && (
                  <div className="flex items-center justify-center gap-2 text-red-400 text-sm font-bold animate-in fade-in zoom-in-95">
                    <XCircle className="w-4 h-4" /> Erreur de connexion. Veuillez réessayer.
                  </div>
                )}
              </form>
            </div>

            {/* MESSAGE DE SUCCÈS PROFESSIONNEL */}
            {status === 'success' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 md:p-12 animate-in fade-in zoom-in-95 duration-700 z-20">
                <div className="relative mb-10">
                  <div className="absolute inset-0 bg-blue-500/20 blur-[40px] rounded-full animate-pulse" />
                  <div className="relative w-24 h-24 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-blue-500/40">
                    <CheckCircle2 className="w-12 h-12 text-white" />
                  </div>
                </div>

                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 font-outfit tracking-tight">
                  Brief Transmis.
                </h3>
                
                <div className="space-y-4 max-w-sm">
                  <p className="text-slate-200 text-lg font-medium leading-relaxed">
                    L'analyse de votre vision stratégique a débuté.
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed px-4">
                    Un consultant senior a été assigné à votre dossier. Vous recevrez une première évaluation sous <span className="text-blue-400 font-bold">24 heures ouvrées</span>.
                  </p>
                </div>

                <button 
                  onClick={() => setStatus('idle')} 
                  className="group mt-12 px-8 py-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 font-bold hover:bg-slate-800 hover:text-white transition-all flex items-center gap-3 cursor-pointer"
                >
                  Envoyer un autre brief
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="mt-8 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest italic">Analyse en cours par SC Labs</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(250%) skewX(-20deg); }
        }
      `}</style>
    </section>
  );
};

export default Contact;

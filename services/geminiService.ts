
import { GoogleGenAI } from "@google/genai";

export const chatWithConsultant = async (history: { role: 'user' | 'model', parts: { text: string }[] }[], message: string): Promise<string> => {
const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;


  if (!apiKey || apiKey === "undefined" || apiKey === "") {
    console.error("ERREUR CRITIQUE : La clé API Gemini est manquante dans les variables d'environnement.");
    return "Désolé, mon système de réflexion n'est pas encore configuré sur ce serveur. Veuillez contacter nos experts directement à **softcurrentagency@gmail.com** ou remplir le formulaire ci-dessous.";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const systemInstruction = `Tu es l'Agent IA officiel de Soft Current, une agence digitale d'élite spécialisée dans l'exécution rapide et la haute performance.
  
  TON IDENTITÉ : Intelligent, réactif, professionnel. Tu es le premier point de contact.
  
  TES COORDONNÉES CRITIQUES :
  - EMAIL : softcurrentagency@gmail.com (C'est le seul email valide).
  - SITE : soft-current.agency
  
  TES CONNAISSANCES SUR SOFT CURRENT :
  1. NOTRE PROMESSE : Livraison de projets complets en 72 heures (Sprint intensif). 
  2. NOS TARIFS : 
     - Sprint One-Page : 50 000 FCFA.
     - Sprint Vitrine Plus : 150 000 FCFA.
     - Sprint E-commerce : 250 000 FCFA.
     - Sur-Mesure : À partir de 500 000 FCFA.
  
  TON OBJECTIF DE CONVERSION :
  Si le client semble prêt à avancer, demande-lui de remplir le formulaire de brief en bas de page. 
  Dis explicitement : "Je vous suggère de remplir notre formulaire de brief ci-dessous pour que nos experts analysent votre vision."
  
  TES RÈGLES DE RÉPONSE :
  1. TON : Élégant, concis.
  2. FORMAT : Utilise le **gras** pour les chiffres et bénéfices.
  3. LANGUE : Français uniquement.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: "user", parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "Analyse impossible. Veuillez nous contacter directement à softcurrentagency@gmail.com.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    if (error.message?.includes("API_KEY_INVALID") || error.message?.includes("not found")) {
      return "Ma clé d'accès semble invalide ou mal configurée. Veuillez prévenir l'administrateur ou nous écrire à **softcurrentagency@gmail.com**.";
    }
    return "Système momentanément saturé. Nos experts vous répondent par email à **softcurrentagency@gmail.com**.";
  }
};

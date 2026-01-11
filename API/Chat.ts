import type { VercelRequest, VercelResponse } from "@vercel/node";
import { GoogleGenAI } from "@google/genai";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "Missing GEMINI_API_KEY" });

  try {
    const { history = [], message } = req.body ?? {};
    if (!message) return res.status(400).json({ error: "Missing message" });

    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `Tu es l'Agent IA officiel de Soft Current...`; // garde ton prompt ici

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...(Array.isArray(history) ? history : []),
        { role: "user", parts: [{ text: message }] }
      ],
      config: { systemInstruction, temperature: 0.7 }
    });

    return res.status(200).json({ text: response.text ?? "" });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? "Unknown error" });
  }
}

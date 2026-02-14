
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { WEDDING_DATA } from "../constants";
import { Language } from "../types";

// Initialize with named parameter apiKey from process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const getSystemInstruction = (lang: Language) => {
  const data = WEDDING_DATA[lang];
  return `
You are the "Wedding Concierge" for ${data.coupleNames}. 
Your goal is to help guests with questions about the wedding in a friendly, helpful, and elegant tone.
Current Language: ${lang === 'en' ? 'English' : 'Russian'}. 
Please respond to the user in the language they use, but default to ${lang === 'en' ? 'English' : 'Russian'} if ambiguous.

WEDDING DETAILS:
- Couple: ${data.coupleNames}
- Date: ${data.date}
- Time: ${data.time}
- Ceremony: ${data.location} at ${data.address}
- Reception: ${data.receptionLocation} at ${data.receptionAddress}
- Dress Code: ${data.dressCode}
- RSVP Deadline: ${data.rsvpDeadline}
- Registry: ${data.registryLink}
- Schedule: ${data.schedule.map(s => `${s.time}: ${s.event} - ${s.description}`).join('\n')}

When guests ask about locations, travel, or nearby amenities, use the Google Maps tool. 
If you don't know an answer, suggest they contact Valeriya.
Keep responses concise and warm.
`;
}

export class GeminiService {
  private chats: Map<Language, Chat> = new Map();

  private getChat(lang: Language): Chat {
    if (!this.chats.has(lang)) {
      // Maps grounding is only supported in Gemini 2.5 series models.
      // Use 'gemini-2.5-flash' for efficient and grounded responses.
      const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: getSystemInstruction(lang),
          // tools: googleMaps may be used with googleSearch
          tools: [{ googleMaps: {} }, { googleSearch: {} }],
          // Include user location for more relevant grounding results
          toolConfig: {
            retrievalConfig: {
              latLng: {
                latitude: 43.1555,
                longitude: 19.1226
              }
            }
          }
        },
      });
      this.chats.set(lang, chat);
    }
    return this.chats.get(lang)!;
  }

  async sendMessage(message: string, lang: Language): Promise<string> {
    try {
      const chat = this.getChat(lang);
      // chat.sendMessage only accepts the message parameter
      const result: GenerateContentResponse = await chat.sendMessage({ message });
      // Access the extracted string directly via the .text property
      const responseText = result.text || (lang === 'en' ? "I'm sorry, I'm having a bit of trouble responding right now." : "Извините, у меня возникли трудности с ответом.");
      let finalResponse = responseText;
      
      // Extract grounding links and list them if available
      const groundingMetadata = result.candidates?.[0]?.groundingMetadata;
      const chunks = groundingMetadata?.groundingChunks;
      if (chunks && chunks.length > 0) {
        const links = chunks
          .map((chunk: any) => {
            if (chunk.maps) return `[${chunk.maps.title}](${chunk.maps.uri})`;
            if (chunk.web) return `[${chunk.web.title}](${chunk.web.uri})`;
            return null;
          })
          .filter(Boolean);
        
        if (links.length > 0) {
          finalResponse += "\n\n" + (lang === 'en' ? "Sources & Locations:" : "Источники и локации:") + "\n" + links.join("\n");
        }
      }

      return finalResponse;
    } catch (error) {
      console.error("Gemini Error:", error);
      return lang === 'en' ? "I seem to be offline. Please try again in a moment!" : "Кажется, я оффлайн. Пожалуйста, попробуйте позже!";
    }
  }
}

export const geminiService = new GeminiService();

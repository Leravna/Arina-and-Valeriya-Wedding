
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { WEDDING_DATA } from "../constants";

// Using Gemini 2.5 Flash as it supports Maps Grounding tools
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the "Wedding Concierge" for ${WEDDING_DATA.coupleNames}. 
Your goal is to help guests with questions about the wedding in a friendly, helpful, and elegant tone.

WEDDING DETAILS:
- Couple: ${WEDDING_DATA.coupleNames}
- Date: ${WEDDING_DATA.date}
- Time: ${WEDDING_DATA.time}
- Ceremony: ${WEDDING_DATA.location} at ${WEDDING_DATA.address}
- Reception: ${WEDDING_DATA.receptionLocation} at ${WEDDING_DATA.receptionAddress}
- Dress Code: ${WEDDING_DATA.dressCode}
- RSVP Deadline: ${WEDDING_DATA.rsvpDeadline}
- Registry: ${WEDDING_DATA.registryLink}
- Schedule: ${WEDDING_DATA.schedule.map(s => `${s.time}: ${s.event} - ${s.description}`).join('\n')}

When guests ask about locations, travel, or nearby amenities, use the Google Maps tool to provide accurate information. 
If Google Maps or Search is used, always mention the source or provide helpful context.
If you don't know an answer, suggest they contact the Maid of Honor, Sarah.
Keep responses concise and warm.
`;

export class GeminiService {
  private chat: Chat;

  constructor() {
    this.chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools: [{ googleMaps: {} }, { googleSearch: {} }],
      },
    });
  }

  async sendMessage(message: string): Promise<string> {
    try {
      // Get current location if available for better mapping context
      let latLng = undefined;
      try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 3000 });
        });
        latLng = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
      } catch (e) {
        console.debug("Location not available for grounding context");
      }

      const result: GenerateContentResponse = await this.chat.sendMessage({ 
        message,
        // Optional tool config for better map results
        ...(latLng && {
          toolConfig: {
            retrievalConfig: { latLng }
          }
        })
      } as any);

      let responseText = result.text || "I'm sorry, I'm having a bit of trouble responding right now.";
      
      // Append grounding links if they exist
      const chunks = result.candidates?.[0]?.groundingMetadata?.groundingChunks;
      if (chunks && chunks.length > 0) {
        const links = chunks
          .map((chunk: any) => {
            if (chunk.maps) return `[${chunk.maps.title}](${chunk.maps.uri})`;
            if (chunk.web) return `[${chunk.web.title}](${chunk.web.uri})`;
            return null;
          })
          .filter(Boolean);
        
        if (links.length > 0) {
          responseText += "\n\nSources & Locations:\n" + links.join("\n");
        }
      }

      return responseText;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I seem to be offline. Please try again in a moment!";
    }
  }
}

export const geminiService = new GeminiService();

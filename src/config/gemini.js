import { GoogleGenAI, HarmCategory, HarmBlockThreshold } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: `AIzaSyApzRXjycLBuAaPJuIuGSxdo6A-fuI1vxQ`,
});

async function runChat(prompt) {
  const result = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  return result;
}

export default runChat;


import { GoogleGenAI } from "@google/genai";

// Strictly follow Google GenAI SDK guidelines for initialization using named parameter
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateNFTDescription = async (title: string, genre: string, mood: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a short, edgy, Web3-style description (max 50 words) for a music NFT. 
      Title: ${title}
      Genre: ${genre}
      Mood: ${mood}
      Include 2 hashtags related to crypto/music.`,
    });
    // Correctly accessing .text property (not a method call) as per SDK guidelines
    return response.text || "Could not generate description.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error generating description from the ether.";
  }
};

export const getAIResponse = async (chatHistory: {user: string, text: string}[], lastMessage: string): Promise<string> => {
  try {
    const context = chatHistory.map(m => `${m.user}: ${m.text}`).join('\n');
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are "Latitude_AI", a cool, knowledgeable DJ and moderator in a decentralized music chatroom. 
      Keep responses brief, hype up the music, and be helpful.
      
      Recent Chat Context:
      ${context}
      
      User said: ${lastMessage}
      
      Respond as Latitude_AI:`,
    });
    // Correctly accessing .text property (not a method call) as per SDK guidelines
    return response.text || "...";
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "Connection interrupted.";
  }
};


import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const generateNFTDescription = async (title: string, genre: string, mood: string): Promise<string> => {
  try {
    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    const prompt = `Write a short, edgy, Web3-style description (max 50 words) for a music NFT. 
      Title: ${title}
      Genre: ${genre}
      Mood: ${mood}
      Include 2 hashtags related to crypto/music.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text || "Could not generate description.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error generating description from the ether.";
  }
};

export const getAIResponse = async (chatHistory: {user: string, text: string}[], lastMessage: string): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    const context = chatHistory.map(m => `${m.user}: ${m.text}`).join('\n');
    const prompt = `You are "Latitude_AI", a cool, knowledgeable DJ and moderator in a decentralized music chatroom. 
      Keep responses brief, hype up the music, and be helpful.
      
      Recent Chat Context:
      ${context}
      
      User said: ${lastMessage}
      
      Respond as Latitude_AI:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text || "...";
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "Connection interrupted.";
  }
};

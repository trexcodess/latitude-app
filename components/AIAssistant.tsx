import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string}[]>([
    {role: 'ai', text: "Hello! I am Gemma_AI, your Latitude concierge. How can I assist your creative journey today?"}
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, {role: 'user', text: userMsg}]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `You are Gemma_AI, a helpful support assistant for the Latitude NFT Music/Film platform. 
        You answer questions about Phantom Wallet, SOL, Revenue Splits (5% fee), and Tiers (Listener, Fan Club, Label Exec). 
        User Query: ${userMsg}`,
      });
      setMessages(prev => [...prev, {role: 'ai', text: response.text || "I'm having trouble connecting to the network."}]);
    } catch (e) {
      setMessages(prev => [...prev, {role: 'ai', text: "Signal lost. Please try again later."}]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="w-80 h-96 glass rounded-2xl flex flex-col shadow-2xl overflow-hidden border-latitude-red/20">
          <div className="p-4 bg-latitude-red text-white flex justify-between items-center">
            <span className="font-bold text-sm tracking-wider uppercase">Gemma_AI Support</span>
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'ai' ? 'justify-start' : 'justify-end'}`}>
                <div className={`p-3 rounded-xl max-w-[85%] ${m.role === 'ai' ? 'bg-gray-800 text-gray-200' : 'bg-latitude-red text-white'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && <div className="text-latitude-red animate-pulse">Gemma is thinking...</div>}
          </div>
          <div className="p-3 border-t border-white/10 flex gap-2">
            <input 
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-black/20 border border-white/10 rounded-full px-4 py-2 text-xs text-white focus:outline-none focus:border-latitude-red"
              placeholder="Ask anything..."
            />
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-latitude-red rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform animate-float"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"></path></svg>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string}[]>([
    {role: 'ai', text: "Hi! I'm Globi, your Latitude concierge. I can help you with the NFT Studio, Backstage, or understanding XRP and Solana. How can I help today?"}
  ]);
  const [isTyping, setIsTyping] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, {role: 'user', text: userMsg}]);
    setIsTyping(true);

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
      
      const prompt = `
        You are Globi, the helpful AI concierge for the Latitude NFT platform.
        You are part of Cloudship Enterprise. 
        
        TONE:
        - Empathetic, clear, and patient. 
        - Use short sentences. 
        - Avoid technical overwhelming language.
        - Perfect for neurodivergent/autistic users who need direct answers.

        PLATFORM INFO:
        - NFT Studio: Creation tools.
        - Backstage: Gated areas for owners.
        - Marketplace: Trading hub.
        - Chains: Solana (SOL) and XRP Ledger (XRPL).
        - Fees: 5% on sales. Minting is usually under $1.
        - Tiers: Listener, Fan Club, Label Exec.

        Your name is Globi. Always identify as Globi if asked.
        User Query: ${userMsg}`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      setMessages(prev => [...prev, {role: 'ai', text: text || "I'm having a little trouble connecting to the hub."}]);
    } catch (e) {
      setMessages(prev => [...prev, {role: 'ai', text: "Signal lost. Please try again in a moment."}]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] font-sans">
      {isOpen ? (
        <div className="w-80 sm:w-96 h-[500px] bg-slate-900 rounded-2xl flex flex-col shadow-2xl overflow-hidden border border-white/10">
          {/* Header */}
          <div className="p-4 bg-latitude-red text-white flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-bold text-sm tracking-wider uppercase">Globi Concierge</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform px-2">✕</button>
          </div>

          {/* Chat Window */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 text-sm leading-relaxed bg-[#0b0e14]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'ai' ? 'justify-start' : 'justify-end'}`}>
                <div className={`p-3 rounded-2xl max-w-[85%] ${
                  m.role === 'ai' 
                    ? 'bg-slate-800 text-slate-100 border border-white/5' 
                    : 'bg-latitude-red text-white'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2 text-latitude-red text-xs italic">
                <span className="animate-bounce">●</span>
                <span className="animate-bounce [animation-delay:0.2s]">●</span>
                <span className="animate-bounce [animation-delay:0.4s]">●</span>
                Globi is thinking...
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/10 bg-slate-900 flex gap-2">
            <input 
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-latitude-red transition-colors"
              placeholder="Ask Globi anything..."
            />
            <button 
              onClick={handleSend}
              className="bg-latitude-red text-white p-2 px-4 rounded-xl hover:brightness-110 active:scale-95 transition-all"
            >
              ➔
            </button>
          </div>
        </div>
      ) : (
        /* Floating Button with Globi tool-tip feel */
        <div className="flex flex-col items-end gap-2">
          <div className="bg-white text-black text-[10px] font-bold py-1 px-3 rounded-full opacity-0 hover:opacity-100 transition-opacity">
            Talk to Globi
          </div>
          <button 
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-latitude-red rounded-full flex items-center justify-center text-white shadow-xl hover:scale-105 transition-all border-4 border-white/10"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
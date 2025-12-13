import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '../types';
import { getAIResponse } from '../services/geminiService';

const ROOMS = ['Global Lounge', 'Synth Club', 'Video Art', 'Developer Den'];

const Social: React.FC = () => {
  const [activeRoom, setActiveRoom] = useState(ROOMS[0]);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', user: 'System', text: 'Welcome to the Latitude Global Lounge.', timestamp: Date.now(), isSystem: true },
    { id: '2', user: 'Latitude_AI', text: 'I am your AI host. What are we listening to tonight?', timestamp: Date.now(), isSystem: true }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      user: 'You', // In a real app, this would be the wallet address or username
      text: inputText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');

    // Trigger AI response randomly or if mentioned (simulated simply here by always responding after a delay for demo)
    setIsTyping(true);
    
    // Prepare history for context
    const history = messages.slice(-5).map(m => ({ user: m.user, text: m.text }));
    
    setTimeout(async () => {
      const aiText = await getAIResponse(history, newMessage.text);
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        user: 'Latitude_AI',
        text: aiText,
        timestamp: Date.now(),
        isSystem: true
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500); // Artificial delay for realism
  };

  return (
    <div className="h-full flex flex-col md:flex-row gap-6 animate-fade-in pb-4">
      {/* Rooms List */}
      <div className="w-full md:w-48 flex-shrink-0 space-y-4">
        <h3 className="text-xs font-bold text-gray-500 uppercase mb-4">Frequency Channels</h3>
        {ROOMS.map(room => (
          <button
            key={room}
            onClick={() => setActiveRoom(room)}
            className={`w-full text-left p-3 border text-sm font-bold uppercase transition-all ${
              activeRoom === room
              ? 'border-latitude-red bg-latitude-red text-white'
              : 'border-gray-300 dark:border-latitude-dim text-gray-500 hover:text-black dark:hover:text-gray-300 bg-white dark:bg-transparent'
            }`}
          >
            # {room}
          </button>
        ))}
        
        <div className="mt-8 p-4 border border-gray-200 dark:border-latitude-dim bg-white dark:bg-black/50 shadow-sm">
           <h4 className="text-xs font-bold text-latitude-red mb-2">LIVE EVENT</h4>
           <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">DJ Null Set - Live from Tokyo</p>
           <div className="flex items-center gap-2">
             <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
             <span className="text-[10px] text-green-500 font-bold">ON AIR</span>
           </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col border border-gray-200 dark:border-latitude-dim bg-gray-50 dark:bg-black/40 h-[600px] md:h-auto relative shadow-sm">
        <div className="p-4 border-b border-gray-200 dark:border-latitude-dim flex justify-between items-center bg-white dark:bg-black/60 transition-colors">
           <h2 className="font-bold text-lg text-latitude-blue dark:text-white"># {activeRoom}</h2>
           <span className="text-xs text-gray-500 flex items-center gap-2">
             <span className="w-2 h-2 bg-green-500 rounded-full"></span> 142 Connected
           </span>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col ${msg.user === 'You' ? 'items-end' : 'items-start'}`}>
               <div className="flex items-baseline gap-2 mb-1">
                 <span className={`text-xs font-bold ${msg.isSystem ? 'text-latitude-red' : 'text-gray-500 dark:text-gray-400'}`}>
                   {msg.user}
                 </span>
                 <span className="text-[10px] text-gray-400 dark:text-gray-600">
                   {new Date(msg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                 </span>
               </div>
               <div className={`max-w-[80%] p-3 text-sm border shadow-sm ${
                 msg.user === 'You' 
                 ? 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white rounded-tl-lg rounded-bl-lg rounded-br-lg' 
                 : msg.isSystem
                   ? 'border-latitude-red/30 bg-red-50 dark:bg-latitude-red/5 text-latitude-red dark:text-red-100 rounded-tr-lg rounded-bl-lg rounded-br-lg'
                   : 'border-gray-200 dark:border-latitude-dim bg-white dark:bg-black text-gray-800 dark:text-gray-300 rounded-tr-lg rounded-bl-lg rounded-br-lg'
               }`}>
                 {msg.text}
               </div>
            </div>
          ))}
          {isTyping && (
             <div className="flex items-center gap-1 text-xs text-gray-500 italic ml-2">
               <span>Latitude_AI is thinking</span>
               <span className="animate-bounce">.</span>
               <span className="animate-bounce delay-100">.</span>
               <span className="animate-bounce delay-200">.</span>
             </div>
          )}
          <div ref={chatEndRef}></div>
        </div>

        <form onSubmit={handleSendMessage} className="p-4 bg-white dark:bg-black/60 border-t border-gray-200 dark:border-latitude-dim flex gap-2 transition-colors">
           <input 
             type="text" 
             value={inputText}
             onChange={(e) => setInputText(e.target.value)}
             className="flex-1 bg-gray-100 dark:bg-black border border-gray-300 dark:border-latitude-dim p-3 text-black dark:text-white focus:outline-none focus:border-latitude-red transition-colors"
             placeholder="Broadcast a message..."
           />
           <button type="submit" className="px-6 bg-latitude-blue text-white font-bold uppercase hover:bg-blue-800 transition-colors">
             Send
           </button>
        </form>
      </div>
    </div>
  );
};

export default Social;
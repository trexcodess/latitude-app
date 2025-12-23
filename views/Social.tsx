
import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage, UserTier, UserProfile } from '../types';
import { getAIResponse } from '../services/geminiService';

const ROOMS = ['Global Lounge', 'Synth Club', 'Video Art', 'Developer Den'];

const Social: React.FC<{ user: UserProfile | null }> = ({ user }) => {
  const [activeRoom, setActiveRoom] = useState(ROOMS[0]);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', user: 'System', text: 'Welcome to the Latitude Global Lounge.', timestamp: Date.now(), isSystem: true },
    { id: '2', user: 'Latitude_AI', text: 'I am your AI host. What are we listening to tonight?', timestamp: Date.now(), isSystem: true }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const [aiPlaylist, setAiPlaylist] = useState<string[]>(['Neon Odyssey - Sol-Runner', 'Protocol Zero - Shadow Studio']);
  const [playlistInput, setPlaylistInput] = useState('');

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      user: user?.name || 'Explorer', 
      text: inputText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');
    setIsTyping(true);
    
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
    }, 1500); 
  };

  const handleAddPlaylist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!playlistInput.trim()) return;
    if (user?.tier !== UserTier.FAN_CLUB && user?.tier !== UserTier.LABEL_EXEC && user?.tier !== UserTier.DJ_PRO) {
      alert("AI Playlist access requires a Fan Club membership ($9.99)!");
      return;
    }
    setAiPlaylist(prev => [...prev, playlistInput]);
    setPlaylistInput('');
  };

  return (
    <div className="h-full flex flex-col md:flex-row gap-6 animate-fade-in pb-4 px-4 md:px-0 bg-white dark:bg-black transition-colors">
      <div className="w-full md:w-64 flex-shrink-0 space-y-6">
        <div>
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Frequency Channels</h3>
          <div className="space-y-2">
            {ROOMS.map(room => (
              <button
                key={room}
                onClick={() => setActiveRoom(room)}
                className={`w-full text-left px-5 py-4 border text-[11px] font-black uppercase tracking-[0.2em] transition-all rounded-xl ${
                  activeRoom === room
                  ? 'border-latitude-red bg-latitude-red/10 text-latitude-red shadow-lg'
                  : 'border-black/5 dark:border-white/5 text-gray-500 hover:text-black dark:hover:text-white bg-black/5 dark:bg-white/5'
                }`}
              >
                # {room}
              </button>
            ))}
          </div>
        </div>
        
        <div className="p-6 bg-black/5 dark:bg-[#0c0c0c] border border-black/10 dark:border-white/10 rounded-3xl relative overflow-hidden group shadow-xl">
           <h4 className="text-[9px] font-black text-latitude-red mb-3 uppercase tracking-widest flex items-center gap-2 italic">
              AI Playlist Core
           </h4>
           <div className="space-y-3 mb-6">
              {aiPlaylist.map((track, i) => (
                <div key={i} className="text-[10px] text-black dark:text-gray-300 font-mono tracking-tighter truncate border-l-2 border-latitude-red pl-2">
                  {track}
                </div>
              ))}
           </div>
           <form onSubmit={handleAddPlaylist} className="space-y-2">
              <input 
                type="text" 
                value={playlistInput}
                onChange={e => setPlaylistInput(e.target.value)}
                placeholder="Queue track..."
                className="w-full bg-white dark:bg-black border border-black/10 dark:border-white/10 p-3 text-[9px] rounded-lg outline-none text-black dark:text-white"
              />
              <button className="w-full py-2 bg-black dark:bg-white text-white dark:text-black text-[8px] font-black uppercase rounded-lg shadow-lg">Inject Frequency</button>
           </form>
           {user?.tier !== UserTier.FAN_CLUB && (
             <p className="mt-4 text-[7px] text-gray-500 uppercase text-center font-bold tracking-widest">Locked: Join Fan Club</p>
           )}
        </div>
      </div>

      <div className="flex-1 flex flex-col border border-black/10 dark:border-white/10 bg-black/5 dark:bg-[#080808] rounded-[40px] overflow-hidden shadow-2xl relative h-[700px] md:h-auto">
        <div className="p-6 border-b border-black/5 dark:border-white/5 bg-white/60 dark:bg-black/60 backdrop-blur-xl">
           <div className="flex flex-col">
              <h2 className="font-black text-xl text-black dark:text-white uppercase italic tracking-tighter">#{activeRoom}</h2>
              <p className="text-[9px] text-gray-600 uppercase tracking-widest font-black">Sync Frequency: Live</p>
           </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-6 no-scrollbar">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col ${msg.user === user?.name || msg.user === 'You' ? 'items-end' : 'items-start'}`}>
               <div className="flex items-center gap-2 mb-2">
                 <span className={`text-[10px] font-black uppercase tracking-widest ${msg.isSystem ? 'text-latitude-red' : 'text-gray-500'}`}>
                   {msg.user}
                 </span>
               </div>
               <div className={`max-w-[75%] p-4 text-sm border shadow-xl rounded-2xl transition-all ${
                 msg.user === user?.name || msg.user === 'You' 
                 ? 'border-latitude-red/20 bg-latitude-red text-white' 
                 : msg.isSystem
                   ? 'border-latitude-red/10 bg-latitude-red/5 text-latitude-red italic'
                   : 'border-black/5 dark:border-white/5 bg-white dark:bg-black/40 text-black dark:text-gray-300'
               }`}>
                 {msg.text}
               </div>
            </div>
          ))}
          <div ref={chatEndRef}></div>
        </div>

        <form onSubmit={handleSendMessage} className="p-6 bg-white/60 dark:bg-black/60 backdrop-blur-xl border-t border-black/10 dark:border-white/10 flex gap-4">
           <input 
             type="text" 
             value={inputText}
             onChange={(e) => setInputText(e.target.value)}
             className="flex-1 bg-white dark:bg-black border border-black/10 dark:border-white/10 p-5 text-black dark:text-white font-mono text-xs focus:outline-none focus:border-latitude-red transition-all rounded-2xl placeholder:text-gray-400"
             placeholder="Message lounge..."
           />
           <button type="submit" className="px-10 bg-latitude-red text-white font-black uppercase tracking-widest text-[10px] rounded-2xl shadow-xl border-b-4 border-red-950">
             Send
           </button>
        </form>
      </div>
    </div>
  );
};

export default Social;


import React, { useState, useEffect, useRef } from 'react';
import { BattleSession, UserProfile, UserTier, BattlePhase, ChatMessage } from '../types';

const INITIAL_BATTLE: BattleSession = {
  id: 'b1',
  competitors: [
    { id: 'c1', name: 'GLITCH_KING', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=glitch', votes: 142, currentLyrics: '' },
    { id: 'c2', name: 'SOL_SURFER', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=surfer', votes: 128, currentLyrics: '' }
  ],
  djName: 'V0ID_WALKER',
  isLive: false,
  startTime: Date.now(),
  status: 'live',
  phase: 'IDLE',
  timer: 60,
  bpm: 90,
  prizePool: 25.5,
  disputeStatus: 'clear'
};

const Backstage: React.FC<{ user: UserProfile | null }> = ({ user }) => {
  const [battle, setBattle] = useState<BattleSession>(INITIAL_BATTLE);
  const [isDjMode, setIsDjMode] = useState(false);
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [vuLevel, setVuLevel] = useState(0);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [crowdChat, setCrowdChat] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState('');
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    // Simulated initial crowd chat
    setCrowdChat([
      { id: '1', user: 'Listener_X', text: 'Ready for this set!', timestamp: Date.now() },
      { id: '2', user: 'Vibe_Master', text: 'BPM is perfect.', timestamp: Date.now() }
    ]);
  }, []);

  const handleTip = (amount: number) => {
    setTipAmount(prev => prev + amount);
    const tipMsg: ChatMessage = {
      id: Date.now().toString(),
      user: 'SYSTEM',
      text: `${user?.name || 'Guest'} tipped the DJ ${amount} SOL! 💎`,
      timestamp: Date.now(),
      isSystem: true
    };
    setCrowdChat(prev => [...prev, tipMsg]);
  };

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const msg: ChatMessage = {
      id: Date.now().toString(),
      user: user?.name || 'Guest',
      text: chatInput,
      timestamp: Date.now()
    };
    setCrowdChat(prev => [...prev, msg]);
    setChatInput('');
  };

  const startBroadcast = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: { echoCancellation: false }, 
        video: true 
      });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
      setIsBroadcasting(true);
      setBattle(prev => ({ ...prev, isLive: true }));
    } catch (err) {
      alert("Capture hardware access denied.");
    }
  };

  const stopBroadcast = () => {
    streamRef.current?.getTracks().forEach(track => track.stop());
    setIsBroadcasting(false);
    setBattle(prev => ({ ...prev, isLive: false }));
  };

  const isDj = user?.tier === UserTier.DJ_PRO || user?.isAdmin;

  return (
    <div className="min-h-screen p-4 md:p-12 animate-fade-in relative pb-32 bg-white dark:bg-black transition-colors">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.03)_0%,_transparent_70%)] pointer-events-none"></div>
      
      <header className="flex flex-col md:flex-row justify-between items-center mb-16 relative z-10 gap-8">
        <div>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic text-black dark:text-white">The <span className="text-latitude-red">Ring</span></h2>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Live Set: {battle.djName}</span>
            {battle.isLive && (
              <div className="px-3 py-1 bg-latitude-red rounded-full text-[8px] font-black text-white animate-pulse">ON AIR</div>
            )}
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-8 py-4 rounded-3xl text-center">
             <span className="text-[8px] font-black uppercase tracking-widest text-gray-500 block mb-1">DJ Tips Recieved</span>
             <span className="text-2xl font-black italic text-latitude-solana">{tipAmount.toFixed(2)} SOL</span>
          </div>
          {isDj && (
            <button 
               onClick={() => setIsDjMode(!isDjMode)}
               className={`px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest shadow-xl transition-all ${isDjMode ? 'bg-latitude-teal text-black' : 'bg-black text-white dark:bg-white dark:text-black'}`}
            >
               {isDjMode ? 'Close Studio' : 'Open Broadcast Hub'}
            </button>
          )}
        </div>
      </header>

      <div className="grid lg:grid-cols-4 gap-8 relative z-10">
        <div className="lg:col-span-3 space-y-8">
           <div className="aspect-video bg-black dark:bg-[#111] border-4 border-gray-800 rounded-[40px] overflow-hidden shadow-2xl relative">
              <video 
                ref={videoRef} 
                autoPlay 
                muted={isBroadcasting} 
                playsInline 
                className={`w-full h-full object-cover ${!isBroadcasting && 'hidden'}`}
              />
              {!isBroadcasting && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-700">
                  <span className="text-5xl mb-4">📡</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.5em]">SIGNAL_LOST</span>
                </div>
              )}
           </div>

           <div className="flex gap-4 justify-center">
              <button onClick={() => handleTip(0.1)} className="px-8 py-4 bg-latitude-solana text-black font-black uppercase rounded-2xl text-[10px] hover:scale-105 transition-all shadow-lg border-b-4 border-green-900">Tip 0.1 SOL</button>
              <button onClick={() => handleTip(0.5)} className="px-8 py-4 bg-latitude-solana text-black font-black uppercase rounded-2xl text-[10px] hover:scale-105 transition-all shadow-lg border-b-4 border-green-900">Tip 0.5 SOL</button>
              <button onClick={() => handleTip(1.0)} className="px-8 py-4 bg-latitude-red text-white font-black uppercase rounded-2xl text-[10px] hover:scale-105 transition-all shadow-lg border-b-4 border-red-950">Tip 1.0 SOL</button>
           </div>
        </div>

        <div className="bg-black/5 dark:bg-[#080808] border border-black/10 dark:border-white/10 rounded-[40px] flex flex-col h-[600px] overflow-hidden shadow-2xl">
           <div className="p-6 border-b border-black/5 dark:border-white/5 bg-black/5 dark:bg-black/40">
              <h3 className="text-xs font-black uppercase tracking-widest text-black dark:text-white italic">Crowd Chat</h3>
           </div>
           <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
              {crowdChat.map(m => (
                <div key={m.id} className="text-[11px]">
                   <span className={`font-black uppercase tracking-tighter mr-2 ${m.isSystem ? 'text-latitude-red' : (user?.name === m.user ? 'text-latitude-teal' : 'text-gray-500')}`}>{m.user}:</span>
                   <span className="text-gray-600 dark:text-gray-400 font-medium">{m.text}</span>
                </div>
              ))}
           </div>
           <form onSubmit={handleSendChat} className="p-4 border-t border-black/5 dark:border-white/5 flex gap-2">
              <input 
                type="text" 
                value={chatInput} 
                onChange={e => setChatInput(e.target.value)}
                placeholder="Say something to the DJ..."
                className="flex-1 bg-white dark:bg-black border border-black/10 dark:border-white/10 p-3 rounded-xl text-[10px] outline-none text-black dark:text-white"
              />
              <button className="px-4 bg-latitude-red text-white text-[10px] font-black uppercase rounded-xl">Send</button>
           </form>
        </div>
      </div>

      {isDjMode && (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-white dark:bg-[#080808] border-t-4 border-latitude-teal p-10 shadow-2xl animate-slide-up">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                   <h4 className="text-2xl font-black uppercase italic text-black dark:text-white mb-2">DJ Broadcast Hub</h4>
                   <p className="text-[9px] text-gray-500 uppercase font-mono tracking-widest">PRO_LINK v4.0 Active</p>
                </div>
                <div className="flex gap-4">
                    {!isBroadcasting ? (
                      <button onClick={startBroadcast} className="px-12 py-5 bg-latitude-solana text-black font-black uppercase tracking-widest text-xs rounded-2xl shadow-xl border-b-4 border-green-900">Start Broadcast</button>
                    ) : (
                      <button onClick={stopBroadcast} className="px-12 py-5 bg-latitude-red text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-xl border-b-4 border-red-950">Kill Signal</button>
                    )}
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Backstage;

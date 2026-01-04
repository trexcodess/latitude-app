
import React, { useState, useRef, useEffect } from 'react';
import { UserTier, NFTItem, UserProfile } from '../types';
import { assetService } from '../services/assetService';
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as THREE from 'three';

interface CreateProps {
  user: UserProfile | null;
  userTier: UserTier;
  onMint: (nft: NFTItem) => void;
  walletConnected: boolean;
}

const CassetteVisualizer: React.FC<{ isPlaying: boolean; speed: number }> = ({ isPlaying, speed }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const frameId = useRef<number | null>(null);
  const reelsRef = useRef<THREE.Group[]>([]);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const shellGeo = new THREE.BoxGeometry(10, 6, 0.6);
    const shellMat = new THREE.MeshPhongMaterial({ 
      color: 0x080808, 
      shininess: 120,
      specular: 0x444444
    });
    const shell = new THREE.Mesh(shellGeo, shellMat);
    scene.add(shell);

    const windowGeo = new THREE.PlaneGeometry(5, 2.5);
    const windowMat = new THREE.MeshPhysicalMaterial({ 
      color: 0xffffff, 
      transparent: true, 
      opacity: 0.1, 
      roughness: 0,
      transmission: 0.9,
      side: THREE.DoubleSide
    });
    const cassetteWindow = new THREE.Mesh(windowGeo, windowMat);
    cassetteWindow.position.z = 0.31;
    scene.add(cassetteWindow);

    const createReel = (x: number) => {
      const group = new THREE.Group();
      const reelGeo = new THREE.CylinderGeometry(1, 1, 0.15, 32);
      const reelMat = new THREE.MeshPhongMaterial({ color: 0xdddddd });
      const reel = new THREE.Mesh(reelGeo, reelMat);
      reel.rotation.x = Math.PI / 2;
      group.add(reel);

      for(let i=0; i<6; i++) {
        const sprocketGeo = new THREE.BoxGeometry(0.2, 0.3, 0.2);
        const sprocketMat = new THREE.MeshPhongMaterial({ color: 0x000000 });
        const sprocket = new THREE.Mesh(sprocketGeo, sprocketMat);
        const angle = (i / 6) * Math.PI * 2;
        sprocket.position.set(Math.cos(angle)*0.4, Math.sin(angle)*0.4, 0.1);
        group.add(sprocket);
      }
      group.position.set(x, 0, 0.1);
      return group;
    };
    
    const reel1 = createReel(-2.5);
    const reel2 = createReel(2.5);
    scene.add(reel1, reel2);
    reelsRef.current = [reel1, reel2];

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const redLight = new THREE.PointLight(0xff0000, 2, 10);
    redLight.position.set(-2, 2, 3);
    scene.add(redLight);
    const blueLight = new THREE.PointLight(0x0080ff, 2, 10);
    blueLight.position.set(2, -2, 3);
    scene.add(blueLight);

    const animate = () => {
      frameId.current = requestAnimationFrame(animate);
      
      // Control rotation based on speed and playing state
      // Clockwise (negative) for play/forward, Counter-clockwise (positive) for rewind
      let rotationDelta = 0;
      if (isPlaying) {
        rotationDelta = -0.05; // Normal Play Speed
      } else if (speed !== 0) {
        rotationDelta = speed * -0.05; // Dynamic FW/RW Speed
      }

      if (rotationDelta !== 0) {
        reelsRef.current.forEach(reel => {
          reel.rotation.z += rotationDelta;
        });
      }
      
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (frameId.current) cancelAnimationFrame(frameId.current);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, [isPlaying, speed]);

  return <div ref={mountRef} className="w-full h-full" />;
};

const Create: React.FC<CreateProps> = ({ user, userTier, onMint, walletConnected }) => {
  const [loading, setLoading] = useState(false);
  const [fileStatus, setFileStatus] = useState<'empty' | 'loading' | 'ready'>('empty');
  const [loadProgress, setLoadProgress] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [fileMeta, setFileMeta] = useState<{name: string, type: string, size: string} | null>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(0); 
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [voiceActive, setVoiceActive] = useState(false);
  const [lastVoiceCommand, setLastVoiceCommand] = useState('');
  const [aiAnalysis, setAiAnalysis] = useState('');

  const [eq, setEq] = useState({ low: 42, mid: 68, high: 55, gain: 50, comp: 35 });
  const [enhancerLevel, setEnhancerLevel] = useState(0);

  const [formData, setFormData] = useState({
    title: '',
    artist: user?.name || '',
    type: 'music' as 'music' | 'video' | 'art',
    price: 0.5,
    description: '',
  });

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event: any) => {
        const command = event.results[event.results.length - 1][0].transcript.toLowerCase();
        setLastVoiceCommand(command);
        if (command.includes('play')) handlePlay();
        if (command.includes('stop')) handleStop();
        if (command.includes('pause')) handleStop();
        if (command.includes('rewind')) handleRewind();
        if (command.includes('forward')) handleFastForward();
      };

      if (voiceActive) recognition.start();
      return () => recognition.stop();
    }
  }, [voiceActive]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFileStatus('loading');
      setLoadProgress(0);
      const file = e.target.files[0];
      setAudioFile(file);
      setFileMeta({
        name: file.name,
        type: file.name.split('.').pop()?.toUpperCase() || 'UNKNOWN',
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB'
      });
      
      const url = URL.createObjectURL(file);
      if (audioRef.current) audioRef.current.src = url;

      let p = 0;
      const interval = setInterval(() => {
        p += 5;
        setLoadProgress(p);
        if (p >= 100) {
          clearInterval(interval);
          setFileStatus('ready');
        }
      }, 30);
    }
  };

  const handlePlay = () => {
    if (fileStatus !== 'ready') return;
    setIsPlaying(true);
    setSpeed(0);
    audioRef.current?.play();
  };

  const handleStop = () => {
    setIsPlaying(false);
    setSpeed(0);
    audioRef.current?.pause();
  };

  const handleRewind = () => {
    if (fileStatus !== 'ready') return;
    setIsPlaying(false);
    setSpeed(-5); // Fast counter-clockwise
    if (audioRef.current) audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
    setTimeout(() => setSpeed(0), 500);
  };

  const handleFastForward = () => {
    if (fileStatus !== 'ready') return;
    setIsPlaying(false);
    setSpeed(5); // Fast clockwise
    if (audioRef.current) audioRef.current.currentTime = Math.min(audioRef.current.duration || 0, audioRef.current.currentTime + 10);
    setTimeout(() => setSpeed(0), 500);
  };

  const simulateEnhancement = async () => {
    setProcessing(true);
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    try {
      const prompt = `I am mastering a ${fileMeta?.type || 'audio'} track using a Tesla T4 GPU Cluster. 
        Current Settings - Low: ${eq.low}, Mid: ${eq.mid}, High: ${eq.high}. Compression: ${eq.comp}. 
        Give a highly technical, futuristic 15-word summary of the sonic upscaling achieved by the T4 architecture.`

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setAiAnalysis(text || "Enhanced for broadcast.");
      setTimeout(() => {
        setEnhancerLevel(100);
        setProcessing(false);
      }, 2500);
    } catch (e) {
      console.error("Gemini Error in Create.tsx:", e);
      setProcessing(false);
    }
  };

  const handleDeploy = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const minted = await assetService.mintAsset(user.id, {
        title: formData.title,
        artist: formData.artist,
        price: formData.price,
        type: formData.type,
        imageUrl: `https://picsum.photos/600/600?random=${Math.random()}`,
        description: formData.description,
      });
      onMint(minted);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const isHiFi = fileMeta?.type === 'WAV' || fileMeta?.type === 'FLAC' || fileMeta?.type === 'AIFF';

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 space-y-12 animate-fade-in pb-32">
      <audio ref={audioRef} onEnded={handleStop} hidden />
      
      <header className="border-b border-black/10 dark:border-white/10 pb-6 flex justify-between items-end">
        <div>
          <h2 className="text-6xl font-black text-black dark:text-white uppercase tracking-tighter italic">NFT <span className="text-latitude-red">Studio</span></h2>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mt-2">Sovereign Mastering Protocol</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <button 
            onClick={() => setVoiceActive(!voiceActive)}
            className={`flex items-center gap-3 px-6 py-3 rounded-xl border transition-all ${voiceActive ? 'border-latitude-red text-latitude-red bg-latitude-red/10 animate-pulse' : 'border-black/10 text-gray-500 bg-white/40 dark:bg-black/40 hover:border-latitude-red'}`}
          >
            <span className="text-[10px] font-black uppercase tracking-widest">{voiceActive ? 'Voice Engine Engaged' : 'Initialize Voice Commands'}</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
          </button>
          {voiceActive && lastVoiceCommand && (
            <span className="text-[9px] font-mono text-latitude-red uppercase animate-fade-in italic">Heard: "{lastVoiceCommand}"</span>
          )}
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          
          <div className="bg-white dark:bg-[#0f0f0f] border-x-4 border-latitude-solana/20 p-5 rounded-lg flex items-center justify-between shadow-xl border border-black/5 dark:border-white/5">
             <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                   <div className="w-3 h-3 bg-latitude-solana rounded-full shadow-[0_0_12px_#14F195] animate-pulse"></div>
                   <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-latitude-solana leading-none">Compute Node: Active</span>
                      <span className="text-[8px] font-mono text-gray-500 mt-1">Sovereign Rack #04</span>
                   </div>
                </div>
                <div className="h-8 w-px bg-black/10 dark:bg-white/10"></div>
                <div className="flex flex-col">
                   <span className="text-[9px] font-black uppercase tracking-widest text-black dark:text-white italic">Tesla T4 Accelerated</span>
                   <span className="text-[7px] font-mono text-latitude-teal uppercase">AI Rendering Enclave</span>
                </div>
             </div>
          </div>

          <div className="bg-vst border-x-4 border-gray-800 rounded-lg relative overflow-hidden shadow-2xl">
             <div className="bg-[#222] border-b border-black/60 p-4 flex justify-between items-center px-8">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Signal Ingestion</span>
                <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-latitude-solana"></div>
                   <div className="w-2 h-2 rounded-full bg-latitude-red"></div>
                </div>
             </div>

             <div className="p-10 flex flex-col md:flex-row items-center gap-10 bg-gradient-to-b from-[#1a1a1a] to-[#121212]">
                <div className="flex-1 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-white uppercase tracking-tighter italic">Source <span className="text-latitude-red">Frequency</span></h3>
                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-widest">Master Studio Quality (WAV/FLAC)</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-6">
                     <input type="file" onChange={handleFileUpload} className="hidden" id="master-file" accept="audio/*" />
                     <label htmlFor="master-file" className="px-10 py-5 bg-latitude-red text-white font-black uppercase text-xs rounded-sm cursor-pointer hover:bg-red-600 transition-all shadow-xl border-b-4 border-black/40">
                       {audioFile ? `Loaded: ${audioFile.name}` : 'Inject Signal'}
                     </label>
                     {fileMeta && (
                       <div className="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                          <div className={`px-3 py-1 rounded font-black text-[10px] uppercase ${isHiFi ? 'bg-latitude-solana text-black' : 'bg-latitude-blue text-white'}`}>
                             {fileMeta.type} {isHiFi && 'Hi-Fi'}
                          </div>
                          <span className="text-[10px] font-mono text-gray-500 uppercase">{fileMeta.size}</span>
                       </div>
                     )}
                  </div>
                </div>
             </div>
          </div>

          <div className="bg-[#111] border-4 border-gray-800 rounded-xl h-[450px] relative overflow-hidden flex flex-col items-center p-8 shadow-inner shadow-black">
             <div className="absolute top-4 left-6 text-[9px] font-black text-gray-700 uppercase tracking-[0.5em]">Latitude Transport Engine</div>
             
             <div className="flex-1 w-full cassette-glow relative">
                <CassetteVisualizer isPlaying={isPlaying} speed={speed} />
                {fileStatus === 'empty' && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                     <span className="px-8 py-3 bg-black/60 border border-white/10 text-white/20 text-xs font-black uppercase tracking-[0.6em] backdrop-blur-sm">AWAITING_SIGNAL</span>
                  </div>
                )}
             </div>

             <div className="flex items-end gap-2 bg-[#181818] p-6 rounded-t-3xl border-x-2 border-t-2 border-white/5 w-full max-w-xl shadow-2xl relative">
                <div className="flex-1 grid grid-cols-4 gap-2">
                   {[
                     { label: 'RW', action: handleRewind, icon: '⏪' },
                     { label: 'STOP', action: handleStop, icon: '■', active: !isPlaying && speed === 0 },
                     { label: 'PLAY', action: handlePlay, icon: '▶', active: isPlaying },
                     { label: 'FF', action: handleFastForward, icon: '⏩' },
                   ].map((btn) => (
                     <button 
                       key={btn.label}
                       onClick={btn.action}
                       className={`h-16 flex flex-col items-center justify-center rounded-sm transition-all border-b-4 ${
                         btn.active 
                         ? 'bg-latitude-red border-red-900 text-white shadow-inner scale-95' 
                         : 'bg-[#2a2a2a] border-black hover:bg-[#333] text-gray-500 hover:text-white'
                       }`}
                     >
                       <span className="text-lg mb-1">{btn.icon}</span>
                       <span className="text-[8px] font-black uppercase tracking-widest">{btn.label}</span>
                     </button>
                   ))}
                </div>
             </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
           <div className="bg-white dark:bg-[#111] p-10 rounded-xl border border-black/5 dark:border-white/5 space-y-10 shadow-xl sticky top-8">
              <div className="border-b border-black/10 dark:border-white/10 pb-6">
                 <h3 className="text-3xl font-black text-black dark:text-white uppercase tracking-tighter italic leading-none">Deploy <span className="text-latitude-red">Data</span></h3>
              </div>
              
              <div className="space-y-8">
                 <div>
                   <label className="block text-[10px] font-black text-gray-500 mb-3 uppercase tracking-widest">Signal Designation</label>
                   <input 
                     className="w-full bg-gray-50 dark:bg-black border border-black/10 dark:border-white/10 p-5 rounded-sm text-black dark:text-white focus:border-latitude-red focus:outline-none transition-all font-mono text-sm"
                     value={formData.title}
                     onChange={e => setFormData({...formData, title: e.target.value})}
                     placeholder="SIGNAL_UID"
                   />
                 </div>

                 <div>
                   <label className="block text-[10px] font-black text-gray-500 mb-3 uppercase tracking-widest">Metadata</label>
                   <textarea 
                     className="w-full bg-gray-50 dark:bg-black border border-black/10 dark:border-white/10 p-5 rounded-sm text-black dark:text-white focus:border-latitude-red focus:outline-none transition-all text-sm h-48 font-mono"
                     value={formData.description}
                     onChange={e => setFormData({...formData, description: e.target.value})}
                     placeholder="Signal footprint..."
                   ></textarea>
                 </div>

                 <button 
                   onClick={handleDeploy}
                   disabled={loading || fileStatus !== 'ready'}
                   className="w-full py-7 bg-latitude-red text-white font-black uppercase tracking-[0.5em] rounded-sm shadow-2xl hover:bg-black transition-all disabled:opacity-30 border-b-4 border-red-950 text-xs"
                 >
                   {loading ? 'DEPLOYING...' : 'COMMIT TO NETWORK'}
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Create;

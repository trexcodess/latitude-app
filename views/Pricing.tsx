
import React, { useState } from 'react';
import { UserTier } from '../types';

const Pricing: React.FC<{ onUpgrade: (tier: UserTier) => void }> = ({ onUpgrade }) => {
  const [checkoutTier, setCheckoutTier] = useState<UserTier | null>(null);

  const pricingData = [
    { label: 'Price', free: '$0 / Forever', promo: '$9.99 / Month', pro: '$24.99 / Month', premium: '$79.99 / Month' },
    { label: 'Target User', free: 'Fan, Listener', promo: 'Creator', pro: 'DJs & Performers', premium: 'Labels' },
    { label: 'Broadcast Suite', free: 'View Only', promo: 'Chat Only', pro: 'Full A/V Broadcast', premium: 'Multi-Stream 4K' },
    { label: 'Global Lounge', free: 'Read-Only', promo: 'Full Access', pro: 'Verified Status', premium: 'Host Control' },
    { label: 'Hardware Link', free: 'N/A', promo: 'Webcam Only', pro: 'Virtual Cable I/O', premium: 'Full ASIO Support' },
    { label: 'Platform Cut', free: '20%', promo: '10%', pro: '5%', premium: '2.5%' },
  ];

  const handleUpgradeClick = (tier: UserTier) => {
    if (tier === UserTier.LISTENER) return;
    setCheckoutTier(tier);
    setTimeout(() => {
      onUpgrade(tier);
      setCheckoutTier(null);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto py-20 px-4 space-y-32 animate-fade-in relative z-10 pb-32">
      <div className="text-center space-y-6">
        <h2 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter italic leading-none">Access <span className="text-latitude-red">Protocol</span></h2>
        <p className="text-gray-500 font-mono text-[11px] uppercase tracking-[0.5em] max-w-3xl mx-auto leading-relaxed italic">Synchronize your creative identity with our global compute network.</p>
      </div>

      {/* Main Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { id: UserTier.LISTENER, name: 'Listener', price: 'FREE', color: 'border-white/5', cta: 'Signal Only' },
          { id: UserTier.FAN_CLUB, name: 'Fan Club', price: '$9.99', color: 'border-latitude-blue', cta: 'Upgrade', promo: true },
          { id: UserTier.DJ_PRO, name: 'DJ Pro', price: '$24.99', color: 'border-latitude-teal', cta: 'Broadcast Now' },
          { id: UserTier.LABEL_EXEC, name: 'Label Exec', price: '$79.99', color: 'border-latitude-solana', cta: 'Admin Access' },
        ].map((tier) => (
          <div key={tier.id} className={`bg-[#080808] p-10 rounded-[40px] border transition-all hover:scale-[1.02] flex flex-col ${tier.color} relative overflow-hidden group shadow-2xl`}>
             {tier.promo && (
               <div className="absolute top-0 right-0 bg-latitude-blue text-white px-6 py-2 text-[9px] font-black uppercase tracking-[0.3em] rounded-bl-3xl shadow-lg">BETA_ACCESS</div>
             )}
             <h3 className="text-2xl font-black text-white mb-2 uppercase italic tracking-tighter">{tier.name}</h3>
             <div className="flex items-baseline gap-2 mb-10">
                <p className="text-5xl font-black text-white font-mono">{tier.price}</p>
                <span className="text-gray-700 font-mono uppercase text-[9px]">/ month</span>
             </div>
             <button 
                onClick={() => handleUpgradeClick(tier.id)}
                disabled={checkoutTier !== null || tier.id === UserTier.LISTENER}
                className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4 text-[10px] ${
                  tier.id === UserTier.LISTENER 
                  ? 'bg-white/5 text-gray-800 cursor-not-allowed border border-white/5' 
                  : 'bg-white text-black hover:bg-latitude-red hover:text-white shadow-xl'
                }`}
             >
                {checkoutTier === tier.id ? 'UPLINKING...' : tier.cta}
             </button>
          </div>
        ))}
      </div>

      {/* Professional Feature Matrix */}
      <section className="bg-vst/40 border border-white/5 rounded-[50px] overflow-hidden p-8 md:p-16 shadow-2xl backdrop-blur-md">
         <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-12 text-center">Protocol <span className="text-latitude-solana">Matrix</span></h3>
         
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
               <thead>
                  <tr className="border-b border-white/10">
                     <th className="py-6 text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">Signal Parameter</th>
                     <th className="py-6 text-xs font-black text-white uppercase italic text-center">Listener</th>
                     <th className="py-6 text-xs font-black text-latitude-blue uppercase italic text-center">Fan Club</th>
                     <th className="py-6 text-xs font-black text-latitude-teal uppercase italic text-center">DJ Pro</th>
                     <th className="py-6 text-xs font-black text-latitude-solana uppercase italic text-center">Label Exec</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5 font-mono text-[10px]">
                  {pricingData.map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group">
                       <td className="py-6 pr-8 text-gray-500 font-black uppercase group-hover:text-white transition-colors tracking-widest">{row.label}</td>
                       <td className="py-6 text-center text-gray-700">{row.free}</td>
                       <td className="py-6 text-center text-latitude-blue">{row.promo}</td>
                       <td className="py-6 text-center text-latitude-teal">{row.pro}</td>
                       <td className="py-6 text-center text-latitude-solana">{row.premium}</td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </section>

      {/* Professional Infrastructure Teaser */}
      <section className="bg-[#0a0a0a] border-x-4 border-latitude-solana/20 py-24 px-12 rounded-[60px] text-center space-y-12 shadow-2xl">
         <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none">Direct <span className="text-latitude-solana">Injection</span></h2>
            <p className="max-w-2xl mx-auto text-gray-500 font-mono uppercase text-[10px] tracking-widest leading-loose">
              Latitude DJ Pro accounts feature low-latency hardware integration. Route your Serato, Rekordbox, or Traktor master output via virtual audio cable directly into our WebRTC broadcast hub. No external encoders required.
            </p>
         </div>
         <div className="flex flex-wrap justify-center gap-6 pt-6">
            <div className="px-10 py-4 bg-black border border-white/5 rounded-2xl flex flex-col items-center group hover:border-latitude-solana transition-all">
               <span className="text-[10px] font-black text-latitude-solana mb-1">LATENCY</span>
               <span className="text-xl font-mono text-white">&lt;15ms</span>
            </div>
            <div className="px-10 py-4 bg-black border border-white/5 rounded-2xl flex flex-col items-center group hover:border-latitude-solana transition-all">
               <span className="text-[10px] font-black text-latitude-solana mb-1">BITRATE</span>
               <span className="text-xl font-mono text-white">320kbps</span>
            </div>
            <div className="px-10 py-4 bg-black border border-white/5 rounded-2xl flex flex-col items-center group hover:border-latitude-solana transition-all">
               <span className="text-[10px] font-black text-latitude-solana mb-1">SAMPLE</span>
               <span className="text-xl font-mono text-white">48kHz</span>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Pricing;

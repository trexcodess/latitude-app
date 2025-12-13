import React from 'react';
import { UserTier } from '../types';

interface PricingProps {
  onUpgrade: (tier: UserTier) => void;
}

const Pricing: React.FC<PricingProps> = ({ onUpgrade }) => {
  const tiers = [
    {
      name: 'Listener',
      price: '$0',
      id: UserTier.LISTENER,
      features: ['Browse Marketplace', 'Collect NFTs', 'Global Chat Access'],
      cta: 'Current Plan',
      color: 'border-gray-500'
    },
    {
      name: 'Fan Club',
      price: '$9.99/mo',
      id: UserTier.FAN_CLUB,
      features: ['All Listener Perks', 'Full Minting Suite', 'Revenue Splitting', '1 Backstage Access'],
      cta: 'Upgrade Now',
      color: 'border-latitude-red shadow-lg shadow-red-500/20'
    },
    {
      name: 'Label Exec',
      price: '$49.99/mo',
      id: UserTier.LABEL_EXEC,
      features: ['All Fan Club Perks', 'Zero Platform Fees', 'All Backstage Areas', 'Early Access Drops', 'Direct Support'],
      cta: 'Go Premium',
      color: 'border-latitude-solana border-2'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 animate-fade-in">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black text-white mb-4 uppercase tracking-tighter">Choose Your <span className="text-latitude-red">Status</span></h2>
        <p className="text-gray-400">Join the collective. Support artists. Master your assets.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {tiers.map((t) => (
          <div key={t.id} className={`glass p-8 rounded-3xl flex flex-col items-center text-center border transition-all hover:scale-105 ${t.color}`}>
            <h3 className="text-2xl font-bold text-white mb-2">{t.name}</h3>
            <p className="text-4xl font-black text-latitude-red mb-8 font-mono">{t.price}</p>
            <ul className="space-y-4 mb-10 flex-1">
              {t.features.map((f, i) => (
                <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                  <span className="text-latitude-red">✓</span> {f}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => onUpgrade(t.id)}
              className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all ${
                t.id === UserTier.FAN_CLUB ? 'bg-latitude-red text-white' : 'border border-white/20 text-white hover:bg-white/10'
              }`}
            >
              {t.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
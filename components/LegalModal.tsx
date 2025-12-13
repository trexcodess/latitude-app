import React from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onAccept: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onAccept }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="max-w-xl w-full glass p-8 rounded-2xl shadow-2xl border-latitude-red/30">
        <h2 className="text-3xl font-bold text-latitude-red mb-6 uppercase tracking-tighter">Legal Sovereignty</h2>
        <div className="max-h-60 overflow-y-auto mb-8 text-sm text-gray-400 space-y-4 pr-2 font-mono">
          <p>By connecting your Phantom Wallet to Latitude, you acknowledge that you are entering a decentralized network.</p>
          <p>1. Ownership: You retain 100% intellectual property of minted assets, subject to the immutable revenue splits defined at the time of creation.</p>
          <p>2. Platform Fee: A non-negotiable 5% fee is applied to all primary sales for network maintenance.</p>
          <p>3. Risk: Crypto assets are volatile. Latitude is not responsible for losses incurred through market fluctuations or wallet mismanagement.</p>
          <p>4. Privacy: We do not store your private keys. Your wallet is your identity.</p>
        </div>
        <button 
          onClick={onAccept}
          className="w-full py-4 bg-latitude-red text-white font-bold uppercase tracking-widest hover:bg-red-600 transition-all rounded-lg"
        >
          I Consent & Connect
        </button>
      </div>
    </div>
  );
};

export default LegalModal;
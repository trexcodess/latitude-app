import React from 'react';

const Help: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-16 animate-fade-in">
      <section>
        <h2 className="text-4xl font-black text-white mb-8 border-b border-latitude-red/30 pb-4">PHANTOM WALLET SETUP</h2>
        <div className="glass p-8 rounded-2xl space-y-6">
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-latitude-red rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white">1</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Download Extension</h3>
              <p className="text-gray-400 text-sm">Visit <a href="https://phantom.app" className="text-latitude-solana underline">phantom.app</a> to install the official browser extension or mobile app. This is your vault.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-latitude-red rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white">2</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Secure Your Phrase</h3>
              <p className="text-gray-400 text-sm">Write down your 12-word Secret Recovery Phrase. Store it offline. If you lose it, Latitude cannot recover your funds.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-latitude-red rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white">3</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Fund with SOL</h3>
              <p className="text-gray-400 text-sm">Transfer SOL from an exchange like Coinbase or buy directly in the wallet. You'll need it for minting fees and collecting art.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-black text-white mb-8 border-b border-latitude-red/30 pb-4">PLATFORM FAQ</h2>
        <div className="space-y-4">
          <details className="glass rounded-xl p-4 cursor-pointer group">
            <summary className="font-bold text-white group-open:text-latitude-red transition-colors">How do Revenue Splits work?</summary>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">During the minting process, creators can assign percentages to collaborators. When a sale occurs, the smart contract automatically routes 5% to the platform and the rest proportionally to all defined wallets. Instant, trustless settlement.</p>
          </details>
          <details className="glass rounded-xl p-4 cursor-pointer group">
            <summary className="font-bold text-white group-open:text-latitude-red transition-colors">What is "Backstage" access?</summary>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">It's a private digital area unlocked only if you hold a specific NFT. It can contain unreleased tracks, private chatrooms, or high-res film stems.</p>
          </details>
          <details className="glass rounded-xl p-4 cursor-pointer group">
            <summary className="font-bold text-white group-open:text-latitude-red transition-colors">Can I use Latitude on Mobile?</summary>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">Yes! Use the in-app browser within the Phantom Mobile app for a seamless Web3 experience on the go.</p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default Help;
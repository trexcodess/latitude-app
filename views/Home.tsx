import React, { useEffect } from 'react';
import { ViewState } from '../types';

interface HomeProps {
  setView: (view: ViewState) => void;
}

const Home: React.FC<HomeProps> = ({ setView }) => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      document.querySelectorAll('.scaffold-box').forEach((box, index) => {
        if (box instanceof HTMLElement) {
          const shift = (index + 1) * 20;
          box.style.transform = `translate(${x * shift}px, ${y * shift}px)`;
        }
      });

      const lines = document.querySelectorAll('.scaffold-line');
      if (lines[0] instanceof HTMLElement) {
        lines[0].style.transform = `translateX(${x * 10}px)`;
      }
      if (lines[1] instanceof HTMLElement) {
        lines[1].style.transform = `translateX(${x * -10}px)`;
      }
    };

    console.log("LATITUDE: CORE_INITIATED");
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
        <title>LATITUDE | TCE</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&family=JetBrains+Mono:wght@300;500&display=swap" rel="stylesheet" />

        <div className="scaffold-overlay"></div>
        <div className="scaffold-line v left-[10vw]"></div>
        <div className="scaffold-line v left-[90vw]"></div>
        <div className="scaffold-line h top-[15vh]"></div>
        
        <div className="obsidian-reflect"></div>

        <nav>
            <div className="logo tracking-tighter">LATITUDE</div>
            <div className="nav-links">
                <span className="mono mb-5 text-latitude-red"> // Online</span>
                <button className="nav-link" onClick={() => setView(ViewState.MARKETPLACE)}>MARKETPLACE</button>
                <button className="nav-link" onClick={() => setView(ViewState.SOCIAL)}>SOCIAL</button>
                <button className="nav-link" onClick={() => setView(ViewState.CREATE)}>STUDIO</button>
                <button className="nav-link" onClick={() => setView(ViewState.MINTING)}>MINT</button>
                <button className="nav-link" onClick={() => setView(ViewState.HELP)}>HELP CENTER</button>
            </div>
        </nav>

        {/* Studio Info Box */}
        <div className="scaffold-box box-1">
            <span className="mono text-latitude-red">Module 01 // NFT Studio</span>
            <p className="mt-5 text-sm opacity-60 font-light leading-relaxed">
                Generate, mint, and deploy. AI-assisted creation on Solana and XRP Ledger. 
                Your intellectual property, secured by blockchain.
            </p>
        </div>

        {/* Status Phase Box */}
        <div className="scaffold-box box-2">
            <span className="mono text-xs">Access Tier // Fan Club</span>
            <div className="mt-4 w-full h-0.5 bg-red-500/40"></div>
            <p className="mt-2 text-[10px] opacity-40 uppercase tracking-widest">Backstage Enabled</p>
        </div>

        <main>
            <div className="hero-container">
                <div className="title-wrap">
                    <h3>LATITUDE</h3>
                </div>
                <div className="title-wrap">
                    <h4 className="text-transparent stroke-white animation-delay-100">Creative Soveriegnty</h4>
                </div>
                
                <div className="accent-block"></div>

                <div className="hero-meta">
                    <div className="hero-description max-w-md">
                        The premiere AI-powered hub for Film, Music, and Art NFTs. 
                        Join the **Cloudship** ecosystem to mint on XRP or SOL with 0% hassle and 100% sovereignty.
                    </div>
                    <div className="flex items-end justify-end">
                        <div className="mono text-right text-[10px] opacity-50">
                            Cloudship Enterprise AI<br />
                            XRP + SOL Dual-Bridge<br />
                            5% Artist Revenue Split
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <div className="status-bar">
            <div className="coordinates mono">
                LAT: 34.0522° N, LON: 118.2437° W // ENGINE: GEMINI-FLASH-1.5
            </div>
            <button className="cta-btn" onClick={() => setView(ViewState.AUTH)}>
                ENTER BACKSTAGE
            </button>
        </div>
    </div>
  );
};

export default Home;
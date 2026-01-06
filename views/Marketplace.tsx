import React, { useEffect, useState } from 'react';
import { NFT, ViewState } from '../types';

interface MarketplaceProps {
  setView: (view: ViewState) => void;
}

const Marketplace: React.FC<MarketplaceProps> = ({ setView }) => {
  const [archiveItems, setArchiveItems] = useState<any[]>([]);
  const [regularItems, setRegularItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [floorPrice, setFloorPrice] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const GATEWAY_URL = "https://tomato-elderly-lungfish-379.mypinata.cloud/ipfs/";
  const DATA_CID = "QmQd2yB5Tqr4T2pB1kP6s3jxJdFp1q1b1q1b1q1b1q1b1/CLOUDSHIP";

  // Light Leak & Niche Hover Logic
  useEffect(() => {
    const lightLeak = document.getElementById('light-leak');
    if (!lightLeak) return;

    const handleMouseMove = (e: MouseEvent) => {
        lightLeak.style.left = e.clientX + 'px';
        lightLeak.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);

    const niches = document.querySelectorAll('.niche');
    niches.forEach(niche => {
        niche.addEventListener('mouseenter', () => {
            lightLeak.style.width = '600px';
            lightLeak.style.height = '600px';
            lightLeak.style.background = 'radial-gradient(circle, rgba(230, 0, 0, 0.1) 0%, transparent 70%)';
        });
        niche.addEventListener('mouseleave', () => {
            lightLeak.style.width = '400px';
            lightLeak.style.height = '400px';
            lightLeak.style.background = 'radial-gradient(circle, rgba(230, 0, 0, 0.05) 0%, transparent 70%)';
        });
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [loading]);

  // Pinata Data Fetch
  useEffect(() => {
    const fetchNfts = async () => {
      try {
        setLoading(true);
        const response = await fetch(GATEWAY_URL + DATA_CID);
        const data = await response.json();
        
        const allItems = Array.isArray(data) ? data : [data];

        // Archive = Cloudship/Gold tier items. Regular = the rest.
        const archive = allItems.filter(item => item.price > 2 || item.isArchive || item.name.includes("CLOUDSHIP"));
        const regular = allItems.filter(item => !archive.includes(item));
        
        const prices = allItems.map(i => i.price).filter(p => p > 0);

        setArchiveItems(archive);
        setRegularItems(regular);
        if (prices.length > 0) {
          setFloorPrice(Math.min(...prices));
          setTotalValue(prices.reduce((a, b) => a + b, 0));
        }

      } catch (error) {
        console.error('Globi could not reach the data stream:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchNfts();
  }, []);

  return (
    <>
    <title>TCE // Marketplace</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
    
    <style>{`
        :root {
            --basalt-deep: #050505;
            --basalt-surface: #0f0f0f;
            --crimson: #e60000;
            --blood-red: #8b0000;
            --text-main: #ffffff;
            --text-dim: #666666;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; cursor: crosshair; }

        body {
            background-color: var(--basalt-deep);
            color: var(--text-main);
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
        }

        .container { max-width: 1400px; margin: 0 auto; padding: 80px 40px; }

        header {
            display: flex; justify-content: space-between; align-items: flex-end;
            margin-bottom: 80px; border-bottom: 1px solid rgba(230, 0, 0, 0.2);
            padding-bottom: 20px;
        }

        .logo { font-family: 'JetBrains Mono', monospace; font-weight: 700; color: var(--crimson); letter-spacing: 0.2em; text-transform: uppercase; }

        .red-glitch { color: var(--crimson); text-shadow: 2px 0px 10px rgba(230, 0, 0, 0.5); }

        /* Niches */
        .niche-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 20px; margin-top: 60px; }
        .niche { position: relative; background: var(--basalt-surface); padding: 40px; transition: all 0.6s ease; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.05); }
        .niche:hover { transform: translateY(-10px); border-color: var(--crimson); }
        .niche-cloudship { grid-column: span 7; height: 500px; }
        .niche-gold { grid-column: span 5; height: 500px; }

        .niche-title { font-size: 42px; font-weight: 900; text-transform: uppercase; margin-top: 10px; }
        .niche-label { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--crimson); }
        .spot-counter { position: absolute; top: 40px; right: 40px; text-align: right; font-family: 'JetBrains Mono', monospace; }

        /* Visual Elements */
        .visual-cloudship { position: absolute; right: -20px; bottom: 40px; width: 300px; height: 150px; background: #1a1a1a; clip-path: polygon(0% 50%, 20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%); opacity: 0.3; }
        .visual-gold { position: absolute; right: 40px; bottom: 40px; width: 180px; height: 180px; border: 1px solid rgba(255, 215, 0, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .gold-core { width: 60%; height: 60%; background: radial-gradient(circle, #ffcc00 0%, transparent 70%); opacity: 0.2; }

        /* Regular Grid */
        .section-divider { margin: 80px 0 40px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 20px; font-family: 'JetBrains Mono'; font-size: 10px; color: var(--text-dim); text-transform: uppercase; }
        .regular-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; }
        .nft-card { background: var(--basalt-surface); border: 1px solid rgba(255,255,255,0.03); padding: 15px; transition: 0.3s; }
        .nft-card:hover { border-color: var(--crimson); }
        .card-visual { width: 100%; height: 200px; background-size: cover; background-position: center; margin-bottom: 15px; }

        #light-leak { position: fixed; pointer-events: none; z-index: 1; transform: translate(-50%, -50%); border-radius: 50%; transition: width 0.3s, height 0.3s; }
        .cta-button { margin-top: 30px; padding: 12px 24px; border: 1px solid var(--crimson); color: var(--crimson); font-family: 'JetBrains Mono'; text-transform: uppercase; text-decoration: none; display: inline-block; font-size: 11px; }
        .cta-button:hover { background: var(--crimson); color: white; }
    `}</style>

    <div id="light-leak"></div>

    <div className="container">
        <header>
            <div className="logo" onClick={() => setView(ViewState.HOME)}> NFT Marketplace</div>
            <div className="hero-meta">
                <span>Network: XRP // SOL</span>
                <span className="red-glitch">GLOBI: MONITORING</span>
            </div>
        </header>

        <h3>Limited <br/>Edition <br/><span className="red-glitch">Spots.</span></h3>

        {/* TOP NICHES */}
        <div className="niche-grid">
            <div className="niche niche-cloudship">
                <span className="niche-label">COLLECTION // 001</span>
                <div className="spot-counter">
                    <span style={{fontSize: '24px'}}>{archiveItems.length}</span>
                    <br/><span style={{fontSize: '10px', color: 'var(--crimson)'}}>● CLOUDSHIP REMAINING</span>
                </div>
                <h2 className="niche-title">CLOUDSHIP <br/>LIMITED</h2>
                <p style={{color: 'var(--text-dim)', maxWidth: '300px', fontSize: '13px', marginTop: '10px'}}>
                    Aerodynamic ethereal structures synthesized for high-altitude digital ownership.
                </p>
                <a href="#" className="cta-button">Initiate Acquisition</a>
                <div className="visual-cloudship"></div>
            </div>

            <div className="niche niche-gold">
                <span className="niche-label">COLLECTION // 002</span>
                <div className="spot-counter">
                    <span style={{fontSize: '24px'}}>5</span>
                    <br/><span style={{fontSize: '10px', color: 'var(--crimson)'}}>● AUTISTIC GOLD SPOTS</span>
                </div>
                <h2 className="niche-title">AUTISTIC <br/>GOLD</h2>
                <p style={{color: 'var(--text-dim)', maxWidth: '250px', fontSize: '13px', marginTop: '10px'}}>
                    Pure hyper-focus alchemy.
                </p>
                <a href="#" className="cta-button">Access Vault</a>
                <div className="visual-gold"><div className="gold-core"></div></div>
            </div>
        </div>

        {/* REGULAR MARKETPLACE */}
        <div className="section-divider">Standard Marketplace Feed</div>

        

        <div className="regular-grid">
            {loading ? <p>Syncing with Pinata...</p> : regularItems.map((nft, i) => (
                <div key={i} className="nft-card">
                    <div className="card-visual" style={{backgroundImage: `url(${nft.imageUrl || nft.image})`, opacity: 0.7}}></div>
                    <span style={{fontFamily: 'JetBrains Mono', color: 'var(--crimson)', fontSize: '10px'}}>#00{i+1}</span>
                    <h3 style={{fontSize: '14px', margin: '5px 0 15px'}}>{nft.name}</h3>
                    <div style={{display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #222', paddingTop: '10px'}}>
                        <span style={{fontFamily: 'JetBrains Mono'}}>{nft.price} SOL</span>
                        <button style={{background: 'none', border: 'none', color: 'white', fontSize: '10px', textTransform: 'uppercase', cursor: 'pointer'}}>Collect</button>
                    </div>
                </div>
            ))}
        </div>

        <div className="data-stream" style={{marginTop: '60px', display: 'flex', gap: '50px', opacity: 0.5, fontSize: '11px', fontFamily: 'JetBrains Mono'}}>
            <div>FLOOR: {floorPrice} SOL</div>
            <div>TOTAL VOLUME: {totalValue.toFixed(2)} SOL</div>
            <div>STATUS: NOMINAL</div>
        </div>
    </div>
    </>
  );
};

export default Marketplace;
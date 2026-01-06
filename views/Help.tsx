import React, { useEffect } from 'react';
import { ViewState } from '../types';

interface HelpProps {
    setView: (view: ViewState) => void;
}

const Help: React.FC<HelpProps> = ({ setView }) => {
    useEffect(() => {
        const bg = document.querySelector('.lattice-bg') as HTMLElement;
        const handleMouseMove = (e: MouseEvent) => {
            if (bg) {
                const x = (e.clientX / window.innerWidth) * 100;
                const y = (e.clientY / window.innerHeight) * 100;
                bg.style.setProperty('--mouse-x', `${x}%`);
                bg.style.setProperty('--mouse-y', `${y}%`);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        const items = document.querySelectorAll('.lattice-item');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        (entry.target as HTMLElement).style.opacity = '1';
                        (entry.target as HTMLElement).style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, { threshold: 0.1 });

        items.forEach(item => {
            (item as HTMLElement).style.opacity = '0';
            (item as HTMLElement).style.transform = 'translateY(30px)';
            (item as HTMLElement).style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
            observer.observe(item);
        });

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            items.forEach(item => observer.unobserve(item));
        };
    }, []);

    return (
        <>
            <style>{`
                :root {
                    --black: #080808;
                    --iron-dark: #121212;
                    --iron-light: #2a2a2a;
                    --blood-red: #ff0000;
                    --oxide-red: #8b0000;
                    --lattice-opacity: 0.15;
                    --transition: cubic-bezier(0.23, 1, 0.32, 1);
                }
                .help-body {
                    background-color: var(--black);
                    color: white;
                    font-family: 'Inter', sans-serif;
                    overflow-x: hidden;
                    line-height: 1.6; /* Increased for readability */
                }
                .lattice-bg {
                    position: fixed;
                    top: 0; left: 0; width: 100%; height: 100%;
                    z-index: -1;
                    background-image: 
                        linear-gradient(var(--iron-light) 1px, transparent 1px),
                        linear-gradient(90deg, var(--iron-light) 1px, transparent 1px);
                    background-size: 60px 60px;
                    opacity: var(--lattice-opacity);
                    mask-image: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, transparent 80%);
                    pointer-events: none;
                }
                .topography {
                    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                    z-index: -2; opacity: 0.4;
                    background: 
                        radial-gradient(circle at 20% 30%, var(--oxide-red) 0%, transparent 40%),
                        radial-gradient(circle at 80% 70%, #1a0000 0%, transparent 50%);
                    filter: contrast(150%) brightness(50%);
                }
                .help-header {
                    padding: 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    border-bottom: 1px solid var(--iron-light);
                    background: rgba(8, 8, 8, 0.8);
                    backdrop-filter: blur(10px);
                    position: sticky; top: 0; z-index: 100;
                }
                .brand { font-weight: 900; font-size: 1.5rem; letter-spacing: -0.05em; text-transform: uppercase; display: flex; flex-direction: column; }
                .brand span:last-child { color: var(--blood-red); font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; letter-spacing: 0.5em; margin-top: 4px; }
                
                .help-main { padding: 4rem 2rem; max-width: 1400px; margin: 0 auto; }
                .hero-title { font-size: clamp(3rem, 8vw, 6rem); line-height: 0.9; text-transform: uppercase; margin-bottom: 3rem; font-weight: 900; }
                .hero-title-red { color: var(--blood-red); }

                .lattice-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 2px; background-color: var(--iron-light); border: 1px solid var(--iron-light); }
                .lattice-item { background-color: var(--black); padding: 2.5rem; min-height: 380px; display: flex; flex-direction: column; transition: all 0.5s var(--transition); position: relative; overflow: hidden; }
                .lattice-item h3 { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--blood-red); text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 1.25rem; }
                .lattice-item h2 { font-size: 1.5rem; text-transform: uppercase; font-weight: 900; margin-bottom: 1rem; color: #fff; }
                .lattice-item p { font-size: 0.95rem; color: #aaa; margin-bottom: 1.5rem; }
                .lattice-item ul { list-style: none; padding: 0; margin-bottom: 2rem; }
                .lattice-item li { font-size: 0.85rem; color: #888; margin-bottom: 0.5rem; display: flex; align-items: center; }
                .lattice-item li::before { content: '→'; color: var(--blood-red); margin-right: 10px; }

                .red-btn { background: var(--blood-red); color: white; padding: 1rem 2rem; text-decoration: none; font-weight: 900; text-transform: uppercase; font-size: 0.8rem; transition: transform 0.3s; display: inline-block; }
                .red-btn:hover { transform: scale(1.05); }
            `}</style>

            <div className="help-body">
                <div className="topography"></div>
                <div className="lattice-bg"></div>

                <header className="help-header">
                    <div className="brand">
                        <span>Latitude</span>
                        <span>Support Protocol</span>
                    </div>
                    <button onClick={() => setView(ViewState.HOME)} className="red-btn" style={{padding: '0.5rem 1.5rem'}}>Back to Hub</button>
                </header>

                <main className="help-main">
                    <h1 className="hero-title">Knowledge<br /><span className="hero-title-red">Base V.01</span></h1>

                    <div className="lattice-grid">
                        {/* 01: What is an NFT */}
                        <div className="lattice-item">
                            <h3>001 // Basics</h3>
                            <h2>What is an NFT?</h2>
                            <p>A digital certificate of ownership. It proves you own a unique piece of art or music.</p>
                            <ul>
                                <li>Non-Fungible = One of a kind.</li>
                                <li>Token = Digital receipt on the blockchain.</li>
                            </ul>
                        </div>

                        {/* 02: The Networks */}
                        <div className="lattice-item">
                            <h3>002 // Infrastructure</h3>
                            <h2>XRP & Solana</h2>
                            <p>We use two fast, eco-friendly blockchains to secure your creations.</p>
                            <ul>
                                <li>Solana: High speed, uses Phantom Wallet.</li>
                                <li>XRP: Institutional grade, ultra-low fees.</li>
                            </ul>
                        </div>

                        {/* 03: Minting */}
                        <div className="lattice-item">
                            <h3>003 // Creation</h3>
                            <h2>NFT Studio</h2>
                            <p>Our AI-powered workbench where you turn files into permanent assets.</p>
                            <ul>
                                <li>Upload your media.</li>
                                <li>Set your royalty (Splits).</li>
                                <li>"Mint" to make it live.</li>
                            </ul>
                        </div>

                        {/* 04: Market */}
                        <div className="lattice-item">
                            <h3>004 // Commerce</h3>
                            <h2>Marketplace</h2>
                            <p>Trade your NFTs with others in the Cloudship ecosystem.</p>
                            <ul>
                                <li>5% platform fee on sales.</li>
                                <li>Instant payouts to your wallet.</li>
                            </ul>
                        </div>

                        {/* 05: Access */}
                        <div className="lattice-item">
                            <h3>005 // Tiers</h3>
                            <h2>Backstage</h2>
                            <p>Ownership grants you access to private areas and exclusive content.</p>
                            <ul>
                                <li>Listener, Fan Club, and Exec tiers.</li>
                                <li>Unlock private community chats.</li>
                            </ul>
                        </div>

                        {/* 06: Fees */}
                        <div className="lattice-item">
                            <h3>006 // Economy</h3>
                            <h2>System Fees</h2>
                            <p>The network requires a tiny fee to process your ownership.</p>
                            <ul>
                                <li>Minting: Usually under $1.</li>
                                <li>Secondary sales: 5% Latitude fee.</li>
                            </ul>
                        </div>
                    </div>
                </main>

                <footer className="help-footer" style={{padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid var(--iron-light)'}}>
                    <h2 style={{fontSize: '2rem', marginBottom: '2rem'}}>Still Need Assistance?</h2>
                    <p style={{color: '#888', marginBottom: '2rem'}}>Our AI Concierge Gemma is available at the bottom right of your screen.</p>
                </footer>
            </div>
        </>
    );
};

export default Help;
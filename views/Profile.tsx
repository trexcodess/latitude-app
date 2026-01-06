
import React from 'react';
import { UserProfile, NFTItem, ViewState } from '../types';

const Profile: React.FC<{
  user: UserProfile | null,
  nfts: NFTItem[],
  onUpdateProfile: (u: UserProfile) => void,
  setView: (view: ViewState) => void;
}> = ({ user, nfts, onUpdateProfile, setView }) => {

  if (!user) return null;

  const userVault = nfts.filter(n => n.ownerId === user.id || n.creatorId === user.id);
  const totalVolume = userVault.reduce((acc, nft) => acc + nft.price, 0).toFixed(2);
  const floorPrice = userVault.length > 0 ? Math.min(...userVault.map(nft => nft.price)).toFixed(2) : '0.00';

  return (
    <>
      <style>{`
        :root {
            --ink-black: #080808;
            --blood-red: #FF0000;
            --stone-grey: #1A1A1A;
            --white: #F5F5F5;
            --dither-opacity: 0.15;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; cursor: crosshair; }
        body {
            background-color: var(--ink-black); color: var(--white);
            font-family: 'Inter', sans-serif; overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
        }
        .inkstone-texture {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none; z-index: 9999; opacity: var(--dither-opacity);
            mix-blend-mode: overlay;
        }
        .mono { font-family: 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: -0.05em; }
        .canvas {
            display: grid; grid-template-columns: repeat(12, 1fr);
            min-height: 100vh; padding: 2rem; gap: 1rem;
        }
        header {
            grid-column: 1 / 13; display: flex; justify-content: space-between;
            align-items: flex-end; border-bottom: 8px solid var(--blood-red);
            padding-bottom: 1rem; margin-bottom: 2rem;
            animation: slideDown 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .profile-title {
            font-size: clamp(3rem, 10vw, 12rem); line-height: 0.8;
            font-weight: 900; color: var(--white); text-transform: uppercase;
            letter-spacing: -0.08em;
        }
        .nav-links { text-align: right; grid-column: 9 / 13; }
        .hero-section {
            grid-column: 1 / 5; border-left: 1px solid var(--stone-grey);
            padding-left: 1.5rem; animation: fadeIn 1s ease-out 0.3s both;
        }
        .hero-section p {
            font-size: 1.1rem; line-height: 1.4; color: #888;
            margin-bottom: 2rem; max-width: 300px;
        }
        .stats-slab {
            background: var(--stone-grey); padding: 2rem; grid-column: 1 / 5;
            border-radius: 0; transition: all 0.4s ease;
            position: relative; overflow: hidden; border: 1px solid transparent;
        }
        .stats-slab:hover {
            background: var(--blood-red); transform: translate(5px, -5px);
            box-shadow: -10px 10px 0px var(--white);
        }
        .stats-slab h3 { font-size: 0.75rem; margin-bottom: 0.5rem; }
        .stats-slab .value { font-size: 2.5rem; font-weight: 900; }
        .gallery {
            grid-column: 5 / 13; display: grid;
            grid-template-columns: repeat(2, 1fr); gap: 2rem;
        }
        .nft-card {
            position: relative; background: #000; aspect-ratio: 4/5;
            overflow: hidden; border: 1px solid #222; transition: border 0.3s ease;
        }
        .nft-card:hover { border-color: var(--blood-red); }
        .nft-card img {
            width: 100%; height: 100%; object-fit: cover;
            filter: grayscale(100%) contrast(120%);
            transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nft-card:hover img {
            filter: grayscale(0%) contrast(110%) brightness(0.8);
            transform: scale(1.05);
        }
        .nft-card .overlay {
            position: absolute; bottom: 0; left: 0; width: 100%;
            padding: 1.5rem; background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
            transform: translateY(20px); opacity: 0; transition: all 0.4s ease;
        }
        .nft-card:hover .overlay { transform: translateY(0); opacity: 1; }
        .compression-bar {
            height: 2px; background: var(--blood-red);
            width: 0%; margin-top: 10px; transition: width 0.5s ease;
        }
        .nft-card:hover .compression-bar { width: 100%; }
        @keyframes slideDown {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: var(--ink-black); }
        ::-webkit-scrollbar-thumb { background: var(--blood-red); }
        @media (max-width: 900px) {
            .canvas { display: block; }
            .hero-section, .stats-slab { margin-bottom: 2rem; width: 100%; }
            .gallery { grid-template-columns: 1fr; }
            .profile-title { font-size: 5rem; }
        }
      `}</style>
      
      <svg className="inkstone-texture" xmlns="http://www.w3.org/2000/svg">
        <filter id="dither">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
            <feColorMatrix type="saturate" values="0"/>
            <feComponentTransfer>
                <feFuncR type="discrete" tableValues="0 1"/>
                <feFuncG type="discrete" tableValues="0 1"/>
                <feFuncB type="discrete" tableValues="0 1"/>
            </feComponentTransfer>
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.4 0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#dither)" />
      </svg>

      <div className="canvas">
        <header>
          <h1 className="profile-title">{user.name.split(' ')[0]}<br/>{user.name.split(' ').slice(1).join(' ')}</h1>
          <div className="nav-links mono">
            <p>STATUS: ARCHIVING</p>
            <p>COORD: 40.7128° N, 74.0060° W</p>
          </div>
        </header>

        <aside className="hero-section">
          <p className="mono" style={{color: 'var(--blood-red)', fontWeight: 'bold', marginBottom: '0.5rem'}}>[ARTIST_PROFILE_01]</p>
          <p>{user.bio}</p>
          
          <div className="stats-slab mono">
            <h3>TOTAL_VOLUME</h3>
            <div className="value">{totalVolume} ETH</div>
            <div className="compression-bar" style={{width: '70%'}}></div>
          </div>
          
          <div className="stats-slab mono" style={{marginTop: '1rem'}}>
            <h3>FLOOR_PRICE</h3>
            <div className="value">{floorPrice} ETH</div>
            <div className="compression-bar" style={{width: '40%'}}></div>
          </div>

          <div style={{marginTop: '4rem'}}>
            <button className="mono" style={{background: 'none', border: '1px solid var(--white)', color: 'var(--white)', padding: '1rem 2rem', width: '100%', fontWeight: 'bold', transition: '0.3s'}}>
              FOLLOW_SIGNAL
            </button>
          </div>
        </aside>

        <main className="gallery">
          {userVault.map(nft => (
            <div key={nft.id} className="nft-card">
              <img src={nft.imageUrl} alt={nft.title} />
              <div className="overlay">
                <h2 className="mono">{nft.title}</h2>
                <div className="compression-bar"></div>
                <p className="mono" style={{fontSize: '0.8rem', marginTop: '0.5rem'}}>EDITION: 1/1</p>
              </div>
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default Profile;

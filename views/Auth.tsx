
import React, { useState, useEffect } from 'react';
import { ViewState, UserProfile, UserTier } from '../types';

interface AuthProps {
  setView: (view: ViewState) => void;
  onLogin: (user: UserProfile) => void;
}

const Auth: React.FC<AuthProps> = ({ setView, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      
      const brandH1 = document.querySelector('.brand-h1') as HTMLElement;
      if (brandH1) {
        brandH1.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleAuthAction = (e: React.FormEvent) => {
    e.preventDefault();
    const btn = (e.target as HTMLElement).querySelector('.btn-primary') as HTMLButtonElement;
    if (btn) {
      btn.innerHTML = isLogin ? 'VALIDATING...' : 'GENERATING...';
      btn.style.backgroundColor = '#000';
      btn.style.color = '#ff0000';
      btn.style.border = '1px solid #ff0000';

      setTimeout(() => {
        btn.innerHTML = 'ACCESS GRANTED';
        btn.style.boxShadow = '0 0 50px #ff0000';
        const dummyUser: UserProfile = {
            id: 'dummy_user',
            name: 'NULL VECTOR',
            handle: 'nullvector',
            bio: 'Deconstructing digital artifacts through high-pressure inkstone compression. Exploring the intersection of brutalist geometry and dithered organic matter.',
            avatarUrl: 'https://i.pravatar.cc/150?u=nullvector',
            bannerUrl: '',
            tier: UserTier.LISTENER,
            socials: {}
        };
        setTimeout(() => onLogin(dummyUser), 1000);
      }, 1500);
    }
  };

  return (
    <>
      <style>{`
        :root {
            --obsidian: #050505;
            --magma: #ff0000;
            --magma-dim: #5c0000;
            --glass: rgba(10, 10, 10, 0.8);
            --fissure-glow: drop-shadow(0 0 8px rgba(255, 0, 0, 0.4));
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            cursor: crosshair;
        }
        .auth-body {
            background-color: var(--obsidian);
            color: white;
            font-family: 'Inter', sans-serif;
            overflow: hidden;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .grain-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 100;
            opacity: 0.04;
        }
        .fissure-container {
            position: relative;
            width: 100vw;
            height: 100vh;
            display: grid;
            grid-template-columns: 1fr 1fr;
            background: 
                radial-gradient(circle at 70% 50%, var(--magma-dim) 0%, transparent 60%),
                linear-gradient(135deg, #0a0a0a 0%, #000 100%);
        }
        .plate-left {
            position: relative;
            padding: 4rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            z-index: 2;
            clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
            background: var(--obsidian);
            border-right: 2px solid var(--magma);
            box-shadow: 20px 0 80px rgba(0,0,0,0.8);
            animation: plateShift 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes plateShift {
            from { transform: translateX(-100%); }
            to { transform: translateX(0); }
        }
        .brand-h1 {
            font-size: clamp(3rem, 8vw, 10rem);
            line-height: 0.85;
            letter-spacing: -0.05em;
            margin-bottom: 1rem;
            text-transform: uppercase;
            font-weight: 900;
            filter: var(--fissure-glow);
        }
        .brand-sub {
            font-family: 'Space Mono', monospace;
            font-size: 0.75rem;
            letter-spacing: 0.5em;
            color: var(--magma);
            text-transform: uppercase;
            opacity: 0;
            animation: fadeIn 1s 0.8s forwards;
        }
        .plate-right {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4rem;
        }
        .auth-portal {
            width: 100%;
            max-width: 420px;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeIn 1.5s 0.5s forwards;
        }
        @keyframes fadeIn {
            to { opacity: 1; transform: translateY(0); }
        }
        .input-group {
            position: relative;
            margin-bottom: 2.5rem;
        }
        .input-group label {
            font-family: 'Space Mono', monospace;
            font-size: 0.65rem;
            color: #666;
            text-transform: uppercase;
            display: block;
            margin-bottom: 0.5rem;
            transition: color 0.3s;
        }
        input {
            width: 100%;
            background: transparent;
            border: none;
            border-bottom: 1px solid #333;
            padding: 1rem 0;
            color: white;
            font-family: 'Space Mono', monospace;
            font-size: 1rem;
            outline: none;
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        input:focus {
            border-bottom-color: var(--magma);
            padding-left: 10px;
        }
        input:focus + label {
            color: var(--magma);
        }
        .magma-line {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 1px;
            width: 0;
            background: var(--magma);
            transition: width 0.4s ease;
            box-shadow: 0 0 10px var(--magma);
        }
        input:focus ~ .magma-line {
            width: 100%;
        }
        .actions {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            margin-top: 4rem;
        }
        .btn-primary {
            background: var(--magma);
            color: white;
            border: none;
            padding: 1.5rem;
            font-family: 'Space Mono', monospace;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            position: relative;
            overflow: hidden;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover {
            transform: scale(1.02);
            box-shadow: 0 0 30px rgba(255, 0, 0, 0.3);
        }
        .btn-primary::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
        }
        .btn-primary:hover::after {
            left: 100%;
        }
        .btn-secondary {
            background: transparent;
            color: #666;
            border: 1px solid #333;
            padding: 1rem;
            font-family: 'Space Mono', monospace;
            font-size: 0.7rem;
            text-transform: uppercase;
            transition: all 0.3s;
        }
        .btn-secondary:hover {
            border-color: var(--magma);
            color: white;
        }
        .shard {
            position: absolute;
            background: var(--magma);
            opacity: 0.2;
            pointer-events: none;
        }
        .shard-1 { width: 2px; height: 100px; top: 10%; right: 40%; transform: rotate(45deg); }
        .shard-2 { width: 1px; height: 200px; bottom: 5%; left: 45%; transform: rotate(-15deg); }
        @media (max-width: 900px) {
            .fissure-container { grid-template-columns: 1fr; }
            .plate-left { 
                clip-path: none; 
                border-right: none; 
                border-bottom: 4px solid var(--magma);
                height: 40vh;
                padding: 2rem;
                align-items: center;
                text-align: center;
            }
            .plate-right { height: 60vh; padding: 2rem; }
            .brand-h1 { font-size: 4rem; }
        }
      `}</style>
      <div className="auth-body">
        <svg className="absolute w-0 h-0">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
        </svg>

        <div className="grain-overlay" style={{ filter: 'url(#noiseFilter)' }}></div>

        <main className="fissure-container">
          <section className="plate-left">
            <div className="shard shard-1"></div>
            <div className="shard shard-2"></div>
            <p className="brand-sub">Creative Sovereignty</p>
            <h1 className="brand-h1">LATITUDE</h1>
            <p className="brand-sub opacity-40" style={{ letterSpacing: '0.1em'}}>EST. MMXXIV &copy;</p>
          </section>

          <section className="plate-right">
            <div className="auth-portal">
              <form onSubmit={handleAuthAction}>
                <div className="input-group">
                  <label htmlFor="identity">Sovereign Identity</label>
                  <input type="text" id="identity" placeholder="EMAIL OR PSEUDONYM" autoComplete="off" />
                  <div className="magma-line"></div>
                </div>

                <div className="input-group">
                  <label htmlFor="key">Access Cipher</label>
                  <input type="password" id="key" placeholder="••••••••••••" autoComplete="off" />
                  <div className="magma-line"></div>
                </div>

                <div className="actions">
                  <button type="submit" className="btn-primary">{isLogin ? 'Initiate Descent' : 'Create Sovereign ID'}</button>
                  <button type="button" className="btn-secondary" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Request Passage (Register)' : 'Already have an ID (Login)'}
                  </button>
                   <button
                        onClick={() => setView(ViewState.HOME)}
                        className="btn-secondary"
                    >
                        Continue as Guest
                    </button>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Auth;

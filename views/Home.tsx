import React, { useEffect } from 'react';
import { ViewState } from '../types';
import NewNavigation from '../components/NewNavigation';

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
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-container">
      <NewNavigation setView={setView} />
      <main id="main-content">
        <section className="hero-container">
          <header className="title-wrap">
            <h2 className="text-outline">Creative Sovereignty</h2>
          </header>

          <article className="hero-meta">
            <div className="hero-description">
              <p>
              Creative Sovereignty is the absolute right of a creator to own, manage, and distribute their intellectual property without the interference of predatory intermediaries. It is the transition from "Licensee" (where the label owns you) to "Governor" (where you own the code, the contract, and the cash flow).
              </p>
            </div>
            <aside className="stats-box mono">
               Cloudship Enterprise AI<br />
               XRP + SOL Dual-Bridge<br />
               5% Artist Revenue Split
            </aside>
          </article>
        </section>
      </main>

      <footer className="status-bar">
        <div className="coordinates mono" aria-label="Current location and engine status">
          LAT: 34.0522° N, LON: 118.2437° W // ENGINE: GEMINI-FLASH-1.5
        </div>
        <button className="cta-btn" onClick={() => setView(ViewState.AUTH)}>
          ENTER BACKSTAGE
        </button>
      </footer>
    </div>
  );
};

export default Home;
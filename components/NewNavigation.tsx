import React, { useState, useEffect, useRef } from 'react';
import { ViewState } from '../types';

interface NewNavigationProps {
  setView: (view: ViewState) => void;
}

const NewNavigation: React.FC<NewNavigationProps> = ({ setView }) => {
  const [isNavActive, setIsNavActive] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsNavActive(false);
      }
    };
    if (isNavActive) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isNavActive]);

  const handleNavClick = (view: ViewState) => {
    setView(view);
    setIsNavActive(false);
  };

  return (
    <>
      <style>{`
        .nav-shell {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 60px;
          background: #050505;
          border-bottom: 1px solid rgba(230, 0, 0, 0.2);
          z-index: 3000;
          font-family: 'JetBrains Mono', monospace;
        }

        .brand {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          flex: 1; /* Pushes links to center */
        }

        .brand-main {
          font-weight: 900;
          text-transform: uppercase;
          font-size: 20px;
          color: #fff;
          line-height: 1;
        }

        .brand-sub {
          font-size: 8px;
          text-transform: uppercase;
          color: #e60000;
          letter-spacing: 2px;
          margin-top: 4px;
        }

        /* DESKTOP HORIZONTAL LINKS */
        .nav-links {
          display: flex;
          flex-direction: row; /* Force horizontal */
          gap: 40px;
          align-items: center;
          justify-content: center;
          flex: 2; /* Takes up center space */
        }

        .nav-item {
          text-decoration: none;
          color: #888;
          font-size: 11px;
          text-transform: uppercase;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s;
          position: relative;
          padding: 10px 0;
        }

        .nav-item span {
          color: #e60000;
          font-size: 9px;
          margin-right: 8px;
        }

        .nav-item:hover {
          color: #fff;
        }

        /* Hover underline effect */
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: #e60000;
          transition: width 0.4s ease;
        }

        .nav-item:hover::after {
          width: 100%;
        }

        .nav-meta {
          flex: 1; /* Pushes links to center */
          text-align: right;
          font-size: 9px;
          color: #444;
          text-transform: uppercase;
        }

        .hamburger {
          display: none;
        }

        /* MOBILE & TABLET OVERRIDES */
        @media (max-width: 1024px) {
          .nav-shell { padding: 0 30px; }
          
          .nav-links {
            display: ${isNavActive ? 'flex' : 'none'};
            flex-direction: column; /* Vertical on mobile */
            position: absolute;
            top: 80px;
            left: 0;
            width: 100%;
            height: auto;
            background: #0a0a0a;
            padding: 50px 0;
            border-bottom: 2px solid #e60000;
            gap: 30px;
            flex: none;
          }

          .hamburger {
            display: flex;
            flex-direction: column;
            gap: 5px;
            z-index: 3100;
          }

          .hamburger div {
            width: 25px;
            height: 2px;
            background: #fff;
          }

          .nav-meta {
            display: none;
          }
        }
      `}</style>

      <header className="nav-shell" ref={navRef}>
        <div className="brand" onClick={() => handleNavClick(ViewState.HOME)}>
          <span className="brand-main">Latitude</span>
          <span className="brand-sub">Creative Sovereignty</span>
        </div>

        <nav className="nav-links">
          <a onClick={() => handleNavClick(ViewState.HOME)} className="nav-item"><span>01</span>Origin</a>
          <a onClick={() => handleNavClick(ViewState.MARKETPLACE)} className="nav-item"><span>02</span>Territory</a>
          <a onClick={() => handleNavClick(ViewState.CREATE)} className="nav-item"><span>03</span>Protocol</a>
          <a onClick={() => handleNavClick(ViewState.GOING_PLATINUM)} className="nav-item"><span>04</span>Platinum</a>
          <a onClick={() => handleNavClick(ViewState.HELP)} className="nav-item"><span>05</span>Help</a>
        </nav>

        <div className="nav-meta">
          SYS_LOG // NOMINAL<br />
          NODE // L-01_2026
        </div>

        <div className="hamburger" onClick={() => setIsNavActive(!isNavActive)}>
          <div style={{ transform: isNavActive ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
          <div style={{ opacity: isNavActive ? 0 : 1 }}></div>
          <div style={{ transform: isNavActive ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></div>
        </div>
      </header>
      
      {/* Spacer to prevent content from hiding behind header */}
      <div style={{ height: '80px' }}></div>
    </>
  );
};

export default NewNavigation;

import React, { useState } from 'react';
import { UserProfile, NFTItem } from '../types';

const Profile: React.FC<{ user: UserProfile | null, nfts: NFTItem[], onUpdateProfile: (u: UserProfile) => void }> = ({ user, nfts, onUpdateProfile }) => {
  const [activeTab, setActiveTab] = useState('COLLECTION');

  if (!user) return null;

  const userVault = nfts.filter(n => n.ownerId === user.id || n.creatorId === user.id);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 0, 60, 0.1) 0%, #0a0a0a 70%)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.background = '#0a0a0a';
  };

  return (
    <div className="app-container w-full">
      <div className="lattice-bg"></div>
      <div className="data-stream">LATITUDE_STREAMS // SECURE_NODE_099 // TR_VERIFIED</div>

      <div className="logo-box">
        <span>LAT</span>ITUDE
      </div>

      <aside className="profile-sidebar">
        <div className="machined-card">
          <div className="avatar-container">
            <img src={user.avatarUrl} alt="Avatar" className="avatar-img" />
            <div className="avatar-overlay"></div>
            <div className="scan-line"></div>
          </div>

          <span className="username">{user.name}</span>
          <span className="wallet-addr">{user.walletAddress || '0x...'}</span>

          <p style={{ fontSize: '0.75rem', lineHeight: 1.6, color: 'var(--text-dim)', marginTop: '15px' }}>
            {user.bio}
          </p>

          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-label">Holdings</span>
              <span className="stat-value">{userVault.length}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Net Value</span>
              <span className="stat-value">{userVault.reduce((acc, nft) => acc + nft.price, 0).toFixed(2)} SOL</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Rank</span>
              <span className="stat-value">#14</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Tier</span>
              <span className="stat-value">{user.tier}</span>
            </div>
          </div>

          <button className="btn-action">INITIATE TRADE</button>
        </div>
      </aside>

      <main className="content-main">
        <nav className="nav-tabs">
          <div className={`tab ${activeTab === 'COLLECTION' ? 'active' : ''}`} onClick={() => setActiveTab('COLLECTION')}>COLLECTION</div>
          <div className={`tab ${activeTab === 'ACTIVITY' ? 'active' : ''}`} onClick={() => setActiveTab('ACTIVITY')}>ACTIVITY</div>
          <div className={`tab ${activeTab === 'FAVORITES' ? 'active' : ''}`} onClick={() => setActiveTab('FAVORITES')}>FAVORITES</div>
          <div className={`tab ${activeTab === 'ARCHIVE' ? 'active' : ''}`} onClick={() => setActiveTab('ARCHIVE')}>ARCHIVE</div>
        </nav>

        <div className="nft-grid">
          {userVault.map(nft => (
            <div 
              key={nft.id} 
              className="nft-card" 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="corner-accent top-left"></div>
              <div className="corner-accent bottom-right"></div>
              <div className="nft-visual">
                <img src={nft.imageUrl} alt={nft.title} />
              </div>
              <div className="nft-meta">
                <div>
                  <span className="nft-series">{nft.type} // {nft.id}</span>
                  <span className="nft-title">{nft.title}</span>
                </div>
                <div className="nft-price">
                  <span className="price-label">LAST</span>
                  <span className="price-val">{nft.price} SOL</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Profile;

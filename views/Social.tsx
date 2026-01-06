
import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage, UserProfile, ViewState } from '../types';

const Social: React.FC<{ user: UserProfile | null, setView: (view: ViewState) => void; }> = ({ user, setView }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
        id: '1',
        user: 'User_882',
        text: 'The bass response in this lounge is incredible.',
        timestamp: Date.now() - 20000
    },
    {
        id: '2',
        user: 'X-PHASE [AI]',
        text: 'Adjusting sub-harmonics to match your biometric feedback. Enjoy the resonance.',
        timestamp: Date.now() - 10000,
        isAI: true
    },
    {
        id: '3',
        user: 'Nova_Core',
        text: 'Drop the serrated beats.',
        timestamp: Date.now()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const feedRef = useRef<HTMLDivElement>(null);

  // Animate visualizer bars
  useEffect(() => {
    const bars = document.querySelectorAll('.bar');
    const interval = setInterval(() => {
        bars.forEach(bar => {
            const height = Math.random() * 30 + 5;
            (bar as HTMLElement).style.height = `${height}px`;
        });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Scroll chat to bottom
  useEffect(() => {
    if (feedRef.current) {
        feedRef.current.scrollTop = feedRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim() === '') return;

    const newMessage: ChatMessage = {
        id: Date.now().toString(),
        user: user?.name || 'Guest_User',
        text: inputText,
        timestamp: Date.now(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');

    // Simulate AI response
    setTimeout(() => {
        const aiMessage: ChatMessage = {
            id: (Date.now() + 1).toString(),
            user: 'X-PHASE [AI]',
            text: 'Signal received. Integrating message into the sonic landscape.',
            timestamp: Date.now(),
            isAI: true
        };
        setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };
  
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.getHours() + ":" + date.getMinutes().toString().padStart(2, '0');
  }

  return (
    <>
      <style>{`
        :root {
            --obsidian: #050505;
            --blood-red: #ff0022;
            --deep-maroon: #4d000a;
            --glass-shine: rgba(255, 255, 255, 0.05);
            --serrated-edge: polygon(0% 0%, 95% 0%, 100% 5%, 100% 100%, 5% 100%, 0% 95%);
            --font-main: 'Inter', sans-serif;
            --font-data: 'JetBrains Mono', monospace;
        }

        .social-lounge-body {
            background-color: var(--obsidian);
            color: #fff;
            font-family: var(--font-main);
            height: 100vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        .social-lounge-body::before {
            content: "";
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
                        linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03));
            background-size: 100% 2px, 3px 100%;
            z-index: 100;
            pointer-events: none;
        }

        .social-lounge-header {
            height: 80px;
            border-bottom: 1px solid var(--deep-maroon);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 40px;
            background: rgba(5, 5, 5, 0.9);
            backdrop-filter: blur(10px);
            z-index: 50;
            flex-shrink: 0;
        }

        .logo {
            font-weight: 900;
            font-size: 1.5rem;
            letter-spacing: -1px;
            text-transform: uppercase;
            color: var(--blood-red);
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .logo-icon {
            width: 20px;
            height: 20px;
            background: var(--blood-red);
            clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
            animation: pulse 2s infinite ease-in-out;
        }

        .lounge-stats {
            font-family: var(--font-data);
            font-size: 0.7rem;
            color: var(--blood-red);
            text-transform: uppercase;
        }

        .social-lounge-main {
            flex: 1;
            display: grid;
            grid-template-columns: 1fr 400px;
            overflow: hidden;
        }

        .stage {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background: radial-gradient(circle at center, #1a0003 0%, #050505 70%);
            overflow: hidden;
        }

        .visualizer-ring {
            position: absolute;
            width: 450px;
            height: 450px;
            border: 2px solid var(--blood-red);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: rotate 20s linear infinite;
        }

        .visualizer-ring::after {
            content: "";
            position: absolute;
            top: -10px; left: -10px; right: -10px; bottom: -10px;
            border: 1px dashed var(--blood-red);
            border-radius: 50%;
            opacity: 0.3;
        }

        .dj-core {
            width: 280px;
            height: 280px;
            background: var(--obsidian);
            border: 4px solid var(--blood-red);
            clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 10;
            box-shadow: 0 0 50px rgba(255, 0, 34, 0.2);
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .dj-core:hover {
            transform: scale(1.05);
        }

        .dj-status {
            font-family: var(--font-data);
            font-size: 0.6rem;
            color: var(--blood-red);
            margin-bottom: 10px;
            letter-spacing: 2px;
        }

        .dj-name {
            font-weight: 900;
            font-size: 2rem;
            text-transform: uppercase;
            color: #fff;
            text-shadow: 0 0 10px var(--blood-red);
        }

        .audio-bars {
            display: flex;
            gap: 4px;
            height: 40px;
            align-items: flex-end;
            margin-top: 20px;
        }

        .bar {
            width: 3px;
            background: var(--blood-red);
            animation: resonance 1s ease-in-out infinite alternate;
        }

        .chat-panel {
            background: rgba(10, 10, 10, 0.95);
            border-left: 1px solid var(--deep-maroon);
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .chat-header {
            padding: 20px;
            font-family: var(--font-data);
            font-size: 0.8rem;
            border-bottom: 1px solid rgba(255, 0, 34, 0.1);
            color: var(--blood-red);
            display: flex;
            justify-content: space-between;
            flex-shrink: 0;
        }

        .chat-feed {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .message {
            background: rgba(20, 20, 20, 0.8);
            padding: 15px;
            border-left: 2px solid var(--blood-red);
            clip-path: var(--serrated-edge);
            position: relative;
            animation: slideIn 0.3s ease-out forwards;
        }

        .message.ai {
            background: linear-gradient(135deg, var(--deep-maroon) 0%, var(--obsidian) 100%);
            border-left-color: #fff;
        }

        .msg-meta {
            font-family: var(--font-data);
            font-size: 0.6rem;
            color: rgba(255, 255, 255, 0.4);
            margin-bottom: 5px;
            display: flex;
            justify-content: space-between;
        }

        .msg-text {
            font-size: 0.85rem;
            line-height: 1.4;
            color: #ddd;
        }

        .chat-input-area {
            padding: 20px;
            background: var(--obsidian);
            border-top: 1px solid var(--deep-maroon);
        }

        .input-wrapper {
            position: relative;
            background: #111;
            padding: 2px;
            clip-path: var(--serrated-edge);
        }

        .social-lounge-body input {
            width: 100%;
            background: transparent;
            border: none;
            padding: 15px;
            color: #fff;
            font-family: var(--font-data);
            outline: none;
        }

        .track-info {
            position: absolute;
            bottom: 40px;
            left: 40px;
            max-width: 300px;
        }

        .track-label {
            font-family: var(--font-data);
            font-size: 0.6rem;
            color: var(--blood-red);
            text-transform: uppercase;
        }

        .track-name {
            font-size: 1.2rem;
            font-weight: 900;
            margin-top: 5px;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.7; }
        }

        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        @keyframes resonance {
            0% { height: 5px; }
            100% { height: 35px; }
        }

        @keyframes slideIn {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
        }

        .chat-feed::-webkit-scrollbar { width: 4px; }
        .chat-feed::-webkit-scrollbar-track { background: var(--obsidian); }
        .chat-feed::-webkit-scrollbar-thumb { background: var(--deep-maroon); }

        .serrated-btn {
            background: var(--blood-red);
            color: white;
            border: none;
            padding: 8px 16px;
            font-family: var(--font-data);
            font-weight: 700;
            clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
            transition: all 0.2s;
            cursor: pointer;
        }

        .serrated-btn:hover {
            transform: skewX(-10deg);
            background: #fff;
            color: var(--obsidian);
        }
      `}</style>
      <div className="social-lounge-body">
        <header className="social-lounge-header">
            <div className="logo">
                <div className="logo-icon"></div>
                <span>Resonance</span>
            </div>
            <div className="lounge-stats">
                Status: Optimal // Listeners: 1,402 // Bitrate: 320kbps
            </div>
            <button className="serrated-btn" onClick={() => setView(ViewState.HOME)}>LEAVE_LOUNGE</button>
        </header>

        <main className="social-lounge-main">
            <section className="stage">
                <div className="visualizer-ring"></div>
                <div className="dj-core">
                    <div className="dj-status">AI SYNTHETIC DJ</div>
                    <div className="dj-name">X-PHASE</div>
                    <div className="audio-bars">
                        <div className="bar" style={{animationDelay: '0.1s'}}></div>
                        <div className="bar" style={{animationDelay: '0.3s'}}></div>
                        <div className="bar" style={{animationDelay: '0.2s'}}></div>
                        <div className="bar" style={{animationDelay: '0.5s'}}></div>
                        <div className="bar" style={{animationDelay: '0.4s'}}></div>
                        <div className="bar" style={{animationDelay: '0.6s'}}></div>
                        <div className="bar" style={{animationDelay: '0.2s'}}></div>
                    </div>
                </div>

                <div className="track-info">
                    <div className="track-label">Now Generating</div>
                    <div className="track-name">Obsidian Pulse - Kinetic Mix</div>
                </div>
            </section>

            <section className="chat-panel">
                <div className="chat-header">
                    <span>LIVE_FEED</span>
                    <span>ENC_v2.4</span>
                </div>
                
                <div className="chat-feed" ref={feedRef}>
                    {messages.map(msg => (
                        <div key={msg.id} className={`message ${msg.isAI ? 'ai' : ''}`}>
                            <div className="msg-meta">
                                <span>{msg.user}</span>
                                <span>{formatTime(msg.timestamp)}</span>
                            </div>
                            <div className="msg-text">{msg.text}</div>
                        </div>
                    ))}
                </div>

                <div className="chat-input-area">
                    <form className="input-wrapper" onSubmit={handleSendMessage}>
                        <input 
                            type="text" 
                            placeholder="Transmit signal..."
                            value={inputText}
                            onChange={e => setInputText(e.target.value)}
                        />
                    </form>
                </div>
            </section>
        </main>
      </div>
    </>
  );
};

export default Social;

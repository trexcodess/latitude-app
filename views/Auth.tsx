
import React, { useState, useEffect } from 'react';
import { UserProfile, ViewState } from '../types';
import { authService } from '../services/authService';

interface AuthProps {
  onLogin: (user: UserProfile) => void;
  setView: (view: ViewState) => void;
}

const STORAGE_KEY_EMAIL = 'latitude_saved_email';
const STORAGE_KEY_PASS = 'latitude_saved_pass';
const STORAGE_KEY_REMEMBER = 'latitude_remember_me';

const Auth: React.FC<AuthProps> = ({ onLogin, setView }) => {
  const [mode, setMode] = useState<'login' | 'register' | 'forgot'>('login');
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(() => localStorage.getItem(STORAGE_KEY_REMEMBER) === 'true');

  const [formData, setFormData] = useState({
    name: '',
    handle: '',
    email: '',
    password: ''
  });

  const [loginData, setLoginData] = useState({
    identifier: '',
    password: ''
  });

  // Load saved credentials on mount
  useEffect(() => {
    if (rememberMe) {
      const savedEmail = localStorage.getItem(STORAGE_KEY_EMAIL) || '';
      const savedPass = localStorage.getItem(STORAGE_KEY_PASS) || '';
      setLoginData({
        identifier: savedEmail,
        password: savedPass
      });
    }
  }, []);

  const validatePassword = (pass: string) => {
    return pass.length >= 8 && pass.length <= 32;
  };

  const handlePersistence = (email: string, pass: string) => {
    if (rememberMe) {
      localStorage.setItem(STORAGE_KEY_EMAIL, email);
      localStorage.setItem(STORAGE_KEY_PASS, pass);
      localStorage.setItem(STORAGE_KEY_REMEMBER, 'true');
    } else {
      localStorage.removeItem(STORAGE_KEY_EMAIL);
      localStorage.removeItem(STORAGE_KEY_PASS);
      localStorage.setItem(STORAGE_KEY_REMEMBER, 'false');
    }
  };

  const handleRegister = async () => {
    if (!validatePassword(formData.password)) {
      setError("Secret Key must be between 8 and 32 characters.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const newUser = await authService.register(formData);
      handlePersistence(formData.email, formData.password);
      setSuccess("Account created! Please check your email for a verification link.");
      setTimeout(() => onLogin(newUser), 2000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePassword(loginData.password)) {
      setError("Access Key must be 8-32 characters.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const user = await authService.login(loginData.identifier, loginData.password);
      handlePersistence(loginData.identifier, loginData.password);
      onLogin(user);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const user = await authService.loginWithGoogle();
      onLogin(user);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await authService.sendResetEmail(loginData.identifier);
      setSuccess("Reset link sent to your email.");
      setTimeout(() => setMode('login'), 3000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] animate-fade-in p-4 relative z-50">
      <div className="w-full max-w-lg bg-white dark:bg-[#080808] border border-gray-200 dark:border-latitude-dim shadow-2xl relative overflow-hidden transition-all duration-500 rounded-[40px]">
        
        {mode !== 'forgot' && (
          <div className="flex border-b border-gray-200 dark:border-latitude-dim p-2 gap-2 bg-black/5 dark:bg-black/40">
            <button 
              onClick={() => setMode('login')}
              className={`flex-1 py-4 text-[10px] font-black uppercase tracking-[0.4em] transition-all rounded-2xl ${mode === 'login' ? 'bg-latitude-red text-white shadow-xl' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
            >
              Login
            </button>
            <button 
              onClick={() => { setMode('register'); setStep(1); }}
              className={`flex-1 py-4 text-[10px] font-black uppercase tracking-[0.4em] transition-all rounded-2xl ${mode === 'register' ? 'bg-latitude-red text-white shadow-xl' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
            >
              Genesis
            </button>
          </div>
        )}

        <div className="p-12">
          {error && (
            <div className="mb-8 p-5 bg-red-500/10 border border-latitude-red/30 text-latitude-red text-[10px] font-black uppercase tracking-widest animate-shake rounded-2xl flex items-center gap-3">
              <span className="text-lg">⚡</span>
              {error}
            </div>
          )}
          {success && (
            <div className="mb-8 p-5 bg-green-500/10 border border-green-500/30 text-green-500 text-[10px] font-black uppercase tracking-widest rounded-2xl flex items-center gap-3">
              <span className="text-lg">✓</span>
              {success}
            </div>
          )}

          {mode === 'login' && (
            <form onSubmit={handleLogin} className="space-y-8">
               <div className="mb-10">
                 <h2 className="text-5xl font-black text-latitude-blue dark:text-white uppercase tracking-tighter leading-none mb-3 italic">Identity <span className="text-latitude-red">Sync</span></h2>
                 <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-mono">Input your sovereignty credentials.</p>
               </div>
               
               <div className="space-y-6">
                 <div>
                   <label className="block text-[9px] font-black text-gray-500 mb-3 uppercase tracking-[0.3em]">Authorized Email Vector</label>
                   <input 
                     type="email" 
                     required 
                     value={loginData.identifier}
                     onChange={e => setLoginData({...loginData, identifier: e.target.value})}
                     className="w-full bg-gray-50 dark:bg-black border border-gray-300 dark:border-latitude-dim p-5 text-black dark:text-white focus:border-latitude-red focus:outline-none transition-all rounded-2xl font-mono text-sm placeholder:text-gray-700" 
                     placeholder="SIGNAL_ID@CORE.NET" 
                   />
                 </div>
                 <div>
                   <div className="flex justify-between items-center mb-3">
                     <label className="text-[9px] font-black text-gray-500 uppercase tracking-[0.3em]">Neural Access Key</label>
                     <button type="button" onClick={() => setMode('forgot')} className="text-[9px] text-latitude-blue hover:text-latitude-red font-black uppercase tracking-widest transition-colors">Recover Key</button>
                   </div>
                   <div className="relative group">
                     <input 
                       type={showPassword ? "text" : "password"} 
                       required 
                       minLength={8}
                       maxLength={32}
                       value={loginData.password}
                       onChange={e => setLoginData({...loginData, password: e.target.value})}
                       className="w-full bg-gray-50 dark:bg-black border border-gray-300 dark:border-latitude-dim p-5 pr-14 text-black dark:text-white focus:border-latitude-red focus:outline-none transition-all rounded-2xl font-mono text-sm placeholder:text-gray-700" 
                       placeholder="••••••••" 
                     />
                     <button 
                        type="button" 
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white transition-colors"
                     >
                        {showPassword ? '🐵' : '🙈'}
                     </button>
                   </div>
                   {loginData.password.length > 0 && (
                     <div className="mt-3 flex gap-1">
                        {[...Array(4)].map((_, i) => (
                           <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${loginData.password.length >= (i+1)*8 ? 'bg-latitude-solana' : 'bg-gray-800'}`}></div>
                        ))}
                     </div>
                   )}
                 </div>

                 <div className="flex items-center gap-3 py-2">
                    <button 
                       type="button"
                       onClick={() => setRememberMe(!rememberMe)}
                       className={`w-6 h-6 rounded-lg border-2 transition-all flex items-center justify-center ${rememberMe ? 'bg-latitude-solana border-latitude-solana' : 'border-gray-800 hover:border-latitude-red'}`}
                    >
                       {rememberMe && <span className="text-[10px] text-black">✓</span>}
                    </button>
                    <span className="text-[9px] font-black uppercase text-gray-500 tracking-widest cursor-pointer" onClick={() => setRememberMe(!rememberMe)}>Persist Session (Local Storage)</span>
                 </div>
               </div>

               <button 
                 disabled={loading} 
                 className="w-full py-6 bg-latitude-red text-white font-black uppercase hover:bg-white hover:text-black transition-all tracking-[0.5em] rounded-2xl shadow-[0_20px_40px_rgba(255,0,0,0.2)] text-xs mt-4 border-b-4 border-red-900"
               >
                 {loading ? 'SYNCHRONIZING...' : 'INITIALIZE UPLINK'}
               </button>

               <div className="relative py-8">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200 dark:border-latitude-dim"></div></div>
                  <div className="relative flex justify-center text-[9px] uppercase font-black tracking-[0.4em] text-gray-700"><span className="px-4 bg-white dark:bg-[#080808]">Cross-Chain Auth</span></div>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <button type="button" onClick={handleGoogleLogin} className="flex items-center justify-center gap-3 p-5 border border-gray-200 dark:border-latitude-dim rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all group">
                     <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all" alt="G" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 group-hover:text-white">Google Hub</span>
                  </button>
                  <button type="button" onClick={() => setView(ViewState.HELP)} className="flex items-center justify-center gap-3 p-5 border border-gray-200 dark:border-latitude-dim rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all group">
                     <span className="text-xl opacity-40 group-hover:opacity-100 transition-opacity">👻</span>
                     <span className="text-[10px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 group-hover:text-white">Phantom</span>
                  </button>
               </div>
            </form>
          )}

          {mode === 'register' && (
            <div>
              {step === 1 ? (
                <div className="space-y-8">
                   <div className="mb-10">
                     <h2 className="text-5xl font-black text-latitude-blue dark:text-white uppercase tracking-tighter leading-none italic mb-3">New <span className="text-latitude-teal">Genesis</span></h2>
                     <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-mono">Register your creative footprint.</p>
                   </div>

                   <div className="space-y-6">
                     <div>
                       <label className="block text-[9px] font-black text-gray-500 mb-3 uppercase tracking-widest">Artist Designation</label>
                       <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-gray-50 dark:bg-black border border-gray-300 dark:border-latitude-dim p-5 text-black dark:text-white focus:border-latitude-teal focus:outline-none transition-all rounded-2xl font-mono text-sm" 
                          placeholder="ARTIST_NAME"
                        />
                     </div>
                     <div>
                       <label className="block text-[9px] font-black text-gray-500 mb-3 uppercase tracking-widest">Digital Vector (Email)</label>
                       <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-gray-50 dark:bg-black border border-gray-300 dark:border-latitude-dim p-5 text-black dark:text-white focus:border-latitude-teal focus:outline-none transition-all rounded-2xl font-mono text-sm" 
                          placeholder="EMAIL@PROTOCOL.COM"
                        />
                     </div>
                     <div>
                       <div className="flex justify-between mb-3">
                         <label className="block text-[9px] font-black text-gray-500 uppercase tracking-widest">Secret Access Key (8-32 Chars)</label>
                         <span className={`text-[9px] font-black uppercase tracking-widest ${validatePassword(formData.password) ? 'text-latitude-solana' : 'text-latitude-red'}`}>
                            {formData.password.length} / 32
                         </span>
                       </div>
                       <div className="relative group">
                          <input 
                            type={showPassword ? "text" : "password"} 
                            required
                            minLength={8}
                            maxLength={32}
                            value={formData.password}
                            onChange={e => setFormData({...formData, password: e.target.value})}
                            className="w-full bg-gray-50 dark:bg-black border border-gray-300 dark:border-latitude-dim p-5 pr-14 text-black dark:text-white focus:border-latitude-teal focus:outline-none transition-all rounded-2xl font-mono text-sm" 
                            placeholder="SECRET_KEY_V1"
                          />
                          <button 
                              type="button" 
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white transition-colors"
                          >
                              {showPassword ? '🐵' : '🙈'}
                          </button>
                       </div>
                       <div className="mt-3 flex gap-1">
                          {[...Array(4)].map((_, i) => (
                             <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${formData.password.length >= (i+1)*8 ? 'bg-latitude-teal' : 'bg-gray-800'}`}></div>
                          ))}
                       </div>
                     </div>
                   </div>

                   <button 
                     onClick={() => setStep(2)}
                     disabled={!formData.name || !formData.email || !validatePassword(formData.password)}
                     className="w-full py-6 bg-latitude-teal text-black font-black uppercase hover:bg-white transition-all tracking-[0.5em] mt-6 disabled:opacity-20 rounded-2xl shadow-xl text-xs border-b-4 border-latitude-blue"
                   >
                     VERIFY PROTOCOL
                   </button>
                </div>
              ) : (
                <div className="space-y-10 text-center animate-fade-in py-6">
                   <div className="mb-6 text-left">
                     <h2 className="text-4xl font-black text-latitude-blue dark:text-white uppercase tracking-tighter italic">Tier <span className="text-latitude-red">Selection</span></h2>
                     <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-mono mt-2">Initialize your creator contract.</p>
                   </div>

                   <div className="border border-latitude-red/20 bg-latitude-red/5 p-10 rounded-[40px] relative overflow-hidden group hover:scale-[1.02] transition-all shadow-inner">
                      <div className="absolute top-0 right-0 bg-latitude-red text-white text-[9px] font-black px-6 py-2 tracking-[0.3em] rounded-bl-3xl shadow-lg">CREATOR_V1</div>
                      <p className="text-[10px] text-gray-600 uppercase tracking-[0.5em] mb-4 font-black">Entry Frequency</p>
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-7xl font-black text-white italic tracking-tighter">$9.99</span>
                        <span className="text-gray-600 font-mono text-[10px] uppercase">/ Monthly Split</span>
                      </div>
                      <p className="text-[9px] font-mono text-gray-500 uppercase mt-4 tracking-widest italic opacity-50">Locked for early adopters.</p>
                   </div>

                   <div className="space-y-6">
                     <button 
                       onClick={handleRegister}
                       disabled={loading}
                       className="w-full py-6 bg-latitude-red text-white font-black rounded-3xl transition-all flex items-center justify-center gap-3 group shadow-[0_20px_40px_rgba(255,0,0,0.2)] border-b-4 border-red-900"
                     >
                       {loading ? <span className="animate-pulse font-mono tracking-[0.3em] uppercase text-[10px]">Processing Genesis...</span> : <span className="tracking-[0.5em] uppercase text-xs">Authorize Identity</span>}
                     </button>
                     <button onClick={() => setStep(1)} className="text-[10px] font-black text-gray-500 hover:text-white uppercase tracking-[0.3em] transition-colors border border-white/5 px-6 py-2 rounded-full">Recalibrate Signal</button>
                   </div>
                </div>
              )}
            </div>
          )}

          {mode === 'forgot' && (
             <form onSubmit={handleResetPassword} className="space-y-10">
                <div className="mb-10">
                  <h2 className="text-5xl font-black text-latitude-blue dark:text-white uppercase tracking-tighter leading-none mb-3 italic">Signal <span className="text-latitude-red">Lost</span></h2>
                  <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-mono">We'll broadcast a reset signal to your vector.</p>
                </div>
                <div>
                  <label className="block text-[9px] font-black text-gray-500 mb-3 uppercase tracking-[0.3em]">Registered Digital Vector (Email)</label>
                  <input 
                    type="email" 
                    required 
                    value={loginData.identifier}
                    onChange={e => setLoginData({...loginData, identifier: e.target.value})}
                    className="w-full bg-gray-50 dark:bg-black border border-gray-300 dark:border-latitude-dim p-5 text-black dark:text-white focus:border-latitude-red focus:outline-none transition-all rounded-2xl font-mono text-sm" 
                    placeholder="NAME@EMAIL.COM" 
                  />
                </div>
                <button 
                  disabled={loading} 
                  className="w-full py-6 bg-latitude-red text-white font-black uppercase hover:bg-white hover:text-black transition-all tracking-[0.5em] rounded-2xl shadow-2xl text-xs mt-4 border-b-4 border-red-900"
                >
                  {loading ? 'BROADCASTING...' : 'SEND RECOVERY SIGNAL'}
                </button>
                <div className="text-center">
                  <button type="button" onClick={() => setMode('login')} className="text-[10px] font-black text-gray-600 hover:text-white uppercase tracking-[0.4em] transition-colors border-b border-white/10 pb-1">Return to Login Protocol</button>
                </div>
             </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;


import React, { useState } from 'react';
import { UserProfile, ViewState } from '../types';
import { authService } from '../services/authService';

interface AuthProps {
  onLogin: (user: UserProfile) => void;
  setView: (view: ViewState) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin, setView }) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  const handleRegister = async () => {
    setLoading(true);
    setError(null);
    try {
      const newUser = await authService.register(formData);
      onLogin(newUser);
    } catch (err: any) {
      setError(err.message || 'Registration failed protocol.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const user = await authService.login(loginData.identifier, loginData.password);
      onLogin(user);
    } catch (err: any) {
      setError(err.message || 'Access denied by network security.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] animate-fade-in p-4 relative z-50">
      <div className="w-full max-w-md bg-white dark:bg-[#080808] border border-gray-200 dark:border-latitude-dim shadow-2xl relative overflow-hidden transition-all duration-500 rounded-3xl">
        <div className="flex border-b border-gray-200 dark:border-latitude-dim">
          <button 
            onClick={() => setMode('login')}
            className={`flex-1 py-5 text-xs font-black uppercase tracking-[0.3em] transition-all ${mode === 'login' ? 'bg-latitude-red text-white' : 'text-gray-500 hover:text-black dark:hover:text-white'}`}
          >
            Terminal Login
          </button>
          <button 
            onClick={() => { setMode('register'); setStep(1); }}
            className={`flex-1 py-5 text-xs font-black uppercase tracking-[0.3em] transition-all ${mode === 'register' ? 'bg-latitude-red text-white' : 'text-gray-500 hover:text-black dark:hover:text-white'}`}
          >
            Create Identity
          </button>
        </div>

        <div className="p-10">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border-l-4 border-latitude-red text-latitude-red text-xs font-bold uppercase tracking-wider animate-shake">
              {error}
            </div>
          )}

          {mode === 'login' ? (
            <form onSubmit={handleLogin} className="space-y-6">
               <div className="mb-8">
                 <h2 className="text-3xl font-black text-latitude-blue dark:text-white uppercase tracking-tighter leading-none mb-2">Sync Access</h2>
                 <p className="text-gray-500 text-xs uppercase tracking-widest">Enter root credentials or artist handle.</p>
               </div>
               
               <div>
                 <label className="block text-[10px] font-black text-latitude-red mb-2 uppercase tracking-[0.2em]">Identifier (Admin/Email/Handle)</label>
                 <input 
                   type="text" 
                   required 
                   value={loginData.identifier}
                   onChange={e => setLoginData({...loginData, identifier: e.target.value})}
                   className="w-full bg-gray-50 dark:bg-black border border-gray-300 dark:border-latitude-dim p-4 text-black dark:text-white focus:border-latitude-red focus:outline-none transition-all rounded-xl font-mono text-sm" 
                   placeholder="e.g. admin" 
                 />
               </div>
               <div>
                 <label className="block text-[10px] font-black text-latitude-red mb-2 uppercase tracking-[0.2em]">Access Key</label>
                 <input 
                   type="password" 
                   required 
                   value={loginData.password}
                   onChange={e => setLoginData({...loginData, password: e.target.value})}
                   className="w-full bg-gray-50 dark:bg-black border border-gray-300 dark:border-latitude-dim p-4 text-black dark:text-white focus:border-latitude-red focus:outline-none transition-all rounded-xl font-mono text-sm" 
                   placeholder="••••••••" 
                 />
               </div>

               <button 
                 disabled={loading} 
                 className="w-full py-5 bg-black dark:bg-white text-white dark:text-black font-black uppercase hover:bg-latitude-red dark:hover:bg-latitude-red hover:text-white transition-all tracking-[0.4em] rounded-xl shadow-xl mt-4"
               >
                 {loading ? 'Decrypting...' : 'Initiate Protocol'}
               </button>
            </form>
          ) : (
            <div>
              {step === 1 ? (
                <div className="space-y-5">
                   <div className="mb-8">
                     <h2 className="text-3xl font-black text-latitude-blue dark:text-white uppercase tracking-tighter leading-none mb-2">Genesis</h2>
                     <p className="text-gray-500 text-xs uppercase tracking-widest">Register your sovereignty footprint.</p>
                   </div>

                   <div>
                     <label className="block text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-widest">Artist Name</label>
                     <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-gray-50 dark:bg-black border border-gray-300 dark:border-latitude-dim p-4 text-black dark:text-white focus:border-latitude-teal focus:outline-none transition-all rounded-xl text-sm" 
                      />
                   </div>
                   <div>
                     <label className="block text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-widest">Handle</label>
                     <input 
                        type="text" 
                        required
                        value={formData.handle}
                        onChange={e => setFormData({...formData, handle: e.target.value})}
                        className="w-full bg-gray-50 dark:bg-black border border-gray-300 dark:border-latitude-dim p-4 text-latitude-red focus:border-latitude-red focus:outline-none transition-all rounded-xl font-mono text-sm" 
                        placeholder="@artist"
                      />
                   </div>
                   <div>
                     <label className="block text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-widest">Email Vector</label>
                     <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-gray-50 dark:bg-black border border-gray-300 dark:border-latitude-dim p-4 text-black dark:text-white focus:border-latitude-teal focus:outline-none transition-all rounded-xl text-sm" 
                      />
                   </div>
                   <div>
                     <label className="block text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-widest">Secret Key</label>
                     <input 
                        type="password" 
                        required
                        value={formData.password}
                        onChange={e => setFormData({...formData, password: e.target.value})}
                        className="w-full bg-gray-50 dark:bg-black border border-gray-300 dark:border-latitude-dim p-4 text-black dark:text-white focus:border-latitude-teal focus:outline-none transition-all rounded-xl text-sm" 
                      />
                   </div>

                   <button 
                     onClick={() => setStep(2)}
                     disabled={!formData.name || !formData.email || !formData.password}
                     className="w-full py-5 bg-latitude-blue text-white font-black uppercase hover:bg-latitude-teal hover:text-black transition-all tracking-[0.2em] mt-4 disabled:opacity-30 rounded-xl"
                   >
                     Next: Membership
                   </button>
                </div>
              ) : (
                <div className="space-y-8 text-center animate-fade-in">
                   <div className="mb-4">
                     <h2 className="text-3xl font-black text-latitude-blue dark:text-white uppercase tracking-tighter">Membership</h2>
                     <p className="text-gray-500 text-xs uppercase tracking-widest">Confirm your tier access.</p>
                   </div>

                   <div className="border border-latitude-red/20 bg-red-50 dark:bg-latitude-red/5 p-8 rounded-3xl relative overflow-hidden group hover:scale-[1.02] transition-transform">
                      <div className="absolute top-0 right-0 bg-latitude-red text-white text-[10px] font-black px-4 py-2 tracking-widest">STANDARD</div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-bold">Latitude Creator Access</p>
                      <p className="text-6xl font-black text-latitude-blue dark:text-white mb-2 font-mono tracking-tighter">$9.99</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Billed Monthly • Cancel Anytime</p>
                   </div>

                   <div className="space-y-4">
                     <button 
                       onClick={handleRegister}
                       disabled={loading}
                       className="w-full py-4 bg-[#FFC439] hover:bg-[#F4BB30] text-[#003087] font-black rounded-2xl transition-all flex items-center justify-center gap-2 group shadow-xl"
                     >
                       {loading ? (
                          <span className="animate-pulse font-mono tracking-widest uppercase text-xs">Processing Vault...</span>
                       ) : (
                          <>
                             <span className="italic font-serif font-black text-2xl">Pay</span>
                             <span className="font-black text-2xl">Pal</span>
                          </>
                       )}
                     </button>
                     
                     <button onClick={() => setStep(1)} className="text-[10px] font-black text-gray-400 hover:text-latitude-red uppercase tracking-[0.2em] transition-colors">
                        Modify Protocol Details
                     </button>
                   </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;

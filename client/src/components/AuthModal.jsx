import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const AuthModal = ({ isOpen, onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
          />

          {/* Modal Panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-md h-fit bg-[#0c0c0c] border border-white/10 rounded-[2.5rem] p-8 md:p-10 z-[110] shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors">
              <X size={24} />
            </button>

            <div className="text-center mb-10">
              <h2 className="text-3xl text-white font-bold tracking-tighter uppercase mb-2">
                {isLogin ? 'Welcome Back' : 'Join the Club'}
              </h2>
              <p className="text-zinc-500 text-sm font-light">
                {isLogin ? 'Access your private roasts and orders.' : 'Start your artisanal journey today.'}
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
              {!isLogin && (
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                  <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-colors" />
                </div>
              )}
              
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-colors" />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                <input type="password" placeholder="Password" className="w-full bg-white/5 border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-colors" />
              </div>

              <button className="w-full py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-amber-600 hover:text-white transition-all flex items-center justify-center gap-2 mt-4">
                {isLogin ? 'Sign In' : 'Create Account'}
                <ArrowRight size={14} />
              </button>
            </form>

            <div className="mt-8 text-center">
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-zinc-500 text-[10px] uppercase tracking-widest hover:text-amber-500 transition-colors"
              >
                {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
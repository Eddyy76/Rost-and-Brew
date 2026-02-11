import { motion } from 'framer-motion';
import { CheckCircle, Coffee, ArrowLeft } from 'lucide-react';

const OrderSuccess = ({ onBackToShop }) => {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full text-center"
      >
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <CheckCircle size={80} className="text-amber-500" />
            <motion.div 
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-amber-500 rounded-full blur-2xl -z-10"
            />
          </div>
        </div>

        <h1 className="text-4xl text-white font-bold tracking-tighter uppercase mb-4">Order Received</h1>
        <p className="text-zinc-500 font-light leading-relaxed mb-10">
          Your batch is being prepared by our master roasters. We'll email you once it's ready for dispatch.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-10 flex items-center gap-4 text-left">
          <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center">
            <Coffee className="text-amber-500" size={24} />
          </div>
          <div>
            <p className="text-white text-sm font-bold uppercase tracking-widest">Tracking Number</p>
            <p className="text-zinc-500 font-mono text-xs">RB-9921-2026-X</p>
          </div>
        </div>

        <button 
          onClick={onBackToShop}
          className="flex items-center justify-center gap-3 w-full py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-amber-600 hover:text-white transition-all"
        >
          <ArrowLeft size={14} />
          Back to Roastery
        </button>
      </motion.div>
    </div>
  );
};

export default OrderSuccess;
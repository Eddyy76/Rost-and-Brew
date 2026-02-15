import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cartItems, onRemove, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Sidebar Panel */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-[400px] bg-[#0c0c0c] border-l border-white/10 z-[70] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-amber-500" />
                <h2 className="text-xl text-white font-bold tracking-tighter uppercase">Your Bag</h2>
              </div>
              <button onClick={onClose} className="p-2 text-zinc-500 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-zinc-600 space-y-4">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="text-sm tracking-widest uppercase">Your bag is empty</p>
                </div>
              ) : (
                <AnimatePresence mode="popLayout">
                  {cartItems.map((item, index) => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, x: 50 }}
                      key={`${item.id}-${index}`} // unique key for popLayout
                      className="flex gap-4 items-center bg-white/5 p-3 rounded-xl border border-white/5"
                    >
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                      <div className="flex-1">
                        <h4 className="text-white text-sm font-medium">{item.name}</h4>
                        <p className="text-amber-500 font-mono text-xs">${item.price.toFixed(2)}</p>
                      </div>
                      <button 
                        onClick={() => onRemove(index)}
                        className="p-2 text-zinc-600 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer / Checkout */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-white/5 bg-black/40 backdrop-blur-xl space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 uppercase text-xs tracking-widest font-bold">Subtotal</span>
                  <span className="text-white font-mono text-xl">${total.toFixed(2)}</span>
                </div>
                
                {/* FIXED: Added onClick={onCheckout} */}
                <button 
                  onClick={onCheckout}
                  className="w-full py-4 bg-amber-600 text-white rounded-xl font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-amber-500 transition-all active:scale-95 shadow-[0_10px_20px_-5px_rgba(217,119,6,0.3)]"
                >
                  Continue to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
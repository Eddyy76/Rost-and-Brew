import { motion } from 'framer-motion';

const Navbar = ({ cartCount, onCartClick, onAccountClick, onShopClick, onInstantClick, onStoryClick, user, onLogout }) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 px-6 lg:px-12 py-6 flex justify-between items-center backdrop-blur-xl bg-black/10 border-b border-white/5"
    >
      {/* Brand Identity */}
      <div className="text-xl md:text-2xl font-bold tracking-[0.2em] text-white select-none">
        ROAST <span className="text-amber-500 italic font-serif">&</span> BREW
      </div>

      {/* Navigation Menu - Wired to Scroll Functions */}
      <div className="hidden md:flex gap-12 text-[10px] font-bold tracking-[0.3em] text-zinc-400 uppercase">
        <button onClick={onShopClick} className="relative group transition-colors hover:text-white outline-none">
          The Beans
          <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full" />
        </button>

        <button onClick={onInstantClick} className="relative group transition-colors hover:text-white outline-none">
          Instant
          <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full" />
        </button>

        <button onClick={onStoryClick} className="relative group transition-colors hover:text-white outline-none">
          Our Story
          <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full" />
        </button>
      </div>

      {/* Action Area */}
      <div className="flex items-center gap-6">
        {user ? (
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-[9px] text-zinc-500 uppercase tracking-tighter">Welcome back</p>
              <p className="text-[10px] font-bold text-amber-500 uppercase">{user.name}</p>
            </div>
            <button 
              onClick={onLogout}
              className="text-[9px] font-bold text-zinc-400 hover:text-red-500 transition-colors uppercase border border-white/10 px-3 py-1 rounded-md"
            >
              Exit
            </button>
          </div>
        ) : (
          <button 
            onClick={onAccountClick}
            className="text-[10px] font-bold tracking-widest text-zinc-400 hover:text-white transition-colors uppercase hidden sm:block"
          >
            Account
          </button>
        )}
        
        <button 
          onClick={onCartClick}
          className="relative group p-3 bg-white/5 border border-white/10 rounded-full hover:bg-amber-500 hover:border-amber-500 transition-all duration-300"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-white transition-transform group-hover:scale-110 group-hover:text-black"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>

          <motion.span 
            key={cartCount}
            initial={{ scale: 1.5 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-amber-600 text-[8px] font-black text-white rounded-full h-4 w-4 flex items-center justify-center border border-[#0a0a0a]"
          >
            {cartCount}
          </motion.span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
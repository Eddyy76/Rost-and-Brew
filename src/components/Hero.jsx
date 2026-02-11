import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = ({ onShopClick, onStoryClick }) => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const textY = useTransform(scrollY, [0, 500], [0, 150]);
  const cardY = useTransform(scrollY, [0, 500], [0, -100]);
  const cardRotate = useTransform(scrollY, [0, 500], [0, -10]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center px-6 lg:px-24 bg-[#050505] overflow-hidden selection:bg-amber-500/30"
    >
      {/* --- BACKGROUND LAYER --- */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -right-[5%] w-[800px] h-[800px] bg-gradient-to-br from-amber-600/30 to-transparent rounded-full blur-[160px]" 
      />
      
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* --- CONTENT LAYER --- */}
      <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-center z-10 w-full max-w-7xl mx-auto">
        
        <motion.div style={{ y: textY }} className="space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-amber-500/50" />
              <span className="text-amber-500 font-mono tracking-[0.5em] text-[10px] uppercase">
                Est. 2026 • Premium Origin
              </span>
            </div>

            <h1 className="text-8xl lg:text-[10rem] font-black text-white leading-[0.8] tracking-tighter">
              ROAST <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-zinc-200 to-zinc-500 italic font-serif py-2">
                &
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "110%" }}
                  transition={{ delay: 0.8, duration: 1.2 }}
                  className="absolute bottom-4 -left-[5%] h-[2px] bg-amber-600/50 blur-[1px]" 
                />
              </span>
              <br />
              BREW
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg text-zinc-500 max-w-sm font-light leading-relaxed tracking-tight"
          >
            Experience the intersection of <span className="text-zinc-200 uppercase text-xs font-bold tracking-widest">Heritage</span> and <span className="text-zinc-200 uppercase text-xs font-bold tracking-widest">Innovation</span>. 
            Curated beans for those who find beauty in the ritual.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-8"
          >
            <button 
              onClick={onShopClick}
              className="relative group px-12 py-5 overflow-hidden rounded-full transition-all"
            >
              <div className="absolute inset-0 bg-white group-hover:bg-amber-600 transition-colors duration-300" />
              <span className="relative text-black group-hover:text-white text-[10px] font-black uppercase tracking-[0.2em]">
                Shop Collection
              </span>
            </button>
            
            <button 
              onClick={onStoryClick}
              className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Our Process</span>
              <div className="w-8 h-[1px] bg-zinc-800 group-hover:w-12 group-hover:bg-amber-500 transition-all duration-300" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: 3D Card */}
        <motion.div 
          style={{ y: cardY, rotateZ: cardRotate }}
          className="relative perspective-1000 flex justify-center"
        >
          <motion.div 
            whileHover={{ rotateY: -15, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="relative w-full max-w-[320px] aspect-[3/4.5] bg-[#0c0c0c] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
              alt="Background"
            />
            <div className="absolute inset-0 p-10 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="h-12 w-12 border border-amber-500/50 flex items-center justify-center rounded-xl backdrop-blur-md">
                   <span className="text-amber-500 font-serif italic text-2xl">R</span>
                </div>
                <div className="text-[9px] text-zinc-400 font-mono flex flex-col items-end gap-1">
                  <span>BATCH #001</span>
                  <span className="text-amber-600 uppercase font-black tracking-tighter">Verified</span>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-4xl text-white font-serif italic leading-tight uppercase">Velvet<br/>Midnight</h3>
                  <p className="text-zinc-500 text-[9px] font-mono tracking-[0.3em] uppercase mt-2">Specialized Dark Roast</p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] text-zinc-400 uppercase tracking-widest font-bold">Flavor Profile</span>
                    <span className="text-amber-500 text-[9px] font-mono">09/10</span>
                  </div>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <div key={s} className="h-[2px] flex-1 bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ delay: 1.5 + (s * 0.1), duration: 0.8 }}
                          className="h-full bg-amber-500 origin-left" 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Rotating Text Badge */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-8 -left-8 w-24 h-24 border border-zinc-800 rounded-full backdrop-blur-xl flex items-center justify-center p-2 hidden lg:flex"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full fill-zinc-500 uppercase font-bold text-[8px] tracking-[2px]">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
              <text><textPath xlinkHref="#circlePath">ROASTED IN SMALL BATCHES • FRESH BEANS • </textPath></text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1 h-1 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,1)]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
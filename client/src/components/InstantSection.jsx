import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Timer, Droplet, ShieldCheck, Microscope, Cpu, ArrowUpRight } from 'lucide-react';

const InstantSection = () => {
  const containerRef = useRef(null);
  
  // Parallax for the floating image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const specs = [
    { icon: <Zap size={20} />, title: "10s Dissolve", value: "99.8%", label: "Solubility" },
    { icon: <Timer size={20} />, title: "Nitrogen Sealed", value: "12Mo", label: "Freshness" },
    { icon: <Droplet size={20} />, title: "Cold-Pressed", value: "4°C", label: "Extraction" },
    { icon: <Cpu size={20} />, title: "Precision Lab", value: "0.1°", label: "Variance" }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative py-60 bg-[#050505] overflow-hidden px-6 lg:px-24"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Top Header Layer */}
        <div className="grid lg:grid-cols-2 gap-10 mb-32 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
              <div className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-amber-500 text-[9px] font-black uppercase tracking-[0.4em]">Molecular Innovation</span>
            </div>
            
            <h2 className="text-7xl lg:text-[11rem] font-black text-white leading-[0.75] tracking-tighter uppercase">
              INSTANT <br /> 
              <span className="text-zinc-800">CRAFT.</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:pl-20 pb-4"
          >
            <p className="text-zinc-500 text-xl font-light leading-relaxed max-w-md italic border-l border-amber-500/30 pl-8">
              "We didn't just dehydrate coffee. We engineered a way to suspend the ritual of the morning in a single crystalline structure."
            </p>
          </motion.div>
        </div>

        {/* Main Content Layer: Asymmetric Grid */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
          
          {/* Left: Spec Cards with Micro-interactions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-8 bg-zinc-900/20 border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:bg-zinc-900/40 hover:border-amber-500/20"
              >
                <div className="text-zinc-600 group-hover:text-amber-500 transition-colors mb-12">
                  {spec.icon}
                </div>
                
                <div className="space-y-1">
                  <p className="text-amber-500 font-mono text-3xl font-bold tracking-tighter">{spec.value}</p>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">{spec.label}</p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <h4 className="text-white text-[11px] font-black uppercase tracking-widest">{spec.title}</h4>
                </div>

                {/* Corner Arrow Decor */}
                <ArrowUpRight className="absolute top-6 right-6 text-zinc-800 group-hover:text-amber-500 transition-colors" size={16} />
              </motion.div>
            ))}
          </div>

          {/* Right: The High-End Product Visualization */}
          <div className="relative">
            <motion.div 
              style={{ y: imageY }}
              className="relative aspect-[4/5] bg-zinc-900 rounded-[4rem] overflow-hidden border border-white/10 group"
            >
              {/* Image with Custom Zoom */}
              <img 
                src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1200" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-[2s] ease-out"
                alt="Molecular Coffee"
              />

              {/* Glass UI Floating Tag */}
              <div className="absolute top-12 left-12 p-6 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl">
                <p className="text-zinc-500 text-[8px] uppercase tracking-[0.4em] mb-2">Internal Batch</p>
                <p className="text-white font-mono text-sm tracking-tighter">REF: ALPHA-09-26</p>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-black via-transparent to-transparent">
                <div className="space-y-4">
                  <div className="h-[1px] w-20 bg-amber-500" />
                  <h3 className="text-4xl text-white font-serif italic leading-tight">The intersection of <br/> speed and soul.</h3>
                </div>
              </div>
            </motion.div>

            {/* Floating Info Badge */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-10 top-1/2 -translate-y-1/2 p-10 bg-amber-600 rounded-[3rem] shadow-2xl hidden xl:block"
            >
              <div className="text-center space-y-2">
                <p className="text-black font-black text-5xl tracking-tighter italic leading-none">0s</p>
                <p className="text-amber-950 text-[10px] font-bold uppercase tracking-widest">Residue</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Detailed Row */}
        <div className="mt-32 pt-20 border-t border-white/5 grid md:grid-cols-3 gap-12">
           <div className="space-y-4">
              <h5 className="text-white text-[10px] font-black uppercase tracking-[0.3em]">The Process</h5>
              <p className="text-zinc-600 text-sm font-light leading-relaxed">Our proprietary freeze-drying cycle lasts 48 hours at sub-zero temperatures, ensuring the cellular structure of the bean remains intact.</p>
           </div>
           <div className="space-y-4">
              <h5 className="text-white text-[10px] font-black uppercase tracking-[0.3em]">The Result</h5>
              <p className="text-zinc-600 text-sm font-light leading-relaxed">A crystal that dissolves instantly in 94°C water, recreating the exact sensory profile of a freshly poured V60 brew.</p>
           </div>
           <div className="space-y-4">
              <h5 className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Sustainability</h5>
              <p className="text-zinc-600 text-sm font-light leading-relaxed">90% reduction in shipping weight compared to liquid coffee, drastically lowering the carbon footprint of your morning ritual.</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default InstantSection;
import { motion } from 'framer-motion';

const StorySection = () => {
  return (
    <section className="py-40 px-6 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto space-y-12"
      >
        <span className="text-zinc-600 font-serif italic text-xl">The Heritage</span>
        <h2 className="text-5xl md:text-7xl text-white font-black tracking-tighter uppercase leading-[0.85]">
          Born in the <br /> 
          Highlands, <br />
          Refined in <br />
          <span className="text-amber-500">The Studio.</span>
        </h2>
        <div className="space-y-6 text-zinc-500 font-light text-lg leading-relaxed">
          <p>
            Roast & Brew started with a simple question: Why does the world’s most consumed beverage often lack the most care? 
          </p>
          <p>
            Our journey took us from the volcanic soils of Ethiopia to the high-tech roasteries of Lebanon. We believe that coffee is a bridge between the earth and the modern mind.
          </p>
        </div>
        
        <div className="pt-10">
          <div className="h-[1px] w-20 bg-amber-500 mx-auto opacity-50" />
        </div>
      </motion.div>
    </section>
  );
};

export default StorySection;
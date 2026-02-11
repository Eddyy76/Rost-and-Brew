import { motion } from 'framer-motion';
import { ShoppingBag, Plus } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-[#0c0c0c] border border-white/5 rounded-2xl overflow-hidden hover:border-amber-500/20 transition-all duration-500"
    >
      {/* Image Section - Scaled down aspect ratio */}
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900">
        <img 
          src={product.image} 
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        
        {/* Top Badges - Smaller padding */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
          <div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-white/5">
            <p className="text-[8px] text-amber-500 font-bold tracking-widest uppercase">
              {product.type}
            </p>
          </div>
          <button 
            onClick={onAddToCart}
            className="w-7 h-7 flex items-center justify-center bg-white text-black rounded-full scale-0 group-hover:scale-100 transition-all duration-300 hover:bg-amber-500 hover:text-white"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      {/* Content Section - Reduced padding from p-7 to p-4 */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-base text-white font-medium tracking-tight truncate">
            {product.name}
          </h3>
          <span className="text-amber-500 font-mono text-sm font-bold">
            ${product.price.toFixed(2)}
          </span>
        </div>
        
        <p className="text-zinc-500 text-[11px] uppercase tracking-tighter mb-3">
          Premium Roast
        </p>
        
        {/* Description - Smaller text and tighter margin */}
        <p className="text-zinc-400 text-xs leading-snug line-clamp-2 mb-4 h-8 font-light italic">
          {product.description}
        </p>

        {/* Action Button - Compact height */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart();
          }}
          className="w-full py-2.5 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
        >
          <ShoppingBag size={12} />
          <span className="text-[9px] font-bold tracking-[0.2em] uppercase">
            Add
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
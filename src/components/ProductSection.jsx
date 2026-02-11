import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import { products } from '../data/products';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-[#080808] pb-20 selection:bg-amber-500/30">
      <Navbar cartCount={cart.length} />
      
      <Hero />
      
      {/* The Product Section Container */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-32">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-amber-600 font-mono text-xs tracking-[0.3em] uppercase"
            >
              Selected Roasts
            </motion.span>
            <h2 className="text-5xl text-white font-bold tracking-tighter mt-2">
              Explore the <span className="italic font-serif font-light text-zinc-400">Catalogue</span>
            </h2>
          </div>
          
          {/* Cart Counter UI */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-zinc-400 text-xs uppercase tracking-widest">Cart Items:</span>
            <span className="text-white font-bold font-mono">{cart.length}</span>
          </div>
        </div>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={() => addToCart(product)} 
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-40 border-t border-white/5 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold text-white tracking-tighter">
            ROAST <span className="text-amber-500">&</span> BREW
          </div>
          <p className="text-zinc-600 text-[10px] tracking-[0.4em] uppercase text-center">
            Handcrafted for the restless • 2026
          </p>
          <div className="flex gap-6 text-zinc-400 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-amber-500">Instagram</a>
            <a href="#" className="hover:text-amber-500">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import AuthModal from './components/AuthModal';
import OrderSuccess from './components/OrderSuccess';
import InstantSection from './components/InstantSection';
import StorySection from './components/StorySection';

function App() {
  // --- REFS FOR SMOOTH SCROLLING ---
  const shopRef = useRef(null);
  const instantRef = useRef(null);
  const storyRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // --- STATE MANAGEMENT ---
  const [products, setProducts] = useState([]); // Now fetched from MongoDB
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [filter, setFilter] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);

  // --- FETCH LIVE DATA FROM RENDER ---
  useEffect(() => {
    // ⚠️ REPLACE THIS URL WITH YOUR RENDER BACKEND URL
    const API_URL = "https://your-backend-url.onrender.com/api/products";

    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  // --- LOGIC HANDLERS ---
  const addToCart = (product) => {
    setCart([...cart, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const handleLogin = () => {
    setUser({ name: 'HABIBI', email: 'dev@lebanon.com' });
    setIsAuthOpen(false);
  };

  const handleLogout = () => setUser(null);

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsOrdered(true);
  };

  const resetShop = () => {
    setCart([]);
    setIsOrdered(false);
  };

  // --- FILTER LOGIC ---
  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.type === filter);

  // --- LOADING STATE ---
  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-amber-600 tracking-[0.3em] uppercase text-xs animate-pulse">Brewing Data...</p>
        </div>
      </div>
    );
  }

  // --- SUCCESS STATE ---
  if (isOrdered) {
    return <OrderSuccess onBackToShop={resetShop} />;
  }

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-amber-500/30 text-white">
      <Navbar 
        cartCount={cart.length} 
        onCartClick={() => setIsCartOpen(true)} 
        onAccountClick={() => setIsAuthOpen(true)}
        onShopClick={() => scrollToSection(shopRef)}
        onInstantClick={() => scrollToSection(instantRef)}
        onStoryClick={() => scrollToSection(storyRef)}
        user={user}
        onLogout={handleLogout}
      />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cart} 
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
      />

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onLogin={handleLogin} 
      />

      <Hero 
        onShopClick={() => scrollToSection(shopRef)} 
        onStoryClick={() => scrollToSection(storyRef)} 
      />
      
      {/* SECTION 1: THE BEANS (SHOP) */}
      <section ref={shopRef} className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <h2 className="text-5xl text-white font-bold tracking-tighter uppercase">The Roast</h2>
            <p className="text-zinc-500 mt-2 tracking-widest uppercase text-[10px]">Curated Selection</p>
          </div>

          <div className="flex p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            {['All', 'Whole Bean', 'Instant'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  filter === category 
                  ? 'bg-amber-600 text-white shadow-lg' 
                  : 'text-zinc-500 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard 
                key={product._id || product.id} 
                product={product} 
                onAddToCart={() => addToCart(product)} 
              />
            ))
          ) : (
            <p className="text-zinc-500 col-span-full text-center py-20 uppercase tracking-widest text-xs">
              No beans found in the vault.
            </p>
          )}
        </div>
      </section>

      {/* SECTION 2: INSTANT TECH */}
      <section ref={instantRef}>
        <InstantSection />
      </section>

      {/* SECTION 3: OUR STORY */}
      <section ref={storyRef}>
        <StorySection />
      </section>

      <footer className="mt-20 border-t border-white/5 py-12 text-center">
        <p className="text-zinc-700 text-[9px] tracking-[0.5em] uppercase">
          Built for Developers • Roast & Brew Co. • 2026
        </p>
      </footer>
    </div>
  );
}

export default App;
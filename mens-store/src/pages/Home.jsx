import { products } from '../data/products';
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <main className="pt-20">
      <HeroSection />
      
      <section className="py-24">
        <div className="px-[5%] flex justify-between items-end mb-12">
          <div>
            <h2 className="font-bebas text-5xl tracking-widest uppercase mb-2">New Arrivals</h2>
            <div className="h-1 w-24 bg-white"></div>
          </div>
          <Link to="/shop" className="font-bebas text-sm uppercase tracking-widest hover:text-muted transition-colors">
            View All Collection →
          </Link>
        </div>
        
        <ProductGrid products={featuredProducts} />
      </section>

      <section className="relative h-[60vh] flex items-center justify-center bg-[url('/assets/images/cta-bg.jpg')] bg-cover bg-fixed">
        <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>
        <div className="relative z-10 text-center px-6">
          <h2 className="font-bebas text-5xl md:text-7xl mb-6">Join the Vanta Order</h2>
          <p className="font-inter text-muted mb-8 max-w-xl mx-auto">Get exclusive access to the darkest drops and modern essentials.</p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="ENTER EMAIL" 
              className="w-full bg-white/5 border border-white/20 px-6 py-4 font-inter text-white outline-none focus:border-white transition-colors"
            />
            <button className="bg-white text-black px-8 font-bebas text-lg hover:bg-muted transition-colors">JOIN</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

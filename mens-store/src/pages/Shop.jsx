import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'tops', 'bottoms', 'outerwear', 'accessories'];

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <main className="pt-32 min-h-screen">
      <div className="px-[5%] mb-12">
        <h1 className="font-bebas text-6xl tracking-widest mb-8">Shop Collection</h1>
        
        <div className="flex flex-wrap gap-6 border-b border-white/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-bebas text-xl tracking-widest uppercase transition-colors ${
                filter === cat ? 'text-white' : 'text-muted hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-[5%] py-12 animate-fade-in">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Shop;

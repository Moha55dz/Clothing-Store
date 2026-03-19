import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <h2 className="font-bebas text-4xl mb-4">Product Not Found</h2>
        <button onClick={() => navigate('/shop')} className="bg-white text-black px-8 py-3 font-bebas">Back to Shop</button>
      </div>
    );
  }

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  return (
    <main className="pt-32 pb-24 px-[5%] max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="group overflow-hidden rounded-xl bg-zinc-900 border border-white/5">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        <div className="flex flex-col justify-center">
          <button 
            onClick={() => navigate(-1)} 
            className="text-zinc-500 font-bebas mb-8 hover:text-white transition-colors"
          >
            ← BACK
          </button>
          <h1 className="font-bebas text-6xl tracking-widest mb-2 uppercase">{product.name}</h1>
          <p className="font-inter text-2xl text-muted mb-8">{product.price} {product.currency}</p>
          
          <div className="mb-10">
            <h3 className="font-bebas text-lg tracking-widest mb-4">Select Size</h3>
            <div className="flex flex-wrap gap-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-14 h-14 border flex items-center justify-center font-bebas text-xl transition-all ${
                    selectedSize === size 
                      ? 'bg-white text-black border-white' 
                      : 'border-white/20 text-muted hover:border-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="font-bebas text-lg tracking-widest mb-4">Description</h3>
            <p className="font-inter text-muted leading-relaxed max-w-lg">
              {product.description}
            </p>
          </div>

          <button 
            onClick={() => addToCart(product, selectedSize)}
            className="w-full bg-white text-black font-bebas text-2xl py-5 tracking-[0.2em] transform active:scale-95 transition-all hover:bg-zinc-200"
          >
            ADD TO BAG
          </button>
          
          <div className="mt-8 border-t border-white/10 pt-8 grid grid-cols-3 gap-4 text-center">
            <div className="text-zinc-500 font-bebas text-sm">Free Delivery</div>
            <div className="text-zinc-500 font-bebas text-sm">30 Day Returns</div>
            <div className="text-zinc-500 font-bebas text-sm">Premium Quality</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;

import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <main className="pt-40 pb-24 px-[5%] text-center min-h-screen">
        <h1 className="font-bebas text-6xl mb-8 uppercase tracking-widest">Your Bag is Empty</h1>
        <p className="font-inter text-muted mb-12">Looks like you haven't added anything to your cart yet.</p>
        <Link 
          to="/shop" 
          className="bg-white text-black font-bebas text-2xl px-12 py-5 tracking-widest hover:bg-muted transition-all"
        >
          Explore Shop
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-40 pb-24 px-[5%] max-w-7xl mx-auto min-h-screen">
      <h1 className="font-bebas text-6xl mb-12 uppercase tracking-widest border-b border-white/10 pb-8">Your Bag</h1>
      
      <div className="grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-8">
          {cart.map((item) => (
            <div key={`${item.id}-${item.size}`} className="flex gap-6 p-6 bg-zinc-900/50 border border-white/5 rounded-xl animate-fade-in">
              <div className="w-32 h-40 flex-shrink-0 overflow-hidden rounded-lg">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bebas text-2xl uppercase tracking-wider">{item.name}</h3>
                    <p className="font-inter text-xl">{item.price * item.quantity} {item.currency}</p>
                  </div>
                  <p className="text-zinc-500 font-inter text-sm mb-4">Size: {item.size}</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-white/20 px-2 py-1 gap-4">
                      <button 
                        onClick={() => updateQuantity(item.id, item.size, -1)}
                        className="text-muted hover:text-white transition-colors p-2"
                      >
                        -
                      </button>
                      <span className="font-bebas text-xl w-6 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.size, 1)}
                        className="text-muted hover:text-white transition-colors p-2"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => removeFromCart(item.id, item.size)}
                  className="text-zinc-600 hover:text-red-500 font-bebas text-sm uppercase tracking-widest transition-colors text-left"
                >
                  Remove Item
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-zinc-900 border border-white/10 p-8 rounded-xl sticky top-32">
            <h2 className="font-bebas text-3xl mb-8 uppercase tracking-widest border-b border-white/10 pb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between font-inter text-muted">
                <span>Subtotal</span>
                <span>{totalPrice} DZD</span>
              </div>
              <div className="flex justify-between font-inter text-muted">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="flex justify-between font-inter text-white text-xl border-t border-white/10 pt-4 mt-4">
                <span className="font-bebas tracking-widest">Total</span>
                <span>{totalPrice} DZD</span>
              </div>
            </div>
            
            <Link 
              to="/checkout"
              className="w-full bg-white text-black font-bebas text-2xl py-5 tracking-widest hover:bg-muted transition-all uppercase block text-center"
            >
              Checkout Now
            </Link>
            
            <p className="text-zinc-500 font-inter text-xs text-center mt-6 uppercase tracking-widest">
              Secure lightning-fast payment
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;

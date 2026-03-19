import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate, Link } from 'react-router-dom';

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Algeria',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  if (cart.length === 0) {
    navigate('/shop');
    return null;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      const message = paymentMethod === 'card' 
        ? 'Payment successful! Your order has been placed.' 
        : 'Order confirmed! You will pay upon delivery.';
      alert(`${message} Thank you for choosing VANTAWEAR.`);
      clearCart();
      navigate('/');
    }, 2500);
  };

  return (
    <main className="pt-40 pb-24 px-[5%] max-w-7xl mx-auto min-h-screen">
      <div className="grid lg:grid-cols-2 gap-20">
        <div className="animate-fade-in">
          <h1 className="font-bebas text-5xl mb-12 uppercase tracking-widest">Checkout</h1>
          
          <form onSubmit={handleSubmit} className="space-y-12">
            <section>
              <h2 className="font-bebas text-2xl mb-6 uppercase tracking-wider text-muted border-b border-white/10 pb-2">Contact Information</h2>
              <input
                required
                type="email"
                name="email"
                placeholder="EMAIL ADDRESS"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-white/20 py-4 font-inter outline-none focus:border-white transition-colors"
              />
            </section>

            <section>
              <h2 className="font-bebas text-2xl mb-6 uppercase tracking-wider text-muted border-b border-white/10 pb-2">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <input
                  required
                  type="text"
                  name="firstName"
                  placeholder="FIRST NAME"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="bg-transparent border-b border-white/20 py-4 font-inter outline-none focus:border-white transition-colors"
                />
                <input
                  required
                  type="text"
                  name="lastName"
                  placeholder="LAST NAME"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="bg-transparent border-b border-white/20 py-4 font-inter outline-none focus:border-white transition-colors"
                />
              </div>
              <input
                required
                type="text"
                name="address"
                placeholder="ADDRESS"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-white/20 py-4 font-inter outline-none focus:border-white transition-colors mb-6"
              />
              <div className="grid grid-cols-2 gap-6">
                <input
                  required
                  type="text"
                  name="city"
                  placeholder="CITY"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="bg-transparent border-b border-white/20 py-4 font-inter outline-none focus:border-white transition-colors"
                />
                <input
                  required
                  type="text"
                  name="postalCode"
                  placeholder="POSTAL CODE"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="bg-transparent border-b border-white/20 py-4 font-inter outline-none focus:border-white transition-colors"
                />
              </div>
            </section>

            <section>
              <h2 className="font-bebas text-2xl mb-6 uppercase tracking-wider text-muted border-b border-white/10 pb-2">Payment Method</h2>
              <div className="space-y-4 mb-8">
                <label className={`flex items-center gap-4 p-4 border transition-all cursor-pointer ${paymentMethod === 'card' ? 'border-white bg-white/5' : 'border-white/10 hover:border-white/30'}`}>
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    checked={paymentMethod === 'card'} 
                    onChange={() => setPaymentMethod('card')}
                    className="accent-white"
                  />
                  <span className="font-bebas text-lg tracking-widest uppercase">Credit / Debit Card</span>
                </label>
                
                <label className={`flex items-center gap-4 p-4 border transition-all cursor-pointer ${paymentMethod === 'cod' ? 'border-white bg-white/5' : 'border-white/10 hover:border-white/30'}`}>
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    checked={paymentMethod === 'cod'} 
                    onChange={() => setPaymentMethod('cod')}
                    className="accent-white"
                  />
                  <span className="font-bebas text-lg tracking-widest uppercase">Cash on Delivery</span>
                </label>

                <label className={`flex items-center gap-4 p-4 border transition-all cursor-pointer ${paymentMethod === 'delivery_point' ? 'border-white bg-white/5' : 'border-white/10 hover:border-white/30'}`}>
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    checked={paymentMethod === 'delivery_point'} 
                    onChange={() => setPaymentMethod('delivery_point')}
                    className="accent-white"
                  />
                  <span className="font-bebas text-lg tracking-widest uppercase">Pay at Delivery Company Point</span>
                </label>
              </div>

              {paymentMethod === 'card' && (
                <div className="animate-fade-in space-y-6">
                  <input
                    required
                    type="text"
                    name="cardNumber"
                    placeholder="CARD NUMBER"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-white/20 py-4 font-inter outline-none focus:border-white transition-colors"
                  />
                  <div className="grid grid-cols-2 gap-6">
                    <input
                      required
                      type="text"
                      name="expiryDate"
                      placeholder="MM / YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className="bg-transparent border-b border-white/20 py-4 font-inter outline-none focus:border-white transition-colors"
                    />
                    <input
                      required
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="bg-transparent border-b border-white/20 py-4 font-inter outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>
              )}

              {paymentMethod !== 'card' && (
                <div className="p-6 bg-white/5 border border-white/10 rounded-lg animate-fade-in">
                  <p className="font-inter text-muted text-sm italic">
                    {paymentMethod === 'cod' 
                      ? "You will pay the total amount in cash when the courier arrives at your doorstep." 
                      : "You will pay when you pick up your order from the selected delivery company branch."}
                  </p>
                </div>
              )}
            </section>

            <button
              disabled={isProcessing}
              type="submit"
              className={`w-full bg-white text-black font-bebas text-2xl py-6 tracking-[0.3em] uppercase transition-all ${
                isProcessing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-muted active:scale-95'
              }`}
            >
              {isProcessing ? 'Processing Order...' : 'Complete Purchase'}
            </button>
          </form>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-zinc-900/80 backdrop-blur-md border border-white/10 p-10 rounded-2xl sticky top-32">
            <h2 className="font-bebas text-3xl mb-8 uppercase tracking-widest border-b border-white/10 pb-4">Order Summary</h2>
            
            <div className="max-h-60 overflow-y-auto mb-8 pr-4 custom-scrollbar">
              {cart.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex justify-between items-center mb-6">
                  <div className="flex gap-4">
                    <div className="w-16 h-20 bg-black rounded overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bebas text-lg uppercase tracking-wider">{item.name}</h4>
                      <p className="text-zinc-500 font-inter text-xs">SIZE: {item.size} × {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-inter text-sm">{item.price * item.quantity} DZD</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex justify-between font-inter text-muted">
                <span>Subtotal</span>
                <span>{totalPrice} DZD</span>
              </div>
              <div className="flex justify-between font-inter text-muted text-sm italic">
                <span>Shipping</span>
                <span>Calculated at next step</span>
              </div>
              <div className="flex justify-between font-bebas text-white text-3xl pt-4 border-t border-white/10 mt-4 tracking-widest">
                <span>Total</span>
                <span>{totalPrice} DZD</span>
              </div>
            </div>
            
            <div className="mt-10">
              <Link to="/cart" className="text-zinc-600 hover:text-white font-bebas text-sm uppercase tracking-widest transition-colors block text-center">
                Return to Bag
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;

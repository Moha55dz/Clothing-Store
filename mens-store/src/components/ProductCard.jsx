import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card group relative overflow-hidden transition-all duration-300 hover:shadow-2xl bg-zinc-900/50 border border-white/5 rounded-lg">
      <Link to={`/product/${product.id}`} className="block overflow-hidden aspect-[4/5]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </Link>
      
      <div className="p-6">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-bebas text-2xl tracking-wide mb-1 group-hover:text-muted transition-colors uppercase">
            {product.name}
          </h3>
        </Link>
        <p className="font-inter text-muted mb-4">{product.price} {product.currency}</p>
        
        <button 
          onClick={() => addToCart(product, 'M')}
          className="w-full bg-white text-black font-bebas text-lg py-3 tracking-widest hover:bg-muted transition-all opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

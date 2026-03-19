import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-[5%] py-4 flex justify-between items-center">
      <div className="logo font-bebas text-2xl tracking-widest">
        <Link to="/" className="flex items-center gap-3">
          <img src="/assets/icons/Untitled_design-removebg-preview.png" alt="VANTAWEAR LOGO" className="h-10" />
          <span className="hidden sm:inline">VANTAWEAR</span>
        </Link>
      </div>
      
      <ul className="nav-links flex gap-8 font-bebas text-lg">
        <li>
          <Link to="/" className="hover:text-muted transition-colors">Home</Link>
        </li>
        <li>
          <Link to="/shop" className="hover:text-muted transition-colors">Shop</Link>
        </li>
      </ul>

      <div className="cart-icon font-bebas text-lg cursor-pointer hover:text-muted transition-colors">
        <Link to="/cart">
          CART (<span className="text-white">{totalItems}</span>)
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

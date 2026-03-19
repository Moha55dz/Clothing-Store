import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <header className="relative h-screen flex flex-col items-center justify-center text-center px-[5%] bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 animate-fade-in">
        <h1 className="font-bebas text-6xl md:text-8xl mb-4 leading-tight">
          WEAR THE DARK. <br /> OWN THE POWER.
        </h1>
        <p className="font-inter text-muted text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Built in black. Designed for modern strength and simplicity.
        </p>
        <Link 
          to="/shop" 
          className="bg-white text-black font-bebas text-xl px-12 py-4 hover:bg-muted transition-all transform hover:scale-105"
        >
          Shop Collection
        </Link>
      </div>
    </header>
  );
};

export default HeroSection;

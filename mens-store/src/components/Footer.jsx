const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-[5%] text-center">
      <div className="max-w-4xl mx-auto">
        <div className="font-bebas text-4xl mb-6 tracking-[0.2em] animate-pulse">
          VANTAWEAR
        </div>
        <p className="font-inter text-muted mb-10 max-w-md mx-auto">
          Defining modern strength through monochromatic simplicity. Join the order of shadows.
        </p>
        
        <div className="flex justify-center gap-8 font-bebas text-lg mb-10">
          <a href="#" className="hover:text-muted transition-colors">Instagram</a>
          <a href="#" className="hover:text-muted transition-colors">Twitter</a>
          <a href="#" className="hover:text-muted transition-colors">Terms</a>
        </div>
        
        <div className="text-zinc-700 text-sm font-inter">
          © 2026 VANTAWEAR. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

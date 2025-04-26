
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-transparent backdrop-blur-sm z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-playfair text-white">ATLAS</a>
        
        <div className="hidden md:flex space-x-8 font-montserrat text-white">
          <a href="/" className="hover:text-atlas-teal transition-colors">Home</a>
          <a href="#explore" className="hover:text-atlas-teal transition-colors">Explore</a>
          <a href="#how-it-works" className="hover:text-atlas-teal transition-colors">How It Works</a>
          <a href="#rewards" className="hover:text-atlas-teal transition-colors">Rewards</a>
        </div>
        
        <Button className="bg-atlas-black text-white hover:bg-atlas-teal transition-colors">
          Connect Wallet
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

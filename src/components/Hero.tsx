
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
          alt="Travel Influencer with scenic view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-playfair text-white mb-6 animate-fade-up">
            Travel, Track, Earn.
          </h1>
          <p className="text-xl md:text-2xl text-atlas-white font-montserrat font-light mb-8 animate-fade-up">
            Turn your travel content into income.<br />
            Connect with luxury brands seeking authentic storytellers.
          </p>
          <Button className="bg-atlas-black text-white px-8 py-6 text-lg hover:bg-atlas-teal transition-colors animate-fade-up">
            Start Creating
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

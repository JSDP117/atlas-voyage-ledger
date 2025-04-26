
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
          alt="CTA background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-playfair text-white mb-12">
            Ready to Monetize Your Travel Content?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button className="bg-atlas-black text-white px-8 py-6 text-lg hover:bg-atlas-teal transition-colors w-full md:w-auto">
              Join Creator Network
            </Button>
            <Button className="bg-white text-atlas-black px-8 py-6 text-lg hover:bg-atlas-teal hover:text-white transition-colors w-full md:w-auto">
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;

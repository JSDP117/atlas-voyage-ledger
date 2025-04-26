
import { Star, Gift, Briefcase, Globe } from "lucide-react";

const benefits = [
  {
    icon: Star,
    title: "Premium Brand Partnerships",
  },
  {
    icon: Gift,
    title: "Complimentary Luxury Stays",
  },
  {
    icon: Briefcase,
    title: "Paid Travel Opportunities",
  },
  {
    icon: Globe,
    title: "Global Creator Network",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 px-4 bg-atlas-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair text-white text-center mb-16">
          Unlock Exclusive Benefits
        </h2>
        
        <div className="grid md:grid-cols-4 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 flex justify-center">
                <benefit.icon className="w-12 h-12 text-atlas-teal transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-montserrat text-white">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

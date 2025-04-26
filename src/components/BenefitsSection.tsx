
import { Airplane, Award, Users, Wallet } from "lucide-react";

const benefits = [
  {
    icon: Airplane,
    title: "Airport Lounge Access",
  },
  {
    icon: Award,
    title: "Private Invitations to Luxury Events",
  },
  {
    icon: Wallet,
    title: "Travel Points toward Future Trips",
  },
  {
    icon: Users,
    title: "Membership to Elite Traveler Communities",
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

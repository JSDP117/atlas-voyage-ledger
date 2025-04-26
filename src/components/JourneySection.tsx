
const journeyItems = [
  {
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    title: "Travel",
    description: "Explore the world like never before.",
  },
  {
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    title: "Track",
    description: "Immortalize your adventures on your personal blockchain map.",
  },
  {
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    title: "Earn",
    description: "Unlock exclusive rewards — lounges, events, memberships.",
  },
];

const JourneySection = () => {
  return (
    <section className="py-20 px-4 bg-atlas-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair text-white text-center mb-16">
          Your Journey, Your Legacy
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {journeyItems.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <div className="aspect-[3/4]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-playfair text-white mb-2">{item.title}</h3>
                <p className="text-atlas-white font-montserrat">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;

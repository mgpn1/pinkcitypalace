import React from 'react';

const AmenityItem: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-serif font-light mb-3 tracking-wide text-gray-900">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 tracking-wide text-gray-900">
            AMENITIES & SERVICES
          </h2>
          <div className="h-px w-16 bg-gray-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AmenityItem 
            title="SPA & WELLNESS" 
            description="Our tranquil spa offers a range of rejuvenating treatments inspired by ancient Ayurvedic practices and modern techniques. Facilities include treatment rooms, a steam room, sauna, and a relaxation lounge."
          />
          
          <AmenityItem 
            title="INFINITY POOL" 
            description="Enjoy our stunning rooftop infinity pool with panoramic views of Jaipur's skyline. Relax on luxurious loungers while our attentive staff serves refreshing beverages and light fare."
          />
          
          <AmenityItem 
            title="FITNESS CENTER" 
            description="Our state-of-the-art fitness center is equipped with the latest cardio and strength training equipment. Personal trainers are available upon request for customized workout sessions."
          />
          
          <AmenityItem 
            title="CONCIERGE SERVICES" 
            description="Our dedicated concierge team is available 24/7 to assist with restaurant reservations, tour arrangements, transportation, and any other requests to enhance your stay in Jaipur."
          />
          
          <AmenityItem 
            title="BUSINESS CENTER" 
            description="For business travelers, our fully equipped business center offers private meeting rooms, video conferencing facilities, and secretarial services."
          />
          
          <AmenityItem 
            title="CULTURAL EXPERIENCES" 
            description="Immerse yourself in Jaipur's rich culture with our curated experiences, including cooking classes, traditional music performances, and guided city tours."
          />
        </div>
      </div>
    </section>
  );
};

export default Amenities;
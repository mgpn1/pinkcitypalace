import React from 'react';

interface RoomProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

const RoomSection: React.FC<RoomProps> = ({ title, description, imageUrl, reverse = false }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <div 
        className="w-full md:w-1/2 h-[300px] md:h-[600px] bg-cover bg-center" 
        style={{ backgroundImage: `url('${imageUrl}')` }}
      ></div>
      <div className="w-full md:w-1/2 flex items-center bg-gray-50">
        <div className="p-8 md:p-16 lg:p-24">
          <h3 className="text-2xl md:text-3xl font-serif font-light mb-6 tracking-wide text-gray-900">{title}</h3>
          <div className="h-px w-16 bg-gray-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-8">{description}</p>
          <a 
            href="#booking" 
            className="inline-block bg-transparent border border-gray-900 py-3 px-10 uppercase tracking-widest text-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

const Rooms: React.FC = () => {
  return (
    <section id="rooms" className="bg-white">
      <div className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 tracking-wide text-gray-900">
          ROOMS & SUITES
        </h2>
        <div className="h-px w-16 bg-gray-400 mx-auto"></div>
      </div>

      <RoomSection 
        title="DELUXE ROOM"
        description="Our Deluxe Rooms offer a perfect blend of comfort and elegance. Each room features handcrafted furniture, premium bedding, and expansive windows that frame stunning views of Jaipur. Modern amenities include a smart entertainment system, complimentary high-speed WiFi, and a luxurious marble bathroom with rainfall shower."
        imageUrl="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <RoomSection 
        title="PREMIUM SUITE"
        description="Experience unparalleled luxury in our Premium Suites. These spacious accommodations feature a separate living area, private balcony, and exclusive access to our Executive Lounge. The bedroom is furnished with a king-size bed draped in Egyptian cotton, while the marble bathroom boasts a deep soaking tub and separate shower."
        imageUrl="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        reverse
      />

      <RoomSection 
        title="MAHARAJA SUITE"
        description="Our signature Maharaja Suite is the epitome of royal living. This expansive suite features a master bedroom, separate living and dining areas, a private library, and a terrace with panoramic views of Jaipur. Adorned with authentic Rajasthani artifacts and bespoke furniture, the Maharaja Suite offers a truly immersive experience of royal Rajasthani hospitality."
        imageUrl="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
    </section>
  );
};

export default Rooms;
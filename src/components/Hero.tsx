import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full-screen background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1920')", 
          height: "100%",
          filter: "brightness(0.7)"
        }}
      />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-4 tracking-wide">
            PINK CITY PALACE
          </h1>
          <div className="h-px w-24 bg-white mx-auto my-6"></div>
          <p className="text-lg md:text-xl font-light mb-8 tracking-wider">
            A LUXURY RETREAT IN THE HEART OF JAIPUR
          </p>
          <a 
            href="#booking" 
            className="inline-block bg-transparent border border-white py-3 px-12 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-xs tracking-widest mb-2 uppercase">Scroll</span>
        <div className="w-0.5 h-12 bg-white opacity-70"></div>
      </div>
    </section>
  );
};

export default Hero;
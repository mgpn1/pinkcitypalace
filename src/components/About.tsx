import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 tracking-wide text-gray-900">
            THE EXPERIENCE
          </h2>
          <div className="h-px w-16 bg-gray-400 mx-auto my-6"></div>
          <p className="text-gray-700 leading-relaxed mb-8">
            Pink City Palace is more than a hotel; it's a gateway to the rich cultural heritage of Jaipur. 
            Nestled in the heart of India's Pink City, our luxury hotel offers an unparalleled blend of 
            traditional Rajasthani elegance and modern sophistication.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Each space has been meticulously designed to immerse you in comfort while celebrating the 
            vibrant artistry and royal legacy that defines Jaipur. From our thoughtfully appointed rooms 
            to our world-class amenities, every detail at Pink City Palace is crafted to create an 
            unforgettable experience that honors the past while embracing the future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
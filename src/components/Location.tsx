import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 tracking-wide text-gray-900">
            LOCATION
          </h2>
          <div className="h-px w-16 bg-gray-400 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4 md:p-8">
            <h3 className="text-2xl font-serif font-light mb-6 tracking-wide text-gray-900">
              IN THE HEART OF PINK CITY
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Pink City Palace is ideally located in the center of Jaipur, offering easy access to the city's 
              iconic landmarks, vibrant markets, and cultural attractions. Our prime location makes it convenient 
              for guests to explore the rich heritage and colorful streets of India's Pink City.
            </p>
            
            <div className="mb-8">
              <h4 className="text-lg font-serif mb-3">ADDRESS</h4>
              <p className="text-gray-700">
                42 Amber Palace Road,<br />
                Civil Lines, Jaipur - 302006,<br />
                Rajasthan, India
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-serif mb-3">CONTACT</h4>
              <p className="text-gray-700">
                Phone: +91 9876 543210<br />
                Email: info@pinkcitypalace.com
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-serif mb-3">NEARBY ATTRACTIONS</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Hawa Mahal - 1.5 km</li>
                <li>• City Palace - 2 km</li>
                <li>• Jantar Mantar - 2.2 km</li>
                <li>• Amer Fort - 11 km</li>
                <li>• Jaipur International Airport - 13 km</li>
              </ul>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 h-[400px] md:h-auto">
            {/* This is a placeholder for an embedded map. In a real implementation, you would use Google Maps or another map service */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973526082!2d75.65047189351534!3d26.885141678070183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1695988685862!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
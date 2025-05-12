import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-xl font-serif mb-6">PINK CITY PALACE</h4>
            <p className="text-gray-400 mb-4">
              42 Amber Palace Road,<br />
              Civil Lines, Jaipur - 302006,<br />
              Rajasthan, India
            </p>
            <p className="text-gray-400">
              Phone: +91 9876 543210<br />
              Email: info@pinkcitypalace.com
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-serif mb-6">QUICK LINKS</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">Rooms & Suites</a>
              </li>
              <li>
                <a href="#dining" className="hover:text-white transition-colors">Dining</a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-white transition-colors">Amenities</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Location</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-serif mb-6">NEWSLETTER</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates and special offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="p-3 bg-gray-800 text-white border-none focus:outline-none flex-grow"
              />
              <button
                type="submit"
                className="bg-white text-gray-900 p-3 uppercase text-sm tracking-wider hover:bg-gray-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Pink City Palace. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
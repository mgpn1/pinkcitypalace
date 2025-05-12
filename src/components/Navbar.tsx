import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white text-black py-4 shadow-md' : 'bg-transparent text-white py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-xl md:text-2xl font-serif tracking-wider">
              PINK CITY PALACE
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#rooms" className="uppercase text-sm font-light tracking-wider hover:opacity-70 transition-opacity">Rooms</a>
            <a href="#dining" className="uppercase text-sm font-light tracking-wider hover:opacity-70 transition-opacity">Dining</a>
            <a href="#amenities" className="uppercase text-sm font-light tracking-wider hover:opacity-70 transition-opacity">Amenities</a>
            <a href="#gallery" className="uppercase text-sm font-light tracking-wider hover:opacity-70 transition-opacity">Gallery</a>
            <a href="#location" className="uppercase text-sm font-light tracking-wider hover:opacity-70 transition-opacity">Location</a>
            <a href="#contact" className="uppercase text-sm font-light tracking-wider hover:opacity-70 transition-opacity">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-current"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col pt-20">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-6 items-center text-white">
              <a 
                href="#rooms" 
                className="uppercase text-lg font-light tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                Rooms
              </a>
              <a 
                href="#dining" 
                className="uppercase text-lg font-light tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                Dining
              </a>
              <a 
                href="#amenities" 
                className="uppercase text-lg font-light tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                Amenities
              </a>
              <a 
                href="#gallery" 
                className="uppercase text-lg font-light tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#location" 
                className="uppercase text-lg font-light tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                Location
              </a>
              <a 
                href="#contact" 
                className="uppercase text-lg font-light tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
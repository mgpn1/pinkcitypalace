import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Dining from './components/Dining';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Pink City Palace | Luxury Hotel in Jaipur';
  }, []);

  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Dining />
      <Amenities />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
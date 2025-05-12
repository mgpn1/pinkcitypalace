import React, { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  { id: 1, url: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Hotel Exterior' },
  { id: 2, url: 'https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Luxurious Bedroom' },
  { id: 3, url: 'https://images.pexels.com/photos/6394563/pexels-photo-6394563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Elegant Restaurant' },
  { id: 4, url: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Spa Treatment Room' },
  { id: 5, url: 'https://images.pexels.com/photos/7061675/pexels-photo-7061675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Rooftop Pool' },
  { id: 6, url: 'https://images.pexels.com/photos/11701544/pexels-photo-11701544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Hotel Bar' },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 tracking-wide text-gray-900">
            GALLERY
          </h2>
          <div className="h-px w-16 bg-gray-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className="aspect-square overflow-hidden cursor-pointer" 
              onClick={() => openModal(index)}
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white"
            onClick={closeModal}
          >
            <X size={32} />
          </button>
          
          <img 
            src={galleryImages[selectedImage].url} 
            alt={galleryImages[selectedImage].alt} 
            className="max-w-full max-h-[90vh] object-contain" 
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
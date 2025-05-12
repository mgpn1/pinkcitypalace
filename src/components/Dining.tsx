import React from 'react';

const Dining: React.FC = () => {
  return (
    <section id="dining" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 tracking-wide text-gray-900">
            DINING
          </h2>
          <div className="h-px w-16 bg-gray-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white shadow-lg">
            <img 
              src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="The Royal Table Restaurant"
              className="w-full h-80 object-cover"
            />
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-serif font-light mb-4 tracking-wide text-gray-900">THE ROYAL TABLE</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our signature restaurant offers an exquisite blend of traditional Rajasthani cuisine and international flavors. 
                Using locally sourced ingredients and age-old recipes, our master chefs create dishes that celebrate the rich 
                culinary heritage of the region.
              </p>
              <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-500 gap-2">
                <span>BREAKFAST: 7:00 - 10:30</span>
                <span>DINNER: 19:00 - 23:00</span>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg">
            <img 
              src="https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Amber Lounge"
              className="w-full h-80 object-cover"
            />
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-serif font-light mb-4 tracking-wide text-gray-900">AMBER LOUNGE</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our elegant bar and lounge offers a sophisticated setting to unwind with crafted cocktails, rare spirits, 
                and a curated selection of wines. The lounge features live music in the evenings, creating the perfect 
                ambiance for relaxation or socializing.
              </p>
              <div className="text-sm text-gray-500">
                <span>OPEN DAILY: 17:00 - 01:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;
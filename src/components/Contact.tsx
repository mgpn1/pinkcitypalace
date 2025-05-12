import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted:', formState);
    alert('Thank you for your message. Our team will contact you shortly.');
    setFormState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 tracking-wide text-gray-900">
            CONTACT
          </h2>
          <div className="h-px w-16 bg-gray-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-2">
              <p className="text-center text-gray-700 mb-8">
                For inquiries, reservations, or any assistance, please fill out the form below or contact us directly.
              </p>
            </div>
            
            <div>
              <label htmlFor="name" className="block text-sm text-gray-600 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 focus:outline-none focus:border-gray-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm text-gray-600 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 focus:outline-none focus:border-gray-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm text-gray-600 mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 focus:outline-none focus:border-gray-500"
              />
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm text-gray-600 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={6}
                className="w-full p-3 border border-gray-300 focus:outline-none focus:border-gray-500"
                required
              ></textarea>
            </div>
            
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="inline-block bg-gray-900 text-white py-3 px-12 uppercase tracking-widest text-sm hover:bg-gray-700 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
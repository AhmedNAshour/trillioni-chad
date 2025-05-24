
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-2xl mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl text-gray-900 mb-4">Contact Us</h1>
          <p className="font-dm-sans text-lg text-gray-600 mb-8">
            Let's Talk Business - Get in touch for partnerships and inquiries.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-4 text-left">
              <div>
                <h3 className="font-poppins font-semibold text-lg text-gray-900">Email</h3>
                <p className="font-dm-sans text-gray-600">info@trillionigroup.com</p>
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-lg text-gray-900">Phone</h3>
                <p className="font-dm-sans text-gray-600">+235 66230808</p>
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-lg text-gray-900">Address</h3>
                <p className="font-dm-sans text-gray-600">N'Djamena, 1st Arrondissement, Farcha</p>
              </div>
            </div>
            <p className="font-dm-sans text-gray-500 mt-6">
              Contact form and Google Maps integration coming soon.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

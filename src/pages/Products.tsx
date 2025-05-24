
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-2xl mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl text-gray-900 mb-4">Our Products</h1>
          <p className="font-dm-sans text-lg text-gray-600 mb-8">
            Explore our comprehensive product catalog across four key categories.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="font-dm-sans text-gray-600">
              Product category pages and detailed product listings coming soon.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;

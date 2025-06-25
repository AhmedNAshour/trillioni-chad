import React from 'react';

const ProductsSection = () => {
  const productCategories = [
    {
      title: 'Beverages',
      description: 'Premium drinks and refreshments from trusted global brands',
      image: '/home/Beverages.png',
      link: '/products/beverages'
    },
    {
      title: 'Basic Commodities',
      description: 'Essential goods including sesame, flour, and sugar',
      image: '/products/flour.jpg',
      link: '/products/commodities'
    },
    {
      title: 'Everyday Necessities',
      description: 'Household essentials for daily life and comfort',
      image: '/home/Everyday-Necessities.jpeg',
      link: '/products/necessities'
    },
    {
      title: 'Automotive Oils',
      description: 'High-quality lubricants and automotive maintenance products',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2332&q=80',
      link: '/products/automotive'
    }
  ];

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 mb-2">
            Our Products
          </h2>
          <h3 className="font-poppins text-xl text-gray-700 mb-4">
            Designed for Everyday Life
          </h3>
          <p className="font-dm-sans text-lg text-gray-600 max-w-3xl mx-auto">
            From premium commodities and beverages to everyday necessities and automotive solutions. Each product in our collection meets international quality standards and is designed to excel in diverse markets and climates.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {productCategories.map((category, index) => (
            <div key={category.title} className="cursor-pointer">
              <div className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer h-full bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="font-dm-sans text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-primary hover:bg-primary/90 text-white font-dm-sans font-semibold px-8 py-3 rounded-lg transition-all duration-300">
            Contact Us for Inquiries
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

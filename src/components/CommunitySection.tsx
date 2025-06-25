import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Droplets, Package } from 'lucide-react';

const OurProducts = () => {
  const productCategories = [
    {
      title: 'Beverages',
      description: 'Premium non-alcoholic beverages and fruit juices from trusted global brands',
      image: '/home/Beverages.png',
      icon: Droplets,
      products: ['Barbican', 'Rani', 'Hub'],
      link: '/products'
    },
    {
      title: 'Everyday Necessities',
      description: 'Essential food products and cooking ingredients for daily life',
      image: '/home/Everyday-Necessities.jpeg',
      icon: Package,
      products: ['Pasta', 'Cooking Oil', 'Tomato Purée', 'Flour', 'Sugar'],
      link: '/products'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="font-dm-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Quality products from trusted global brands, delivered across Africa
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {productCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-poppins font-bold text-2xl mb-2">{category.title}</h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="font-dm-sans text-gray-600 mb-4">{category.description}</p>
                
                <div className="mb-4">
                  <p className="font-dm-sans font-semibold text-sm text-gray-700 mb-2">Featured Products:</p>
                  <div className="flex flex-wrap gap-2">
                    {category.products.map((product, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to={category.link}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-dm-sans font-semibold">
                    <span className="flex items-center justify-center gap-2">
                      Explore {category.title}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 rounded-2xl p-8">
          <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-4">
            Discover Our Complete Range
          </h3>
          <p className="font-dm-sans text-gray-600 mb-6 max-w-2xl mx-auto">
            From premium beverages to everyday essentials, explore our comprehensive 
            product portfolio designed to meet diverse market needs.
          </p>
          <Link to="/products">
            <Button className="bg-primary hover:bg-primary/90 text-white font-dm-sans font-semibold px-8 py-3 rounded-lg">
              <span className="flex items-center gap-2">
                View All Products
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
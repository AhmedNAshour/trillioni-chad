
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Flag } from 'lucide-react';

interface CategoryPageProps {
  category: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
  const categoryData = {
    commodities: {
      title: 'Basic Commodities',
      description: 'Essential staples including sesame, flour, and sugar sourced from trusted global suppliers and our own cultivation.',
      backgroundImage: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      products: [
        { name: 'Trillioni Sesame', origin: 'Chad', packaging: 'Bulk/Bags', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80' },
        { name: 'Trillioni Turkish Flour', origin: 'Turkey', packaging: '25kg Bags', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80' },
        { name: 'Trillioni Egyptian Flour', origin: 'Egypt', packaging: '25kg Bags', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80' },
        { name: 'Trillioni Sugar', origin: 'Brazil', packaging: '50kg Bags', image: 'https://images.unsplash.com/photo-1582440863530-02e25b3324ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80' }
      ]
    },
    beverages: {
      title: 'Beverages',
      description: 'Premium refreshing beverages imported from Saudi Arabia and distributed across Chad to meet everyday refreshment needs.',
      backgroundImage: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      products: [
        { name: 'Rani', origin: 'Saudi Arabia', packaging: 'Bottles/Cans', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80' },
        { name: 'Barbican', origin: 'Saudi Arabia', packaging: 'Bottles/Cans', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80' },
        { name: 'Hub', origin: 'Saudi Arabia', packaging: 'Bottles/Cans', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80' }
      ]
    },
    automotive: {
      title: 'Automotive Oils',
      description: 'High-quality lubricants and automotive maintenance products manufactured in UAE, specifically formulated for African climates.',
      backgroundImage: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2332&q=80',
      products: [
        { name: 'Trillioni Motor Engine Oil', origin: 'UAE', packaging: 'Bottles/Drums', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2332&q=80' },
        { name: 'Trillioni Diesel Engine Oil', origin: 'UAE', packaging: 'Bottles/Drums', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2332&q=80' }
      ]
    },
    necessities: {
      title: 'Everyday Necessities',
      description: 'Essential household products including cooking oils and pasta from top producers in Egypt, Libya, and Malaysia.',
      backgroundImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      products: [
        { name: 'Almosim Pasta', origin: 'Egypt', packaging: 'Boxes', image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80' },
        { name: 'Hayat Cooking Oil', origin: 'Malaysia', packaging: 'Bottles', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80' },
        { name: 'Faragello Tomato Purée', origin: 'Libya', packaging: 'Cans', image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80' }
      ]
    }
  };

  const data = categoryData[category as keyof typeof categoryData];

  if (!data) {
    return <div>Category not found</div>;
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70">
          <div 
            className="w-full h-full bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url('${data.backgroundImage}')` }}
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-4">
            {data.title}
          </h1>
        </div>
      </section>

      {/* Category Summary */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-dm-sans text-lg text-gray-700 leading-relaxed">
            {data.description}
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.products.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <Flag className="w-4 h-4 text-gray-500" />
                      <span className="font-dm-sans text-sm text-gray-600">Origin: {product.origin}</span>
                    </div>
                    <div className="inline-block px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-dm-sans font-medium">
                      {product.packaging}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Request Pricing
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl text-gray-900 mb-4">
            Interested in These Products?
          </h2>
          <p className="font-dm-sans text-lg text-gray-600 mb-8">
            We supply to retailers, distributors, and institutions across Africa.
          </p>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white font-dm-sans font-semibold px-8 py-3 rounded-lg">
              Contact Our Sales Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;

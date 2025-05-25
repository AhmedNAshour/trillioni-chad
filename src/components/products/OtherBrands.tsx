
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Flag } from 'lucide-react';

const OtherBrands = () => {
  const beverages = [
    { name: 'Barbican', origin: 'Saudi Arabia' },
    { name: 'Rani', origin: 'Saudi Arabia' },
    { name: 'Hub', origin: 'Saudi Arabia' }
  ];

  const essentials = [
    { name: 'Almosim Pasta', origin: 'Egypt' },
    { name: 'Faragello Purée', origin: 'Libya' },
    { name: 'Hayat Oil', origin: 'Malaysia/UAE' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
            Brands We Bring to Africa
          </h2>
          <p className="font-dm-sans text-lg text-gray-600 max-w-3xl mx-auto">
            Beyond our own line, we import beloved brands from top global suppliers — bridging continents and communities through reliable products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Beverages */}
          <Card className="p-6">
            <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-6">Beverages</h3>
            <div className="space-y-4">
              {beverages.map((brand, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
                  <span className="font-dm-sans font-medium text-gray-900">{brand.name}</span>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Flag className="w-4 h-4" />
                    <span>{brand.origin}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Essentials */}
          <Card className="p-6">
            <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-6">Essentials</h3>
            <div className="space-y-4">
              {essentials.map((brand, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
                  <span className="font-dm-sans font-medium text-gray-900">{brand.name}</span>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Flag className="w-4 h-4" />
                    <span>{brand.origin}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OtherBrands;

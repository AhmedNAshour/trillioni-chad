
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PartnersSection = () => {
  const partners = [
    { name: 'IFFCO', logo: 'IFFCO' },
    { name: 'Almasria', logo: 'ALMASRIA' },
    { name: 'Aujan', logo: 'AUJAN' },
    { name: 'Almosim', logo: 'ALMOSIM' },
    { name: 'Rani', logo: 'RANI' },
    { name: 'Barbican', logo: 'BARBICAN' },
    { name: 'Hub', logo: 'HUB' },
    { name: 'Faragello', logo: 'FARAGELLO' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
            Trusted by the Best
          </h2>
          <p className="font-dm-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Global brands who rely on Trillioni Chad for their distribution needs across Africa
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-24 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-poppins font-semibold text-gray-700 text-center">
                {partner.logo}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white font-dm-sans font-semibold px-8 py-3 rounded-lg transition-all duration-300">
              Become a Partner
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

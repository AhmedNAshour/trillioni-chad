
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

  // Duplicate the partners array for seamless looping
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
            Trusted by the Best
          </h2>
          <p className="font-dm-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Global brands who rely on Trillioni Chad for their distribution needs across Africa
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative mb-12">
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee hover:animation-pause">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 mx-8 w-32 h-24 bg-white rounded-lg shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                >
                  <div className="font-poppins font-semibold text-gray-400 text-center group-hover:text-primary transition-colors duration-300">
                    {partner.logo}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
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

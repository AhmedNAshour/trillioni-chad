
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const PartnersSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const partners = [
    { name: 'IFFCO', logo: '/lovable-uploads/f19006fd-aff1-4942-9817-a7c370afe483.png' },
    { name: 'Aujan', logo: '/lovable-uploads/7a05c478-018d-4b48-b598-fb53a53bb344.png' },
    { name: 'Rani', logo: '/lovable-uploads/10ad29dd-6ed0-4e12-993b-3b6073c9d216.png' },
    { name: 'Barbican', logo: '/lovable-uploads/8c0046a4-b903-41d1-aec8-fb1b70aa89dc.png' },
    { name: 'Hub', logo: '/lovable-uploads/3189d8a5-d3d6-42d4-977b-dfd45302b245.png' },
    { name: 'Faragello', logo: '/lovable-uploads/5866d219-08c5-4051-ac76-24cff712cb4a.png' },
  ];

  // Duplicate the partners array for seamless looping
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section 
      ref={elementRef}
      className={`py-16 bg-gray-50 overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
            Trusted by the Best
          </h2>
          <p className="font-dm-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Global brands who rely on Trillioni Chad for their distribution needs across Africa
          </p>
        </div>

        {/* Marquee Container */}
        <div className={`relative mb-12 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee hover:animation-pause">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 mx-8 w-32 h-24 bg-white rounded-lg shadow-md flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-primary/20 group"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 p-2 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced Gradient overlays */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Enhanced CTA */}
        <div className={`text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white font-dm-sans font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
              Become a Partner
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

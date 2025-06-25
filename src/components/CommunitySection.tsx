
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CommunitySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/community/community-13.jpeg"
                alt="Community development"
                className="w-full h-96 object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent rounded-lg opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-lg opacity-20"></div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
              Beyond Business
            </h2>
            <h3 className="font-dm-sans text-xl text-gray-700 mb-6 font-medium">
              Our Commitment to Community
            </h3>
            <p className="font-dm-sans text-lg text-gray-600 mb-6 leading-relaxed">
              At Trillioni Chad, we go beyond business by investing in health initiatives, education, 
              youth sports, and community development.
            </p>
            <p className="font-dm-sans text-lg text-gray-600 mb-8 leading-relaxed">
              From providing school supplies and medical support to building sports facilities, 
              we believe in creating thriving communities where everyone can prosper.
            </p>
            <Link to="/community">
              <Button className="bg-primary hover:bg-primary/90 text-white font-dm-sans font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                Learn More About Our Impact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;

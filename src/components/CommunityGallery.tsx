
import React from 'react';
import AnimatedColumn from './AnimatedColumn';
import { galleryImages } from '@/data/galleryImages';
import { distributeImages } from '@/utils/galleryUtils';

const CommunityGallery = () => {
  const desktopColumns = distributeImages(galleryImages, 5);
  const mobileColumns = distributeImages(galleryImages, 2);

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Our Impact in Action
          </h2>
          <p className="font-dm-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Witness the transformative power of community partnership through these moments
          </p>
        </div>

        {/* Desktop: 5 columns */}
        <div className="hidden md:flex gap-4 h-[600px] lg:h-[700px]">
          {desktopColumns.map((columnImages, index) => (
            <div key={index} className="flex-1">
              <AnimatedColumn
                images={columnImages}
                direction={index % 2 === 0 ? 'up' : 'down'}
                duration={20 + index * 2}
              />
            </div>
          ))}
        </div>

        {/* Mobile: 2 columns */}
        <div className="md:hidden flex gap-4 h-[500px] overflow-x-hidden">
          {mobileColumns.map((columnImages, index) => (
            <div key={index} className="flex-1">
              <AnimatedColumn
                images={columnImages}
                direction={index % 2 === 0 ? 'up' : 'down'}
                duration={25 + index * 3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityGallery;

import React from 'react';
import { motion } from 'framer-motion';
import { GalleryImage } from '@/data/galleryImages';

interface AnimatedColumnProps {
  images: GalleryImage[];
  direction: 'up' | 'down';
  duration: number;
}

const AnimatedColumn: React.FC<AnimatedColumnProps> = ({ 
  images, 
  direction, 
  duration 
}) => {
  // Duplicate images to allow seamless looping
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative h-full overflow-hidden">
      {/* Top gradient mask */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none" />

      {/* Bottom gradient mask */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{
          y: direction === 'up' ? ['0%', '-100%'] : ['0%', '100%'],
        }}
        transition={{
          duration,
          ease: 'linear',
          repeat: Infinity,
        }}
        className="flex flex-col gap-4"
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={image.src}
              alt={image.caption}
              className="w-full h-64 md:h-72 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <span className="inline-block px-2 py-1 bg-primary/90 rounded-full text-xs font-dm-sans font-semibold mb-2">
                  {image.category}
                </span>
                <p className="font-dm-sans text-sm leading-relaxed">
                  {image.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedColumn;

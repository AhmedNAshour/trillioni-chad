import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CommunityGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Gallery items including local images and GIF
  const galleryItems = [
    {
      type: 'image',
      src: '/community/community-1.JPG',
      alt: 'Community initiative - Education support',
      caption: 'Supporting education in local schools'
    },
    {
      type: 'image',
      src: '/community/community-2.JPG',
      alt: 'Community initiative - Healthcare',
      caption: 'Healthcare support for communities'
    },
    {
      type: 'image',
      src: '/community/community-3.JPG',
      alt: 'Community initiative - Youth development',
      caption: 'Youth development programs'
    },
    {
      type: 'gif',
      src: '/community/community-video.gif',
      alt: 'Community impact in action',
      caption: 'Our community impact in action'
    },
    {
      type: 'image',
      src: '/community/community-4.JPG',
      alt: 'Community initiative - Economic empowerment',
      caption: 'Economic empowerment initiatives'
    },
    {
      type: 'image',
      src: '/community/community-5.JPG',
      alt: 'Community initiative - Infrastructure',
      caption: 'Infrastructure development support'
    },
    {
      type: 'image',
      src: '/community/community-6.JPG',
      alt: 'Community initiative - Family support',
      caption: 'Supporting families in need'
    },
    {
      type: 'image',
      src: '/community/community-7.JPG',
      alt: 'Community initiative - Local partnerships',
      caption: 'Building local partnerships'
    },
    {
      type: 'image',
      src: '/community/community-9.JPG',
      alt: 'Community initiative - Skills training',
      caption: 'Skills training and development'
    },
    {
      type: 'image',
      src: '/community/community-10.JPG',
      alt: 'Community initiative - Community outreach',
      caption: 'Community outreach programs'
    },
    {
      type: 'image',
      src: '/community/community-11.jpeg',
      alt: 'Community initiative - Cultural events',
      caption: 'Supporting cultural events'
    },
    {
      type: 'image',
      src: '/community/community-12.jpeg',
      alt: 'Community initiative - Environmental',
      caption: 'Environmental sustainability efforts'
    },
    {
      type: 'image',
      src: '/community/community-13.jpeg',
      alt: 'Community initiative - Technology access',
      caption: 'Improving technology access'
    },
    {
      type: 'image',
      src: '/community/community-14.jpeg',
      alt: 'Community initiative - Sports programs',
      caption: 'Youth sports and recreation programs'
    },
    {
      type: 'image',
      src: '/community/community-15.JPG',
      alt: 'Community initiative - Future leaders',
      caption: 'Developing future community leaders'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, galleryItems.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentItem = galleryItems[currentIndex];

  return (
    <section className="py-16 bg-gray-50" id="impact-gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Our Impact in Action
          </h2>
          <p className="font-dm-sans text-lg text-gray-600 max-w-2xl mx-auto">
            See how we're making a difference in communities across Chad and beyond
          </p>
        </div>

        {/* Main Gallery Display */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <div className="relative aspect-[16/10] bg-white rounded-lg shadow-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                {currentItem.type === 'gif' ? (
                  <img
                    src={currentItem.src}
                    alt={currentItem.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={currentItem.src}
                    alt={currentItem.alt}
                    className="w-full h-full object-cover"
                  />
                )}
                
                {/* Overlay with caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <motion.p
                    className="text-white font-dm-sans text-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {currentItem.caption}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Auto-play control */}
            <button
              onClick={toggleAutoPlay}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200"
            >
              {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 overflow-x-auto max-w-full px-4">
            {galleryItems.map((item, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentIndex 
                    ? 'border-primary shadow-lg scale-110' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Info */}
        <div className="text-center">
          <p className="font-dm-sans text-gray-600 mb-4">
            {currentIndex + 1} of {galleryItems.length}
          </p>
          <p className="font-dm-sans text-sm text-gray-500 max-w-2xl mx-auto">
            These images represent real community impact initiatives supported by Trillioni Chad. 
            From education to healthcare, we're committed to uplifting the communities we serve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityGallery;

import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        >
          <source src="https://videos.pexels.com/video-files/3843433/3843433-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/3843433/3843433-hd_1920_1080_30fps.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Logistics background"
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
      </div>

      {/* Hero Content with enhanced animations */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
          Logistics Without Limits
        </h1>
        <p className="font-dm-sans text-lg sm:text-xl lg:text-2xl mb-8 opacity-0 animate-fade-in [animation-delay:0.6s] [animation-fill-mode:forwards]">
          Driving growth, delivering essentials, and empowering communities across Africa.
        </p>
        <Button 
          onClick={scrollToProducts}
          className="bg-accent hover:bg-accent/90 text-white font-dm-sans font-semibold px-8 py-3 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 opacity-0 animate-fade-in [animation-delay:1s] [animation-fill-mode:forwards] hover:shadow-xl"
        >
          Explore Our Products
        </Button>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce opacity-0 animate-fade-in [animation-delay:1.4s] [animation-fill-mode:forwards]">
        <div className="flex flex-col items-center">
          <span className="text-sm font-dm-sans mb-2 opacity-80">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from 'react';

const CommunityHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        >
          <source src="/community-video.mp4" type="video/mp4" />
        </video>
        
        {/* Mobile fallback image */}
        <div className="absolute inset-0 md:hidden">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Community development"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
      </div>

      {/* Text Overlay */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl mb-6 animate-fade-in">
          Impact That Goes Beyond Trade
        </h1>
        <p className="font-dm-sans text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90 animate-fade-in animation-delay-300">
          Real growth is measured not just by profits, but by the lives we uplift along the way.
        </p>
      </div>
    </section>
  );
};

export default CommunityHero;
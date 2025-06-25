import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CommunityGrowTogetherCTA = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')"
        }}
      ></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-primary/85"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-white">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Let's Grow Together
          </h2>
          <p className="font-dm-sans text-lg md:text-xl leading-relaxed opacity-90 max-w-2xl mx-auto mb-8">
            If you're a non-profit, school, or community leader looking to collaborate, 
            we'd love to hear from you.
          </p>
          <Link to="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-primary font-dm-sans font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Become a Partner
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunityGrowTogetherCTA;
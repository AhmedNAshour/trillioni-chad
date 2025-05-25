
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ProductsHero = () => {
  const scrollToCategories = () => {
    const section = document.getElementById('product-categories');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70">
        <div 
          className="w-full h-full bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 animate-fade-in">
          Quality You Can Trust, From Field to Shelf
        </h1>
        <p className="font-dm-sans text-lg sm:text-xl lg:text-2xl mb-8 opacity-90 animate-fade-in">
          Explore Trillioni Chad's portfolio of locally grown and globally sourced products — serving homes, retailers, and industries across Africa.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            onClick={scrollToCategories}
            className="bg-accent hover:bg-accent/90 text-white font-dm-sans font-semibold px-8 py-3 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View Product Categories
          </Button>
          <Link to="/contact">
            <Button 
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-dm-sans font-semibold px-8 py-3 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default ProductsHero;

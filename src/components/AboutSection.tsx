
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
              About Trillioni Chad
            </h2>
            <p className="font-dm-sans text-lg text-gray-600 mb-8 leading-relaxed">
              Founded in 2020 as the commercial arm of the Trillioni Group, we specialize in the import, 
              export, and distribution of premium consumer goods across Africa and beyond. Our commitment 
              to excellence drives every partnership we build and every community we serve.
            </p>
            <Link to="/about">
              <Button className="bg-primary hover:bg-primary/90 text-white font-dm-sans font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                Meet Trillioni Chad
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Trillioni Chad operations"
                className="w-full h-96 object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-lg opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-lg opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

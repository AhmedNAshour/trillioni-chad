import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PartnershipCTA = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-poppins font-bold text-3xl mb-6">
          Ready to Expand Across Africa?
        </h2>
        <p className="font-dm-sans text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Let's scale together through trusted partnerships and proven methods.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-primary font-dm-sans font-semibold px-8 py-3 rounded-lg">
              Become a Partner
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-dm-sans font-semibold px-8 py-3 rounded-lg transition-all duration-300 bg-transparent">
              View Our Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnershipCTA;
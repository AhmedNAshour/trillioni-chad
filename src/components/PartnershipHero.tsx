import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PartnershipHero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
            Partnership Opportunities
          </h1>
          <p className="font-dm-sans text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Partner with Trillioni Chad to grow your presence across the region. We offer strategic 
            import/export guidance, deep local expertise, and seamless logistics support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white font-dm-sans font-semibold px-8 py-3 rounded-lg">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-dm-sans font-semibold px-8 py-3 rounded-lg">
                View Our Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipHero;
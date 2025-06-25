import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PartnershipProcess = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl text-gray-900 mb-4">
            Logistics & Distribution Support
          </h2>
          <p className="font-dm-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Smart logistics designed to move products efficiently and reliably.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-8">
            <p className="font-dm-sans text-lg text-gray-700 leading-relaxed text-center">
              At Trillioni Chad, logistics is more than transportation — it's strategy. Our distribution 
              model is designed to reach large segments of the African population efficiently and reliably. 
              We work in close partnership with a growing network of +150 retail shops, +94 wholesalers, 
              and numerous local vendors. By providing competitive pricing, product support, and marketing 
              tools, we empower our partners to grow and succeed in their markets.
            </p>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white font-dm-sans font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipProcess;
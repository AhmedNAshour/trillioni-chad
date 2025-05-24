
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Users } from 'lucide-react';

const CommunityCallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4 text-primary">
              <Heart className="w-8 h-8" />
              <Users className="w-8 h-8" />
            </div>
          </div>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-6">
            Let's Grow Together
          </h2>
          <p className="font-dm-sans text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            If you're a non-profit, school, or community leader looking to collaborate, 
            we'd love to hear from you. Together, we can create lasting positive change 
            in communities across Chad and beyond.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white font-dm-sans font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Become a Partner
            </Button>
          </Link>
          <Link to="/partnerships">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-dm-sans font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300">
              Learn About Partnerships
            </Button>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="font-dm-sans text-sm text-gray-500">
            📞 For partnership inquiries: <span className="text-primary font-semibold">+235 66230808</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityCallToAction;

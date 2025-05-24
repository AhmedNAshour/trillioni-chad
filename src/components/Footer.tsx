
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="font-poppins font-bold text-xl mb-4">Trillioni Chad</h3>
            <p className="font-dm-sans text-sm leading-relaxed opacity-90 mb-4">
              From Trillioni-branded commodities to global partner products, we deliver quality, 
              reliability, and community impact across Africa and beyond.
            </p>
            <div className="text-sm opacity-90">
              <p>Email: info@trillionigroup.com</p>
              <p>Phone: +235 66230808</p>
              <p>Address: N'Djamena, 1st Arrondissement, Farcha</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/products" className="hover:text-accent transition-colors">Products</Link></li>
              <li><Link to="/partnerships" className="hover:text-accent transition-colors">Partnership</Link></li>
              <li><Link to="/community" className="hover:text-accent transition-colors">Community</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products/beverages" className="hover:text-accent transition-colors">Beverages</Link></li>
              <li><Link to="/products/commodities" className="hover:text-accent transition-colors">Commodities</Link></li>
              <li><Link to="/products/necessities" className="hover:text-accent transition-colors">Everyday Necessities</Link></li>
              <li><Link to="/products/automotive" className="hover:text-accent transition-colors">Automotive Oils</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="font-dm-sans text-sm opacity-90">
            © 2024 Trillioni Chad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

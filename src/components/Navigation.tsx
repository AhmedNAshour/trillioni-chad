import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="font-poppins font-bold text-xl text-primary">
            Trillioni Chad
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-6">
                <NavigationMenuItem>
                  <Link to="/" className="text-gray-700 hover:text-primary transition-colors font-dm-sans">
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about" className="text-gray-700 hover:text-primary transition-colors font-dm-sans">
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/products" className="text-gray-700 hover:text-primary transition-colors font-dm-sans">
                    Products
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/partnerships" className="text-gray-700 hover:text-primary transition-colors font-dm-sans">
                    Partnerships
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/community" className="text-gray-700 hover:text-primary transition-colors font-dm-sans">
                    Community
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors font-dm-sans">
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-primary font-dm-sans">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-primary font-dm-sans">About</Link>
              <Link to="/products" className="block px-3 py-2 text-gray-700 hover:text-primary font-dm-sans">Products</Link>
              <Link to="/partnerships" className="block px-3 py-2 text-gray-700 hover:text-primary font-dm-sans">Partnerships</Link>
              <Link to="/community" className="block px-3 py-2 text-gray-700 hover:text-primary font-dm-sans">Community</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary font-dm-sans">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
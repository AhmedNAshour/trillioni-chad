
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Wheat, Droplets, Fuel, ShoppingBag } from 'lucide-react';

const ProductsHero = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const backgroundY = useTransform(scrollY, [0, 800], [0, -200]);
  const textY = useTransform(scrollY, [0, 800], [0, -100]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.3, 0.8]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToCategories = () => {
    const section = document.getElementById('product-categories');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Floating elements data
  const floatingElements = [
    { icon: Wheat, delay: 0, x: '20%', y: '15%', duration: 6 },
    { icon: Droplets, delay: 1, x: '80%', y: '25%', duration: 8 },
    { icon: Fuel, delay: 2, x: '15%', y: '70%', duration: 7 },
    { icon: ShoppingBag, delay: 1.5, x: '85%', y: '65%', duration: 9 },
  ];

  if (!mounted) return null;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#7a1010] via-[#7a1010]/90 to-[#7a1010]/70">
          <motion.div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
              opacity: overlayOpacity
            }}
          />
        </div>
      </motion.div>

      {/* Animated Geometric Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#dfdfdf]/10 rounded-lg"
          animate={{
            rotate: [0, -180, -360],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Product Icons */}
      {floatingElements.map((element, index) => {
        const IconComponent = element.icon;
        return (
          <motion.div
            key={index}
            className="absolute text-white/20"
            style={{ left: element.x, top: element.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1],
              y: [-10, 10, -10],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          >
            <IconComponent size={48} />
          </motion.div>
        );
      })}

      {/* Hero Content */}
      <motion.div 
        className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        style={{ y: textY }}
      >
        {/* Main Heading with Staggered Animation */}
        <div className="overflow-hidden mb-6">
          <motion.h1 
            className="font-poppins font-bold text-4xl sm:text-5xl lg:text-7xl leading-tight"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Quality You Can{' '}
            <motion.span
              className="inline-block bg-gradient-to-r from-white to-[#dfdfdf] bg-clip-text text-transparent"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              Trust
            </motion.span>
          </motion.h1>
        </div>

        {/* Subheading */}
        <motion.div
          className="overflow-hidden mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="font-dm-sans text-lg sm:text-xl lg:text-2xl opacity-90 leading-relaxed">
            From Field to Shelf — Discover Trillioni Chad's portfolio of 
            <br className="hidden sm:block" />
            <motion.span
              className="inline-block font-semibold text-[#dfdfdf]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              locally grown and globally sourced products
            </motion.span>
          </p>
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          className="flex justify-center gap-8 mb-10 text-sm sm:text-base"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          {[
            { number: '4', label: 'Product Categories' },
            { number: '10+', label: 'Global Suppliers' },
            { number: '15+', label: 'Countries Served' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + (index * 0.1) }}
            >
              <div className="text-2xl font-bold text-[#dfdfdf]">{stat.number}</div>
              <div className="text-white/80 text-xs uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={scrollToCategories}
              className="bg-white text-[#7a1010] hover:bg-[#dfdfdf] font-dm-sans font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-2xl hover:shadow-white/20"
            >
              <motion.span
                className="flex items-center gap-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                View Product Categories
                <ChevronDown className="w-5 h-5" />
              </motion.span>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact">
              <Button 
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#7a1010] font-dm-sans font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  Contact Our Team
                </motion.span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white cursor-pointer"
        onClick={scrollToCategories}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-wider font-dm-sans text-center">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center items-start">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Gradient Fade at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-5" />
    </section>
  );
};

export default ProductsHero;

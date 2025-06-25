import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const backgroundY = useTransform(scrollY, [0, 800], [0, -100]);
  const textY = useTransform(scrollY, [0, 800], [0, -50]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.4, 0.7]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToPartners = () => {
    const section = document.querySelector('section:nth-of-type(2)');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <motion.div 
        className="absolute inset-0 scale-110"
        style={{ y: backgroundY }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-110"
          poster="/about/our-story.png"
        >
          {/* Add your video file path here */}
          <source src="/home/hero-video.mp4" type="video/mp4" />
          <source src="/home/hero-video.webm" type="video/webm" />
          
          {/* Fallback image if video doesn't load */}
          Your browser does not support the video tag.
        </video>
        
        {/* Mobile fallback image - shown when video might not play well on mobile */}
        <div className="absolute inset-0 md:hidden">
          <img
            src="/about/role-in-trillioni-group.JPG"
            alt="Trillioni Chad operations"
            className="w-full h-full object-cover scale-110"
          />
        </div>

        {/* Dynamic Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#7a1010]/70 via-[#7a1010]/50 to-[#7a1010]/60"
          style={{ opacity: overlayOpacity }}
        />
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
            Connecting{' '}
            <motion.span
              className="inline-block bg-gradient-to-r from-white to-[#dfdfdf] bg-clip-text text-transparent"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              markets
            </motion.span>
            {' '}across Africa
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
            Leading distribution partner delivering{' '}
            <br className="hidden sm:block" />
            <motion.span
              className="inline-block font-semibold text-[#dfdfdf]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              trusted products to communities that matter
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
            { number: '24+', label: 'Products' },
            { number: '14+', label: 'Partners' },
            { number: '10+', label: 'Countries' },
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
            <Link to="/products">
              <Button 
                className="bg-white text-[#7a1010] hover:bg-[#dfdfdf] font-dm-sans font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-2xl hover:shadow-white/20"
              >
                <motion.span
                  className="flex items-center gap-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  Explore Our Products
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/partnerships">
              <Button 
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#7a1010] font-dm-sans font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  Become a Partner
                </motion.span>
              </Button>
            </Link>
            </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-0 right-0 flex justify-center text-white cursor-pointer"
        onClick={scrollToPartners}
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

export default Hero;
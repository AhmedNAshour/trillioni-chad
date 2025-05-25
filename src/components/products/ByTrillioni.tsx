import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Award, 
  Truck, 
  CheckCircle, 
  Globe,
  ArrowRight,
  Pause,
  Play
} from 'lucide-react';

const ByTrillioni = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const products = [
    {
      name: 'Trillioni Premium Sesame',
      shortName: 'Sesame',
      description: 'Premium quality sesame seeds cultivated in the fertile soils of Chad, carefully processed and exported globally to meet international standards.',
      origin: 'Chad',
      originFlag: '🇹🇩',
      category: 'Agricultural Commodity',
      packaging: ['Bulk Orders', '25kg Bags', '50kg Bags'],
      certifications: ['Organic Certified', 'Export Quality'],
      availability: 'Year-round supply',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      highlights: ['Direct from source', 'Premium grade', 'Global export']
    },
    {
      name: 'Trillioni Turkish Flour',
      shortName: 'Turkish Flour',
      description: 'High-grade wheat flour sourced from premium Turkish wheat mills, perfect for bakeries, restaurants, and food manufacturers across Africa.',
      origin: 'Turkey',
      originFlag: '🇹🇷',
      category: 'Food Processing',
      packaging: ['25kg Bags', '50kg Bags', 'Bulk Orders'],
      certifications: ['Food Grade', 'ISO Certified'],
      availability: 'Consistent supply',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      highlights: ['Premium wheat', 'Bakery grade', 'Trusted source']
    },
    {
      name: 'Trillioni Brazilian Sugar',
      shortName: 'Sugar',
      description: 'Refined sugar imported from Brazil\'s top sugar producers, ensuring consistent quality and competitive pricing for your business needs.',
      origin: 'Brazil',
      originFlag: '🇧🇷',
      category: 'Food Commodity',
      packaging: ['50kg Bags', 'Bulk Orders', 'Custom Packaging'],
      certifications: ['Food Grade', 'Refined Quality'],
      availability: 'High volume capacity',
      image: 'https://images.unsplash.com/photo-1582440863530-02e25b3324ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      highlights: ['Brazilian origin', 'Refined quality', 'Bulk supply']
    },
    {
      name: 'Trillioni Engine Oils',
      shortName: 'Engine Oils',
      description: 'Premium automotive lubricants manufactured in UAE, specifically formulated for African climate conditions and vehicle requirements.',
      origin: 'UAE',
      originFlag: '🇦🇪',
      category: 'Automotive Products',
      packaging: ['1L Bottles', '4L Containers', '20L Drums', '200L Drums'],
      certifications: ['API Certified', 'Climate Tested'],
      availability: 'Multi-grade options',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2332&q=80',
      highlights: ['Climate adapted', 'Multi-grade', 'Professional quality']
    }
  ];

  // Auto-advance functionality
  useEffect(() => {
    if (!isAutoPlay || isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, isPaused, products.length]);

  const handleProductChange = (index) => {
    setCurrentProduct(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000); // Resume after 3 seconds
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
    setIsPaused(false);
  };

  const currentItem = products[currentProduct];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
            From Our Fields to{' '}
            <span className="text-[#7a1010]">Your Shelves</span>
          </h2>
          <p className="font-dm-sans text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our flagship "By Trillioni" products — quality you can trust, 
            from cultivation and sourcing to delivery across Africa.
          </p>
        </motion.div>

        {/* Split Screen Container */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Product Image */}
          <motion.div 
            className="relative overflow-hidden rounded-2xl shadow-2xl bg-white order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/3] relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentProduct}
                  src={currentItem.image}
                  alt={currentItem.name}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6 }}
                />
              </AnimatePresence>
              
              {/* Origin Badge */}
              <motion.div 
                className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2 text-sm font-dm-sans font-medium">
                  <span className="text-lg">{currentItem.originFlag}</span>
                  <span className="text-gray-800">{currentItem.origin}</span>
                </div>
              </motion.div>

              {/* Quality Indicator */}
              <motion.div 
                className="absolute top-4 right-4 bg-[#7a1010] text-white rounded-full p-2 shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Award className="w-5 h-5" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Product Details */}
          <motion.div 
            className="space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Product Header */}
                <div>
                  <Badge variant="outline" className="mb-3 text-[#7a1010] border-[#7a1010]">
                    {currentItem.category}
                  </Badge>
                  <h3 className="font-poppins font-bold text-3xl text-gray-900 mb-3">
                    {currentItem.name}
                  </h3>
                  <p className="font-dm-sans text-gray-600 leading-relaxed text-lg">
                    {currentItem.description}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="flex flex-wrap gap-2">
                  {currentItem.highlights.map((highlight, index) => (
                    <Badge key={index} className="bg-[#dfdfdf] text-gray-800 hover:bg-[#dfdfdf]">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {highlight}
                    </Badge>
                  ))}
                </div>

                {/* Product Details Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Card className="border-l-4 border-l-[#7a1010]">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-[#7a1010]" />
                        <span className="font-dm-sans font-semibold text-sm text-gray-900">Origin</span>
                      </div>
                      <p className="text-gray-600 text-sm">{currentItem.origin}</p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-[#7a1010]">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Truck className="w-4 h-4 text-[#7a1010]" />
                        <span className="font-dm-sans font-semibold text-sm text-gray-900">Availability</span>
                      </div>
                      <p className="text-gray-600 text-sm">{currentItem.availability}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Packaging Options */}
                <div>
                  <h4 className="font-dm-sans font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#7a1010]" />
                    Packaging Options
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentItem.packaging.map((option, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-100">
                        {option}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    className="bg-[#7a1010] hover:bg-[#7a1010]/90 text-white font-dm-sans font-semibold px-8 py-6 text-lg rounded-lg w-full sm:w-auto shadow-lg"
                  >
                    <span className="flex items-center gap-2">
                      Request Product Quote
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <motion.div 
          className="flex items-center justify-center mt-12 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Product Dots */}
          <div className="flex gap-3">
            {products.map((product, index) => (
              <motion.button
                key={index}
                onClick={() => handleProductChange(index)}
                className={`w-12 h-3 rounded-full transition-all duration-300 ${
                  index === currentProduct 
                    ? 'bg-[#7a1010] shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">{product.shortName}</span>
              </motion.button>
            ))}
          </div>

          {/* Auto-play Control */}
          <motion.button
            onClick={toggleAutoPlay}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span className="text-sm font-dm-sans font-medium">
              {isAutoPlay ? 'Pause' : 'Play'}
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ByTrillioni;
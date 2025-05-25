import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Flag, 
  Globe,
  Award,
  Truck,
  ArrowRight,
  CheckCircle,
  Star,
  Building2
} from 'lucide-react';

const OtherBrands = () => {
  const [hoveredBrand, setHoveredBrand] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const brandData = {
    beverages: [
      {
        name: 'Barbican',
        origin: 'Saudi Arabia',
        originFlag: '🇸🇦',
        category: 'Beverages',
        established: '1983',
        specialties: ['Non-Alcoholic Malt', 'Fruit Flavors', 'Premium Quality'],
        packaging: ['330ml Cans', '250ml Bottles'],
        certifications: ['Halal Certified', 'ISO 22000'],
        availability: 'Year-round',
        description: 'Premium non-alcoholic malt beverages, a leading brand in the Middle East market.',
        image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Rani',
        origin: 'Saudi Arabia',
        originFlag: '🇸🇦',
        category: 'Beverages',
        established: '1970',
        specialties: ['Fruit Juices', 'Nectar', 'Natural Flavors'],
        packaging: ['200ml Tetra Pak', '1L Bottles'],
        certifications: ['HACCP', 'Organic Options'],
        availability: 'High volume',
        description: 'Natural fruit juices and nectars, trusted across the Middle East and Africa.',
        image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Hub',
        origin: 'Saudi Arabia',
        originFlag: '🇸🇦',
        category: 'Beverages',
        established: '2010',
        specialties: ['Energy Drinks', 'Sports Nutrition', 'Functional Beverages'],
        packaging: ['250ml Cans', '500ml Bottles'],
        certifications: ['Energy Drink Standard', 'Quality Assured'],
        availability: 'Regular supply',
        description: 'Modern energy and functional beverages for active lifestyles.',
        image: 'https://images.unsplash.com/photo-1622543925917-763c34c1a894?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
      }
    ],
    food: [
      {
        name: 'Almosim Pasta',
        origin: 'Egypt',
        originFlag: '🇪🇬',
        category: 'Food Essentials',
        established: '1995',
        specialties: ['Durum Wheat Pasta', 'Various Shapes', 'Premium Quality'],
        packaging: ['400g Boxes', '1kg Bags'],
        certifications: ['Food Grade', 'Export Quality'],
        availability: 'Consistent supply',
        description: 'High-quality pasta made from premium durum wheat, perfect for African markets.',
        image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Faragello Purée',
        origin: 'Libya',
        originFlag: '🇱🇾',
        category: 'Food Essentials',
        established: '1988',
        specialties: ['Tomato Purée', 'Tomato Paste', 'Natural Processing'],
        packaging: ['400g Cans', '800g Cans', '2.2kg Cans'],
        certifications: ['Natural Processing', 'Export Standard'],
        availability: 'Seasonal peak supply',
        description: 'Premium tomato products from Libya\'s finest tomato growing regions.',
        image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Hayat Cooking Oil',
        origin: 'Malaysia/UAE',
        originFlag: '🇲🇾',
        category: 'Food Essentials',
        established: '1982',
        specialties: ['Palm Oil', 'Refined Oil', 'High Smoke Point'],
        packaging: ['1L Bottles', '5L Containers', '18L Containers'],
        certifications: ['MSPO Certified', 'Halal Certified'],
        availability: 'High volume capacity',
        description: 'Premium refined cooking oil, perfect for African culinary needs and climate.',
        image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
      }
    ]
  };

  const getAllBrands = () => {
    return [...brandData.beverages, ...brandData.food];
  };

  const getFilteredBrands = () => {
    if (activeCategory === 'all') return getAllBrands();
    if (activeCategory === 'beverages') return brandData.beverages;
    if (activeCategory === 'food') return brandData.food;
    return [];
  };

  const categories = [
    { id: 'all', label: 'All Brands', count: getAllBrands().length },
    { id: 'beverages', label: 'Beverages', count: brandData.beverages.length },
    { id: 'food', label: 'Food Essentials', count: brandData.food.length }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-50">
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
            Global Brands We{' '}
            <span className="text-[#7a1010]">Bring to Africa</span>
          </h2>
          <p className="font-dm-sans text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted partnerships with leading international brands — bridging continents 
            and communities through reliable, quality products.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-2 p-2 bg-white rounded-xl shadow-lg border">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-dm-sans font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#7a1010] text-white shadow-lg'
                    : 'text-gray-600 hover:text-[#7a1010] hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.label}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Brand Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {getFilteredBrands().map((brand, index) => (
            <motion.div
              key={`${brand.name}-${index}`}
              variants={cardVariants}
              onHoverStart={() => setHoveredBrand(index)}
              onHoverEnd={() => setHoveredBrand(null)}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden bg-white border-0 shadow-lg">
                {/* Brand Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Origin Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                    <div className="flex items-center gap-2 text-sm font-dm-sans font-medium">
                      <span className="text-base">{brand.originFlag}</span>
                      <span className="text-gray-800">{brand.origin}</span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#7a1010] text-white">
                      {brand.category}
                    </Badge>
                  </div>

                  {/* Established Year */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-1 text-sm">
                      <Building2 className="w-4 h-4" />
                      <span>Est. {brand.established}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Brand Name */}
                  <h3 className="font-poppins font-bold text-xl text-gray-900 mb-2">
                    {brand.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="font-dm-sans text-gray-600 text-sm leading-relaxed mb-4">
                    {brand.description}
                  </p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="font-dm-sans font-semibold text-sm text-gray-900 mb-2 flex items-center gap-1">
                      <Star className="w-4 h-4 text-[#7a1010]" />
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {brand.specialties.slice(0, 2).map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-[#dfdfdf]/30">
                          {specialty}
                        </Badge>
                      ))}
                      {brand.specialties.length > 2 && (
                        <Badge variant="secondary" className="text-xs bg-gray-100">
                          +{brand.specialties.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Hover Details */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: hoveredBrand === index ? 1 : 0,
                      height: hoveredBrand === index ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t pt-4 space-y-3">
                      {/* Packaging */}
                      <div>
                        <h5 className="font-dm-sans font-semibold text-xs text-gray-700 mb-1 flex items-center gap-1">
                          <Truck className="w-3 h-3" />
                          Packaging
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {brand.packaging.slice(0, 2).map((pkg, idx) => (
                            <span key={idx} className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                              {pkg}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Certifications */}
                      <div>
                        <h5 className="font-dm-sans font-semibold text-xs text-gray-700 mb-1 flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          Certifications
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {brand.certifications.map((cert, idx) => (
                            <span key={idx} className="text-xs text-green-700 bg-green-50 px-2 py-1 rounded flex items-center gap-1">
                              <CheckCircle className="w-3 h-3" />
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Availability */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-dm-sans font-medium text-gray-700 flex items-center gap-1">
                          <Globe className="w-4 h-4 text-[#7a1010]" />
                          Availability
                        </span>
                        <span className="text-gray-600">{brand.availability}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    className="mt-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className="w-full bg-[#7a1010] hover:bg-[#7a1010]/90 text-white font-dm-sans font-medium"
                      size="sm"
                    >
                      <span className="flex items-center gap-2">
                        Request Brand Info
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12 p-8 bg-gradient-to-r from-[#7a1010]/5 to-[#dfdfdf]/20 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-3">
            Partner with Global Brands
          </h3>
          <p className="font-dm-sans text-gray-600 mb-6 max-w-2xl mx-auto">
            Access premium international brands through our established supply chains. 
            From sourcing to distribution across Africa.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-[#7a1010] hover:bg-[#7a1010]/90 text-white font-dm-sans font-semibold px-8 py-3 text-lg rounded-lg shadow-lg"
            >
              <span className="flex items-center gap-2">
                Explore Partnership Opportunities
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OtherBrands;
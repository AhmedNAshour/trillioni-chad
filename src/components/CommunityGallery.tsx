
import React from 'react';
import { motion } from 'framer-motion';

const CommunityGallery = () => {
  // Gallery images organized into columns
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "School supply giveaway — N'Djamena",
      category: "Education"
    },
    {
      src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Clinic support in rural Chad",
      category: "Healthcare"
    },
    {
      src: "https://images.unsplash.com/photo-1594736797933-d0400d2b7d2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Local youth football program kickoff",
      category: "Youth Development"
    },
    {
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Small business support for families",
      category: "Family Empowerment"
    },
    {
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Community health workshop",
      category: "Healthcare"
    },
    {
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Educational materials distribution",
      category: "Education"
    },
    {
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Youth leadership training",
      category: "Youth Development"
    },
    {
      src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Women's entrepreneurship program",
      category: "Family Empowerment"
    },
    {
      src: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Rural community outreach",
      category: "Healthcare"
    },
    {
      src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Agricultural support program",
      category: "Family Empowerment"
    },
    {
      src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Children's literacy program",
      category: "Education"
    },
    {
      src: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Community nutrition education",
      category: "Healthcare"
    },
    {
      src: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Youth sports development",
      category: "Youth Development"
    },
    {
      src: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Vocational training center",
      category: "Education"
    },
    {
      src: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Mobile health clinic",
      category: "Healthcare"
    },
    {
      src: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Microfinance workshop",
      category: "Family Empowerment"
    }
  ];

  // Distribute images into 5 columns for desktop, 2 for mobile
  const distributeImages = (images: typeof galleryImages, numColumns: number) => {
    const columns = Array.from({ length: numColumns }, () => [] as typeof galleryImages);
    images.forEach((image, index) => {
      columns[index % numColumns].push(image);
    });
    return columns;
  };

  const desktopColumns = distributeImages(galleryImages, 5);
  const mobileColumns = distributeImages(galleryImages, 2);

  const AnimatedColumn = ({ 
    images, 
    direction, 
    duration 
  }: { 
    images: typeof galleryImages; 
    direction: 'up' | 'down'; 
    duration: number;
  }) => {
    // Duplicate images for seamless infinite scroll
    const duplicatedImages = [...images, ...images];
    
    return (
      <div className="relative h-full overflow-hidden">
        {/* Top gradient mask */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none" />
        
        {/* Bottom gradient mask */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none" />
        
        <motion.div
          animate={{
            y: direction === 'up' ? ['0%', '-50%'] : ['0%', '50%']
          }}
          transition={{
            duration,
            ease: 'linear',
            repeat: Infinity,
          }}
          className="flex flex-col gap-4"
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-64 md:h-72 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <span className="inline-block px-2 py-1 bg-primary/90 rounded-full text-xs font-dm-sans font-semibold mb-2">
                    {image.category}
                  </span>
                  <p className="font-dm-sans text-sm leading-relaxed">
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Our Impact in Action
          </h2>
          <p className="font-dm-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Witness the transformative power of community partnership through these moments
          </p>
        </div>

        {/* Desktop: 5 columns */}
        <div className="hidden md:flex gap-4 h-[600px] lg:h-[700px]">
          {desktopColumns.map((columnImages, index) => (
            <div key={index} className="flex-1">
              <AnimatedColumn
                images={columnImages}
                direction={index % 2 === 0 ? 'up' : 'down'}
                duration={20 + index * 2} // Varying speeds: 20s, 22s, 24s, 26s, 28s
              />
            </div>
          ))}
        </div>

        {/* Mobile: 2 columns */}
        <div className="md:hidden flex gap-4 h-[500px] overflow-x-hidden">
          {mobileColumns.map((columnImages, index) => (
            <div key={index} className="flex-1">
              <AnimatedColumn
                images={columnImages}
                direction={index % 2 === 0 ? 'up' : 'down'}
                duration={25 + index * 3} // 25s and 28s for mobile
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityGallery;

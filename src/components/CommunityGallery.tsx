
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const CommunityGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
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
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Our Impact in Action
          </h2>
          <p className="font-dm-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Witness the transformative power of community partnership through these moments
          </p>
        </div>

        {/* Tinder-style Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <Carousel 
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-2 md:pl-4 basis-4/5 md:basis-2/5 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img
                            src={image.src}
                            alt={image.caption}
                            className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300">
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                              <span className="inline-block px-3 py-1 bg-primary/90 rounded-full text-xs font-dm-sans font-semibold mb-3">
                                {image.category}
                              </span>
                              <p className="font-dm-sans text-sm md:text-base leading-relaxed">
                                {image.caption}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white/90 border-primary/20 hover:bg-primary hover:text-white" />
            <CarouselNext className="hidden md:flex -right-12 bg-white/90 border-primary/20 hover:bg-primary hover:text-white" />
          </Carousel>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-6 md:hidden">
            <div className="flex space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityGallery;

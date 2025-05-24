
import React from 'react';

const CommunityGallery = () => {
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

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <span className="inline-block px-2 py-1 bg-primary/80 rounded text-xs font-dm-sans font-semibold mb-2">
                    {image.category}
                  </span>
                  <p className="font-dm-sans text-sm">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 relative overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <span className="inline-block px-2 py-1 bg-primary/80 rounded text-xs font-dm-sans font-semibold mb-2">
                    {image.category}
                  </span>
                  <p className="font-dm-sans text-sm">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityGallery;

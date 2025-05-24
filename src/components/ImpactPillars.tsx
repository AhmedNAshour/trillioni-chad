
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Heart, Users, User } from 'lucide-react';

const ImpactPillars = () => {
  const pillars = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "We've proudly contributed to humanitarian and educational aid by providing school supplies, covering school and university fees, and supporting local classrooms across the country.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stat: "500+ Students Supported"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "We actively support community health by backing local clinics, ensuring access to basic care where it's needed most.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stat: "15+ Clinics Supported"
    },
    {
      icon: Users,
      title: "Youth Development",
      description: "In youth development, we invest in programs that give young people the discipline, confidence, and teamwork skills to thrive.",
      image: "https://images.unsplash.com/photo-1594736797933-d0400d2b7d2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stat: "8 Youth Programs"
    },
    {
      icon: User,
      title: "Family Empowerment",
      description: "Our efforts extend to empowering widows and orphans through financial and in-kind assistance, and helping families launch small businesses that promote self-reliance.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stat: "200+ Families Helped"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Our Commitment Beyond Business
          </h2>
          <p className="font-dm-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Building stronger communities through focused investment in what matters most
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={pillar.image} 
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <pillar.icon className="w-12 h-12 text-white" />
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="font-dm-sans text-sm font-semibold text-primary">{pillar.stat}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="font-dm-sans text-sm text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactPillars;

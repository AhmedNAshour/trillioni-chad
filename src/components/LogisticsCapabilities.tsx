import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardCheck, FileText, Warehouse, Network } from 'lucide-react';

const LogisticsCapabilities = () => {
  const logisticsCapabilities = [
    {
      icon: ClipboardCheck,
      title: "Customs Clearance",
      description: "Expert handling of all customs procedures and regulatory compliance",
      image: "/partnerships/customs-clearance.jpg"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Complete documentation management for seamless import/export",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Warehouse,
      title: "Warehousing",
      description: "Strategic storage facilities with specialized handling capabilities",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Network,
      title: "Distribution Networks",
      description: "Comprehensive last-mile delivery across multiple African markets",
      image: "/partnerships/distribution.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl text-gray-900 mb-4">
            Import/Export & Logistics Capabilities
          </h2>
          <p className="font-dm-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for seamless trade operations across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {logisticsCapabilities.map((capability, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 text-center overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={capability.image} 
                  alt={capability.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <capability.icon className="w-12 h-12 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="font-dm-sans text-sm text-gray-600">
                  {capability.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogisticsCapabilities;

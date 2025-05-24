
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardCheck, FileText, Warehouse, Network } from 'lucide-react';

const LogisticsCapabilities = () => {
  const logisticsCapabilities = [
    {
      icon: ClipboardCheck,
      title: "Customs Clearance",
      description: "Expert handling of all customs procedures and regulatory compliance"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Complete documentation management for seamless import/export"
    },
    {
      icon: Warehouse,
      title: "Warehousing",
      description: "Strategic storage facilities with specialized handling capabilities"
    },
    {
      icon: Network,
      title: "Distribution Networks",
      description: "Comprehensive last-mile delivery across multiple African markets"
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
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <capability.icon className="w-8 h-8 text-primary" />
                </div>
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


import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Shield, Globe, CheckCircle } from 'lucide-react';

const LogisticsCapabilities = () => {
  const capabilities = [
    {
      title: "Distribution Networks",
      description: "Extensive reach across 10+ African countries with local partnerships",
      icon: Truck,
      image: "/partnerships/distribution.jpg",
      features: [
        "150+ retail partnerships",
        "94+ wholesale distributors",
        "Urban and rural coverage",
        "Real-time tracking systems"
      ]
    },
    {
      title: "Customs Clearance",
      description: "Expert handling of import/export documentation and regulatory compliance",
      icon: Shield,
      image: "/partnerships/customs-clearance.jpg",
      features: [
        "Multi-country expertise",
        "Regulatory compliance",
        "Fast processing times",
        "Documentation support"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl text-gray-900 mb-4">
            Our Core Capabilities
          </h2>
          <p className="font-dm-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive logistics solutions designed for the African market
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={capability.image}
                  alt={capability.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <capability.icon className="w-8 h-8 mb-2" />
                  <h3 className="font-poppins font-bold text-xl">{capability.title}</h3>
                </div>
              </div>
              <CardHeader>
                <CardDescription className="font-dm-sans text-gray-600">
                  {capability.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                      <span className="font-dm-sans text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogisticsCapabilities;

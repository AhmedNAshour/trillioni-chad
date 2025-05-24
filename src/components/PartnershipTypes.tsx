
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Truck, Users, CheckCircle } from 'lucide-react';

const PartnershipTypes = () => {
  const partnershipTypes = [
    {
      title: "Brand Partners",
      description: "Global brands seeking African market entry and expansion",
      icon: Globe,
      benefits: [
        "Extensive distribution network across 10+ countries",
        "Local market expertise and cultural insights",
        "Regulatory compliance and import/export handling",
        "Brand positioning and marketing support"
      ]
    },
    {
      title: "Logistics Partners",
      description: "Transportation and warehousing solutions providers",
      icon: Truck,
      benefits: [
        "Strategic location partnerships",
        "Cold chain and specialized storage",
        "Last-mile delivery networks",
        "Cross-border transportation expertise"
      ]
    },
    {
      title: "Retail Partners",
      description: "Local retailers and distributors seeking premium products",
      icon: Users,
      benefits: [
        "Access to premium international brands",
        "Competitive pricing and margins",
        "Marketing and promotional support",
        "Training and product education"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl text-gray-900 mb-4">
            Find Your Fit
          </h2>
          <p className="font-dm-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored partnership models for global brands, logistics experts, and local retailers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnershipTypes.map((type, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <type.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-poppins text-xl">{type.title}</CardTitle>
                <CardDescription className="font-dm-sans text-gray-600">
                  {type.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="font-dm-sans text-sm text-gray-600">{benefit}</span>
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

export default PartnershipTypes;

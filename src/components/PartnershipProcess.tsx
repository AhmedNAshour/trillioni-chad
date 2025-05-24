
import React from 'react';
import { ArrowRight } from 'lucide-react';

const PartnershipProcess = () => {
  const partnershipProcess = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We discuss your goals, products, and market requirements to understand your needs."
    },
    {
      step: "02",
      title: "Market Analysis",
      description: "Our team conducts thorough market research and feasibility studies for your target regions."
    },
    {
      step: "03",
      title: "Partnership Agreement",
      description: "We develop customized partnership terms that align with your business objectives."
    },
    {
      step: "04",
      title: "Implementation",
      description: "We execute the partnership plan with full regulatory compliance and logistics support."
    },
    {
      step: "05",
      title: "Ongoing Support",
      description: "Continuous monitoring, optimization, and growth strategies to maximize success."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl text-gray-900 mb-4">
            Partnership Process
          </h2>
          <p className="font-dm-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Our structured approach ensures successful partnerships from initial 
            consultation to ongoing support.
          </p>
        </div>

        <div className="relative">
          <div className="space-y-8">
            {partnershipProcess.map((process, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-poppins font-bold text-sm">
                    {process.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">
                    {process.title}
                  </h3>
                  <p className="font-dm-sans text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>
                {index < partnershipProcess.length - 1 && (
                  <div className="hidden sm:block ml-6">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipProcess;

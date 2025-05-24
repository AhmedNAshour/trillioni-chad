
import React from 'react';
import { Shield, Target, Globe, Users, Truck } from 'lucide-react';

const WhyPartnerSection = () => {
  const whyPartner = [
    {
      icon: Shield,
      title: "Proven Track Record",
      description: "Successfully partnered with global brands like IFFCO, Aujan, and Barbican since 2020"
    },
    {
      icon: Target,
      title: "Market Expertise",
      description: "Deep understanding of African markets, regulations, and consumer preferences"
    },
    {
      icon: Globe,
      title: "Extensive Network",
      description: "Established distribution channels across 10+ African countries"
    },
    {
      icon: Users,
      title: "Local Presence",
      description: "On-ground teams with local knowledge and relationship networks"
    },
    {
      icon: Truck,
      title: "Full Supply Chain Support",
      description: "End-to-end logistics solutions from import to final delivery"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-primary/90"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl text-white mb-4">
            Why Partner With Trillioni Chad?
          </h2>
          <p className="font-dm-sans text-lg text-gray-200 max-w-2xl mx-auto">
            Our expertise, network, and commitment to excellence make us the ideal 
            partner for your African market expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {whyPartner.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-lg mx-auto mb-4 flex items-center justify-center shadow-md">
                <reason.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-poppins font-semibold text-lg text-white mb-3">
                {reason.title}
              </h3>
              <p className="font-dm-sans text-sm text-gray-200">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;

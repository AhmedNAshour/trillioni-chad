
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PartnersSection from '@/components/PartnersSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle, Globe, Truck, Shield, Users, Target, ArrowRight, ClipboardCheck, FileText, Warehouse, Network } from 'lucide-react';

const Partnerships = () => {
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
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
              Partnership Opportunities
            </h1>
            <p className="font-dm-sans text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join forces with Trillioni Chad to expand your reach across Africa. 
              We provide strategic import/export guidance, local expertise, and end-to-end logistics support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white font-dm-sans font-semibold px-8 py-3 rounded-lg">
                  Schedule Consultation
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-dm-sans font-semibold px-8 py-3 rounded-lg">
                  View Our Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
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

      {/* Why Partner With Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl text-gray-900 mb-4">
              Why Partner With Trillioni Chad?
            </h2>
            <p className="font-dm-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Our expertise, network, and commitment to excellence make us the ideal 
              partner for your African market expansion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {whyPartner.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center shadow-md">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="font-dm-sans text-sm text-gray-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Brands Logo Slider */}
      <PartnersSection />

      {/* Partnership Process */}
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

      {/* Import/Export & Logistics Capabilities */}
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

      {/* Final CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl mb-6">
            Ready to Expand Across Africa?
          </h2>
          <p className="font-dm-sans text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's build something scalable and impactful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-white font-dm-sans font-semibold px-8 py-3 rounded-lg">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-dm-sans font-semibold px-8 py-3 rounded-lg">
                Become a Partner
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-dm-sans font-semibold px-8 py-3 rounded-lg">
                View Our Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnerships;

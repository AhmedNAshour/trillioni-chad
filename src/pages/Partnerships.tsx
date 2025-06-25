import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PartnersSection from '@/components/PartnersSection';
import PartnershipHero from '@/components/PartnershipHero';
import PartnershipTypes from '@/components/PartnershipTypes';
import WhyPartnerSection from '@/components/WhyPartnerSection';
import PartnershipProcess from '@/components/PartnershipProcess';
import LogisticsCapabilities from '@/components/LogisticsCapabilities';
import PartnershipCTA from '@/components/PartnershipCTA';

const Partnerships = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PartnershipHero />
      <PartnersSection />
      <PartnershipTypes />
      <WhyPartnerSection />
      <PartnershipProcess />
      <LogisticsCapabilities />
      <PartnershipCTA />
      <Footer />
    </div>
  );
};

export default Partnerships;
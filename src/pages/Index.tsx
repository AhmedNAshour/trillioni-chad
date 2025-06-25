
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PartnersSection from '@/components/PartnersSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import StatsSection from '@/components/StatsSection';
import WhySection from '@/components/WhySection';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <WhySection />
      <StatsSection />
      <ProductsSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;

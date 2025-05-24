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
import ParallaxWrapper from '@/components/ParallaxWrapper';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      
      {/* Partners Section with subtle parallax */}
      <ParallaxWrapper speed={0.3} className="relative z-10">
        <PartnersSection />
      </ParallaxWrapper>

      {/* About Section with fade-in animation */}
      <div className="relative z-10 transform transition-all duration-1000">
        <AboutSection />
      </div>

      {/* Products Section with parallax background */}
      <ParallaxWrapper speed={0.2} className="relative z-10">
        <ProductsSection />
      </ParallaxWrapper>

      {/* Stats Section - keep as is since it has its own animations */}
      <div className="relative z-10">
        <StatsSection />
      </div>

      {/* Why Section with parallax */}
      <ParallaxWrapper speed={0.1} className="relative z-10">
        <WhySection />
      </ParallaxWrapper>

      {/* Community Section */}
      <div className="relative z-10">
        <CommunitySection />
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Index;

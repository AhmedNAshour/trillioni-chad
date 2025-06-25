import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CommunityHero from '@/components/CommunityHero';
import ImpactPillars from '@/components/ImpactPillars';
import CommunityTestimonial from '@/components/CommunityTestimonial';
import CommunityGallery from '@/components/CommunityGallery';
import CommunityCallToAction from '@/components/CommunityCallToAction';
import CommunityGrowTogetherCTA from '@/components/CommunityGrowTogetherCTA';

const Community = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <CommunityHero />
      <CommunityGallery />
      <ImpactPillars />
      <CommunityTestimonial />
      <CommunityGrowTogetherCTA />
      <CommunityCallToAction />
      <Footer />
    </div>
  );
};

export default Community;
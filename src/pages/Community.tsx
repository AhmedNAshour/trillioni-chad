
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CommunityHero from '@/components/CommunityHero';
import ImpactPillars from '@/components/ImpactPillars';
import CommunityTestimonial from '@/components/CommunityTestimonial';
import CommunityGallery from '@/components/CommunityGallery';
import CommunityCallToAction from '@/components/CommunityCallToAction';

const Community = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <CommunityHero />
      <ImpactPillars />
      <CommunityTestimonial />
      <CommunityGallery />
      <CommunityCallToAction />
      <Footer />
    </div>
  );
};

export default Community;

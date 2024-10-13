import React from 'react';
import HeroSection from './HeroSection';
import FeatureHighlights from './FeatureHighlights';
import UserTestimonials from './UserTestimonials';
import PricingOverview from './PricingOverview';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <FeatureHighlights />
      <UserTestimonials />
      <PricingOverview />
    </div>
  );
};

export default LandingPage;
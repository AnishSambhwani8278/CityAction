import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeatureSection from '../components/home/FeatureSection';
import StatsSection from '../components/home/StatsSection';
import TestimonialSection from '../components/home/TestimonialSection';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <FeatureSection />
      <StatsSection />
      <TestimonialSection />
      <CTASection />
    </Layout>
  );
};

export default HomePage;
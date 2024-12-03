import AboutSectionTwo from '@/components/home-2/AboutSectionTwo';
import BlogSectionTwo from '@/components/home-2/BlogSectionTwo';
import ContactSection from '@/components/home-2/ContactSection';
import FaqSectionTwo from '@/components/home-2/FaqSectionTwo';
import NewsletterSection from '@/components/home-2/NewsLetterSection';
import ServiceSectionTwo from '@/components/home-2/ServicesTwo';
import BrandSliderTwo from '@/elements/sliders/brand/BrandSliderTwo';
import HeroSliderTwo from '@/elements/sliders/hero/HeroTwo';
import PortfolioSlider from '@/elements/sliders/portfolio/PortfolioSliderTwo';
import TestimonialSliderTwo from '@/elements/sliders/testimonial/TestimonialSliderTwo';

import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
export const metadata: Metadata = {
  title: 'Taupo Lawns | Expert Lawn Mowing, Gardening, & Trimming Services',
  description: 'Transform your outdoor spaces with Taupo Lawns, offering professional lawn mowing, hedge and tree trimming, and gardening services in Taupo since 2014.',
  openGraph: {
    title: 'Taupo Lawns | Expert Lawn Mowing, Gardening, & Trimming Services',
    description: 'Transform your outdoor spaces with Taupo Lawns, offering professional lawn mowing, hedge and tree trimming, and gardening services in Taupo since 2014.',
  },
}
const HomeTwoMain = () => {
    return (
        <>
   
      <Wrapper>
        <main>
      <HeroSliderTwo/>
      {/* <AboutSectionTwo/> */}
      {/* <BrandSliderTwo/> */}
      <ServiceSectionTwo/>
      {/* <PortfolioSlider/> */}
      <ContactSection/>
      {/* <TestimonialSliderTwo/> */}
      {/* <FaqSectionTwo/> */}
      {/* <NewsletterSection/> */}
      {/* <BlogSectionTwo /> */}
        </main>
      </Wrapper>

        </>
    );
};

export default HomeTwoMain;
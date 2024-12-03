
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
import ServiceSectionTwo from '@/components/home-2/ServicesTwo';
export const metadata = {
    title: 'Professional Lawn Care, Hedge Trimming & Gardening Services | Taupo Lawns',
    description: "Discover Taupo Lawns' comprehensive services, including expert lawn mowing, hedge and tree trimming, and gardening solutions to keep your outdoor spaces pristine.",
    openGraph: {
      title: 'Professional Lawn Care, Hedge Trimming & Gardening Services | Taupo Lawns',
      description: "Discover Taupo Lawns' comprehensive services, including expert lawn mowing, hedge and tree trimming, and gardening solutions to keep your outdoor spaces pristine.",
    },
  }
const ContactMain = () => {
    return (
        <>
    <MetaData pageTitle="Checkout">
       <Wrapper>
        <main>
            <ServiceSectionTwo/>
        </main>
      </Wrapper>
   </MetaData>
        </>
    );
};

export default ContactMain;
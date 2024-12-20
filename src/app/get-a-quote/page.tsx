import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import ContactFormSection from '@/components/contact/ContactFormSection';
import ContactMapSection from '@/components/contact/ContactMapSection';
import GetQuoteFormSection from '@/components/contact/GetQuoteFormSection';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
export const metadata = {
    title: 'Get a Free Quote | Taupo Lawns Lawn Mowing & Gardening Services',
    description: 'Request a free quote from Taupo Lawns and let us help you maintain a beautiful, well-kept outdoor space with our professional services.',
    openGraph: {
      title: 'Get a Free Quote | Taupo Lawns Lawn Mowing & Gardening Services',
      description: 'Request a free quote from Taupo Lawns and let us help you maintain a beautiful, well-kept outdoor space with our professional services.',
    },
  }
const ContactMain = () => {
    return (
        <>
    <MetaData pageTitle="Checkout">
       <Wrapper>
        <main>
        <Breadcrumb breadTitle={'Get A Quote'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'get-a-quote'} />
            <GetQuoteFormSection/> 
            <ContactMapSection />
        </main>
      </Wrapper>
   </MetaData>
        </>
    );
};

export default ContactMain;
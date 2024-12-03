
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
import ServiceSectionTwo from '@/components/home-2/ServicesTwo';

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
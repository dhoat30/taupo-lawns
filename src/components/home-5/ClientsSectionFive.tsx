import BrandSlider from '@/elements/sliders/brand/BrandSliderOne';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import patternImg from "../../../public/assets/img/shape/pattern-1270.png";

const ClientsSectionFive = () => {
    return (
        <div className="clients-area clients-area3 pt-120 pb-60">
         <div className="container">
            <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8 col-md-8">
                  <div className="section-title style-5 text-center">
                     <span className="section-subtitle">clients</span>
                     <h2 className="section-main-title mb-45">happy users</h2>
                  </div>
               </div>
            </div>
            <div className="row wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-12">
                    <BrandSlider brand_classA="nothing" />
               </div>
            </div>
            <div className="services-action-wrapper style-2 wow fadeInUp" data-wow-delay=".3s">
               <div className="service-action-bg-shape">
                  <Image src={patternImg} alt="image not found"/>
               </div>
               <h3><i className="flaticon-house"></i>Provides Hassle-Free Backyard Transformations with Artistic Solutions.</h3>
                <Link href="/contact" className="fill-btn-rounded"><i className="fal fa-farm"></i><span>Get a Quote</span></Link>
            </div>
         </div>
      </div>
    );
};

export default ClientsSectionFive;
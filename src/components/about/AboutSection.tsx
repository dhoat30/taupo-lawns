import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import aboutThumb from '../../../public/assets/img/about/about-thumb.jpg';

const AboutUsSection = () => {
    return (
        <section className="about-area pt-120 pb-90">
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-6">
                        <div className="about-thumb mb-30">
                            <Image style={{width:"100%", height:"auto"}} src={aboutThumb} alt="about-thumb"/>
                            <div className="about-thumb-meta">
                                <p>since 2014</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content mb-30">
                            <div className="section-title">
                                <h2 className="section-main-title mb-20">about us</h2>
                            </div>
                            <p className="mb-30">Since 2014, Taupo Lawns has been dedicated to providing top-quality lawn care, hedge and tree trimming, and gardening services for homes and businesses in the Taupo region.</p>
                           <p className="mb-30"> With a commitment to professionalism, reliability, and exceptional customer service, we have built a reputation for transforming outdoor spaces into beautiful, well-maintained areas. Whether it’s a regular lawn mowing schedule, precise hedge trimming, or comprehensive garden care, our experienced team ensures every job is completed to the highest standard. At Taupo Lawns, we take pride in helping you enjoy a lush, tidy, and vibrant landscape all year round.</p>
                            <div className="about-btn">
                                <Link href="/contact" className="fill-btn">get in touch<i className="fal fa-angle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
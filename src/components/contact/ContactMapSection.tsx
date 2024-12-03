import Image from 'next/image';
import React from 'react';
import sholveImg from "../../../public/assets/img/about/shovle-img.png"
import Link from 'next/link';

const ContactMapSection = () => {
    return (
        <section className="contact-info-area">
         <div className="contact-info-shape">
            <Image style={{width:"400px", height:"400px", objectFit: "cover"}} className="contact-img-1" src={sholveImg} alt="image not found"/>
         </div>
         <div className="container">
            <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8">
                  <div className="section-title text-center">
                     <span className="section-subtitle">contact</span>
                     <h2 className="section-main-title mb-45">get in touch</h2>
                  </div>
               </div>
            </div>
            <div className="row wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-4">
                
               </div>
               <div className="col-lg-4">
                  <div className="info-item-wrapper info-wrapper-media">
                     <h4 className="contact-info-title">Contact Info</h4>
                     <div className="info-contact">
                        <ul>
                           <li>
                              <div className="single-contact">
                                 <div className="contact-icon">
                                    <i className="fas fa-phone"></i>
                                 </div>
                                 <p><Link href={`tel:${process.env.phoneNumber}`}>{process.env.phoneNumber}</Link></p>
                              </div>
                           </li>
                           <li>
                              <div className="single-contact">
                                 <div className="contact-icon">
                                    <i className="fas fa-envelope-open"></i>
                                 </div>
                                 <p><Link href={`mailto: ${process.env.email}`}>{process.env.email}</Link></p>
                              </div>
                           </li>
                           {/* <li>
                              <div className="single-contact">
                                 <div className="contact-icon">
                                    <i className="fas fa-map-marked-alt"></i>
                                 </div>
                                 <p><Link href="#">60 East 65th Street, New York
                                       City, NY 10065</Link></p>
                              </div>
                           </li> */}
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="info-item-wrapper info-wrapper-time">
                     <h4 className="contact-info-title">opening hours</h4>
                     <div className="info-contact-time">
                        <ul>
                           <li>
                              <div className="info-date">
                                 <span>Mon - Sat</span>
                                 <span>9:00 am - 6:00 pm</span>
                              </div>
                           </li>
                          
                           <li>
                              <div className="info-date">
                                 <span>Sunday</span>
                                 <span>Off</span>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
};

export default ContactMapSection;
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logoImg from "../../../public/assets/img/logo/logo-bl.png";
import NewsletterForm from './NewsletterForm';
// Function to get the current year
const getCurrentYear = () => {
    return new Date().getFullYear();
  };
const FooterFive = () => {
    return (
        <footer className="footer5-bg">
            <div className="footer-area footer-area5 footer-area5-bg pt-100 pb-70">
                <div className="container">
                    <div className="footer5-inner">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-12 col-sm-12">
                                <div className="footer-widget footer5-widget footer5-widget1 mb-0">
                                    <div className="footer-logo">
                                        <Link href="/">
                                          <Image style={{ width: "auto", height: "auto" }} src={logoImg} alt="logo" />
                                        </Link>
                                    </div>
                                    <div className="footer-text">
                                        <p>Taupo Lawns is your local partner for exceptional lawn mowing, hedge and tree trimming, and gardening services. Dedicated to quality and customer satisfaction, we help you maintain beautiful, well-kept outdoor spaces all year round.</p>
                                    </div>
                                    <div className="newsletter-container">
                                                <NewsletterForm/> 
                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area copyright5-area">
                <div className="container">
                    <div className="copyright5-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-6 order-lg-1">
                                <div className="footer-links">
                                    <Link href="/get-a-quote">GET A QUOTE</Link>
                                    <Link href="/contact">CONTACT</Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 order-lg-3">
                                <div className="footer-social">
                                    <div className="social-links">
                                        <ul>
                                            {/* <li><Link href="https://x.com/"  target="_blank"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="https://www.behance.net/" target="_blank"><i className="fab fa-behance"></i></Link></li>
                                            <li><Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link></li> */}
                                            <li><Link href="https://www.facebook.com/taupolawns.nz/" target="_blank"><i className="fab fa-facebook"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 order-lg-2">
                                <div className="copyright-text copyright5-text">
                                    © {getCurrentYear()} Taupo Lawns. All Rights Reserved. <Link href="https://webduel.co.nz" style={{color: "green"}}>Built by web<strong >duel</strong></Link>.  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterFive;
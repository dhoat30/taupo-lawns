'use client';
import React, {useEffect} from 'react';
import priceTagImg from '../../public/assets/img/icon/price-tag.png';
import Image from 'next/image';
import Link from 'next/link';

const PricingCtaForm = () => {

   useEffect(() => {
      const script = document.createElement("script");
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.type = "text/javascript";
      script.charset = "utf-8";
      script.async = true;
  
      script.onload = () => {
        console.log("Script loaded successfully");
        if (window.hbspt) {
          console.log("window.hbspt is available");
          window.hbspt.forms.create({
            portalId: "48396942",
            formId: "6e8b0272-e977-4a93-9bfd-116e4a47c808",
            target: "#get-quote-form", // Ensure the form renders in the specific div
          });
        } else {
          console.error("window.hbspt is not available");
        }
      };
  
      script.onerror = () => {
        console.error("Failed to load the script");
      };
  
      document.body.appendChild(script);
  
      return () => {
        // Cleanup script on component unmount
        document.body.removeChild(script);
      };
    }, []);
  
    return (
    <div id="get-quote-form"></div>
    );
};

export default PricingCtaForm;
"use client"
import { contact_schema } from "@/utils/validation-schema";
import { useFormik } from "formik";
import React from "react";
import { toast } from "sonner";
import ErrorMsg from "./ErrorMsg";
import { useEffect } from "react";

const ContactForm = () => {
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
              formId: "993cc825-fb6f-4690-b363-4f3b6bf70262",
              target: "#contact-form", // Ensure the form renders in the specific div
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
    <>
       <div id="contact-form"></div>

    </>
  );
};

export default ContactForm;

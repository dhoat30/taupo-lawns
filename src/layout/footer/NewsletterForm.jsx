import React, { useEffect } from 'react';

const NewsletterForm = () => {
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
          formId: "5a8427f4-e23f-42c3-9114-afce1ffe5e52",
          target: "#hubspot-form", // Ensure the form renders in the specific div
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

      <div id="hubspot-form"></div>
  );
};

export default NewsletterForm;
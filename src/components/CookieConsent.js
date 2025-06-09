import React, { useState, useEffect } from 'react';
import '../css/CookieConsent.css';
import ReactGA from "react-ga4";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(!window.localStorage.getItem('site_cookie_consent'));

  useEffect(() => {
    const consent = window.localStorage.getItem('site_cookie_consent');
    if (consent === 'true') {
      // Initialize Google Analytics
      ReactGA.initialize('G-37M9KE97E1', {
        gaOptions: {
          anonymizeIp: true,
          allowAdFeatures: false,
        },
        gtagOptions: {
          send_page_view: true, // if you want to manually send pageviews
        },
      });
    }
  }, []);

  const handleAccept = () => {
    setShowConsent(false);
    window.localStorage.setItem('site_cookie_consent', 'true');
    // Initialize Google Analytics
    ReactGA.initialize('G-37M9KE97E1', {
      gaOptions: {
        anonymizeIp: true,
        allowAdFeatures: false,
      },
      gtagOptions: {
        send_page_view: true, // if you want to manually send pageviews
      },
    });
  };

  const handleReject = () => {
    setShowConsent(false);
    window.localStorage.setItem('site_cookie_consent', 'false');
  };

  return (
    showConsent && (
      <div className="cookie-consent">
        <p>
          We use cookies to improve your experience and analyze website traffic. By clicking "Accept", you consent to our use of cookies.
        </p>
        <button onClick={handleAccept} className="accept-btn">Accept</button>
        <button onClick={handleReject} className="reject-btn">Reject</button>
      </div>
    )
  );
};

export default CookieConsent;

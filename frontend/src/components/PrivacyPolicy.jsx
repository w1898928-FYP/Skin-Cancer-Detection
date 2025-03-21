import React from "react";
import "./LandingPage.css";
import backgroundImage from "../assets/skin-cancer-image2.jpg"; 


const PrivacyPolicy = () => {
  return (
    <div className="landing-container"style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
      <div className="landing-info">
        <div className="info-content">
          <h1>Privacy Policy</h1>
          <div className="feature-card2">
            <p className="italic">Last Updated: March 18, 2025</p>
            <h2>1. Introduction</h2>
            <p>
              The Skin Cancer Classification System ("we," "our," or "us") is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you use our skin cancer classification service.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide
              when creating an account, including:
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Password (encrypted)</li>
              <li>Age and gender (optional, for research purposes)</li>
            </ul>

            <h3>2.2 Health Information</h3>
            <p>When you use our classification service, we collect:</p>
            <ul>
              <li>Images of skin lesions that you upload</li>
              <li>Metadata associated with these images</li>
              <li>Your interaction with the system and results</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>
                To provide and maintain our skin cancer classification service
              </li>
              <li>To notify you about changes to our service</li>
              <li>To improve our algorithm and classification accuracy</li>
              <li>
                To conduct research to enhance skin cancer detection methods
                (using de-identified data)
              </li>
              <li>To respond to your inquiries and provide customer support</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information, including:
            </p>
            <ul>
              <li>Encryption of sensitive information</li>
              <li>Regular security assessments</li>
              <li>Restricted access to personal information</li>
              <li>Secure servers and networks</li>
            </ul>

            <h2>5. Data Sharing and Disclosure</h2>
            <p>
              We do not sell your personal information. We may share your
              information with:
            </p>
            <ul>
              <li>Service providers who help us operate our platform</li>
              <li>Research institutions (using de-identified data only)</li>
              <li>Law enforcement agencies when required by law</li>
            </ul>

            <h2>6. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access and receive a copy of your personal information</li>
              <li>Rectify inaccurate personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Data portability</li>
            </ul>

            <h2>7. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <p>privacy@skincancerclassification.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

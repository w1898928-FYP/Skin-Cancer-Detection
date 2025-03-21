import React from "react";
import "./LandingPage.css";
import backgroundImage from "../assets/skin-cancer-image2.jpg"; 


const TermsOfService = () => {
  return (
    <div className="landing-container"
    style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
      <div className="landing-info">
        <div className="info-content">
          <h1>Terms of Service</h1>

          <div className="feature-card2">
            <p className="italic">Last Updated: March 18, 2025</p>

            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using the Skin Cancer Classification System
              ("Service"), you agree to be bound by these Terms of Service. If
              you disagree with any part of these terms, you may not access the
              Service.
            </p>

            <h2>2. Medical Disclaimer</h2>
            <p className="warning-text">
              The Skin Cancer Classification System is not a substitute for
              professional medical advice, diagnosis, or treatment.
            </p>
            <p>
              Our Service provides a preliminary assessment tool only. The
              results provided by our system should be used for informational
              purposes and should not be interpreted as a medical diagnosis or
              treatment recommendation. Always seek the advice of a qualified
              healthcare provider with any questions you may have regarding a
              medical condition.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide information
              that is accurate, complete, and current at all times. Failure to
              do so constitutes a breach of the Terms, which may result in
              immediate termination of your account.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to
              access the Service and for any activities or actions under your
              password.
            </p>

            <h2>4. User Content</h2>
            <p>
              By uploading images to our Service, you grant us a non-exclusive,
              worldwide, royalty-free license to use, store, and process those
              images for the purpose of providing and improving our Service.
            </p>
            <p>
              You represent and warrant that you own or have the necessary
              rights to the content you upload, and that such content does not
              violate the rights of any third party.
            </p>

            <h2>5. Service Accuracy</h2>
            <p>
              While we strive to provide accurate classification results, our
              Service has limitations:
            </p>
            <ul>
              <li>
                Classification accuracy depends on image quality and various
                other factors
              </li>
              <li>The system cannot detect all types of skin conditions</li>
              <li>False positives and false negatives may occur</li>
            </ul>
            <p>
              We continuously work to improve our algorithm, but cannot
              guarantee 100% accuracy.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, we shall not be liable for
              any indirect, incidental, special, consequential, or punitive
              damages resulting from your use of or inability to use the
              Service.
            </p>

            <h2>7. Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without
              prior notice or liability, for any reason, including if you breach
              the Terms of Service.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time.
              If a revision is material, we will try to provide at least 30
              days' notice prior to any new terms taking effect.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>legal@skincancerclassification.com</p>
          </div>
        </div>
      </div>

      {/* <footer className="landing-footer">
        <p>© {new Date().getFullYear()} Skin Cancer Classification System</p>
        <p>
          <Link to="/about" className="footer-link">
            About
          </Link>
          <Link to="/privacy" className="footer-link">
            Privacy Policy
          </Link>
          <Link to="/terms" className="footer-link">
            Terms of Service
          </Link>
        </p>
      </footer> */}
    </div>
  );
};

export default TermsOfService;

import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import skinCancerImage from "../assets/skin-cancer-image4.jpg";
import backgroundImage from "../assets/skin-cancer-image2.jpg";

const LandingPage = () => {
  const features = [
    {
      title: "Advanced AI Detection",
      description:
        "Our system uses state-of-the-art machine learning algorithms to detect and classify skin lesions with high accuracy.",
    },
    {
      title: "Quick Results",
      description:
        "Get preliminary results within seconds, helping you make informed decisions about your health.",
    },
    {
      title: "Easy to Use",
      description:
        "Simply upload an image of your skin concern and our system will analyze it for potential issues.",
    },
    {
      title: "Privacy Focused",
      description:
        "Your data is encrypted and securely stored. We prioritize your privacy and health information security.",
    },
  ];

  return (
    <div
      className="landing-container"
      // style={{
      //   backgroundImage: `url(${backgroundImage})`, // Add background image
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="landing-hero info-content2">
        <div className="landing-content">
          <h1>Skin Cancer Classification System</h1>
          <p className="hero-subtitle">
            Early detection is key to successful treatment. Our AI-powered tool
            helps identify potential skin issues quickly and accurately.
          </p>
          <div className="cta-buttons">
            <Link to="/login" className="cta-button primary">
              Predict Now
            </Link>
            {/* <Link to="/login" className="cta-button secondary">
              Sign In
            </Link> */}
          </div>
        </div>
        <div className="hero-image">
          <img
            src={skinCancerImage}
            alt="Skin Cancer Classification"
            className="responsive-image"
          />
        </div>
      </div>

      <div className="landing-features">
        <h2>How It Works</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <span>{index + 1}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="landing-info">
        <div className="info-content">
          <h2>Why Early Detection Matters</h2>
          <p>
            Skin cancer is one of the most common types of cancer, but when
            caught early, the 5-year survival rate is over 98%. Our tool is
            designed to help you identify potential issues early, so you can
            seek professional medical attention when needed.
          </p>
          <p>
            <strong>Remember:</strong> This system is meant to assist, not
            replace professional medical advice. Always consult with a
            healthcare provider for proper diagnosis and treatment.
          </p>
        </div>
      </div>

      <div className="landing-cta">
        <h2>Ready to Get Started?</h2>
        <p>
          Create an account and start using our skin cancer classification
          system today.
        </p>
        <div className="cta-buttons2">
          <Link to="/register" className="cta-button primary">
            Register Now
          </Link>
          <Link to="/login" className="cta-button secondary">
            Sign In
          </Link>
        </div>
      </div>

      <footer className="landing-footer">
        <p>© {new Date().getFullYear()} Skin Cancer Classification System</p>
        <p>
          <Link to="/about" className="footer-link">
            About
          </Link>

          <Link to="/terms" className="footer-link">
            Terms of Service
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;

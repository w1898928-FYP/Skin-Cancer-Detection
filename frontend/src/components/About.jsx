import React from "react";
import "./LandingPage.css";
import backgroundImage from "../assets/skin-cancer-image2.jpg"; 

const About = () => {
  return (
    <div
      className="landing-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="landing-info">
        <div className="info-content">
          <h1>About the Skin Cancer Classification System</h1>

          <div className="feature-card2">
            <h2>Our Mission</h2>
            <p>
              The Skin Cancer Classification System aims to provide an
              accessible, AI-powered tool to help identify potential skin cancer
              conditions. Our mission is to improve early detection rates and
              increase awareness about skin cancer.
            </p>
            <p>
              We combine advanced machine learning algorithms with
              dermatological expertise to create a system that can analyze skin
              lesion images and provide preliminary classifications, helping
              users determine when medical consultation is necessary.
            </p>
          </div>
          <br></br>
          <div className="feature-card2">
            <h2>How It Works</h2>
            <p>
              Our system uses a convolutional neural network (CNN) trained on
              thousands of dermatologist-validated images to classify skin
              lesions into different categories, including:
            </p>
            <ul>
              <li>Melanoma</li>
              <li>Basal Cell Carcinoma</li>
              <li>Squamous Cell Carcinoma</li>
              <li>Actinic Keratosis</li>
              <li>Benign Nevus (mole)</li>
              <li>Seborrheic Keratosis</li>
            </ul>
            <p>
              Upload a clear image of your skin concern, and our system will
              analyze it, providing you with a classification and risk
              assessment in seconds.
            </p>
            <p className="warning-text">
              <strong>Important:</strong> This system is designed as a
              supplementary tool and should not replace professional medical
              diagnosis. Always consult with a healthcare provider for proper
              diagnosis and treatment.
            </p>
          </div>
          <br></br>
          <div className="feature-card2">
            <h2>Our Team</h2>
            <p>Our interdisciplinary team consists of:</p>
            <ul>
              <li>
                Dermatologists with specialized knowledge in skin cancer
                diagnosis
              </li>
              <li>Machine learning engineers and data scientists</li>
              <li>Software developers focused on healthcare applications</li>
              <li>Healthcare accessibility advocates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

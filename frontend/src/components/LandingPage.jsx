import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to the Skin Cancer Classification</h1>
      <p>
        Please navigate to <Link to="/register">Register</Link> or{" "}
        <Link to="/login">Login</Link> to continue.
      </p>
    </div>
  );
};

export default LandingPage;

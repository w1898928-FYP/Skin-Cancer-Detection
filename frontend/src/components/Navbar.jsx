import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* <div className="text-white font-bold text-xl">
          Skin Cancer Classification System
        </div> */}
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-blue-200">
            Home
          </Link>
          {/* <Link to="/predict" className="text-white hover:text-blue-200">
            Predict
          </Link>
          <Link to="/register" className="text-white hover:text-blue-200">
            Register
          </Link>
          <Link to="/login" className="text-white hover:text-blue-200">
            Login
          </Link> */}
          <Link to="/about" className="text-white hover:text-blue-200">
            About
          </Link>
          <Link to="/privacy" className="text-white hover:text-blue-200">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-white hover:text-blue-200">
            Terms of Service
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

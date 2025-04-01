import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-blue-200">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-blue-200">
            About
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

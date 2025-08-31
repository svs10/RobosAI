import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white-900 text-navy shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              RobosOne
            </Link>
          </div>
          <div className="flex space-x-8 items-center">
            <Link to="/" className="hover:text-navy-200 transition-colors">
              Home
            </Link>
            <Link to="/product" className="hover:text-navy-200 transition-colors">
              UMV
            </Link>
            <Link to="/software" className="hover:text-navy-200 transition-colors">
              Unified AI
            </Link>
            <Link to="/about" className="hover:text-navy-200 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-navy-200 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

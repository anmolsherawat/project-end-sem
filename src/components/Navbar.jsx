import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

// Navbar component - ye website ka main navigation menu hai
const Navbar = () => {
  // Mobile menu ke liye state - menu khula hai ya band hai ye track karta hai
  const [isOpen, setIsOpen] = useState(false);
  // Current page ka path janne ke liye useLocation hook
  const location = useLocation();

  return (
    // Main navbar container
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left side me BMW logo */}
        <div className="nav-left">
          <Link to="/" className="logo">
            <img src="/images/bmw-logo.png" alt="BMW Logo" />
          </Link>
        </div>

        {/* Center me website ka naam */}
        <div className="nav-center">
          <h1 className="brand-title">BMW x Anmol</h1>
        </div>

        {/* Right side me navigation links */}
        <div className="nav-right">
          {/* Navigation links - mobile view me ye menu me convert ho jate hain */}
          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          </div>
          {/* Mobile menu ka button - sirf mobile view me dikhta hai */}
          <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
            {/* Menu khula hai to cross, band hai to hamburger icon */}
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
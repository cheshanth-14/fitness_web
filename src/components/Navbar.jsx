import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Membership', href: '#membership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="logo">
          <img src="/logo.png" alt="Fitness Sports Center Logo" className="logo-img" />
          <div className="logo-text-group">
            <span className="logo-text-primary text-gold">FITNESS</span>
            <span className="logo-text-secondary">SPORTS CENTER</span>
          </div>
        </a>

        {/* Nav Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
          <button className="btn-solid join-btn">
            JOIN NOW
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setIsOpen(false)}>
          <X size={32} />
        </button>
        <div className="mobile-links">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="mobile-link"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="mobile-ctas">
          <button className="btn-outline full-width">
            FREE TRIAL
          </button>
          <button className="btn-solid full-width">
            JOIN NOW
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

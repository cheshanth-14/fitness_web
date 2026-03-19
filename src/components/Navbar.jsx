import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Use a small timeout to ensure the menu is ready and reset scroll
      const timeoutId = setTimeout(() => {
        if (menuRef.current) {
          menuRef.current.scrollTop = 0;
        }
      }, 50);
      return () => clearTimeout(timeoutId);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Membership', href: '#membership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <a href="#home" className="logo">
            <img src={logo} alt="Fitness Sports Center Logo" className="logo-img" />
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
            
            <a href="#membership" className="btn-solid join-btn">
              JOIN NOW
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`} ref={menuRef}>
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
          <a href="#membership" className="btn-solid full-width" onClick={() => setIsOpen(false)}>
            JOIN NOW
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from 'react';
import { Instagram, Facebook, Twitter, Send, ArrowRight } from 'lucide-react';
import './Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-top">
        {/* Column 1: Logo & Tagline */}
        <div className="footer-col brand-col">
          <a href="#home" className="logo">
            <img src={logo} alt="Logo" className="logo-img" />
            <span className="logo-text">FITNESS <span className="text-gold">SPORTS CENTER</span></span>
          </a>
          <p className="footer-tagline">WHERE CHAMPIONS ARE BUILT</p>
          <p className="footer-desc">
            The #1 premium fitness destination in Colombo. We provide world-class facilities and expert coaching to help you reach your maximum potential.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-icon"><Instagram size={18} /></a>
            <a href="#" className="social-icon"><Facebook size={18} /></a>
            <a href="#" className="social-icon"><Twitter size={18} /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-title">QUICK LINKS</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#trainers">Our Trainers</a></li>
            <li><a href="#membership">Membership</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="footer-col">
          <h4 className="footer-title">OUR SERVICES</h4>
          <ul className="footer-links">
            <li><a href="#services">Powerlifting</a></li>
            <li><a href="#services">HIIT Training</a></li>
            <li><a href="#services">Boxing & MMA</a></li>
            <li><a href="#services">Yoga & Mobility</a></li>
            <li><a href="#services">Nutrition</a></li>
            <li><a href="#services">Endurance</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="footer-col newsletter-col">
          <h4 className="footer-title">NEWSLETTER</h4>
          <p className="footer-desc">Stay in the loop with our latest programs and offers.</p>
          <form className="newsletter-form">
            <div className="newsletter-input-group">
              <input type="email" placeholder="Email Address" required />
              <button type="submit" className="newsletter-btn">
                <Send size={18} />
              </button>
            </div>
          </form>
          <p className="newsletter-note">By subscribing, you agree to our Privacy Policy.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>&copy; {currentYear} Fitness Sports Center. All rights reserved.</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

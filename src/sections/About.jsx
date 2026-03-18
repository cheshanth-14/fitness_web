import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import './About.css';
import aboutImg from '../assets/hero_bg_perfect.png';

const About = () => {
  const features = [
    "State-of-art Equipment",
    "24/7 Access",
    "Certified Trainers",
    "Nutrition Guidance",
    "Group Classes",
    "Personal Programs"
  ];

  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        {/* Left: Image with Decors */}
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-image-wrapper">
            <div className="bracket-top"></div>
            <img src={aboutImg} alt="Our facility" className="about-image" />
            <div className="bracket-bottom"></div>

            <div className="est-tag">
              <span className="est-line"></span>
              <span className="est-text">EST. 2023</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-overline">WHO WE ARE</p>
          <h2 className="section-heading">
            MORE THAN <span className="text-gold">JUST A GYM</span>
          </h2>
          <div className="gold-divider"></div>

          <div className="about-text">
            <p>
              FITNESS SPORTS CENTER is a premium fitness destination built for people serious about results. We combine world-class equipment, certified trainers, and science-backed programs to help you transform your body and your life.
            </p>
            <p>
              Whether you're a complete beginner or a seasoned athlete, our coaches will build a program tailored specifically to your goals — and hold you accountable every step of the way.
            </p>
          </div>

          <div className="features-grid">
            {features.map((item, i) => (
              <div key={i} className="feature-item">
                <Check size={18} className="text-gold" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <a href="#services" className="learn-more-link">
            LEARN MORE <span className="arrow">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

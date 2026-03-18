import React, { useEffect, useState } from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Hero.css';


const StatItem = ({ value, label }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(value);
      if (isNaN(end)) return setCount(value);

      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start) + (value.includes('+') ? '+' : ''));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-value">{inView ? (typeof count === 'string' ? count : count + (value.includes('+') ? '+' : '')) : '0'}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

const Hero = () => {
  const words = ["WHERE", "CHAMPIONS", "ARE BUILT"];

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>

      <div className="container hero-content-left">
        <motion.p
          className="hero-overline"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          ⟡ EST. 2023 · COLOMBO, SRI LANKA ⟡
        </motion.p>

        <h1 className="hero-headline text-left">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            WHERE
          </motion.span>
          <motion.span
            className="text-gold"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            CHAMPIONS
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            ARE BUILT
          </motion.span>
        </h1>

        <motion.p
          className="hero-subtext-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Experience the ultimate fusion of raw athletic power and premium luxury in a facility designed for those who demand excellence.
        </motion.p>

        <motion.div
          className="hero-actions-left"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a href="#about" className="btn-solid btn-hero">START YOUR JOURNEY</a>
          <a href="#services" className="btn-outline btn-hero">EXPLORE FACILITY</a>
        </motion.div>
      </div>

      <div className="hero-bottom-stats">
        <div className="container stats-container">
          <div className="stat-col">
            <span className="stat-num">500+</span>
            <span className="stat-txt">ACTIVE MEMBERS</span>
          </div>
          <div className="stat-divider-vertical"></div>
          <div className="stat-col">
            <span className="stat-num">24/7</span>
            <span className="stat-txt">UNLIMITED ACCESS</span>
          </div>
          <div className="stat-divider-vertical"></div>
          <div className="stat-col">
            <span className="stat-num">12</span>
            <span className="stat-txt">ELITE TRAINERS</span>
          </div>
          <div className="stat-divider-vertical"></div>
          <div className="stat-col">
            <span className="stat-num">20+</span>
            <span className="stat-txt">SPECIALIZED PROGRAMS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

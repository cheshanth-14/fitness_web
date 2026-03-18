import React, { useState } from 'react';
import { Dumbbell, Zap, Flower, Shield, Timer, Apple, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Services.css';

// Import assets for backgrounds
import gym3 from '../assets/gym3.avif';
import gym4 from '../assets/gym4.avif';
import env1 from '../assets/env1.webp';
import gym5 from '../assets/gym5.avif';
import env2 from '../assets/env2.avif';
import env4 from '../assets/env4.avif';
import athlete from '../assets/power_hero_athlete.jpg';

const servicesData = [
  {
    id: 1,
    title: "Powerlifting & Strength",
    category: "STRENGTH",
    description: "Build raw power and muscle with our professional-grade strength equipment and coaching.",
    icon: Dumbbell,
    image: gym3,
    filter: "Strength"
  },
  {
    id: 2,
    title: "HIIT & Conditioning",
    category: "CARDIO",
    description: "High-intensity metabolic conditioning designed to burn fat and boost your cardiovascular engine.",
    icon: Zap,
    image: athlete,
    filter: "Cardio",
    featured: true
  },
  {
    id: 3,
    title: "Mobility & Yoga",
    category: "RECOVERY",
    description: "Enhance your flexibility, balance, and recovery through guided mobility and yoga sessions.",
    icon: Flower,
    image: env1,
    filter: "Recovery"
  },
  {
    id: 4,
    title: "Boxing & MMA",
    category: "COMBAT",
    description: "Master the art of combat sports with our pro-level boxing and MMA training programs.",
    icon: Shield,
    image: gym5,
    filter: "Combat"
  },
  {
    id: 5,
    title: "Endurance Training",
    category: "CARDIO",
    description: "Built for stamina and performance. Push your limits with our science-based endurance protocols.",
    icon: Timer,
    image: env2,
    filter: "Cardio"
  },
  {
    id: 6,
    title: "Nutrition Coaching",
    category: "NUTRITION",
    description: "Fuel your performance with personalized nutrition plans designed for your specific goals.",
    icon: Apple,
    image: env4,
    filter: "Nutrition"
  }
];

const Services = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Strength", "Cardio", "Combat", "Recovery", "Nutrition"];

  const filteredServices = activeFilter === "All" 
    ? servicesData 
    : servicesData.filter(s => s.filter === activeFilter);

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header">
          <div className="header-left">
            <p className="section-overline">WHAT WE OFFER</p>
            <h2 className="section-heading">OUR SERVICES</h2>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="filter-container">
          {filters.map(filter => (
            <button 
              key={filter}
              className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="services-grid"
        >
          <AnimatePresence mode='popLayout'>
            {filteredServices.map((service, index) => (
              <motion.div 
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`service-card ${service.featured ? 'featured' : ''}`}
                style={{ 
                  backgroundImage: `linear-gradient(to top, rgba(8, 8, 8, 1) 10%, rgba(8, 8, 8, 0.6) 50%, rgba(8, 8, 8, 0.2) 100%), url(${service.image})` 
                }}
              >
                <div className="service-card-content">
                  <div className="service-icon-box">
                    <service.icon size={28} className="text-gold" />
                  </div>
                  <p className="service-category">{service.category}</p>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Banner */}
        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="cta-text">READY TO <span className="text-gold">PUSH YOUR LIMITS?</span></h2>
          <button className="btn-solid btn-large">
            JOIN THE ELITE
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

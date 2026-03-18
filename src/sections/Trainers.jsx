import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import './Trainers.css';
import t1 from '../assets/t1.jpg';
import t2 from '../assets/t2.jpg';
import t3 from '../assets/t3.jpg';
import t4 from '../assets/t4.jpg';

const trainersData = [
  {
    name: "Alex Kane",
    specialty: "Strength & Powerlifting",
    bio: "Former national-level powerlifter, 8 years coaching",
    image: t1
  },
  {
    name: "Sara Reed",
    specialty: "HIIT & Conditioning",
    bio: "NASM-certified, specialist in fat loss and performance",
    image: t2
  },
  {
    name: "Mike Jax",
    specialty: "Boxing & Combat Sports",
    bio: "Pro MMA background, trains all skill levels",
    image: t3
  },
  {
    name: "Lena Park",
    specialty: "Mobility & Recovery",
    bio: "Certified yoga instructor and physical therapist",
    image: t4
  }
];

const Trainers = () => {
  return (
    <section id="trainers" className="trainers-section">
      <div className="container">
        <div className="trainers-header">
          <p className="section-overline">MEET OUR EXPERTS</p>
          <h2 className="section-heading">MEET OUR <span className="text-gold">TRAINERS</span></h2>
        </div>

        <div className="trainers-grid">
          {trainersData.map((trainer, i) => (
            <motion.div 
              key={trainer.name}
              className="trainer-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="trainer-image-container">
                <img src={trainer.image} alt={trainer.name} className="trainer-image" />
                <div className="trainer-overlay">
                  <div className="trainer-socials">
                    <a href="#"><Instagram size={20} /></a>
                    <a href="#"><Facebook size={20} /></a>
                  </div>
                </div>
                <div className="specialty-tag">{trainer.specialty}</div>
                <div className="trainer-accent"></div>
              </div>
              <div className="trainer-info">
                <h3 className="trainer-name">{trainer.name}</h3>
                <p className="trainer-bio">{trainer.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const contactInfo = [
    { icon: MapPin, title: "Location", detail: "42 Sports Avenue, Colombo, Sri Lanka" },
    { icon: Phone, title: "Phone", detail: "+94 77 123 4567" },
    { icon: Mail, title: "Email", detail: "hello@fitnesssportscenter.lk" },
    { icon: Clock, title: "Hours", detail: "Mon–Sat: 5AM–11PM | Sun: 7AM–8PM" }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        {/* Left: Info */}
        <div className="contact-info">
          <p className="section-overline">GET IN TOUCH</p>
          <h2 className="contact-heading">LET'S <span className="text-gold">TALK</span></h2>
          <p className="contact-description">
            Ready to take the first step towards a stronger version of yourself? Our team is here to answer any questions and help you find the perfect program.
          </p>

          <div className="contact-details">
            {contactInfo.map((info, i) => (
              <div key={i} className="contact-item">
                <div className="contact-icon">
                  <info.icon size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="contact-item-title">{info.title}</h4>
                  <p className="contact-item-detail">{info.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-socials">
            <a href="#" className="social-pill"><Instagram size={20} /> Instagram</a>
            <a href="#" className="social-pill"><Facebook size={20} /> Facebook</a>
          </div>
        </div>

        {/* Right: Form */}
        <div className="contact-form-card">
          <div className="form-header">
            <h3>SEND A MESSAGE</h3>
            <p>We reply within 24 hours</p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="input-group">
                <label>Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-msg">{errors.name}</span>}
              </div>
              <div className="input-group">
                <label>Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-msg">{errors.email}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label>Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+94 77 XXX XXXX"
                />
              </div>
              <div className="input-group">
                <label>Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Membership Inquiry"
                />
              </div>
            </div>

            <div className="input-group full-width">
              <label>Message *</label>
              <div className="textarea-container">
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows="5"
                  className={errors.message ? 'error' : ''}
                ></textarea>
                <div className="char-count">{formData.message.length}/500</div>
              </div>
              {errors.message && <span className="error-msg">{errors.message}</span>}
            </div>

            <button 
              type="submit" 
              className="btn-solid btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  SENDING...
                </>
              ) : (
                <>
                  SEND MESSAGE <Send size={18} />
                </>
              )}
            </button>

            <AnimatePresence>
              {isSuccess && (
                <motion.div 
                  className="success-banner"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <CheckCircle size={18} />
                  <div>
                    <strong>✓ Message sent successfully!</strong>
                    <p>We'll get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="security-note">
              <AlertCircle size={14} />
              <span>🔒 Your information is safe with us</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import './Membership.css';

const plans = [
  {
    name: "STARTER",
    price: 29,
    description: "Perfect for beginners starting their journey.",
    features: [
      "Gym floor access",
      "Locker rooms",
      "2 group classes/month",
      "Basic assessment"
    ],
    buttonText: "START FREE TRIAL",
    featured: false
  },
  {
    name: "PRO",
    price: 59,
    description: "Our most popular plan for regular gym-goers.",
    features: [
      "Everything in Starter",
      "Unlimited group classes",
      "1 PT session/month",
      "Nutrition consultation",
      "24/7 gym access",
      "Priority support"
    ],
    buttonText: "JOIN THE PROS",
    featured: true,
    tag: "MOST POPULAR"
  },
  {
    name: "ELITE",
    price: 99,
    description: "The ultimate experience for serious athletes.",
    features: [
      "Everything in Pro",
      "4 PT sessions/month",
      "Custom meal plan",
      "Priority booking",
      "Recovery room access",
      "Supplement discounts",
      "Guest passes (2/month)",
      "Body composition scan"
    ],
    buttonText: "GO ELITE",
    featured: false
  }
];

const Membership = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="membership" className="membership-section">
      <div className="container">
        <div className="membership-header">
          <p className="section-overline">MEMBERSHIP PLANS</p>
          <h2 className="section-heading">CHOOSE YOUR <span className="text-gold">LEVEL</span></h2>
          
          <div className="pricing-toggle">
            <span className={!isYearly ? 'active' : ''}>Monthly</span>
            <button 
              className={`toggle-switch ${isYearly ? 'on' : 'off'}`}
              onClick={() => setIsYearly(!isYearly)}
            >
              <div className="toggle-handle"></div>
            </button>
            <span className={isYearly ? 'active' : ''}>Yearly</span>
            <div className="save-badge">SAVE 20%</div>
          </div>
        </div>

        <div className="membership-grid">
          {plans.map((plan, i) => (
            <motion.div 
              key={plan.name}
              className={`plan-card ${plan.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {plan.featured && <div className="featured-badge">{plan.tag}</div>}
              
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="price-value">
                    {isYearly ? Math.floor(plan.price * 12 * 0.8 / 12) : plan.price}
                  </span>
                  <span className="period">/mo</span>
                </div>
                <p className="plan-desc">{plan.description}</p>
              </div>

              <div className="plan-features">
                {plan.features.map((feature, j) => (
                  <div key={j} className="feature-row">
                    <Check size={18} className="text-gold" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`plan-btn ${plan.featured ? 'btn-solid' : 'btn-outline'}`}>
                {plan.buttonText}
              </button>
              
              <p className="plan-note">
                {isYearly ? `Billed annually at $${Math.floor(plan.price * 12 * 0.8)}/year` : 'Billed monthly'}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="membership-footer">
          <Info size={16} />
          <span>No contracts. Cancel anytime. Free cancellation within 7 days.</span>
        </div>
      </div>
    </section>
  );
};

export default Membership;

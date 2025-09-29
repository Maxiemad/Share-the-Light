import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Impact.css';

const Impact = () => {
  const [counters, setCounters] = useState({
    families: 0,
    volunteers: 0,
    meals: 0
  });

  const targetCounters = {
    families: 250,
    volunteers: 45,
    meals: 1200
  };

  useEffect(() => {
    const animateCounters = () => {
      const speed = 100; // Slower speed for better visibility
      const updateCounters = () => {
        setCounters(prev => ({
          families: Math.min(prev.families + 2, targetCounters.families),
          volunteers: Math.min(prev.volunteers + 1, targetCounters.volunteers),
          meals: Math.min(prev.meals + 8, targetCounters.meals)
        }));

        if (counters.families < targetCounters.families || 
            counters.volunteers < targetCounters.volunteers || 
            counters.meals < targetCounters.meals) {
          setTimeout(updateCounters, speed);
        }
      };
      updateCounters();
    };

    const timer = setTimeout(animateCounters, 1500); // Start after 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="impact" className="impact-section">
      <div className="container">
        <motion.h2 
          className="section-title" 
          style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Your Impact Last Year
        </motion.h2>
        
        <div className="impact-stats">
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="stat-number">
              {counters.families}
            </div>
            <div className="stat-label">Families Helped</div>
          </motion.div>
          
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="stat-number">
              {counters.volunteers}
            </div>
            <div className="stat-label">Volunteers Joined</div>
          </motion.div>
          
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="stat-number">
              {counters.meals}
            </div>
            <div className="stat-label">Meals Served</div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div 
          className="testimonials-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="testimonial-card">
            <p className="testimonial-text">
              "Seeing the children's faces light up when they received their Diwali kits was the most heartwarming experience."
            </p>
            <span className="testimonial-author">- Priya, Volunteer</span>
          </div>
          
          <div className="testimonial-card">
            <p className="testimonial-text">
              "This was the first time my children had their own Diwali celebration. Thank you for bringing joy to our home."
            </p>
            <span className="testimonial-author">- Rajesh, Recipient</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;

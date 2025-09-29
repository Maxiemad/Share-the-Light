import React from 'react';
import { motion } from 'framer-motion';
import './WhyCause.css';

const WhyCause = () => {
  return (
    <section id="why-cause" className="why-cause-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
        >
          Why This Matters
        </motion.h2>
        
        <div className="why-content">
          <motion.div 
            className="why-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>Diwali is the festival of sharing, where every small contribution can light up someone's life. This year, let's come together to spread the warmth of celebration to those who need it most.</p>
            <div className="mission-statement">
              <h3>Our Mission</h3>
              <p>"We aim to bring sweets, smiles, and hope to underprivileged children this festive season."</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="why-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="kids-illustration">
              <i className="fas fa-child"></i>
              <i className="fas fa-child"></i>
              <i className="fas fa-fire"></i>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="curved-separator"></div>
    </section>
  );
};

export default WhyCause;

import React from 'react';
import { motion } from 'framer-motion';
import './DonorWall.css';

const DonorWall = () => {
  const donors = [
    { name: 'Vikram Patel', amount: '₹999' },
    { name: 'Kavita Joshi', amount: '₹999' },
    { name: 'Sneha Agarwal', amount: '₹799' },
    { name: 'Arjun Singh', amount: '₹1299' },
    { name: 'Amit Gupta', amount: '₹499' },
    { name: 'Rohit Mehta', amount: '₹1499' },
    { name: 'Priya Sharma', amount: '₹999' },
    { name: 'Rajesh Kumar', amount: '₹1499' },
    { name: 'Anita Singh', amount: '₹499' },
    { name: 'Sunita Devi', amount: '₹1499' }
  ];

  return (
    <section id="donor-wall" className="donor-wall-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Recent Donors
        </motion.h2>
        
        <div className="donor-scroll-container">
          <motion.div 
            className="donor-scroll-track"
            animate={{ x: [0, -100 * donors.length] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {/* First set of donors */}
            {donors.map((donor, index) => (
              <div key={`first-${index}`} className="donor-card">
                <div className="donor-avatar">
                  {donor.name.charAt(0)}
                </div>
                <div className="donor-info">
                  <span className="donor-name">{donor.name}</span>
                  <span className="donor-amount">{donor.amount}</span>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {donors.map((donor, index) => (
              <div key={`second-${index}`} className="donor-card">
                <div className="donor-avatar">
                  {donor.name.charAt(0)}
                </div>
                <div className="donor-info">
                  <span className="donor-name">{donor.name}</span>
                  <span className="donor-amount">{donor.amount}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="donor-message"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>💝 Thank you for making a difference! Every contribution counts.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default DonorWall;

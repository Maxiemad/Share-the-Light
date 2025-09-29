import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DonorWall = () => {
  const [donors, setDonors] = useState([]);
  
  const sampleDonors = [
    { name: 'Priya Sharma', amount: '₹999' },
    { name: 'Rajesh Kumar', amount: '₹1499' },
    { name: 'Anita Singh', amount: '₹499' },
    { name: 'Vikram Patel', amount: '₹999' },
    { name: 'Sunita Devi', amount: '₹1499' },
    { name: 'Amit Gupta', amount: '₹499' },
    { name: 'Kavita Joshi', amount: '₹999' },
    { name: 'Rohit Mehta', amount: '₹1499' },
    { name: 'Sneha Agarwal', amount: '₹799' },
    { name: 'Arjun Singh', amount: '₹1299' }
  ];

  useEffect(() => {
    const displayDonors = () => {
      const shuffledDonors = [...sampleDonors].sort(() => Math.random() - 0.5);
      const visibleDonors = shuffledDonors.slice(0, 6);
      setDonors(visibleDonors);
    };

    displayDonors();
    const interval = setInterval(displayDonors, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="donor-wall" style={{ padding: '80px 0', background: '#f8f9fa', margin: '0 80px', position: 'relative', zIndex: 1 }}>
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
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {donors.map((donor, index) => (
            <motion.div 
              key={`${donor.name}-${index}`}
              style={{ 
                background: 'white', 
                padding: '20px', 
                borderRadius: '10px', 
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                border: '1px solid #f0f0f0'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(45deg, #FF8C00, #FFD700)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '1.1rem'
                }}>
                  {donor.name.charAt(0)}
                </div>
                <span style={{ fontWeight: '600', color: '#800000' }}>{donor.name}</span>
              </div>
              <span style={{ color: '#FF8C00', fontWeight: '700', fontSize: '1.1rem' }}>{donor.amount}</span>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          style={{ textAlign: 'center', marginTop: '30px', color: '#666' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p style={{ fontSize: '0.9rem' }}>
            💝 Thank you for making a difference! Every contribution counts.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DonorWall;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    <section id="impact" className="impact-section" style={{ height: '100vh', padding: '100px 0', background: 'transparent', color: 'white', margin: '0 80px', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1 }}>
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
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <motion.div 
            style={{ textAlign: 'center' }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div style={{ fontSize: '4rem', fontWeight: '700', color: '#FFD700', marginBottom: '10px' }}>
              {counters.families}
            </div>
            <div>Families Helped</div>
          </motion.div>
          
          <motion.div 
            style={{ textAlign: 'center' }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div style={{ fontSize: '4rem', fontWeight: '700', color: '#FFD700', marginBottom: '10px' }}>
              {counters.volunteers}
            </div>
            <div>Volunteers Joined</div>
          </motion.div>
          
          <motion.div 
            style={{ textAlign: 'center' }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={{ fontSize: '4rem', fontWeight: '700', color: '#FFD700', marginBottom: '10px' }}>
              {counters.meals}
            </div>
            <div>Meals Served</div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '30px', borderRadius: '15px', textAlign: 'center' }}>
            <p style={{ fontStyle: 'italic', marginBottom: '15px', fontSize: '1.1rem' }}>
              "Seeing the children's faces light up when they received their Diwali kits was the most heartwarming experience."
            </p>
            <span style={{ color: '#FFD700', fontWeight: '600' }}>- Priya, Volunteer</span>
          </div>
          
          <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '30px', borderRadius: '15px', textAlign: 'center' }}>
            <p style={{ fontStyle: 'italic', marginBottom: '15px', fontSize: '1.1rem' }}>
              "This was the first time my children had their own Diwali celebration. Thank you for bringing joy to our home."
            </p>
            <span style={{ color: '#FFD700', fontWeight: '600' }}>- Rajesh, Recipient</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;

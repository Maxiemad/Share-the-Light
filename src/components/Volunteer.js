import React from 'react';
import { motion } from 'framer-motion';
import './Volunteer.css';

const Volunteer = () => {
  return (
    <section id="memories" className="memories-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Memories of Giving
        </motion.h2>
        
        <div className="memories-content">
          <motion.div 
            className="video-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/Z1rDyKUeqBw?rel=0&modestbranding=1&showinfo=0&controls=1&iv_load_policy=3&fs=1&cc_load_policy=0&start=0&end=0&vq=auto&disablekb=1&playsinline=1&loop=1&playlist=Z1rDyKUeqBw"
                title="Sant Ishwar Foundation - GHAR"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="youtube-video"
              ></iframe>
            </div>
          </motion.div>

          <motion.div 
            className="content-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="content-wrapper">
              <h3>Sant Ishwar Foundation – GHAR</h3>
              
                  <div className="content-points">
                    <div className="point">
                      <p>GHAR is a home for orphaned girls, women with disabilities, and the elderly, run by retired & serving Army officers.</p>
                    </div>
                    
                    <div className="point">
                      <p>Focus on education, skilling, and safe family environment.</p>
                    </div>
                    
                    <div className="point">
                      <p>Donations directly support 34 girls with essential items (jeans, fruits, sweets, crackers).</p>
                    </div>
                    
                    <div className="point">
                      <p>Non-monetary, transparent giving with college delivery & recording.</p>
                    </div>
                    
                    <div className="point">
                      <p>Supports UN SDGs: Education, Gender Equality, Health, Reduced Inequality.</p>
                    </div>
                  </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;

import React from 'react';
import { motion } from 'framer-motion';
import './Preloader.css';

const Preloader = () => {
  return (
    <motion.div 
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="preloader-content">
        <div className="diya-container">
          <div className="diya">
            <div className="diya-body"></div>
            <div className="flame">
              <div className="flame-inner"></div>
              <div className="flame-outer"></div>
            </div>
          </div>
        </div>
        <motion.h2 
          className="preloader-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Lighting up lives...
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default Preloader;

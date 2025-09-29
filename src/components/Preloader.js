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
          <div className="diya"></div>
          <svg className="flame" viewBox="0 0 60 100">
            <path d="M30 0 
                     C15 25, 15 60, 30 90 
                     C45 60, 45 25, 30 0 Z"
                  fill="url(#flameGradient)" />
            <defs>
              <linearGradient id="flameGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="yellow"/>
                <stop offset="100%" stopColor="red"/>
              </linearGradient>
            </defs>
          </svg>
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

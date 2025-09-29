import React from 'react';
import { motion } from 'framer-motion';
import './DecorativeBorder.css';

const DecorativeBorder = () => {
  return (
    <>
      <motion.div
        className="decorative-border left-border"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <div className="border-pattern"></div>
        <div className="border-dot"></div>
      </motion.div>
      <motion.div
        className="decorative-border right-border"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <div className="border-pattern"></div>
        <div className="border-dot"></div>
      </motion.div>
    </>
  );
};

export default DecorativeBorder;
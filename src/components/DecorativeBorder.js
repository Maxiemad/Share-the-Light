import React from 'react';
import { motion } from 'framer-motion';
import './DecorativeBorder.css';

const DecorativeBorder = () => {
  return (
    <>
      {/* Left Border */}
      <motion.div 
        className="decorative-border left-border"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="border-pattern">
          {/* Central Line */}
          <div className="central-line"></div>
          
          {/* Main Ornate Design */}
          <div className="ornate-design">
            {/* S-shaped curves */}
            <div className="s-curve left-curve"></div>
            <div className="s-curve right-curve"></div>
            
            {/* Inner swirls */}
            <div className="inner-swirl swirl-1"></div>
            <div className="inner-swirl swirl-2"></div>
            <div className="inner-swirl swirl-3"></div>
            
            {/* Leaf shapes */}
            <div className="leaf-shape leaf-1"></div>
            <div className="leaf-shape leaf-2"></div>
            <div className="leaf-shape leaf-3"></div>
            
            {/* Decorative dots */}
            <div className="decorative-dot dot-1"></div>
            <div className="decorative-dot dot-2"></div>
            <div className="decorative-dot dot-3"></div>
            <div className="decorative-dot dot-4"></div>
          </div>
          
          {/* Diamond Accents */}
          <div className="diamond-section">
            <div className="diamond large-diamond"></div>
            <div className="diamond small-diamond-1"></div>
            <div className="diamond small-diamond-2"></div>
          </div>
          
          {/* Dot Patterns */}
          <div className="dot-patterns">
            <div className="dot-pair pair-1"></div>
            <div className="dot-pair pair-2"></div>
            <div className="single-dot dot-5"></div>
            <div className="single-dot dot-6"></div>
          </div>
        </div>
        
        {/* Animated Elements */}
        <motion.div 
          className="glow-effect"
          animate={{ 
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Right Border */}
      <motion.div 
        className="decorative-border right-border"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <div className="border-pattern">
          {/* Central Line */}
          <div className="central-line"></div>
          
          {/* Main Ornate Design */}
          <div className="ornate-design">
            {/* S-shaped curves */}
            <div className="s-curve left-curve"></div>
            <div className="s-curve right-curve"></div>
            
            {/* Inner swirls */}
            <div className="inner-swirl swirl-1"></div>
            <div className="inner-swirl swirl-2"></div>
            <div className="inner-swirl swirl-3"></div>
            
            {/* Leaf shapes */}
            <div className="leaf-shape leaf-1"></div>
            <div className="leaf-shape leaf-2"></div>
            <div className="leaf-shape leaf-3"></div>
            
            {/* Decorative dots */}
            <div className="decorative-dot dot-1"></div>
            <div className="decorative-dot dot-2"></div>
            <div className="decorative-dot dot-3"></div>
            <div className="decorative-dot dot-4"></div>
          </div>
          
          {/* Diamond Accents */}
          <div className="diamond-section">
            <div className="diamond large-diamond"></div>
            <div className="diamond small-diamond-1"></div>
            <div className="diamond small-diamond-2"></div>
          </div>
          
          {/* Dot Patterns */}
          <div className="dot-patterns">
            <div className="dot-pair pair-1"></div>
            <div className="dot-pair pair-2"></div>
            <div className="single-dot dot-5"></div>
            <div className="single-dot dot-6"></div>
          </div>
        </div>
        
        {/* Animated Elements */}
        <motion.div 
          className="glow-effect"
          animate={{ 
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
    </>
  );
};

export default DecorativeBorder;

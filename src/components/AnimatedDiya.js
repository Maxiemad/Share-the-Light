import React from 'react';
import './AnimatedDiya.css';

const AnimatedDiya = () => {
  return (
    <div className="animated-diya-container">
      <div className="diya-container">
        <div className="diya-body"></div>
        <div className="flame"></div>
        <div className="flame-inner"></div>
        <div className="flame-outer"></div>
      </div>
    </div>
  );
};

export default AnimatedDiya;

import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="how-it-works-steps">
          <div className="step-item">
            <div className="step-icon">🛒</div>
            <h3 className="step-title">Choose a Kit</h3>
            <p className="step-description">Select from our carefully curated Diwali kits</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-item">
            <div className="step-icon">💳</div>
            <h3 className="step-title">Donate Online</h3>
            <p className="step-description">Make a secure online donation</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-item">
            <div className="step-icon">₹</div>
            <h3 className="step-title">Custom Amount</h3>
            <p className="step-description">Prefer your own amount? Donate any amount you wish</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-item">
            <div className="step-icon">❤️</div>
            <h3 className="step-title">We Deliver & Share Smiles</h3>
            <p className="step-description">We distribute kits and spread joy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

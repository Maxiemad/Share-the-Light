import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" style={{ padding: '100px 0', background: '#fff', margin: '0 80px', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
          <div style={{ textAlign: 'center', maxWidth: '200px' }}>
            <div style={{ width: '80px', height: '80px', background: 'linear-gradient(45deg, #FF8C00, #FFD700)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'white', fontSize: '2rem' }}>🛒</div>
            <h3>Choose a Kit</h3>
            <p>Select from our carefully curated Diwali kits</p>
          </div>
          <div style={{ fontSize: '2rem', color: '#FF8C00', fontWeight: 'bold' }}>→</div>
          <div style={{ textAlign: 'center', maxWidth: '200px' }}>
            <div style={{ width: '80px', height: '80px', background: 'linear-gradient(45deg, #FF8C00, #FFD700)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'white', fontSize: '2rem' }}>💳</div>
            <h3>Donate Online</h3>
            <p>Make a secure online donation</p>
          </div>
          <div style={{ fontSize: '2rem', color: '#FF8C00', fontWeight: 'bold' }}>→</div>
          <div style={{ textAlign: 'center', maxWidth: '200px' }}>
            <div style={{ width: '80px', height: '80px', background: 'linear-gradient(45deg, #FF8C00, #FFD700)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'white', fontSize: '2rem' }}>❤️</div>
            <h3>We Deliver & Share Smiles</h3>
            <p>We distribute kits and spread joy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

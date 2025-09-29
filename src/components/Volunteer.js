import React from 'react';
import AnimatedDiya from './AnimatedDiya';

const Volunteer = () => {
  return (
    <section id="volunteer" style={{ padding: '100px 0', background: 'linear-gradient(135deg, #fff5f0, #fff)', margin: '0 80px', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <h2 className="section-title">Join the Movement</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', marginBottom: '20px', color: '#800000' }}>Be Part of Something Beautiful</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '30px', color: '#555' }}>Join our community of volunteers who are making a difference in children's lives this Diwali.</p>
            <button className="btn-primary">Become a Volunteer</button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AnimatedDiya />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;

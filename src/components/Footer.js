import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: 'linear-gradient(135deg, #800000, #FF8C00)', color: 'white', padding: '60px 0 20px', margin: '0 80px', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', marginBottom: '20px', color: '#FFD700' }}>Contact Us</h3>
            <p style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-envelope" style={{ color: '#FFD700', width: '20px' }}></i>
              contact@sharethesmile.org
            </p>
            <p style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-phone" style={{ color: '#FFD700', width: '20px' }}></i>
              +91 98765 43210
            </p>
          </div>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', marginBottom: '20px', color: '#FFD700' }}>Follow Us</h3>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: 'rgba(255, 215, 0, 0.2)', borderRadius: '50%', color: '#FFD700', textDecoration: 'none', transition: 'all 0.3s ease' }}>📘</a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: 'rgba(255, 215, 0, 0.2)', borderRadius: '50%', color: '#FFD700', textDecoration: 'none', transition: 'all 0.3s ease' }}>🐦</a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: 'rgba(255, 215, 0, 0.2)', borderRadius: '50%', color: '#FFD700', textDecoration: 'none', transition: 'all 0.3s ease' }}>📷</a>
            </div>
          </div>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', marginBottom: '20px', color: '#FFD700' }}>Quick Donate</h3>
            <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '10px' }}>
              <i className="fas fa-qrcode" style={{ fontSize: '3rem', marginBottom: '10px' }}></i>
              <p>Scan for UPI</p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255, 215, 0, 0.3)', opacity: '0.8' }}>
          <p>Built by students to make a difference. © 2024 Share the Smile</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

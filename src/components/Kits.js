import React, { useState } from 'react';
import './Kits.css';

const Kits = () => {
  const [selectedKit, setSelectedKit] = useState(null);
  const kits = [
    {
      name: "Basic Kit",
      price: "₹499",
      items: [
        { icon: "fas fa-candy-cane", text: "Sweets" },
        { icon: "fas fa-fire", text: "Diyas" },
        { icon: "fas fa-cookie-bite", text: "Chocolates" }
      ],
      popular: false
    },
    {
      name: "Joy Kit",
      price: "₹999",
      items: [
        { icon: "fas fa-candy-cane", text: "Sweets" },
        { icon: "fas fa-fire", text: "Diyas" },
        { icon: "fas fa-cookie-bite", text: "Chocolates" },
        { icon: "fas fa-gamepad", text: "Toys" }
      ],
      popular: false
    },
    {
      name: "Celebration Kit",
      price: "₹1499",
      items: [
        { icon: "fas fa-candy-cane", text: "Sweets" },
        { icon: "fas fa-fire", text: "Diyas" },
        { icon: "fas fa-cookie-bite", text: "Chocolates" },
        { icon: "fas fa-gamepad", text: "Toys" },
        { icon: "fas fa-book", text: "Books" },
        { icon: "fas fa-lightbulb", text: "Lanterns" },
        { icon: "fas fa-plus", text: "Extra Goodies" }
      ],
      popular: false
    }
  ];

  return (
    <section id="kits" className="kits-section" style={{ padding: '100px 0', background: '#fff', margin: '0 80px', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <h2 className="section-title">
          Choose Your Diwali Kit
        </h2>
        
        <div className="kits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {kits.map((kit, index) => (
            <div 
              key={kit.name}
              style={{ 
                background: 'white', 
                padding: '40px', 
                borderRadius: '20px', 
                textAlign: 'center', 
                boxShadow: selectedKit === kit.name ? '0 15px 40px rgba(255, 140, 0, 0.3)' : '0 10px 30px rgba(0,0,0,0.1)',
                border: selectedKit === kit.name ? '2px solid #FF8C00' : '2px solid transparent',
                position: 'relative',
                transform: selectedKit === kit.name ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={() => setSelectedKit(kit.name)}
              onMouseLeave={() => setSelectedKit(null)}
            >
              
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}><i className="fas fa-gift"></i></div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', marginBottom: '10px', color: '#800000' }}>
                {kit.name}
              </h3>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#FF8C00', margin: '20px 0' }}>
                {kit.price}
              </div>
              
              <ul style={{ listStyle: 'none', marginBottom: '30px', padding: 0 }}>
                {kit.items.map((item, itemIndex) => (
                  <li key={itemIndex} style={{ 
                    padding: '10px 0', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '10px',
                    color: '#555'
                  }}>
                    <i className={item.icon} style={{ fontSize: '1.2rem' }}></i>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className="btn-primary"
                style={{
                  background: 'linear-gradient(45deg, #FFD700, #FF8C00)',
                  color: 'white',
                  border: 'none',
                  padding: '15px 30px',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: '100%'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 5px 15px rgba(255, 140, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Donate This Kit
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kits;

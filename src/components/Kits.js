import React from 'react';
import { motion } from 'framer-motion';

const Kits = () => {
  const kits = [
    {
      name: "Basic Kit",
      price: "₹499",
      items: [
        { icon: "🍭", text: "Sweets" },
        { icon: "🪔", text: "Diyas" },
        { icon: "🍫", text: "Chocolates" }
      ],
      popular: false
    },
    {
      name: "Joy Kit",
      price: "₹999",
      items: [
        { icon: "🍭", text: "Sweets" },
        { icon: "🪔", text: "Diyas" },
        { icon: "🍫", text: "Chocolates" },
        { icon: "🧸", text: "Toys" }
      ],
      popular: true
    },
    {
      name: "Celebration Kit",
      price: "₹1499",
      items: [
        { icon: "🍭", text: "Sweets" },
        { icon: "🪔", text: "Diyas" },
        { icon: "🍫", text: "Chocolates" },
        { icon: "🧸", text: "Toys" },
        { icon: "📚", text: "Books" },
        { icon: "🏮", text: "Lanterns" },
        { icon: "🎁", text: "Extra Goodies" }
      ],
      popular: false
    }
  ];

  return (
    <section id="kits" className="kits-section" style={{ padding: '100px 0', background: '#fff', margin: '0 80px', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Choose Your Diwali Kit
        </motion.h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {kits.map((kit, index) => (
            <motion.div 
              key={kit.name}
              style={{ 
                background: 'white', 
                padding: '40px', 
                borderRadius: '20px', 
                textAlign: 'center', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                border: kit.popular ? '2px solid #FF8C00' : '2px solid transparent',
                position: 'relative',
                transform: kit.popular ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.3s ease'
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                transform: 'translateY(-10px)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
              }}
            >
              {kit.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '20px',
                  background: 'linear-gradient(45deg, #FF8C00, #FFD700)',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}>
                  Most Popular
                </div>
              )}
              
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎁</div>
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
                    <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kits;

import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  const galleryItems = [
    {
      icon: "fas fa-smile",
      title: "Children receiving their Diwali kits",
      description: "Pure joy and excitement"
    },
    {
      icon: "fas fa-fire",
      title: "Diyas lighting up the night",
      description: "Festive atmosphere"
    },
    {
      icon: "fas fa-users",
      title: "Community celebrations",
      description: "Together in spirit"
    },
    {
      icon: "fas fa-gift",
      title: "Distribution in progress",
      description: "Spreading happiness"
    },
    {
      icon: "fas fa-fire",
      title: "Fireworks and festivities",
      description: "Celebrating together"
    },
    {
      icon: "fas fa-heart",
      title: "Volunteers in action",
      description: "Making a difference"
    }
  ];

  return (
    <section id="gallery" className="gallery-section" style={{ padding: '100px 0', background: '#fff', margin: '0 80px', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Moments of Joy
        </motion.h2>
        
        <div className="gallery-grid">
          {/* First Row - 3 items */}
          <div className="gallery-row">
            {galleryItems.slice(0, 3).map((item, index) => (
              <motion.div 
                key={index}
                className="gallery-item"
                style={{ 
                  borderRadius: '15px', 
                  overflow: 'hidden', 
                  position: 'relative',
                  cursor: 'pointer'
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
                }}
              >
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  background: `linear-gradient(135deg, 
                    ${index % 2 === 0 ? '#FF8C00, #FFD700' : '#800000, #FF8C00'}, 
                    ${index % 3 === 0 ? '#FFD700, #FF8C00' : '#FF8C00, #800000'}
                  )`, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'white', 
                  textAlign: 'center',
                  padding: '15px',
                  position: 'relative'
                }}>
                  <div style={{ 
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    background: 'rgba(0,0,0,0.1)',
                    borderRadius: '15px'
                  }}></div>
                  
                  <div className="gallery-icon" style={{ 
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <i className={item.icon} style={{ fontSize: '3rem' }}></i>
                  </div>
                  
                  <h3 className="gallery-title" style={{ 
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {item.title}
                  </h3>
                  
                  <p className="gallery-description" style={{ 
                    opacity: 0.9,
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Second Row - 3 items */}
          <div className="gallery-row">
            {galleryItems.slice(3, 6).map((item, index) => (
              <motion.div 
                key={index + 3}
                className="gallery-item"
                style={{ 
                  borderRadius: '15px', 
                  overflow: 'hidden', 
                  position: 'relative',
                  cursor: 'pointer'
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: (index + 3) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
                }}
              >
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  background: `linear-gradient(135deg, 
                    ${index % 2 === 0 ? '#FF8C00, #FFD700' : '#800000, #FF8C00'}, 
                    ${index % 3 === 0 ? '#FFD700, #FF8C00' : '#FF8C00, #800000'}
                  )`, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'white', 
                  textAlign: 'center',
                  padding: '15px',
                  position: 'relative'
                }}>
                  <div style={{ 
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    background: 'rgba(0,0,0,0.1)',
                    borderRadius: '15px'
                  }}></div>
                  
                  <div className="gallery-icon" style={{ 
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <i className={item.icon} style={{ fontSize: '3rem' }}></i>
                  </div>
                  
                  <h3 className="gallery-title" style={{ 
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {item.title}
                  </h3>
                  
                  <p className="gallery-description" style={{ 
                    opacity: 0.9,
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          style={{ textAlign: 'center', marginTop: '50px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#666',
            fontStyle: 'italic'
          }}>
            "Every smile we create is a step towards a brighter tomorrow"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;

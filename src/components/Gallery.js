import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const galleryItems = [
    {
      icon: "😊",
      title: "Children receiving their Diwali kits",
      description: "Pure joy and excitement"
    },
    {
      icon: "🪔",
      title: "Diyas lighting up the night",
      description: "Festive atmosphere"
    },
    {
      icon: "👥",
      title: "Community celebrations",
      description: "Together in spirit"
    },
    {
      icon: "🎁",
      title: "Distribution in progress",
      description: "Spreading happiness"
    },
    {
      icon: "🎆",
      title: "Fireworks and festivities",
      description: "Celebrating together"
    },
    {
      icon: "❤️",
      title: "Volunteers in action",
      description: "Making a difference"
    }
  ];

  return (
    <section id="gallery" style={{ padding: '100px 0', background: '#fff', margin: '0 80px', position: 'relative', zIndex: 1 }}>
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
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {galleryItems.map((item, index) => (
            <motion.div 
              key={index}
              style={{ 
                height: '250px', 
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
                padding: '20px',
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
                
                <div style={{ 
                  fontSize: '4rem', 
                  marginBottom: '20px',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.icon}
                </div>
                
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: '600', 
                  marginBottom: '10px',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.title}
                </h3>
                
                <p style={{ 
                  fontSize: '0.9rem', 
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
            "Every smile we create is a step towards a brighter tomorrow" ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;

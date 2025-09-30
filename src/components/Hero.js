import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import './Hero.css';

const Hero = () => {
  const [videoError, setVideoError] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFallback(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Ensure video is ready
  useEffect(() => {
    const video = document.querySelector('.background-video');
    if (video) {
      video.addEventListener('loadeddata', () => {
        console.log('Video loaded and ready');
      });
    }
  }, []);

  const particlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#FFD700", "#FF8C00", "#FF4500"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.6,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      move: {
        enable: true,
        speed: 2,
        direction: "top",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        }
      }
    }
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  const handlePlayVideo = () => {
    const video = document.querySelector('.background-video');
    if (video) {
      video.muted = false;
      video.volume = 0.3;
      video.play().catch(e => console.log('Play failed:', e));
    }
  };

  const handleAudioToggle = () => {
    console.log('Audio toggle clicked, current state:', isAudioEnabled);
    const video = document.querySelector('.background-video');
    console.log('Video element found:', video);
    
    if (video) {
      if (isAudioEnabled) {
        // Mute audio
        video.muted = true;
        setIsAudioEnabled(false);
        console.log('Audio muted - button should be red');
      } else {
        // Unmute audio
        video.muted = false;
        video.volume = 0.5;
        video.play().catch(e => console.log('Play failed:', e));
        setIsAudioEnabled(true);
        console.log('Audio enabled - button should be green');
      }
    } else {
      console.log('Video element not found - checking all videos');
      const allVideos = document.querySelectorAll('video');
      console.log('All video elements:', allVideos);
    }
  };

  return (
    <section id="hero" className="hero-section">
      
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Light Up Lives This Diwali
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Join us in spreading joy by donating Diwali kits to children and families in need.
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <button className="btn-primary">Donate Now</button>
          <button className="btn-secondary">See Kits</button>
          <button 
            id="audio-toggle-btn" 
            className={`btn-audio ${isAudioEnabled ? 'audio-unmuted' : 'audio-muted'}`}
            title={isAudioEnabled ? "Mute Audio" : "Enable Audio"}
            onClick={handleAudioToggle}
          >
            <img src="/audio.png" alt="Audio" className="audio-icon" />
          </button>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <i className="fas fa-chevron-down"></i>
      </motion.div>
    </section>
  );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import './VideoBackground.css';

const VideoBackground = () => {
  const [init, setInit] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFallback(true);
    }, 2000);
    return () => clearTimeout(timer);
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
    console.log('Video error');
  };

  const handlePlayVideo = () => {
    const video = document.querySelector('.background-video');
    if (video) {
      video.muted = false;
      video.volume = 0.3;
      video.play().catch(e => console.log('Play failed:', e));
    }
  };

  return (
    <div className="video-background-container">
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="particles"
        />
      )}
      
      <video 
        className="background-video" 
        autoPlay 
        loop 
        muted 
        playsInline
        onError={handleVideoError}
      >
        <source src="/0929.mov" type="video/quicktime" />
        <source src="/0929.mov" type="video/mp4" />
      </video>
      
      {showFallback && (
        <div className="video-fallback">
          <div className="fallback-content">
            <i className="fas fa-video"></i>
            <p>Video loading...</p>
            <button className="play-btn" onClick={handlePlayVideo}>
              Click to Play Video
            </button>
          </div>
        </div>
      )}
      
      <div className="video-overlay"></div>
    </div>
  );
};

export default VideoBackground;

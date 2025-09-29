import React, { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import './VideoBackground.css';

const VideoBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
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
        webkit-playsinline="true"
        onError={handleVideoError}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center'
        }}
      >
        <source src="/0929.mov" type="video/quicktime" />
        <source src="/0929.mov" type="video/mp4" />
      </video>
      
      
      <div className="video-overlay"></div>
    </div>
  );
};

export default VideoBackground;

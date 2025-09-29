import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import VideoBackground from './components/VideoBackground';
import Hero from './components/Hero';
import WhyCause from './components/WhyCause';
import Kits from './components/Kits';
import Impact from './components/Impact';
import HowItWorks from './components/HowItWorks';
import Volunteer from './components/Volunteer';
import DonorWall from './components/DonorWall';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import DecorativeBorder from './components/DecorativeBorder';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <VideoBackground />
          <DecorativeBorder />
          <Hero />
          <WhyCause />
          <Impact />
          <Kits />
          <HowItWorks />
          <Volunteer />
          <DonorWall />
          <Gallery />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

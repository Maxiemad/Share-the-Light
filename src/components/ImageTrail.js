import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './ImageTrail.css';

const ImageTrail = ({ 
  direction = 'rtl', // 'rtl' for right-to-left, 'ltr' for left-to-right
  loopDuration = 30,
  images = []
}) => {
  const rowRef = useRef(null);
  const containerRef = useRef(null);
  const [rowWidth, setRowWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (rowRef.current) {
        setRowWidth(rowRef.current.scrollWidth);
      }
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    
    window.addEventListener('orientationchange', () => {
      setTimeout(updateWidth, 100);
    });
    
    return () => {
      window.removeEventListener('resize', updateWidth);
      window.removeEventListener('orientationchange', updateWidth);
    };
  }, [images]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoScrolling(false);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleScrollRight();
    } else if (isRightSwipe) {
      handleScrollLeft();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
    setTimeout(() => setIsAutoScrolling(true), 4000);
  };

  const handleScrollLeft = () => {
    if (!rowRef.current) return;
    const scrollAmount = containerWidth * 0.8;
    setCurrentScroll(prev => Math.max(0, prev - scrollAmount));
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 4000);
  };

  const handleScrollRight = () => {
    if (!rowRef.current) return;
    const scrollAmount = containerWidth * 0.8;
    setCurrentScroll(prev => prev + scrollAmount);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 4000);
  };

  const animateX = isAutoScrolling
    ? direction === 'rtl'
      ? rowWidth
        ? { x: [0, -rowWidth] }
        : {}
      : rowWidth
      ? { x: [-rowWidth, 0] }
      : {}
    : { x: -currentScroll };

  return (
    <div className="image-trail-container">
      <div 
        ref={containerRef}
        className="image-trail-wrapper" 
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          className="image-trail-row"
          style={{ 
            width: rowWidth ? rowWidth * 2 : 'auto',
            display: 'flex',
            alignItems: 'center'
          }}
          animate={rowWidth ? animateX : {}}
          transition={
            rowWidth
              ? {
                  duration: isAutoScrolling ? loopDuration : 0.5,
                  repeat: isAutoScrolling ? Infinity : 0,
                  ease: isAutoScrolling ? 'linear' : 'easeOut',
                }
              : {}
          }
        >
          {/* Original items */}
          <div ref={rowRef} className="image-trail-items">
            {images.map((image, idx) => (
              <div key={`first-${idx}`} className="image-trail-item">
                <div className="image-trail-item-wrapper">
                  <img
                    src={image.src}
                    alt={image.alt || `Trail image ${idx + 1}`}
                    className="image-trail-img"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate for seamless looping */}
          <div className="image-trail-items">
            {images.map((image, idx) => (
              <div key={`second-${idx}`} className="image-trail-item">
                <div className="image-trail-item-wrapper">
                  <img
                    src={image.src}
                    alt={image.alt || `Trail duplicate image ${idx + 1}`}
                    className="image-trail-img"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImageTrail;

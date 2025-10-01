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
  const imagesContainerRef = useRef(null);
  const gapRef = useRef(null);
  const [rowWidth, setRowWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [gapWidth, setGapWidth] = useState(0);
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

    // Resize observer for dynamic width changes (mobile rotations, viewport changes)
    const ro = new ResizeObserver(() => {
      updateWidth();
      if (gapRef.current) setGapWidth(gapRef.current.offsetWidth || 0);
    });
    if (containerRef.current) ro.observe(containerRef.current);
    if (rowRef.current) ro.observe(rowRef.current);
    if (gapRef.current) ro.observe(gapRef.current);

    // Recalculate when images load (mobile often reports 0 before load)
    const node = rowRef.current;
    const imgs = node ? Array.from(node.querySelectorAll('img')) : [];
    const onImgLoad = () => updateWidth();
    imgs.forEach(img => {
      if (img.complete) return;
      img.addEventListener('load', onImgLoad, { once: true });
      img.addEventListener('error', onImgLoad, { once: true });
    });

    updateWidth();
    if (gapRef.current) setGapWidth(gapRef.current.offsetWidth || 0);
    const onResize = () => updateWidth();
    const onOrientation = () => setTimeout(updateWidth, 120);
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onOrientation);
    
    return () => {
      try { ro.disconnect(); } catch {}
      imgs.forEach(img => {
        img.removeEventListener('load', onImgLoad);
        img.removeEventListener('error', onImgLoad);
      });
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onOrientation);
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

  // Ensure seamless loop and clamp manual scroll within bounds
  // limit manual scroll to avoid overshooting into duplicate causing visible overlap
  const maxScroll = Math.max(0, (rowWidth || 0) - (containerWidth || 0));
  const clampedScroll = Math.min(Math.max(0, currentScroll), maxScroll);

  // Animate distance includes a spacer gap to hide seam perfectly
  const totalRun = (rowWidth || 0) + (gapWidth || 0);
  const animateX = isAutoScrolling
    ? direction === 'rtl'
      ? rowWidth
        ? { x: [0, -totalRun] }
        : {}
      : rowWidth
      ? { x: [-totalRun, 0] }
      : {}
    : { x: -clampedScroll };

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
            minWidth: '100%',
            display: 'flex',
            alignItems: 'center',
            willChange: 'transform'
          }}
          key={rowWidth} // restart animation when width changes
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
          <div ref={rowRef} className="image-trail-items" referrerPolicy="no-referrer">
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
          <div className="image-trail-gap" ref={gapRef} />
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

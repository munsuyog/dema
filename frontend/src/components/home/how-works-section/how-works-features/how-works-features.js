'use client'
import React, { useState, useEffect } from 'react';
import './how-works-features.css';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

const HowWorksFeatures = () => {
  const mobile = useMediaQuery({maxWidth: 480})
  const [highlightedFeatureIndex, setHighlightedFeatureIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedFeatureIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const progressTop = (mobile ? 70 : 100) * highlightedFeatureIndex; // Calculate top value here

  return (
    <div className='how-works-features'>
      <div className='feature-progress'>
        <div className='feature-progress-current' style={{ top: `${progressTop}px` }}></div>
      </div>
      <div className='how-works-features-container'>
        <div className={`how-works-feature ${highlightedFeatureIndex === 0 ? 'highlight' : ''}`}>
          <h2><a href='#'>Download the app</a></h2>
        </div>
        <div className={`how-works-feature ${highlightedFeatureIndex === 1 ? 'highlight' : ''}`}>
          <h2><a href='#'>Browse & Add to Cart</a></h2>
        </div>
        <div className={`how-works-feature ${highlightedFeatureIndex === 2 ? 'highlight' : ''}`}>
          <h2>Checkout & pay</h2>
          <Image src="/images/home/how-works-section/signup-squiggle.svg" width={67} height={54} className='signup-squiggle' />
        </div>
        <div className={`how-works-feature ${highlightedFeatureIndex === 3 ? 'highlight' : ''}`}>
          <h2>Save & get free ownership</h2>
        </div>
      </div>
    </div>
  );
};

export default HowWorksFeatures;

import React, { useState, useEffect } from 'react';
import './features-animation.css';

const FeaturesAnimation = () => {
  const [highlightedFeatureIndex, setHighlightedFeatureIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedFeatureIndex((prevIndex) => (prevIndex + 1) % 3); // Adjusted for 3 features
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const progressTop = 50 * highlightedFeatureIndex; // Calculate top value here

  return (
    <div className='free-ownership-features'>
      <div className='free-feature-progress'>
        <div className='free-feature-progress-current' style={{ top: `${progressTop}px` }}></div>
      </div>
      <div className='free-ownership-features-container'>
        <div className={`free-ownership-feature ${highlightedFeatureIndex === 0 ? 'highlight' : ''}`}>
          <h2>Shop & Earn</h2>
        </div>
        <div className={`free-ownership-feature ${highlightedFeatureIndex === 1 ? 'highlight' : ''}`}>
          <h2>Refer & Earn</h2>
        </div>
        <div className={`free-ownership-feature ${highlightedFeatureIndex === 2 ? 'highlight' : ''}`}>
          <h2>Sell & Earn</h2>
        </div>
      </div>
    </div>
  );
};

export default FeaturesAnimation;

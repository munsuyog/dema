import React, { useRef, useState, useEffect } from "react";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const heroRef = useRef();
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const features = [
    { title: "Reduce Returns", desc: "Everyone hates returns. We do too! We incentivize everyone to reduce them. Sellers can match with shoppers with category-specific return rates." },
    { title: "Receive Marketplace Ownership", desc: "Every transaction earns you ownership you don’t pay for. When dema goes public, every past transactions in the past pays you back even more!" },
    { title: "Lowest Referral fees", desc: "On day one, sellers pay up to 50% lower referral fees. Our audacious goal is to run the marketplace on <3%. Now that’s a frictionless marketplace!" },
    { title: "A buy-box that beats Amazon’s", desc: "dema picks your products even when Amazon’s buy-box doesn’t. You win more & increase your sales!" },
    { title: "Points to sweeten the deal", desc: "Use your free points to get more page 1 sots, reduce selling fees, access loans & vote on policies amongst other features. That’s “Real Power”!" },
    { title: "Page 1 without ads", desc: "Get page 1 spots on search results without advertising. Don’t pay the insane slotting fees for visibility" }
  ];

  const maxHeight = 300; // Maximum height for each feature element in pixels

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const element = heroRef.current;
        const elementTop = element.getBoundingClientRect().top;
        const elementHeight = element.clientHeight;
        const viewportHeight = window.innerHeight;

        // Calculate the percentage of the element's height that is in view
        const elementInView = Math.min(
          elementHeight,
          Math.max(0, viewportHeight - elementTop)
        );
        const scrollPercentage = (elementInView / elementHeight) * 100;

        setScrollPercent(scrollPercentage);

        // Determine active feature index based on scroll position
        const totalFeatures = features.length;
        const featureScrollRange = 100 / totalFeatures;

        for (let i = 0; i < totalFeatures; i++) {
          const startScroll = i * featureScrollRange;
          const endScroll = startScroll + featureScrollRange;
          if (scrollPercentage >= startScroll && scrollPercentage < endScroll) {
            setActiveFeatureIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getFeatureHeight = (index) => {
    const currentIndex = activeFeatureIndex;
  
    // Calculate scroll position relative to the current feature
    const startScroll = currentIndex * (100 / features.length);
    const endScroll = (currentIndex + 1) * (100 / features.length);
    let localScrollPercent = (scrollPercent - startScroll) / (endScroll - startScroll);
  
    if (index === currentIndex) {
      return `${localScrollPercent * maxHeight}px`; // Current feature grows
    } else if (index === currentIndex - 1) {
      const reducedHeight = (1 - localScrollPercent) * maxHeight; // Reduce height gradually
      return `${Math.max(reducedHeight, 0)}px`; // Ensure height doesn't go below 0
    } else {
      return "0px"; // Inactive features collapse
    }
  };
  
  

  return (
    <div ref={heroRef} id="features-section">
      <div className="features-section fixed-width">
        <div className="features-container">
          {features.map((feature, index) => (
            <div
              key={index}
              className="features-feature"
              style={{
                height: getFeatureHeight(index),
                transition: "height 0.3s ease-out" // Smooth transition effect
              }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
        <div className="features-video"></div>
      </div>
    </div>
  );
};

export default FeaturesSection;

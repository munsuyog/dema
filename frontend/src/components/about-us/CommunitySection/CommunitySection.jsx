import React, { useEffect, useState } from 'react';
// import './ShockerSection.css';
import { motion } from 'framer-motion';
import CompareAnimation from '../CardsReveal/CompareAnimation/CompareAnimation';
import CompareAnimationCommunity from './CompareAnimation/CompareAnimation';
import './CommunitySection.css'

const CommunitySection = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
  useEffect(() => {
    class ScrollPathController {
      constructor(scrollContainer) {
        this.scrollContainer = scrollContainer;
        this.path = scrollContainer.querySelector(".scrollPathCommunity");
        this.offset = parseInt(this.path.getAttribute("offset"), 10) || 0;
        this.elements = Array.from(scrollContainer.querySelectorAll("[fadeOnScroll]"));

        // Setup Intersection Observer for scroll container
        this.scrollObserver = new IntersectionObserver(
          this.scrollContainerCallback,
          { root: null, rootMargin: "-9%", threshold: [0.01] }
        );

        this.scrollObserver.observe(this.scrollContainer.parentNode);

        this.calculateSpeedFactor();
      }

      calculateSpeedFactor = () => {
        const containerHeight = this.scrollContainer.parentNode.clientHeight;
        const containerWidth = this.scrollContainer.parentNode.clientWidth;
        const aspectRatio = containerWidth / containerHeight;
        this.speedFactor = Math.min(1, Math.max(0.5, aspectRatio));
      };

      scrollContainerCallback = (entries) => {
        entries.forEach((entry) => {
          this.scrollContainer.classList.toggle("active", entry.isIntersecting);
        });
      };

      updatePathOnScroll = () => {
        if (!this.scrollContainer.classList.contains("active")) return;
        
        const scrollPercentage = (window.scrollY - this.scrollContainer.parentNode.offsetTop) /
          (this.scrollContainer.parentNode.scrollHeight - window.innerHeight);
        const scrollPos = Math.max(0, Math.min(1, scrollPercentage));
        setScrollPercentage(scrollPos)
        // if (scrollPercentage < 3.5 && scrollPercentage > -0.01) {
        //   const drawLength = this.path.getTotalLength() * scrollPercentage;
        //   this.path.style.strokeDashoffset = this.path.getTotalLength() - drawLength;
        // }

        if (scrollPos > parseFloat(this.path.getAttribute("stay")) + this.offset) {
          const position = -(Math.ceil(scrollPos * 100) - parseFloat(this.path.getAttribute("stay")) * 100) * this.path.getAttribute("speed");
          this.scrollContainer.style.top = position + this.offset * 100 + "%";
        } else {
          this.scrollContainer.style.top = this.offset * 100 + "%";
        }

        this.elements.forEach((element) => {
          element.style.opacity = element.getAttribute("threshold") < scrollPercentage * 0.75 ? 1 : 0;
        });
      };
    }

    const scrollPathController = new ScrollPathController(document.querySelector(".scrollContainerCommunity"));

    window.addEventListener("scroll", scrollPathController.updatePathOnScroll);
    window.addEventListener("resize", scrollPathController.calculateSpeedFactor);

    return () => {
      window.removeEventListener("scroll", scrollPathController.updatePathOnScroll);
      window.removeEventListener("resize", scrollPathController.calculateSpeedFactor);
    };
  }, []);

  return (
    <div style={{ height: '3000px', position: 'relative' }}>
      <div className="scrollContainerCommunity">
        <motion.div initial={{width: '95vw'}} whileInView={{width: '100vw', borderRadius: 0}} viewport={{amount: 0}} className='scrollPathCommunity community-scroll' offset={0}>
          <div className='community-section'>
            <h1 className='community-section-title'>
            <span className='title-blue'>Real community = 50% equity!</span> <br />
...makes business sense too!
            </h1>
            <div className='community-animation-container'>
                <CompareAnimationCommunity scrollPercentage={scrollPercentage} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommunitySection;

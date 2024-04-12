"use client";
import React, { useState, useEffect, useRef } from "react";
import "./ultimate-experience.css";
import { demaCards, AmazonCards } from "./cards";
import Marquee from 'react-fast-marquee'
import { ultimateExperienceSVGs } from "../../../../constants/VectorSVGs";

const SplitContainer = () => {
  const [width, setWidth] = useState(50);
  const top = useRef(null);
  const box = useRef(null);
  const dragger = useRef(null);
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (box.current && top.current) {
        let value = e.clientX - box.current.getBoundingClientRect().left;

        top.current.style.width = `${Math.max(
          Math.min((value / box.current.clientWidth) * 100, 100),
          1
        )}%`;
        dragger.current.style.left = `${Math.max(
            Math.min((value / box.current.clientWidth) * 100, 100),
            1
          )}%`;
      }
    };

    const boxRef = box.current;

    boxRef.addEventListener('mousemove', handleMouseMove);

    return () => {
      boxRef.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleDragMove = (e) => {
      // Prevent default behavior if necessary
      e.preventDefault();
  
      const touch = e.touches[0];
      const deltaX = touch.clientX - dragger.current.initialX;
      let newWidth = dragger.current.initialWidth + deltaX;
      newWidth = Math.max(Math.min(newWidth, box.current.clientWidth), 0); // Ensure width is within bounds
  
      // Update both the dragger's position and the top section's width
      const newWidthPercentage = (newWidth / box.current.clientWidth) * 100;
      setWidth(newWidthPercentage);
      dragger.current.style.left = `${newWidthPercentage}%`;
      top.current.style.width = `${newWidth}px`;
    };
    const handleDragStart = (e) => {
      e.preventDefault(); // Prevent default touch event behavior
      const touch = e.touches[0];
      dragger.current.initialX = touch.clientX;
      dragger.current.initialWidth = parseFloat(
        getComputedStyle(top.current).width
      );
    };
    const handleDragEnd = () => {
      dragger.current.initialX = null;
      dragger.current.initialWidth = null;
    };
  
    const draggerRef = dragger.current;
  
    draggerRef.addEventListener('touchmove', handleDragMove, { passive: false });
    draggerRef.addEventListener('touchstart', handleDragStart, { passive: false });
    draggerRef.addEventListener('touchend', handleDragEnd, { passive: false });

  
    return () => {
      draggerRef.removeEventListener('touchmove', handleDragMove);
      draggerRef.removeEventListener('touchstart', handleDragStart);
      draggerRef.removeEventListener('touchend', handleDragEnd);

    };
  }, []);

  useEffect(() => {
    const update = () => {
      if (box.current) {
        box.current.style.setProperty(
          '--box-width',
          Math.ceil(box.current.getBoundingClientRect().width) + 'px'
        );
      }
    };

    update();

    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('resize', update);
    };
  }, []);
  const widthAdjust = (e) => {
    const initialX = box.current.getBoundingClientRect().left;
    const currentX = e.clientX;
    const boxWidth = box.current.clientWidth;

    let newWidthPercentage;

    if (currentX >= initialX) {
      // Mouse moving to the right
      newWidthPercentage = ((currentX - initialX) / boxWidth) * 100;
      setWidth(Math.max(Math.min(newWidthPercentage, 100), 1));
    } else {
      // Mouse moving to the left
      const difference = initialX - currentX;
      newWidthPercentage = ((boxWidth - difference) / boxWidth) * 100;
      setWidth(Math.max(Math.min(newWidthPercentage, 100), 1));
    }

    // Ensure the width stays within certain bounds (1% to 100%)
    const clampedWidth = Math.max(Math.min(newWidthPercentage, 100), 1);

    top.current.style.width = `${clampedWidth}%`;
  };



  const handleDragMove = (e) => {
    e.preventDefault(); // Prevent default touch event behavior
    const touch = e.touches[0];
    const deltaX = touch.clientX - dragger.current.initialX;
    let newWidth = dragger.current.initialWidth + deltaX;
    newWidth = Math.max(Math.min(newWidth, box.current.clientWidth), 0); // Ensure width is within bounds
  
    // Update both the dragger's position and the top section's width
    const newWidthPercentage = (newWidth / box.current.clientWidth) * 100;
    setWidth(newWidthPercentage);
    dragger.current.style.left = `${newWidthPercentage}%`;
    top.current.style.width = `${newWidth}px`;
  };
  



  return (
    <div className="ultimate-experience" ref={box}>
      <div
        className="dragger"
        ref={dragger}
        style={{ left: `${width}%` }}
      >
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<circle cx="16" cy="16" r="16" fill="#F9F8F8"/>
<rect opacity="0.2" x="23.9375" y="15.5" width="1.07812" height="1" fill="#F84F39"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.805 11.9948C19.5316 11.7214 19.5316 11.2782 19.805 11.0048C20.0784 10.7315 20.5216 10.7315 20.795 11.0048L25.295 15.5048C25.5683 15.7782 25.5683 16.2214 25.295 16.4948L20.795 20.9948C20.5216 21.2681 20.0784 21.2681 19.805 20.9948C19.5316 20.7214 19.5316 20.2782 19.805 20.0048L23.81 15.9998L19.805 11.9948Z" fill="#242336"/>
<rect opacity="0.2" x="7" y="15.5" width="0.9375" height="1" fill="#F84F39"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1989 11.0048C12.4722 11.2782 12.4722 11.7214 12.1989 11.9948L8.19386 15.9998L12.1989 20.0048C12.4722 20.2782 12.4722 20.7214 12.1989 20.9948C11.9255 21.2681 11.4823 21.2681 11.2089 20.9948L6.70893 16.4948C6.43556 16.2214 6.43556 15.7782 6.70893 15.5048L11.2089 11.0048C11.4823 10.7315 11.9255 10.7315 12.1989 11.0048Z" fill="#242336"/>
</svg>

      </div>
      <div className="top" ref={top} style={{width: '50%'}}>
        {/* Amazon */}
        <div className="top-child">
        <div className="section-title">
            <h2>
              <span dangerouslySetInnerHTML={{__html: ultimateExperienceSVGs.amazonCart}} className="amazon-cart-vector"></span>Your Boring Shopping <br />
              <span className="experience-text-amazon">Experience Ends on Amazon</span>
            </h2>
          </div>
            <div className="cards-container-amazon">
                <Marquee autoFill>
                {AmazonCards.map((card, index) => (
           <div className="card" key={index}>
            <span className="card-header-image" dangerouslySetInnerHTML={{__html: card.image}}></span>
           <h3 className="card-title">{card.title}</h3>
           <div className="bullet-points">
                {card.points.map((point, index) => (
                    <div className="point" key={index}>
                    <img
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                    />
                    <p className="point-text">{point}</p>
                </div>
                ))}
           </div>
         </div>
                ))}
                </Marquee>
            </div>
        </div>
      </div>
      <div className="bottom">

        <div className="bottom-child">
        <div className="section-title">
            <h2>
              <span className="dema-cart-vector" dangerouslySetInnerHTML={{__html: ultimateExperienceSVGs.demaCart}}></span>Your Ultimate Shopping <br />
              Experience Begins on <span className="title-dema">dema</span>
            </h2>
          </div>
            <div className="cards-container-dema">
                <Marquee autoFill>
                {demaCards.map((card, index) => (
           <div className="card" key={index}>
            <span className="card-header-image" dangerouslySetInnerHTML={{__html: card.image}}></span>
           <h3 className="card-title">{card.title}</h3>
           <div className="bullet-points">
                {card.points.map((point, index) => (
                    <div className="point" key={index}>
                    <img
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                    />
                    <p className="point-text">{point}</p>
                </div>
                ))}
           </div>
         </div>
                ))}
                </Marquee>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SplitContainer;

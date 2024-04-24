"use client";
import React, { useState, useEffect } from "react";
import "./join-us.css";
import ButtonSecondary from "../../common/button-secondary/button-secondary";

const JoinUs = ({downloadBtn}) => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Pause animation if screen width is less than 768px
      if (visualViewport.width < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    // Initial call to set animation state
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="join-us-section">
      <div className="join-us-section section-padding">
        <div className="section-title">
          <h2>Join Us</h2>
          <h3>Shop | Save | Own</h3>
          <ButtonSecondary onClick={() => {downloadBtn.current.click()}} title="Get the app" />
        </div>
      </div>
      <svg
        style={{ position: "absolute", bottom: 0, zIndex: -1 }}
        width="100%"
        viewBox="0 0 1577 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#0143BE" fillOpacity={0.2}>
          <animate
            attributeName="d"
            dur="30s"
            repeatCount="indefinite"
            values="M0 356.759V4307H1577V218.07C1514.33 161.85 1445.22 112.053 1369.5 72.4841C993.38 -124.064 412.605 117.161 0 356.759Z;
M0 300.446V4307H1577V504.101C1360.04 335.784 1108.8 171.677 918.5 72.2294C571.912 -108.886 269.554 81.8469 0 300.446Z;
M0 283.735V4237H1577V317.047C1369.34 129.452 1125.7 -19.1374 918.5 2.22934C525.4 42.7656 247.64 143.295 0 283.735Z;
M0 356.759V4307H1577V218.07C1514.33 161.85 1445.22 112.053 1369.5 72.4841C993.38 -124.064 412.605 117.161 0 356.759Z"
          ></animate>
        </path>
        <circle
          cx="50%"
          cy="115%"
          r="119.5"
          stroke="#0143BE"
          stroke-opacity="0.2"
        ></circle>
        <circle
          cx="50%"
          cy="115%"
          r="139.5"
          stroke="#0143BE"
          stroke-opacity="0.4"
        ></circle>
        <circle cx="50%" cy="115%" r="159.5" stroke="#3830C9"></circle>
      </svg>
    </section>
  );
};

export default JoinUs;

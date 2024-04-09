"use client";
import React, { useEffect, useState } from "react";
import "./newsletter.css";
import ButtonPrimary from "@/components/common/button-primary/button-primary";
import { useDevice } from "@/utils/DeviceContext";

const NewsletterSection = () => {
  const [isMobile, setMobile] = useState(false);
  const {device} = useDevice();

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
    <div id="newsletter-section">
      <div className="newsletter-container">
        <h2>Email Address</h2>
        <div className="newsletter-input-container">
          <input placeholder="Email Address" />
          <ButtonPrimary
            text="Subscribe"
            bgColor="var(--primary-500)"
            width="145px"
            fontSize={20}
          />
        </div>
        <ButtonPrimary
          text="Our emails are like unicorns – rare, magical, and no spam included!"
          width={device != 'desktop' ? "80%" : "35%"}
          fontSize={device != 'desktop' ? "10px" : "0.9vw"}
        />
      </div>
      <svg
        width="375"
        height="284"
        viewBox="0 0 375 284"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_3659_2451)">
          <path
            d="M672.222 256.989C251.519 -185.329 -141.656 63.1272 -299.642 258.121C-304.843 264.541 -300.145 273.889 -291.883 273.889H665.269C673.969 273.889 678.219 263.293 672.222 256.989Z"
            fill="url(#paint0_linear_3659_2451)"
            shape-rendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_3659_2451"
            x="-311.824"
            y="0"
            width="996.846"
            height="283.889"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_3659_2451"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_3659_2451"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_3659_2451"
            x1="188"
            y1="10"
            x2="188"
            y2="273.889"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E7FFFA" />
            <stop offset="1" stop-color="#F2FBF9" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default NewsletterSection;

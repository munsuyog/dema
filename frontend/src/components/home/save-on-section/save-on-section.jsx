"use client";
import React, { useState, useEffect } from "react";
import "./save-on-section.css";
import useIntersectionObserver from "../../../animations/useIntersectionObserver";
import {motion} from 'framer-motion'
import video1 from '/images/home/free-ownership/video1.mp4';
import video2 from '/images/home/free-ownership/video2.mp4';
import video3 from '/images/home/free-ownership/video3.mp4';


const SaveOnSection = () => {
  const [highlightedFeature, setHighlightedFeature] = useState(0);
  const features = [
    {id: 1, title: "Auto-select the lowest price seller", video: <video preload playsInline autoPlay muted onEnded={() => {setHighlightedFeature((prevIndex) => (prevIndex+1)%3)}} src={video1} /> },
    {id: 2, title: "Auto-select the lowest price seller", video: <video preload playsInline autoPlay muted onEnded={() => {setHighlightedFeature((prevIndex) => (prevIndex+1)%3)}} src={video2}/> },
    {id: 3, title: `Get <span class='dema-font'>d<span class='title-blue'>e</span>ma</span>'s 5% savings`, video: <video preload playsInline autoPlay muted onEnded={() => {setHighlightedFeature((prevIndex) => (prevIndex+1)%3)}} src={video3} /> }
  ]
  console.log(highlightedFeature)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setHighlightedFeature((prevFeature) => (prevFeature + 1)%3);
  //   }, 7000);

  //   return () => clearInterval(interval);
  // }, []);
  const pendulumAnim = {
    "--delay": "200ms",
    "--time": "3s",
    "--direction": "-1",
  };
  const pendulumRef = useIntersectionObserver(
    (target) => {
      target.classList.remove("inactive");
      target.classList.add("active");
    },
    { threshold: 0.3 }
  );

  const handleFeatureClick = (index) => {
    setHighlightedFeature(index);
  };
  return (
    <section id="save-on-section">
      <div className="save-on-section section-padding fixed-width">
        <div className="section-title-wrapper">
          <h4 className="section-subtitle">SAVE ON ANY PRICE</h4>
          <h1 className="save-on-title">
            <span className="title-blue">save 5%</span> or more <br />
            <span className="title-even-after-wrapper">
              <span className="title-even-after">
                even after
                <motion.svg
                  class="even-after-squiggle"
                  xmlns="http://www.w3.org/2000/svg"
                  width="210"
                  height="110"
                  viewBox="0 0 129 36"
                  fill="none"
                >
                  <motion.path
                    d="M118.787 25.4992C81.1898 29.779 5.29712 34.1174 2.5064 17.2323C-0.982 -3.87399 121.865 -0.305283 126.357 17.0511C129.346 28.5999 105.023 33.7244 96.6988 33.5179"
                    stroke="#22E393"
                    stroke-width="4"
                    stroke-linecap="round"
                    initial={{pathLength: 0}}
                    whileInView={{pathLength:1}}
                    viewport={{once: true}}
                    transition={{duration: 2}}
                  ></motion.path>
                </motion.svg>
                <img
                  src="/images/home/save-on-section/sale-tag.svg"
                  width={57}
                  height={57}
                  className="sale-tag inactive pendulum"
                  style={pendulumAnim}
                  ref={pendulumRef}
                />
              </span>{" "}
              discounts & coupons
            </span>
          </h1>
          <img
            src="/images/home/save-on-section/dotted-squiggle.svg"
            width={191}
            height={117}
            className="dotted-squiggle"
          />
        </div>
        <div className="discount-coupon-mobile">
          <div className="discount-coupon">
            <span className="e-vector1">e</span>
            <span className="e-vector2">e</span>
            <div className="discount-coupon-container">
              <div>
                <div className="discount-title">Discount Coupons</div>
                <div className="discount-off">10% Off</div>
              </div>
              <img
                src="/images/home/save-on-section/barcode.svg"
                width={18}
                height={56}
                className="barcode"
              />
            </div>
          </div>
        </div>
        <div className="save-on-container">
        <div className="save-on-features-container">
            <div className="save-on-features">
              {features.map((feature, index) => (
                <div className="save-on-feature" key={index} onClick={() => handleFeatureClick(index)}>
                  <div className="save-on-feature-number-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="66"
                      height="60"
                      viewBox="0 0 66 60"
                      fill="none"
                    >
                      <path
                        style={{ transition: 'fill 200ms ease' }}
                        d="M58.884 25.1802C64.3531 34.3419 53.9178 47.1732 41.3158 49.1739C28.2073 51.2551 15.2087 52.8752 9.73963 43.7135C4.27058 34.5518 12.6306 16.449 23.0614 10.3952C33.4922 4.34143 48.4804 15.6087 58.884 25.1802Z"
                        fill={highlightedFeature === index ? "#22E393" : "#3830C9"}
                      />
                      <path
                        style={{ transition: 'fill 200ms ease' }}
                        d="M55.204 26.4685C59.8668 34.2796 50.9699 45.2193 40.2256 46.9252C29.0495 48.6995 17.967 50.0808 13.3042 42.2696C8.64132 34.4585 15.769 19.0243 24.6621 13.863C33.5552 8.70159 46.334 18.3079 55.204 26.4685Z"
                        fill={highlightedFeature === index ? "#3830C9" : "white"}
                      />
                    </svg>
                    <div
                      className={
                        highlightedFeature === index
                          ? "save-on-feature-number-highlight"
                          : "save-on-feature-number"
                      }
                    >
                      {index + 1}
                    </div>
                  </div>
                  <h3
                    className={
                      highlightedFeature === index
                        ? "save-on-feature-title highlight"
                        : "save-on-feature-title"
                    }
                    dangerouslySetInnerHTML={{ __html: feature.title }}
                  />
                </div>
              ))}
            </div>
            <div className="discount-coupon-desktop">
              <motion.div initial={{x: -50, opacity: 0}} whileInView={{x: 0, opacity:1}} transition={{duration: 0.5}} viewport={{once: true}} className="discount-coupon">
                <span className="e-vector1">e</span>
                <span className="e-vector2">e</span>
                <div className="discount-coupon-container">
                  <div>
                    <div className="discount-title">Discount Coupons</div>
                    <div className="discount-off">10% Off</div>
                  </div>
                  <img
                    src="/images/home/save-on-section/barcode.svg"
                    width={18}
                    height={56}
                    className="barcode"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          {features.map((feature, index) => (
                      <div className="save-on-video-container" style={highlightedFeature != index ? {display: "none"}: {}}>
                      <div className="save-on-video">
                        {feature.video}
                      </div>
                    </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaveOnSection;

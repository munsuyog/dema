'use client'
import React, { useState } from "react";
import "./free-ownership.css";
import Image from "next/image";
import { motion } from "framer-motion";
import SkewedButton from "@/components/common/skewed-button/skewed-button";

const FreeOwnership = () => {
  const [highlightedFeatureIndex, setHighlightedFeatureIndex] = useState(2);
  const features = [
    { id: 1, title: "Shop & Earn", video: "/images/home/free-ownership/video1.mp4" },
    { id: 2, title: "Refer & Earn", video: "/images/home/free-ownership/video2.mp4" },
    { id: 3, title: "Sell & Earn", video: "/images/home/free-ownership/video3.mp4" }
  ];

  const springConfig = {
    type: "spring",
    damping: 15, // Adjust damping for desired springiness
    stiffness: 200 // Adjust stiffness for desired bounciness
  };

  const handleFeatureClick = (index) => {
    setHighlightedFeatureIndex(index);
  };

  return (
    <section id="free-ownership">
      <div className="free-ownership section-padding">
        <div className="section-title-wrapper">
          <h4 className="section-subtitle">FREE OWNERSHIP</h4>
          <h2 className="free-ownership-title">
            help <span className="title-blue">build it </span> & get <br />
            to <span className="title-blue">own it for </span>{" "}
            <span className="title-free">
              <motion.svg
                className="inactive free-squiggle"
                xmlns="http://www.w3.org/2000/svg"
                width="190%"
                viewBox="0 0 156 82"
                fill="none"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ...springConfig }}
                  d="M142.408 59.1107C98.255 67.6411 8.94169 74.6452 4.91618 34.4178C1.93227 4.59936 58.5 2.45193 93.9999 4.9763C129.5 7.50067 148.505 22.5154 150.968 39.3737C154.996 66.9348 126.534 78.0488 116.708 77.1963"
                  stroke="#3830C9"
                  strokeWidth="8"
                  strokeLinecap="round"
                ></motion.path>
              </motion.svg>
              FREE<span className="title-blue">!</span>
            </span>
          </h2>
        </div>
        <div className="free-ownership-container">
          <div className="free-ownership-video-container">
            <div className="free-ownership-video">
            <motion.div
              initial={{ opacity: 0 }} // Initial opacity set to 0
              animate={{ opacity: 1 }} // Animate opacity to 1
              transition={{ duration: 0.5 }} // Transition duration set to 0.5 seconds
              className="free-ownership-video"
              key={highlightedFeatureIndex}
            >
              <video
                className="video"
                src={features[highlightedFeatureIndex].video}
                autoPlay
                muted
                onEnded={() => {setHighlightedFeatureIndex((prevIndex) => (prevIndex + 1)%3)}}
              />
            </motion.div>
            </div>
          </div>
          <div className="free-ownership-animation">
            <div className="free-ownership-features">
              <div className="free-ownership-features-container">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    onClick={() => handleFeatureClick(index)}
                    className={`free-ownership-feature ${
                      highlightedFeatureIndex === index ? "highlight" : ""
                    }`}
                  >
                    <div className="feature-progress"></div>
                    <motion.h2
                      transition={springConfig}
                      className={`free-ownership-feature-title ${
                        highlightedFeatureIndex === index ? "highlight" : ""
                      }`}
                    >
                      {feature.title}
                    </motion.h2>
                  </motion.div>
                ))}
              </div>
            </div>
            <Image
              src="/images/home/free-ownership/free-squiggle-sm.svg"
              width={56}
              height={21}
              className="free-squiggle-sm"
            />
            <div className="free-ownership-skewed-btn">
                    <SkewedButton text="Even sellers can get in on the action" fontSize="12px" width="140px" height="60px" />
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/images/home/free-ownership/flower01.svg"
        width={44}
        height={44}
        className="free-flower-top"
      />
      <Image
        src="/images/home/free-ownership/star01.svg"
        width={50}
        height={56}
        className="free-star-bottom"
      />
      <Image
        src="/images/home/free-ownership/star01.svg"
        width={50}
        height={56}
        className="free-star-bottom-right"
      />
    </section>
  );
};

export default FreeOwnership;

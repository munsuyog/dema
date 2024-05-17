import React, { useState, useEffect } from "react";
import "./FreeOwnership.css";
import { motion } from "framer-motion";
import SkewedButton from "../../common/skewed-button/skewed-button";
import { useDevice } from "../../../contexts/DeviceContext";
import CircleSquiggle from "../../common/SVGs/CircleSquiggle/CircleSquiggle";


const FreeOwnership = () => {
  const [highlightedFeatureIndex, setHighlightedFeatureIndex] = useState(0);
  const features = [
    {
      id: 1,
      title: "Shop & Earn",
      video: <img src="/images/home/free-ownership/gif1.gif" alt="gif" />,
      duration: 2
    },
    {
      id: 2,
      title: "Refer & Earn",
      video: <img src="/images/home/free-ownership/gif2.gif" alt="gif" />,
      duration: 2
    },
    {
      id: 3,
      title: "Sell & Earn",
      video: <img src="/images/home/free-ownership/gif3.gif" alt="gif" />,
      duration: 2
    },
  ];
  const { device } = useDevice();

  useEffect(() => {
    const timer = setInterval(() => {
      setHighlightedFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [features.length]);

  let autoChangeTimeout;

  const handleFeatureClick = (index) => {
    clearTimeout(autoChangeTimeout);
    setHighlightedFeatureIndex(index);
    autoChangeTimeout = setTimeout(() => {
      setHighlightedFeatureIndex((index + 1) % features.length);
    }, 5000);
  };

  const springConfig = {
    type: "spring",
    damping: 15,
    stiffness: 200,
  };
  useEffect(() => {
    autoChangeTimeout = setTimeout(() => {
      setHighlightedFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 5000);
  }, []);
  return (
    <section id="free-ownership">
      <div className="free-ownership section-padding fixed-width">
        <div className="section-title-wrapper">
          <h4 className="section-subtitle">FREE OWNERSHIP</h4>
          <h1 className="free-ownership-title">
            help <span className="title-blue">build it </span> & get <br />
            to <span className="title-blue">own it for </span>{" "}
            <span className="title-free">
              <CircleSquiggle width={"200%"} style={{left: -10, top: 0, width: '130%'}} time="3s"  d="M142.408 59.1107C98.255 67.6411 8.94169 74.6452 4.91618 34.4178C1.93227 4.59936 58.5 2.45193 93.9999 4.9763C129.5 7.50067 148.505 22.5154 150.968 39.3737C154.996 66.9348 126.534 78.0488 116.708 77.1963" viewBox="0 0 155 82" color="#3830C9" />
              free<span className="title-blue">!</span>
            </span>
          </h1>
        </div>
        <div className="free-ownership-container">
          {
            features.map((feature, index) => (
              <div className="free-ownership-video-container" style={index != highlightedFeatureIndex ? {display: "none"}: {}}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="free-ownership-video"
                  key={highlightedFeatureIndex}
                >
                  {feature.video}
                </motion.div>
            </div>
            ))
          }
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
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="40"
                viewBox="0 0 187 97"
                fill="none"
                className="free-squiggle-sm"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  d="M4 30.8606C37.8142 110.659 127 37.7597 80 30.8606C33 23.9615 63 103.861 182 62.8605"
                  stroke="#22E393"
                  stroke-width="6"
                  stroke-linecap="round"
                ></motion.path>
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{once: true}}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1.6
                  }}
                  d="M169.433 55.4229C169.433 55.4229 181.518 59.0801
                    182.5 63.5C183.5 68 174.628 76.5121 174.628 76.5121"
                  stroke="#22E393"
                  stroke-width="6"
                  stroke-linecap="round"
                ></motion.path>
                <defs>
                  <lineargradient
                    id="paint0_linear_1_6137"
                    x1="191"
                    y1="42.3605"
                    x2="-10.5"
                    y2="42.4637"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.415" stop-color="#3830C9"></stop>
                    <stop offset="0.815" stop-color="#22E393"></stop>
                  </lineargradient>
                </defs>
              </motion.svg>
            <motion.div initial={{opacity: 0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration: 2, delay: 2}} className="free-ownership-skewed-btn">
              <SkewedButton
                text="Even sellers can get in on the action"
                fontSize={device != 'desktop' ? "10px" : "0.7vw"}
                width={device!= 'desktop' ? "125px" : "8.5vw"}
                height={device != 'desktop' ? "50px" : "3vw"}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <img
        src="/images/home/free-ownership/flower01.svg"
        width={44}
        height={44}
        className="free-flower-top"
        alt="vector"
      />
      <img
        src="/images/home/free-ownership/star01.svg"
        width={50}
        height={56}
        className="free-star-bottom"
        alt="vector"
      />
      <img
        src="/images/home/free-ownership/star01.svg"
        width={50}
        height={56}
        className="free-star-bottom-right"
        alt="vector"
      />
    </section>
  );
};

export default FreeOwnership;

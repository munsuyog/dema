"use client";
import React, { useRef } from "react";
import "./coming-soon.css";
import Image from "next/image";
import {motion} from 'framer-motion'
import { useInView } from "framer-motion";


const ComingSoon = () => {
  const ref = useRef()
  return (
    <section id="coming-soon">
      <div className="fixed-width">
        <div className="shop-anywhere">
          <div className="shop-anywhere-flex">
            <div className="shop-anywhere-container">
              <div className="shop-anywhere-wrapper">
                <div className="shop-anywhere-box">
                  <span>Shop Anywhere</span>
                </div>
              </div>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="187"
                height="97"
                viewBox="0 0 187 97"
                fill="none"
                className="shop-anywhere-squiggle"
                ref={ref}
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
                  stroke="url(#paint0_linear_1_6137)"
                  stroke-width="8"
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
                  stroke="#3830C9"
                  stroke-width="8"
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
              <div className="shop-anywhere-logo-active">
                <Image
                  src="/images/home/coming-soon/amazon-logo.svg"
                  width={140}
                  height={42}
                  alt="amazon-logo"
                />
              </div>
            </div>
            <div className="shop-anywhere-logos-wrapper">
              <div className="coming-soon-title-wrapper">
                <div className="coming-soon-title">
                  <span className="gradient-text">Coming Soon</span>
                </div>
              </div>
              <div className="shop-anywhere-logos">
                <Image
                  src="/images/home/coming-soon/walmart-logo.svg"
                  width={140}
                  height={42}
                  alt="walmart"
                />
                <Image
                  src="/images/home/coming-soon/ebay-logo.svg"
                  width={140}
                  height={42}
                  alt="ebay"
                />
                <Image
                  src="/images/home/coming-soon/temu-logo.svg"
                  width={60}
                  height={60}
                  alt="temu"
                />
                <Image
                  src="/images/home/coming-soon/etsy-logo.svg"
                  width={140}
                  height={42}
                  alt="etsy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;

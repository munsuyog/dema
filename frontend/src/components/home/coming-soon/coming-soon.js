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
              <motion.svg className="shop-anywhere-squiggle" width="187" height="97" viewBox="0 0 187 97" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path initial={{pathLength: 0}} whileInView={{pathLength: 1}} viewport={{once:true}} transition={{duration: 2}} d="M4 30.8613C37.8142 110.659 127 37.7604 80 30.8613C33 23.9622 63 103.861 182 62.8612" stroke="url(#paint0_linear_2571_6271)" stroke-width="8" stroke-linecap="round"/>
<motion.path initial={{pathLength: 0}} whileInView={{pathLength: 1}} viewport={{once:true}} transition={{duration: 1, delay: 1.6}} d="M169.432 55.4238C169.432 55.4238 181.518 59.0811 182.5 63.501C183.5 68.001 174.628 76.5131 174.628 76.5131" stroke="#3830C9" stroke-width="8" stroke-linecap="round"/>
<defs>
<linearGradient id="paint0_linear_2571_6271" x1="191" y1="42.3613" x2="-10.5" y2="42.4644" gradientUnits="userSpaceOnUse">
<stop offset="0.415" stop-color="#3830C9"/>
<stop offset="0.815" stop-color="#22E393"/>
</linearGradient>
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

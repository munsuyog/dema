"use client";
import TitleBadge from "@/components/common/title-badge/title-badge";
import React from "react";
import "./hero-section.css";
import { motion } from "framer-motion";
import Image from "next/image";
import ButtonPrimary from "@/components/common/button-primary/button-primary";

const AboutHero = () => {
  return (
    <section id="about-hero">
      <div className="about-hero section-padding fixed-width">
      <div className="about-hero-title-section">
        <div className="about-badge-wrapper">
          <TitleBadge title="About Us" primary />
          <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="50"
                viewBox="0 0 187 97"
                fill="none"
                className="about-badge-squiggle"
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
        </div>
        <h1>
          Delivering Inexpensive
          <br />
          <span>
            Permissionless
            <motion.svg
              width="470"
              height="103"
              viewBox="0 0 468 103"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="title-squiggle"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                className="squiggle-home-anim"
                d="M435.891 73.914C295.978 88.1643 13.646 103.396 3.61873 50.3189C-8.91536 -16.027 447.875 -7.35275 464.219 47.1716C475.095 83.4518 384.532 100.084 353.578 99.6072"
                stroke="#22E393"
                stroke-width="8"
              />
            </motion.svg>
          </span>
          <br />
          Autonomous {" "}
          <span>
            commerce!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="43"
              viewBox="0 0 42 43"
              fill="none"
              className="title-vector"
            >
              <path
                d="M21 0.75L24.5682 7.27326L30.7592 3.15542L30.8872 10.5897L38.2827 9.82064L34.9411 16.4628L41.8469 19.2187L35.8013 23.5472L40.6353 29.1967L33.2707 30.2198L34.9256 37.4687L27.929 34.9521L26.0256 42.1398L21 36.66L15.9744 42.1398L14.071 34.9521L7.07442 37.4687L8.72931 30.2198L1.36466 29.1967L6.19871 23.5472L0.153114 19.2187L7.05891 16.4628L3.71734 9.82064L11.1128 10.5897L11.2408 3.15542L17.4318 7.27326L21 0.75Z"
                fill="#E5DD00"
              />
            </svg>
          </span>
        </h1>
        <p>We got tired of marketplace intermediaries, buzzwords, rising prices, higher selling costs, captive walled gardens & increasingly less seamless experiences.</p>
        <div>
        <ButtonPrimary text="Learn more" />
      </div>
      </div>
      <div>
        <Image src="/images/about/hero-section/hero-banner.svg" width={594} height={482} alt="hero-banner" className="about-hero-banner" />
      </div>
      </div>
    </section>
  );
};

export default AboutHero;

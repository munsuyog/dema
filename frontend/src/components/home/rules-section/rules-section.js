"use client";
import React from "react";
import "./rules-section.css";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

const RulesSection = () => {
  const carouselRef = useRef(null);

  useEffect(() => {}, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    const rules = carousel.querySelectorAll(".rule");

    let currentIndex = 0;
    let interval;

    const scrollRule = () => {
      const currentRule = rules[currentIndex];
      currentRule.scrollIntoView({ behavior: "smooth" });

      currentIndex = (currentIndex + 1) % rules.length;
    };

    const handleScroll = () => {
      const rulesSection = document.getElementById("rules-section");
      const rect = rulesSection.getBoundingClientRect();

      if (
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      ) {
        // User viewport is within the rules section, start the carousel
        clearInterval(interval);
        interval = setInterval(scrollRule, 5000);
      } else {
        // User viewport is outside the rules section, stop the carousel
        clearInterval(interval);
      }
    };

    // Add scroll event listener to handle user scroll interaction
    window.addEventListener("scroll", handleScroll);

    // Initial start of the interval if the user viewport is within the rules section
    handleScroll();

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll); //
    };
  }, []);

  const spring = useSpring({
    config: { tension: 300, friction: 0, duration: 2000 }
  })

  return (
    <section id="rules-section">
      <div className="rules-section section-padding" ref={carouselRef}>
        <div className="section-title-wrapper">
          <h2 className="rules-section-title">
            Rules decided by{" "}
            <span className="title-operator">
              Operator{" "}
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="operator-squiggle"
                width="219"
                height="65"
                viewBox="0 0 219 65"
                fill="none"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                  viewport={{ once: true }}
                  style={spring}
                  d="M6 50.7321C6 50.7321 40.8833 13.8462 47.0167 8.2559C61.022 -4.50946 46.7636 40.5636 48.55 51.8499C50.0833 61.5371 76.5333 19.4331 86.8833 10.1187C97.2333 0.8042 84.5833 34.711 86.8833 49.2389C90.4132 71.5356 100.683 18.6898 127.9 8.2559C142.021 2.8424 134.204 41.6272 137.1 57.8107C138.633 66.3804 164.317 26.1415 181.183 16.824C195.62 8.84897 177.559 32.9878 174.283 50.7293C171.6 65.263 213 19.8076 213 19.8076"
                  stroke="#3830C9"
                  stroke-width="11"
                  stroke-linecap="round"
                />
              </motion.svg>
            </span>{" "}
            <span className="title-you">You!</span>
          </h2>
        </div>
        <div className="rules-container">
          <div className="rule">
            <div className="rule-header">
              <div className="rule-number-wrapper">
                <Image
                  className="rule-number-background"
                  src="/images/home/rules-section/number-background01.svg"
                  width={140}
                  height={120}
                />
                <div className="rule-number">
                  <Image
                    className="rule-number-flower"
                    src="/images/home/rules-section/flower.svg"
                    width={27}
                    height={27}
                  />
                  <h3>01</h3>
                </div>
              </div>
              <div className="rule-title-wrapper">
                <h2 className="rule-title">
                  Valuable
                  <br />
                  <span>
                    Reputation
                    <Image
                      src="/images/home/rules-section/reputation-star.svg"
                      width={42}
                      height={42}
                      className="reputation-star"
                    />{" "}
                  </span>
                </h2>
              </div>
            </div>
            <div className="rule-subtitle-wrapper">
              <h3 className="rule-subtitle">Good ones now pay you back!</h3>
            </div>
            <p className="rule-paragraph">
              A valuable asset, not just lip service! You earn it with actions
              you take. And in time, you’ll be able to use it not just at{" "}
              <span className="title-dema">
                d<span className="title-blue">e</span>ma
              </span>
              ! It lives in your wallet so it’s really yours & you choose who
              sees it!
            </p>
          </div>
          <div className="rule">
            <div className="rule-header">
              <div className="rule-number-wrapper">
                <Image
                  className="rule-number-background"
                  src="/images/home/rules-section/number-background01.svg"
                  width={140}
                  height={120}
                />
                <div className="rule-number">
                  <Image
                    className="rule-number-flower"
                    src="/images/home/rules-section/flower.svg"
                    width={27}
                    height={27}
                  />
                  <h3>01</h3>
                </div>
              </div>
              <div className="rule-title-wrapper">
                <h2 className="rule-title">
                  Valuable
                  <br />
                  <span>
                    Reputation
                    <Image
                      src="/images/home/rules-section/reputation-star.svg"
                      width={42}
                      height={42}
                      className="reputation-star"
                    />{" "}
                  </span>
                </h2>
              </div>
            </div>
            <div className="rule-subtitle-wrapper">
              <h3 className="rule-subtitle">Good ones now pay you back!</h3>
            </div>
            <p className="rule-paragraph">
              A valuable asset, not just lip service! You earn it with actions
              you take. And in time, you’ll be able to use it not just at{" "}
              <span className="title-dema">
                d<span className="title-blue">e</span>ma
              </span>
              ! It lives in your wallet so it’s really yours & you choose who
              sees it!
            </p>
          </div>
          <div className="rule">
            <div className="rule-header">
              <div className="rule-number-wrapper">
                <Image
                  className="rule-number-background"
                  src="/images/home/rules-section/number-background01.svg"
                  width={140}
                  height={120}
                />
                <div className="rule-number">
                  <Image
                    className="rule-number-flower"
                    src="/images/home/rules-section/flower.svg"
                    width={27}
                    height={27}
                  />
                  <h3>01</h3>
                </div>
              </div>
              <div className="rule-title-wrapper">
                <h2 className="rule-title">
                  Valuable
                  <br />
                  <span>
                    Reputation
                    <Image
                      src="/images/home/rules-section/reputation-star.svg"
                      width={42}
                      height={42}
                      className="reputation-star"
                    />{" "}
                  </span>
                </h2>
              </div>
            </div>
            <div className="rule-subtitle-wrapper">
              <h3 className="rule-subtitle">Good ones now pay you back!</h3>
            </div>
            <p className="rule-paragraph">
              A valuable asset, not just lip service! You earn it with actions
              you take. And in time, you’ll be able to use it not just at{" "}
              <span className="title-dema">
                d<span className="title-blue">e</span>ma
              </span>
              ! It lives in your wallet so it’s really yours & you choose who
              sees it!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;

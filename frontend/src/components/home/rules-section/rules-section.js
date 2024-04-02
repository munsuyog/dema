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
                  <h3>02</h3>
                </div>
              </div>
              <div className="rule-title-wrapper">
                <h2 className="rule-title">
                No Mystery Algorithms
                <svg width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="no-mystery-svg">
<path d="M25.8089 17.2877C25.383 17.0445 25.383 16.3164 25.8089 16.0733C28.8468 14.3366 30.2362 11.088 28.9127 8.81778C27.5891 6.54755 24.0539 6.11567 21.0167 7.85231C20.5903 8.09579 19.9546 7.73613 19.9546 7.24509C19.9546 3.77105 17.8087 0.955078 15.1624 0.955078C12.5162 0.955078 10.3703 3.77105 10.3703 7.24509C10.3703 7.73613 9.73454 8.09579 9.30812 7.85231C6.27099 6.11567 2.73572 6.54755 1.4122 8.81778C0.0886735 11.088 1.47887 14.3359 4.516 16.0733C4.94189 16.3164 4.94189 17.0445 4.516 17.2877C1.47811 19.0244 0.0886735 22.273 1.4122 24.5432C2.73572 26.8134 6.27099 27.2453 9.30812 25.5087C9.73454 25.2652 10.3703 25.6249 10.3703 26.1159C10.3703 29.5899 12.5162 32.4059 15.1624 32.4059C17.8087 32.4059 19.9546 29.5899 19.9546 26.1159C19.9546 25.6249 20.5906 25.2646 21.0167 25.5087C24.0546 27.2453 27.5899 26.8134 28.9127 24.5432C30.2362 22.2722 28.8468 19.0244 25.8089 17.2877Z" fill="#00B182" fill-opacity="0.8"/>
</svg>

                </h2>
              </div>
            </div>
            <div className="rule-subtitle-wrapper">
              <h3 className="rule-subtitle">View & control them anytime! <svg width="42" height="41" viewBox="0 0 42 41" fill="none" className="view-control-svg" xmlns="http://www.w3.org/2000/svg">
<path d="M21.1196 0.175781L24.6266 6.58709L30.7113 2.53992L30.8371 9.84662L38.1057 9.09075L34.8215 15.619L41.6088 18.3276L35.6669 22.5817L40.418 28.1343L33.1797 29.1399L34.8062 36.2644L27.9297 33.791L26.059 40.8552L21.1196 35.4695L16.1802 40.8552L14.3095 33.791L7.43301 36.2644L9.05949 29.1399L1.82122 28.1343L6.57232 22.5817L0.630466 18.3276L7.41776 15.619L4.13353 9.09075L11.4021 9.84662L11.5279 2.53992L17.6127 6.58709L21.1196 0.175781Z" fill="#E5DD00"/>
</svg>
</h3>
            </div>
            <p className="rule-paragraph">
            Not only can you always view the “formula”m you can steer steer the marketplace&apos;s course! Want to make changes? Create a ballot & let everyone vote.<strong><span className="title-dema">d<span className="title-blue">e</span>ma</span> truly belongs to its users!</strong>
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
                  <h3>03</h3>
                </div>
              </div>
              <div className="rule-title-wrapper">
                <h2 className="rule-title">
                Forever <br></br> Trust-less!
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
            <Image src="/images/home/rules-section/cloud-top-vector.png" width={350.33}  height={85.64} alt="vector" className="forever-trust-svg-top" />
            <Image src="/images/home/rules-section/heart-bottom.png" width={120}  height={106} alt="vector" className="forever-trust-svg-bottom" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;

"use client";
import React from "react";
import "./rules-section.css";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { rulesTitleSVG } from "@/constants/VectorSVGs";
import { useDevice } from "@/utils/DeviceContext";

const RulesSection = () => {
  const {device} = useDevice();
  console.log(device)
  const carouselRef = useRef(null);
  const spring = useSpring({
    config: { tension: 300, friction: 0, duration: 2000 },
  });

  const [activeRuleIndex, setActiveRuleIndex] = useState(0);

  const rules = [
    {
      title: "Valuable Reputation",
      subtitle: "Good ones now pay you back!",
      paragraph: `A valuable asset, not just lip service! You earn it with actions
    you take. And in time, you’ll be able to use it not just at
    <span class="title-dema">
      d<span class="title-blue">e</span>ma
    </span>
    ! It lives in your wallet so it’s really yours & you choose who
    sees it!`,
    },
    {
      title: "No Mystery Algorithms",
      subtitle: "View & control them anytime!",
      paragraph: `Not only can you always view the “formula”m you can steer steer the marketplace&apos;s course! Want to make changes? Create a ballot & let everyone vote.<strong><span class="title-dema">d<span class="title-blue">e</span>ma</span> truly belongs to its users!</strong>`,
    },
    {
      title: "Forever Trust-less!",
      subtitle: "Driven by code you can see!",
      paragraph: `Secure transactions executed flawlessly by smart contracts. Payment is locked upon purchase and released upon fulfillment, no intermediaries, just code.`,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRuleIndex((prevIndex) => (prevIndex === rules.length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="rules-section">
      <div className="rules-section fixed-width section-padding" ref={carouselRef}>
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
          {rules.map((rule, index) => (
            <div key={index} style={device != "desktop" ? {transform: activeRuleIndex == 0 ? "translateX(120%)" : activeRuleIndex == 1 ? "translateX(3%)" : "translateX(-103%)"} : {}} className={`rule ${index === activeRuleIndex ? 'active' : ''}`}>
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
                    <h3>0{index + 1}</h3>
                  </div>
                </div>
                <div className="rule-title-wrapper">
                  <h2 className="rule-title">
                    {rule.title}
                    <span
                      style={{
                        position: "absolute",
                        top: Math.random() * 50,
                        right: Math.random() * 30,
                        zIndex: -1,
                      }}
                      dangerouslySetInnerHTML={{
                        __html:
                          rulesTitleSVG[
                            Math.floor(Math.random() * rulesTitleSVG.length)
                          ],
                      }}
                    ></span>
                  </h2>
                </div>
              </div>
              <div className="rule-subtitle-wrapper">
                <h3 className="rule-subtitle">{rule.subtitle}</h3>
              </div>
              <p
                className="rule-paragraph"
                dangerouslySetInnerHTML={{ __html: rule.paragraph }}
              ></p>
              <Image
                src="/images/home/rules-section/cloud-top-vector.png"
                width={350.33}
                height={85.64}
                alt="vector"
                className="forever-trust-svg-top"
              />
              <Image
                src="/images/home/rules-section/heart-bottom.png"
                width={120}
                height={106}
                alt="vector"
                className="forever-trust-svg-bottom"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;

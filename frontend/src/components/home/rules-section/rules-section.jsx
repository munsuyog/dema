"use client";
import React from "react";
import "./rules-section.css";
import { useRef, useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { rulesTitleSVG } from "../../../constants/VectorSVGs";
import { useDevice } from "../../../utils/DeviceContext";
import {Swiper, SwiperSlide} from "swiper/react";
import { EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import StrikeText from "../../common/SVGs/StrikeText/StrikeText";

const RulesSection = () => {
  const {device} = useDevice();
  console.log(device)
  const carouselRef = useRef(null);
  const spring = useSpring({
    config: { tension: 300, friction: 0, duration: 2000 },
  });


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
  return (
    <section id="rules-section">
      <div className="rules-section section-padding fixed-width" ref={carouselRef}>
        <div className="section-title-wrapper">
          <h1 className="rules-section-title">
            Rules decided by{" "}
            <span className="title-operator">
              Operator{" "}
              <StrikeText style={device == 'mobile' ? {width: '100%', height: 'auto', bottom: 0} : {}} />
            </span>{" "}
            <span className="title-you">You!</span>
          </h1>
        </div>
      {device == "desktop" ? (
                <div className="rules-container">
                {rules.map((rule, index) => (
                  <div key={index} className="rule" >
                    <div className="rule-header">
                      <div className="rule-number-wrapper">
                        <img
                          className="rule-number-background"
                          src="/images/home/rules-section/number-background01.svg"
                          width={140}
                          height={120}
                        />
                        <div className="rule-number">
                          <img
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
                    <img
                      src="/images/home/rules-section/cloud-top-vector.png"
                      width={350.33}
                      height={85.64}
                      alt="vector"
                      className="forever-trust-svg-top"
                    />
                    <img
                      src="/images/home/rules-section/heart-bottom.png"
                      width={120}
                      height={106}
                      alt="vector"
                      className="forever-trust-svg-bottom"
                    />
                  </div>
                ))}
              </div>
      ) :
      (
        <Swiper effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]} className="mySwiper" autoplay={{delay: 2500}}>
        {rules.map((rule, index) => (
          <SwiperSlide key={index}>
            {({isActive}) => (
                          <div className={isActive ? "rule active" : "rule"}>
                          <div className="rule-header">
                            <div className="rule-number-wrapper">
                              <img
                                className="rule-number-background"
                                src="/images/home/rules-section/number-background01.svg"
                                width={140}
                                height={120}
                              />
                              <div className="rule-number">
                                <img
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
                          <img
                            src="/images/home/rules-section/cloud-top-vector.png"
                            width={350.33}
                            height={85.64}
                            alt="vector"
                            className="forever-trust-svg-top"
                          />
                          <img
                            src="/images/home/rules-section/heart-bottom.png"
                            width={120}
                            height={106}
                            alt="vector"
                            className="forever-trust-svg-bottom"
                          />
                          </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      )}
      </div>
    </section>
  );
};

export default RulesSection;

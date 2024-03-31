'use client'
import React, { useEffect } from "react";
import "./hero-section.css";
import Image from "next/image";
import ProductCarousel from "./product-carousel/product-carousel";
// import gsap from "gsap-trial";
// import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";
import anime from "animejs";
import {motion} from 'framer-motion'


const HeroSection = () => {

  useEffect(() => {
    // anime({
    //   targets: '.squiggle-home-anim',
    //   strokeDashoffset: [anime.setDashoffset, 0],
    //   easing: 'easeInOutSine',
    //   duration: 1500,
    //   delay: function(el, i) { return i * 250 },
    // })
    // // gsap.registerPlugin(DrawSVGPlugin)

    // // gsap.fromTo('.squiggle-home-anim', {
    // //   drawSVG: 0
    // // }, {
    // //   drawSVG: '100%',
    // //   duration: 1.4,
    // // })
  },[])

  return (
    <section id="hero-section" className="section-padding">
      <div className="hero-section-title-wrapper">
        <div className="hero-section-subtitle-wrapper">
          <h4 className="hero-section-subtitle">
            TRUSTED BY 100+ CRYPTO DEGENS{" "}
          </h4>
          <div className="subtitle-icons">
            <div className="subtitle-icon-wrapper">
              <div className="subtitle-icon-container">
                <Image
                  src="/images/home/hero-section/subtitle-icon01.svg"
                  width={16}
                  height={22}
                  alt="subtitle-icon01"
                />
              </div>
            </div>
            <div className="subtitle-icon-wrapper">
              <div className="subtitle-icon-container">
                <Image
                  src="/images/home/hero-section/subtitle-icon02.svg"
                  width={16}
                  height={22}
                  alt="subtitle-icon01"
                />
              </div>
            </div>
            <div className="subtitle-icon-wrapper">
              <div className="subtitle-icon-container">
                <Image
                  src="/images/home/hero-section/subtitle-icon03.svg"
                  width={16}
                  height={22}
                  alt="subtitle-icon01"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-section-title">
          <h2 className="hero-section-heading">
            Shop
            <span>
              <Image
                src="/images/home/hero-section/title-icon01.svg"
                width={56}
                height={56}
                className="title-cart-vector"
                alt="vector"
              />
            </span>{" "}
            <span className="title-anywhere">anywhere<span className="relative"><Image src="/images/home/hero-section/title-star.svg" width={22} height={25} className="title-star anywhere" alt="vector" /></span></span><br/> Get{" "}
            <span className="title-free-ownership">
            <motion.svg width="468" height="103" viewBox="0 0 468 103" fill="none" xmlns="http://www.w3.org/2000/svg" className="title-squiggle">
<motion.path  initial={{pathLength: 0}} whileInView={{pathLength: 1}} transition={{duration: 2}} viewport={{once: true}} className="squiggle-home-anim" d="M435.891 73.914C295.978 88.1643 13.646 103.396 3.61873 50.3189C-8.91536 -16.027 447.875 -7.35275 464.219 47.1716C475.095 83.4518 384.532 100.084 353.578 99.6072" stroke="#11C57A" stroke-width="5"/>
</motion.svg>

              <span className="title-free">Free </span>{" "}
              <span className="title-ownership"> Ownership</span>
            </span>
            <span>
              <Image src="/images/home/hero-section/title-icon02.svg" width={48} height={48} className="title-icon" alt="icon" />
            </span>
            <br/>
             {" "}Save {" "}
             <span>
              <Image src="/images/home/hero-section/title-icon03.svg" width={40} height={40} className="title-icon" alt="icon" />
            </span>
            {" "} on <span className="title-any">Any <span className="relative"><Image src="/images/home/hero-section/title-star.svg" width={28} height={32} className="title-star any1" alt="vector" /><Image src="/images/home/hero-section/title-star.svg" width={22} height={28} className="title-star any2" alt="vector" /></span> </span> Price.
          </h2>
        </div>
      </div>
      <ProductCarousel />
    </section>
  );
};

export default HeroSection;

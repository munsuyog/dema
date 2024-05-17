import React, { useRef, useEffect, useState } from "react";
import "./Roadmap.css";
import { animated } from "react-spring";
import CircleSquiggle from "../../../common/SVGs/CircleSquiggle/CircleSquiggle";
import { useDevice } from "../../../../contexts/DeviceContext";

const Roadmap = () => {
  const scrollContainerRef = useRef(null);
  const pathRef = useRef(null);
  const { device } = useDevice();

  useEffect(() => {
    class ScrollPathController {
      constructor(scrollContainer) {
        this.scrollContainer = scrollContainer;

        this.path = scrollContainer.querySelector(".scrollPath");
        console.log(this.path);
        this.offset = this.path.getAttribute("offset") ?? 0;

        this.elements = scrollContainer.querySelectorAll("[fadeOnScroll]");
        this.pathLength = this.initializePath();

        this.scrollObserver = new IntersectionObserver(
          this.scrollContainerCallback.bind(this),
          { root: null, rootMargin: "-9%", threshold: [0.01] }
        );

        this.scrollObserver.observe(this.scrollContainer.parentNode);

        this.calculateSpeedFactor();
      }

      initializePath() {
        let path = this.path;
        let dashArray = !path.hasAttribute("pathLength")
          ? (function () {
              path.setAttribute("pathLength", Math.ceil(path.getTotalLength()));
              return Math.ceil(path.getTotalLength());
            })()
          : path.getAttribute("pathLength");
        path.style.strokeDasharray = dashArray;
        path.style.strokeDashoffset = dashArray;
        path.style.strokeDasharray = dashArray;
        path.style.strokeDashoffset = parseFloat(dashArray);

        this.elements.forEach((element) => {
          element.style.opacity = 0;
          element.classList.add("opacityTransition");
        });
        return path.getAttribute("pathLength");
      }

      calculateSpeedFactor() {
        const containerHeight = this.scrollContainer.parentNode.clientHeight;
        const containerWidth = this.scrollContainer.parentNode.clientWidth;
        const aspectRatio = containerWidth / containerHeight;

        this.speedFactor = Math.min(1, Math.max(0.5, aspectRatio));
      }

      calculateDynamicHeight() {
        this.svgHeight = this.path.getBoundingClientRect().height;
        if (this.svgHeight >= innerHeight) {
          this.scrollContainer.parentNode.style.height =
            this.svgHeight * (device == "mobile" ? 1.2 : 3) + "px";
        } else {
          const dynamicHeight = this.svgHeight * (device == "mobile" ? 1.2 : 3);

          this.scrollContainer.parentNode.style.height = dynamicHeight + "px";
        }
      }

      scrollContainerCallback(entries) {
        entries.forEach((entry) => {
          this.calculateDynamicHeight();
          this.scrollContainer.classList.toggle("active", entry.isIntersecting);
        });
      }

      updatePathOnScroll() {
        if (this.scrollContainer.classList.contains("active")) {
          let scrollPercentage =
            (window.scrollY - this.scrollContainer.parentNode.offsetTop) /
            (this.scrollContainer.parentNode.scrollHeight - window.innerHeight);

          let scrollPos = Math.max(0, Math.min(1, scrollPercentage));

          if (scrollPercentage < 3.5 && scrollPercentage > -0.01) {
            let drawLength =
              this.pathLength * scrollPercentage * (device == "mobile" ? 1.1 : 1);

            this.path.style.strokeDashoffset = this.pathLength - drawLength;
          }

          if (
            scrollPos >
            this.path.getAttribute("stay") * 1 + this.offset * 1
          ) {
            let position =
              (Math.ceil(scrollPos * 100) -
                this.path.getAttribute("stay") * 100) *
              -1 *
              this.path.getAttribute("speed");

            this.scrollContainer.style.top = position + this.offset * 100 + "%";
          } else {
            this.scrollContainer.style.top = this.offset * 100 + "%";
          }
          this.elements.forEach((element) => {
            if (
              element.getAttribute("threshhold") * 1 <
              scrollPercentage * 0.75
            ) {
              element.style.opacity = 1;
            } else {
              element.style.opacity = 0;
            }
          });
        }
      }
    }

    let scrollPathController = document.querySelector(".scrollContainer");
    let controller = new ScrollPathController(scrollPathController);

    window.addEventListener("scroll", () => {
      console.log("Scroll Trigger");
      controller.updatePathOnScroll();
    });

    window.addEventListener("resize", () => {
      controller.calculateSpeedFactor();
    });
  });

  return (
    <div className="scrollContainer" ref={scrollContainerRef}>
      <h1
        className="roadmap-section-title absolute opacityTransition"
        fadeonscroll=""
        threshhold={device == "mobile" ? ".005" : ".08"}
        style={{ opacity: 0 }}
      >
        A marketplace roadmap <br />
        where <span className="title-green">you</span> are{" "}
        <span className="title-priority title-blue">
          Priority #1.
          <CircleSquiggle
            width={308}
            height={107}
            style={{ left: -15, top: -10, width: "110%" }}
            viewBox="0 0 308 93"
            d="M285.045 66.8485C194.363 78.0257 11.2703 88.9552 4.35686 43.2553C-4.28494 -13.8695 292.199 -2.91404 303.222 44.0786C310.558 75.3472 251.917 88.9498 231.828 88.3029"
            color="#22E393"
          />
        </span>
      </h1>
      <animated.div
        className="roadmap-card1 absolute opacityTransition"
        fadeonscroll=""
        threshhold={device == "mobile" ? ".1" : ".2"}
        style={{ opacity: 0 }}
      >
        <div>
          <div className="card-header">
            <img
              src="/images/home/roadmap-section/roadmap/card1-header.svg"
              width={93}
              height={93}
              alt="card1-header"
            />
            <h3>Your points give you more discounts</h3>
          </div>
          <p>
            Get <span className="title-more-bold">MORE </span> than{" "}
            <span className="title-dema">
              d<span className="title-blue">e</span>ma
            </span>{" "}
            ‘s base 5% discount & keep your points!
          </p>
        </div>
        <img
          src="/images/home/roadmap-section/roadmap/card1-image.svg"
          width={310}
          height={317}
          alt="card1-image"
          className="card1-image"
        />
      </animated.div>
      <animated.div
        className="roadmap-card2 absolute opacityTransition"
        fadeonscroll=""
        threshhold={device == "mobile" ? ".35" : ".5"}
        style={{ opacity: 0 }}
      >
        <div className="home-roadmap-card2">
          <div className="card-header">
            <img
              src="/images/home/roadmap-section/roadmap/card2-header.svg"
              width={93}
              height={93}
              alt="card1-header"
            />
            <h3>Buy 2+ of the same item & save more</h3>
          </div>
          <p>How? Sellers get fee incentives & earn ownership too! Win-Win!</p>
        </div>
        <img
          src="/images/home/roadmap-section/roadmap/card2-image.svg"
          width={400}
          height={410}
          alt="card1-image"
          className="card2-image"
        />
      </animated.div>
      <animated.div
        className="roadmap-card3 absolute opacityTransition"
        fadeonscroll=""
        threshhold={device == "mobile" ? ".55" : ".7"}
        style={{ opacity: 0 }}
      >
        <div className="home-roadmap-card2">
          <div className="card-header">
            <img
              src="/images/home/roadmap-section/roadmap/card3-header.svg"
              width={93}
              height={93}
              alt="card1-header"
            />
            <h3>More auto-pilot savings & features</h3>
          </div>
          <p>
            Reputation-based pricing, community vol discounts, “Get it nearby” &
            more
          </p>
        </div>
        <img
          src="/images/home/roadmap-section/roadmap/card3-image.svg"
          width={400}
          height={410}
          alt="card1-image"
          className="card3-image"
        />
      </animated.div>

      <svg
        width="100%"
        viewBox={device == "mobile" ? "0 0 375 1716" : "0 0 1401 759"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={
            device == "mobile"
              ? "M0 10.5C173.5 10.5 370 222 352 452C331.17 718.166 43.5 855 20 1032.5C4.44698 1149.97 198 1705 376.5 1705"
              : "M-0.497355 314.108C161.137 312.414 306.48 277.921 340.848 172.942 C421.562 -73.6029 67.4174 -2.69558 137.777 147.594 C194.065 267.826 757.504 164.784 991.006 95.0645 C1340.99 24.7472 1385.38 340.643 1385.38 340.643 C1426.6 520.277 1191.31 844.019 765.691 720.179 C421.684 620.085 174.601 674.957 -1.01706 722.458"
          }
          stroke="url(#paint0_linear_1_6159)"
          strokeOpacity="0.8"
          strokeWidth="21"
          speed="2"
          stay=".7"
          className="scrollPath"
          style={{ strokeDasharray: "4500" }}
          ref={pathRef}
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_6159"
            x1="-27.74"
            y1="303.752"
            x2="143.926"
            y2="664.643"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C9BBFF"></stop>
            <stop offset="1" stopColor="#D3C8FF" stopOpacity="0.3"></stop>
          </linearGradient>
        </defs>
      </svg>
      <img
        src="/images/home/roadmap-section/roadmap/star-dark.svg"
        width={51}
        height={58}
        alt="roadmap-star-dark-vector"
        className="roadmap-star-dark-vector"
      />
      <img
        src="/images/home/roadmap-section/roadmap/triangle-vector.svg"
        width={33}
        height={25}
        alt="roadmap-triangle-vector"
        className="roadmap-triangle-vector"
      />
      <img
        src="/images/home/roadmap-section/roadmap/star-light.svg"
        width={33}
        height={25}
        alt="roadmap-triangle-vector"
        className="roadmap-star-light-bottom"
      />
    </div>
  );
};

export default Roadmap;

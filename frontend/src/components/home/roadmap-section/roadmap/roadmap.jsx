import React, { useRef, useEffect, useState } from "react";
import "./roadmap.css";
import { animated, useSpring } from "react-spring";

const Roadmap = () => {
  const scrollContainerRef = useRef(null);
  const pathRef = useRef(null);
  const [isMobile, setMobile] = useState(false);
  // const mobile = useMediaQuery(('max-width: 480px'));

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const isMobile = mediaQuery.matches;

    // Your existing code for ScrollPathController and event listeners

    // Update logic based on mobile or desktop
    if (isMobile) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    class ScrollPathController {
      constructor(scrollContainer) {
        this.scrollContainer = scrollContainer;

        this.path = scrollContainer.querySelector(".scrollPath");
        console.log(this.path);
        this.offset = this.path.getAttribute("offset") ?? 0;

        this.elements = scrollContainer.querySelectorAll("[fadeOnScroll]");
        this.pathLength = this.initializePath();

        // Setup Intersection Observer for scroll container
        this.scrollObserver = new IntersectionObserver(
          this.scrollContainerCallback.bind(this),
          { root: null, rootMargin: "-9%", threshold: [0.01] }
        );

        this.scrollObserver.observe(this.scrollContainer.parentNode);

        //get all html Elements that need to be implemented

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

        // Remove 'px' unit from stroke-dasharray and stroke-dashoffset
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

        // Adjust the speed based on the aspect ratio or any other criteria
        // You may want to experiment with the formula based on your specific needs
        this.speedFactor = Math.min(1, Math.max(0.5, aspectRatio));
      }

      calculateDynamicHeight() {
        this.svgHeight = this.path.getBoundingClientRect().height;
        if (this.svgHeight >= innerHeight) {
          this.scrollContainer.parentNode.style.height =
            this.svgHeight * (isMobile ? 1.2 : 3) + "px";
        } else {
          const dynamicHeight = this.svgHeight * (isMobile ? 1.2 : 3);

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

          // Ensure scrollPercentage is within the valid range [0, 1]
          let scrollPos = Math.max(0, Math.min(1, scrollPercentage));

          if (scrollPercentage < 3.5 && scrollPercentage > -0.01) {
            let drawLength = this.pathLength * scrollPercentage * (isMobile ? 1 : 1);

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

          // Implement additional logic for fading in elements based on scroll path length
          // fade in Element
          if (scrollPercentage >= 0.6) {
            this.scrollContainer.style.top = "-300px";
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

        // Add other methods and logic as needed
      }
    }

    // Create instances of ScrollPathController for each scroll container
    let scrollPathController = document.querySelector(".scrollContainer");
    let controller = new ScrollPathController(scrollPathController);
    console.log(scrollPathController);

    // Add a scroll event listener to update the scroll path on scroll
    window.addEventListener("scroll", () => {
      console.log("Scroll Trigger");
      controller.updatePathOnScroll();
    });

    window.addEventListener("resize", () => {
      controller.calculateSpeedFactor();
    });
  });

  const pathSpring = useSpring({
    strokeDashoffset: 0,
    from: { strokeDashoffset: 4500 },
    config: { tension: 300, friction: 10, duration: 2000 },
  });

  const cardSpring = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
    delay: 500, // Adjust the delay as needed for the desired effect
  });
  return (
    <div className="scrollContainer" ref={scrollContainerRef}>
      <animated.div
        className="roadmap-card1 absolute opacityTransition"
        fadeonscroll=""
        threshhold={isMobile ? ".03" : ".1"}
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
        threshhold={isMobile ? ".35" : ".45"}
        style={{ opacity: 0 }}
      >
        <div className="card2">
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
        threshhold={isMobile ? ".55" : ".7"}
        style={{ opacity: 0 }}
      >
        <div className="card2">
          <div className="card-header">
            <img
              src="/images/home/roadmap-section/roadmap/card3-header.svg"
              width={93}
              height={93}
              alt="card1-header"
            />
            <h3>More auto-pilot savings & features</h3>
          </div>
          <p>Reputation-based pricing, community vol discounts, “Get it nearby” & more</p>
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
        viewBox={isMobile ? "0 0 375 1716" : "0 0 1401 759"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <animated.path
          d={ isMobile ? "M0 10.5C173.5 10.5 370 222 352 452C331.17 718.166 43.5 855 20 1032.5C4.44698 1149.97 198 1705 376.5 1705" : 
            "M-0.497355 314.108C161.137 312.414 306.48 277.921 340.848 172.942 C421.562 -73.6029 67.4174 -2.69558 137.777 147.594 C194.065 267.826 757.504 164.784 991.006 95.0645 C1340.99 24.7472 1385.38 340.643 1385.38 340.643 C1426.6 520.277 1191.31 844.019 765.691 720.179 C421.684 620.085 174.601 674.957 -1.01706 722.458"
          }
          stroke="url(#paint0_linear_1_6159)"
          strokeOpacity="0.8"
          strokeWidth="21"
          className="scrollPath"
          style={{ strokeDasharray: "4500", ...pathSpring }}
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

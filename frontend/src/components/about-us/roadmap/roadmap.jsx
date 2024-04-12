import React, { useRef, useEffect, useState } from "react";
import "./roadmap.css";
import { animated, useSpring } from "react-spring";
import ButtonPrimary from "../../../components/common/button-primary/button-primary";
import { useDevice } from "../../../utils/DeviceContext";

const Roadmap = () => {
  const scrollContainerRef = useRef(null);
  const pathRef = useRef(null);
  const [isMobile, setMobile] = useState(false);
  const {device} = useDevice();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const isMobile = mediaQuery.matches;

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
          { root: null, rootMargin: "-20%", threshold: [0.001] }
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
        this.speedFactor = Math.min(1, Math.max(0.7, aspectRatio));
      }

      calculateDynamicHeight() {
        this.svgHeight = this.path.getBoundingClientRect().height;
        if (this.svgHeight >= innerHeight) {
          this.scrollContainer.parentNode.style.height =
            this.svgHeight * (isMobile ? 1 : 1.7) + "px";
        } else {
          const dynamicHeight = this.svgHeight * (isMobile ? 1 : 1.7);

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
            let drawLength = this.pathLength * scrollPercentage * (isMobile ? 1.1 : 1);

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
          // if (scrollPercentage >= 0.5) {
          //   this.scrollContainer.style.top = "-500px";
          // }
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
    from: { strokeDashoffset: 7500 },
    config: { tension: 300, friction: 10, duration: 2000 },
  });

  const cardSpring = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
    delay: 500, // Adjust the delay as needed for the desired effect
  });
  return (
    <div className="scroll-div">
      <div className="scrollContainer" ref={scrollContainerRef}>
      <animated.div
        className="roadmap-about-card1 absolute opacityTransition"
        fadeonscroll=""
        threshhold={isMobile ? ".03" : ".02"}
        style={{ opacity: 0 }}
      >
        <img src="/images/about/roadmap/card1.svg" width={500} height={540} alt="card1" className="roadmap-card-image" />
        <div>
          <h2>Why did we <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="217" height="17" viewBox="0 0 217 17" fill="none" className="roadmap-title-arrow">
            <path d="M216 8.32432L100.902 2L166.753 15L0.999998 2" stroke="#3830C9" stroke-width="4"></path>
          </svg>
          start <span className="title-dema">d<span className="title-blue">e</span>ma</span>?
          </span>
          </h2>
          <p>As shoppers and sellers, we were close enough but we were still outsiders in the world of e-commerce. What we saw was a vast & growing space getting increasingly less efficient, creating higher fees, prices & barriers to entry with fewer folks in control. We figured if we eliminated human bias by creating a marketplace driven by transparent code describing the rules the community of shoppers & sellers wanted, we’d all be better off.</p>
          <ButtonPrimary text="Learn More" link="/learn" fontSize={device != "desktop" ? "12px" : "14px"} />

        </div>
      </animated.div>
      <animated.div
        className="roadmap-about-card2 absolute opacityTransition"
        fadeonscroll=""
        threshhold={isMobile ? "0.3" : ".5"}
        style={{ opacity: 0 }}
      >
        <div>
          <div className="roadmap-about-card2-title">
            <h2><span className="title-blue">Decentralize!</span> Or be sure <br/> promises will break again!</h2>
            <img src="/images/about/roadmap/emoji.png" width={86} height={95} alt="card2" />
          </div>
          <p>We’re old & young enough to know about Sears’ ‘70s heyday, Walmart’s ‘90s rise to dominance & others tha have since broken to be replaced with the new promises of eBay, Amazon, Etsy, etc... Still,the cycle is already repeating itself. We studied the root cause going as far back as the Grand Bazaar of Istanbul. 
<br/>It’s the lack of user control. Not even a representative is acceptable. </p>
        </div>
        <img src="/images/about/roadmap/card2.svg" width={500} height={540} alt="card2" className="roadmap-card-image" />
      </animated.div>
      <animated.div
        className="roadmap-about-card3 absolute opacityTransition"
        fadeonscroll=""
        threshhold={isMobile ? ".55" : "0.7"}
        style={{ opacity: 0 }}
      >
        <img src="/images/about/roadmap/card3.svg" width={500} height={540} alt="card3" className="roadmap-card-image" />
        <div>
            <h2>Our journey to near no-change<br/>UX, low cost & <span className="title-blue">day 1 incentives?</span></h2>
            <p>While we knew of the rising prices, fees and ad costs, ~300 sellers & shoppers interviews later, they told  us they didn’t want to set up new accounts, new storefronts or get used to new policies. They wanted lower fees & discounts <b>starting day one</b>. We’re users so we understood! Some work later & it turns out we could deliver and lower prices/fees over time... So we got to building!</p>
            <ButtonPrimary text="Learn More" link="/learn" fontSize={device != "desktop" ? "12px" : "14px"} />
        </div>
      </animated.div>
      <svg
        width="90%"
        viewBox={isMobile ? "0 0 372 1901" : "0 0 1402 1714"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <animated.path
          d={ isMobile ? "M0 4C85.5 9.01798 306.11 339.29 362.5 167.759C389.075 86.9215 311 6.01758 305 88.5176C299 171.018 363.878 84.2078 353.47 739.241C338.779 1663.85 258.442 2005.55 -1.5 1868.02" : 
            "M-62 19C288.333 126.333 1124.44 317.632 1343 164.855C1446 92.8555 1365 -11.6443 1283 15.3545C1283 15.3545 1071.5 69.3551 1308 673.855C1544.5 1278.36 985 1808 -22.5 1685.5"
          }
          stroke="url(#paint0_linear_1_6159)"
          strokeOpacity="0.8"
          strokeWidth={isMobile ? "14" : "21"}
          className="scrollPath"
          style={{ strokeDasharray: "7500", ...pathSpring }}
          pathLength={7500}
          speed={0.5}
          stay={0.7}
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
    </div>
    </div>
  );
};

export default Roadmap;

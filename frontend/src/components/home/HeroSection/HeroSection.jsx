import React from "react";
import "./HeroSection.css";
import ProductCarousel from "./ProductCarousel/ProductCarousel";
import { homeSVGs } from "../../../constants/VectorSVGs";
import CircleSquiggle from "../../common/SVGs/CircleSquiggle/CircleSquiggle";
import ButtonPrimary from "../../common/ButtonPrimary/ButtonPrimary";
import { useDevice } from "../../../contexts/DeviceContext";

const HeroSection = () => {
  const { device } = useDevice();
  return (
    <section id="hero-section" className="section-padding">
      <div className="hero-section fixed-width">
        <div className="hero-section-title-wrapper">
          <div className="hero-section-subtitle-wrapper">
            <h4 className="hero-section-subtitle">
              TRUSTED BY 100+ CRYPTO DEGENS{" "}
            </h4>
            <div className="subtitle-icons">
              <div className="subtitle-icon-wrapper">
                <div className="subtitle-icon-container">
                  <img
                    src="/images/home/hero-section/subtitle-icon01.svg"
                    width={16}
                    height={22}
                    alt="subtitle-icon01"
                  />
                </div>
              </div>
              <div className="subtitle-icon-wrapper">
                <div className="subtitle-icon-container">
                  <img
                    src="/images/home/hero-section/subtitle-icon02.svg"
                    width={16}
                    height={22}
                    alt="subtitle-icon01"
                  />
                </div>
              </div>
              <div className="subtitle-icon-wrapper">
                <div className="subtitle-icon-container">
                  <img
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
            <h1 className="hero-section-heading">
              Shop
              <span
                className="title-cart-vector"
                dangerouslySetInnerHTML={{ __html: homeSVGs.heroSection.cart }}
              ></span>{" "}
              <span className="title-anywhere">
                anywhere
                <span className="relative">
                  <img
                    src="/images/home/hero-section/title-star.svg"
                    width={22}
                    height={25}
                    className="title-star anywhere"
                    alt="vector"
                  />
                </span>
              </span>
              <br /> Get{" "}
              <span className="title-free-ownership">
                <CircleSquiggle
                  color="#11C57A"
                  style={{ width: "110%", height: "auto", left: -15, top: -10 }}
                />
                <strong>
                  <span className="title-free">Free </span>{" "}
                  <span className="title-ownership"> Ownership</span>
                </strong>
              </span>
              <span
                className="title-icon"
                dangerouslySetInnerHTML={{ __html: homeSVGs.heroSection.power }}
              ></span>
              <br /> Save{" "}
              <span
                className="title-icon"
                dangerouslySetInnerHTML={{ __html: homeSVGs.heroSection.key }}
              ></span>{" "}
              on{" "}
              <span className="title-any">
                Any
                <span className="relative">
                  <img
                    src="/images/home/hero-section/title-star.svg"
                    width={28}
                    height={32}
                    className="title-star any1"
                    alt="vector"
                  />
                  <img
                    src="/images/home/hero-section/title-star.svg"
                    width={22}
                    height={28}
                    className="title-star any2"
                    alt="vector"
                  />
                </span>{" "}
              </span>{" "}
              Price.
            </h1>
          </div>
          <ButtonPrimary
            bgColor="var(--secondary-500)"
            color="#fff"
            text="Try It"
            fontSize={device == "mobile" ? "14px" : "16px"}
            width={device == "mobile" ? "30%" : "15%"}
          />
        </div>
        <ProductCarousel />
      </div>
    </section>
  );
};

export default HeroSection;

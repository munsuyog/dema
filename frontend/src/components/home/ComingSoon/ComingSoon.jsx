import React from "react";
import "./ComingSoon.css";
import GradientArrow from "../../common/SVGs/GradientArrow/GradientArrow";

const ComingSoon = () => {
  return (
    <section id="coming-soon">
      <div className="fixed-width">
        <div className="shop-anywhere">
          <div className="shop-anywhere-flex">
            <div className="shop-anywhere-container">
              <div className="shop-anywhere-wrapper">
                <div className="shop-anywhere-box">
                  <span>Shop Anywhere</span>
                </div>
              </div>
              <span className="shop-anywhere-squiggle">
              <GradientArrow />
              </span>
              <div className="shop-anywhere-logo-active">
                <img
                  src="/images/home/coming-soon/amazon-logo.svg"
                  width={140}
                  height={42}
                  alt="amazon-logo"
                />
              </div>
            </div>
            <div className="shop-anywhere-logos-wrapper">
              <div className="coming-soon-title-wrapper">
                <div className="coming-soon-title">
                  <span className="gradient-text">Coming Soon</span>
                </div>
              </div>
              <div className="shop-anywhere-logos">
                <img
                  src="/images/home/coming-soon/walmart-logo.svg"
                  width={140}
                  height={42}
                  alt="walmart"
                />
                <img
                  src="/images/home/coming-soon/ebay-logo.svg"
                  width={140}
                  height={42}
                  alt="ebay"
                />
                <img
                  src="/images/home/coming-soon/temu-logo.svg"
                  width={60}
                  height={60}
                  alt="temu"
                />
                <img
                  src="/images/home/coming-soon/etsy-logo.svg"
                  width={140}
                  height={42}
                  alt="etsy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;

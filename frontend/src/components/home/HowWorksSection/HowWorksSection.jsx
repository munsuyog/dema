import React, { useState } from "react";
import "./HowWorksSection.css";
import VideoComponent from "../../common/VideoComponent/VideoComponent";

const HowWorksSection = () => {
  const [highlightedFeatureIndex, setHighlightedFeatureIndex] = useState(0);
  const features = [
    {
      id: 1,
      title: "Download the app",
      video: (
        <VideoComponent
          onEnded={() => {
            setHighlightedFeatureIndex((prevIndex) => (prevIndex + 1) % 4);
          }}
          url={"/images/home/free-ownership/video1.webm"}
        />
      ),
    },
    {
      id: 2,
      title: "Browse & Add To Cart",
      video: (
        <VideoComponent
          onEnded={() => {
            setHighlightedFeatureIndex((prevIndex) => (prevIndex + 1) % 4);
          }}
          url={"/images/home/free-ownership/video2.webm"}
        />
      ),
    },
    {
      id: 3,
      title: "Checkout & Pay",
      video: (
        <VideoComponent
          onEnded={() => {
            setHighlightedFeatureIndex((prevIndex) => (prevIndex + 1) % 4);
          }}
          url={"/images/home/free-ownership/video3.webm"}
        />
      ),
    },
    {
      id: 4,
      title: "Save & get free ownership",
      video: (
        <VideoComponent
          onEnded={() => {
            setHighlightedFeatureIndex((prevIndex) => (prevIndex + 1) % 4);
          }}
          url={"/images/home/free-ownership/video1.webm"}
        />
      ),
    },
  ];

  return (
    <section id="how-works-section">
      <div className="how-works-section section-padding fixed-width">
        <div className="section-title-wrapper">
          <h1 className="how-works-title">How does it work?</h1>
          <img
            src="/images/home/how-works-section/question-mark.svg"
            width={45}
            height={45}
            className="question-mark"
          />
          <img
            src="/images/home/how-works-section/arrow.svg"
            width={200}
            height={200}
            className="arrow-vector"
          />
        </div>
        <div className="how-works-container">
          {features.map((feature, index) => (
            <div
              className="how-works-image-container"
              style={
                highlightedFeatureIndex != index ? { display: "none" } : {}
              }
            >
              {feature.video}
            </div>
          ))}
          <div className="how-works-features-wrapper">
            <div className="how-works-features">
              <div className="how-works-features-container">
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    className={`how-works-feature ${
                      highlightedFeatureIndex === index ? "highlight" : ""
                    }`}
                    onClick={() => setHighlightedFeatureIndex(index)}
                  >
                    <div className="how-works-feature-progress"></div>
                    <h2>{feature.title}</h2>
                    {index === 2 && (
                      <img
                        src="/images/home/how-works-section/signup-squiggle.svg"
                        width={67}
                        height={54}
                        className="signup-squiggle"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <img
              src="/images/home/how-works-section/no-signup-squiggle.svg"
              width={150}
              height={90}
              className="no-signup-squiggle"
            />
          </div>
        </div>
        <img
          src="/images/home/how-works-section/triangle-vector.svg"
          width={71}
          height={71}
          className="triangle-vector"
        />
        <img
          src="/images/home/how-works-section/flower.svg"
          width={42}
          height={42}
          className="how-works-flower"
        />
      </div>
    </section>
  );
};

export default HowWorksSection;

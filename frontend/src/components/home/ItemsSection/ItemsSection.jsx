import React, { useEffect, useState } from "react";
import "./ItemsSection.css";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import { useDevice } from "../../../contexts/DeviceContext";

const ItemsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [itemIndex, setItemIndex] = useState(0);
  const [itemText, setItemText] = useState(null);
  const { device } = useDevice();

  const items = [
    "Electronics",
    "Home & Kitchen",
    "Beauty & Personal Care",
    "Books",
    "Toys & Games",
    ">100M Items",
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setItemIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [itemIndex, items.length]);

  useEffect(() => {
    setItemText(items[itemIndex]);
    const textTimeoutId = setTimeout(() => {
      setItemText(null);
    }, 2000);

    return () => clearTimeout(textTimeoutId);
  }, [itemIndex, items]);

  return (
    <section id="items-section" ref={ref}>
      <div className="items-section section-padding fixed-width">
        <div className="items-wrapper">
          <img
            src="/images/home/items-section/heart.svg"
            width={567}
            height={524}
            className="heart-image"
          />
          <img
            src="/images/home/items-section/flower01.svg"
            width={42}
            height={42}
            className="flower-1"
          />
          <img
            src="/images/home/items-section/flower02.svg"
            width={40}
            height={40}
            className="flower-2"
          />
          <div className="items-image-wrapper">
            <video
              src="/images/home/items-section/items-section.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload
              height={485}
              className="items-image"
            ></video>
          </div>
          <div>
            <div className="items-insights">
              {inView && (
                <TypeAnimation
                  sequence={[
                    "Electronics",
                    2000,
                    "Home & Kitchen",
                    2000,
                    "Beauty & Personal Care",
                    2000,
                    "Books",
                    2000,
                    "Toys & Games",
                    2000,
                    "> 100M Items",
                    2000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={false}
                  speed={200}
                  style={{
                    fontWeight: 700,
                    display: "inline-block",
                    fontFamily: "var(--font-open-sans)",
                    fontSize: device == "mobile" ? 20 : 30,
                    textAlign: "center",
                    zIndex: 1,
                    position: "relative",
                  }}
                />
              )}
              <div className="top-line"></div>
              <div className="bottom-line"></div>
              <div className="circle-top-left"></div>
              <div className="circle-top-right"></div>
              <div className="circle-bottom-left"></div>
              <div className="circle-bottom-right"></div>
              <img
                src="/images/home/items-section/vector01.svg"
                width={26}
                height={30}
                className="vector"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemsSection;

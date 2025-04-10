import React from "react";
import "./TryDemaCard.css";
import ButtonPlatform from "../../common/ButtonPlatform/ButtonPlatform";

const TryDemaCard = () => {
  return (
    <section id="try-dema-card">
      <div className="try-dema-card section-padding fixed-width">
      <div className="try-dema-card-title-section">
        <h1>
          Try Dema - It&apos;s Free
          <br />
          Card
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore{" "}
        </p>
        <div className="try-dema-card-btn-wrapper">
          <ButtonPlatform platform="ios" />
          <ButtonPlatform platform="android" />
        </div>
      </div>
      <div className="try-dema-card-image-wrapper">
        <img
          className="try-dema-card-image"
          src="/images/blog/try-dema-card/iphone.png"
          width={372}
          height={671}
          alt="iphone"
        />
        <svg width="42" height="48" viewBox="0 0 42 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="try-dema-card-image-blue-vector">
<path d="M36.6882 25.2864C36.0535 24.919 35.4042 24.6185 34.7514 24.3792C35.4042 24.1399 36.0535 23.8394 36.6882 23.472C41.1647 20.8774 43.2121 16.0238 41.2618 12.632C39.3115 9.24016 34.1021 8.59491 29.6267 11.1895C28.992 11.5569 28.4082 11.972 27.8763 12.4199C27.996 11.7327 28.0615 11.0183 28.0615 10.2823C28.0615 5.09195 24.8995 0.884766 21 0.884766C17.1005 0.884766 13.9385 5.09195 13.9385 10.2823C13.9385 11.0183 14.004 11.7327 14.1237 12.4199C13.5918 11.972 13.008 11.5569 12.3733 11.1895C7.89791 8.59491 2.68846 9.24016 0.738169 12.632C-1.21213 16.0238 0.836418 20.8762 5.31182 23.472C5.94648 23.8394 6.59583 24.1399 7.24856 24.3792C6.59583 24.6185 5.94648 24.919 5.31182 25.2864C0.835289 27.881 -1.21213 32.7346 0.738169 36.1264C2.68846 39.5183 7.89791 40.1635 12.3733 37.5689C13.008 37.2015 13.5918 36.7864 14.1237 36.3385C14.004 37.0257 13.9385 37.7401 13.9385 38.4761C13.9385 43.6665 17.1005 47.8736 21 47.8736C24.8995 47.8736 28.0615 43.6665 28.0615 38.4761C28.0615 37.7401 27.996 37.0257 27.8763 36.3385C28.4082 36.7864 28.992 37.2003 29.6267 37.5689C34.1032 40.1635 39.3127 39.5183 41.2618 36.1264C43.2121 32.7335 41.1647 27.881 36.6882 25.2864Z" fill="#7E77FF" fill-opacity="0.5"/>
</svg>
<svg
        width="72"
        height="73"
        viewBox="0 0 72 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="try-dema-card-image-triangle-vector"
      >
        <path
          d="M5.20402 40.6537C2.97291 40.054 2.22809 37.2682 3.86302 35.6382L34.7519 4.8416C36.3868 3.21155 39.176 3.95895 39.7737 6.18725L51.0762 48.3253C51.6744 50.5557 49.6285 52.5955 47.3953 51.9952L5.20402 40.6537ZM38.7997 10.2995C38.204 8.0692 35.4129 7.31972 33.777 8.95077L7.98022 34.6705C6.34428 36.3016 7.09118 39.0891 9.3243 39.6869L44.5056 49.104C46.7367 49.7012 48.7793 47.6646 48.1842 45.4364L38.7997 10.2995Z"
          fill="#857EFF"
        />
        <path
          d="M29.7145 27.0538C30.3149 29.2953 28.2463 31.3387 26.0076 30.7155L15.475 27.7835L4.99301 24.9257C2.76865 24.3193 2.03079 21.5397 3.66236 19.913L11.2701 12.328L19.0003 4.62085C20.6319 2.99416 23.415 3.7346 24.0194 5.95616L26.8676 16.425L29.7145 27.0538Z"
          fill="#1EBEC4"
        />
      </svg>

      </div>
      <svg
        width="48"
        height="49"
        viewBox="0 0 48 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="try-dema-card-flower-vector"
      >
        <g clip-path="url(#clip0_2891_5673)">
          <path
            d="M23.0352 3.18945L29.9921 4.1239L24.3763 45.7979L17.4194 44.8635L23.0352 3.18945Z"
            fill="#22E393"
          />
          <path
            d="M8.14284 9.90365L13.7242 5.65296L39.2699 39.0864L33.6885 43.3371L8.14284 9.90365Z"
            fill="#22E393"
          />
          <path
            d="M42.5791 14.529L38.3215 8.95682L4.83361 34.4609L9.09122 40.0332L42.5791 14.529Z"
            fill="#22E393"
          />
          <path
            d="M2.36677 25.1625L3.30273 18.2168L45.0447 23.8235L44.1087 30.7691L2.36677 25.1625Z"
            fill="#22E393"
          />
        </g>
        <defs>
          <clipPath id="clip0_2891_5673">
            <rect
              width="42.3159"
              height="42.2495"
              fill="white"
              transform="matrix(0.9911 0.133122 -0.133548 0.991042 5.64258 0.853516)"
            />
          </clipPath>
        </defs>
      </svg>
      <svg
        width="72"
        height="73"
        viewBox="0 0 72 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="try-dema-card-triangle-vector"
      >
        <path
          d="M5.20402 40.6537C2.97291 40.054 2.22809 37.2682 3.86302 35.6382L34.7519 4.8416C36.3868 3.21155 39.176 3.95895 39.7737 6.18725L51.0762 48.3253C51.6744 50.5557 49.6285 52.5955 47.3953 51.9952L5.20402 40.6537ZM38.7997 10.2995C38.204 8.0692 35.4129 7.31972 33.777 8.95077L7.98022 34.6705C6.34428 36.3016 7.09118 39.0891 9.3243 39.6869L44.5056 49.104C46.7367 49.7012 48.7793 47.6646 48.1842 45.4364L38.7997 10.2995Z"
          fill="#857EFF"
        />
        <path
          d="M29.7145 27.0538C30.3149 29.2953 28.2463 31.3387 26.0076 30.7155L15.475 27.7835L4.99301 24.9257C2.76865 24.3193 2.03079 21.5397 3.66236 19.913L11.2701 12.328L19.0003 4.62085C20.6319 2.99416 23.415 3.7346 24.0194 5.95616L26.8676 16.425L29.7145 27.0538Z"
          fill="#1EBEC4"
        />
      </svg>
      <svg
        width="29"
        height="33"
        viewBox="0 0 29 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="try-dema-card-yellow-vector"
      >
        <path
          d="M25.3323 17.5905C24.8941 17.3403 24.4457 17.1357 23.995 16.9728C24.4457 16.8099 24.8941 16.6053 25.3323 16.3551C28.4233 14.5886 29.8369 11.284 28.4903 8.97467C27.1437 6.66534 23.5467 6.22602 20.4565 7.99257C20.0183 8.24273 19.6152 8.52531 19.2479 8.83029C19.3306 8.3624 19.3758 7.87598 19.3758 7.37489C19.3758 3.84103 17.1925 0.976562 14.5 0.976562C11.8075 0.976562 9.62421 3.84103 9.62421 7.37489C9.62421 7.87598 9.66944 8.3624 9.75209 8.83029C9.38483 8.52531 8.98169 8.24273 8.54347 7.99257C5.45332 6.22602 1.85632 6.66534 0.509688 8.97467C-0.836943 11.284 0.577527 14.5878 3.66768 16.3551C4.10591 16.6053 4.55426 16.8099 5.00496 16.9728C4.55426 17.1357 4.10591 17.3403 3.66768 17.5905C0.576747 19.357 -0.836943 22.6616 0.509688 24.9709C1.85632 27.2802 5.45332 27.7195 8.54347 25.953C8.98169 25.7028 9.38483 25.4202 9.75209 25.1153C9.66944 25.5832 9.62421 26.0696 9.62421 26.5707C9.62421 30.1045 11.8075 32.969 14.5 32.969C17.1925 32.969 19.3758 30.1045 19.3758 26.5707C19.3758 26.0696 19.3306 25.5832 19.2479 25.1153C19.6152 25.4202 20.0183 25.7021 20.4565 25.953C23.5475 27.7195 27.1445 27.2802 28.4903 24.9709C29.8369 22.6608 28.4233 19.357 25.3323 17.5905Z"
          fill="#E5DD00"
        />
      </svg>
      </div>
    </section>
  );
};

export default TryDemaCard;

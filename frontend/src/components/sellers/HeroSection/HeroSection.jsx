import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import './HeroSection.css'

export default function Bannermain() {
  const videoRef = useRef()
  useEffect(() => {
    videoRef.current.play();
  }, []);
  return (
    <section className="main-banner">
      <div className="d-flex bannerboxmain">
        <div className="bannerdetails">
          <h2 className="sellers-hero-title">
            <span>
              Sell to{" "}
              <img
                src="/images/sellers/hero-section/amazon.png"
                className="sellers-hero-amazon-icon"
                alt="amazon"
              />
              customers
            </span>
            for 2-3x higher margins!
          </h2>
          <div className="bannerdetailsslider">
            <div class="carouselitem">
              <div className="bannercontentscrolling">
                <p>
                  <strong>No</strong> stores to manage.
                </p>
                <p>
                  Up to <strong>70%</strong> lower selling fees!
                </p>
                {/* <p> Up to <strong>20%</strong> higher discounts!</p>
                <p><strong>No</strong> Listing or Monthly fees.</p>
                <p><strong>No</strong> Advertising fees.</p> */}
                <p>
                  <strong>No</strong> other fees. Period!
                </p>
                <p>
                  <strong>No</strong> stores to manage.
                </p>
              </div>
            </div>

            {/* <div className="processing-fees d-flex">
              <span>No</span>
              <div className="processing-feesstap">
                <p>Listing or Monthly fees.</p>
                <p>Advertising fees.</p>
                <p>Other fees. Period!</p>
                <p>Stores to manage.</p>
              </div>
            </div> */}
          </div>
          <span className="point1"></span>
          <span className="point2"></span>
          <span className="point3"></span>
          <span className="point4"></span>
        </div>

        <div className="banner-pic">
          <figure>
            <video ref={videoRef} controls={false} loop autoplay="autoplay" muted playsInline>
              <source
                src={
                  "https://demawebsite.s3.us-east-2.amazonaws.com/Homepage-Animation.mp4"
                }
                type="video/mp4"
              />
            </video>
            {/* https://demawebsite.s3.us-east-2.amazonaws.com/banner-video.mp4 */}
          </figure>
        </div>
        <div className="count-main d-flex">
        <Link to="/sellers#seller_signup" className="btn bookdemo">
        Book a live demo <img alt="" class="img-fluid" src="/images/sellers/hero-section/arrow-right.svg"/>
        <img alt="" class="img-fluid whitearrow" src="/images/sellers/hero-section/arrow-rightwhite.svg"/>
        </Link>
          <div className="count-box">
            <strong>
              <CountUp prefix="$" suffix="B" end={1.1} decimals={1} />
            </strong>
            <p>Waitlisted Seller GMV</p>
          </div>

          <div className="count-box">
            <strong>
              <CountUp end={180} duration={3} />
            </strong>
            <p>Sellers in Network</p>
          </div>

          <div className="count-box count-box02">
            <strong>
              <CountUp separator="," end={112954} duration={5} />
            </strong>
            <p>Product Listings</p>
          </div>
        </div>


      </div>
    </section>
  );
}

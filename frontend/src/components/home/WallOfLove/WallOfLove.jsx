import React, { useState } from "react";
import "./WallOfLove.css";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import { useEffect } from "react";
import { getTweets } from "../../../utils/strapi-cms";

const WallOfLove = () => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const fetchedTweets = await getTweets();
        const extractedData = fetchedTweets.data.map((item) => ({
          size: item.attributes.size,
          tweetId: item.attributes.tweetId,
        }));
        setTweets(extractedData);
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    };

    fetchTweets();
  }, []);
  return (
    <section id="wall-of-love">
      <div className="wall-of-love section-padding">
        <div className="section-subtitle">
          <span className="title-dema">
            d<span className="title-blue">e</span>ma
          </span>
          's wall of love!
        </div>
        <div className="section-title">
          <h2>
            Love notes after experiencing
            <br />{" "}
            <span className="title-shop-save-own">
              “Shop, Save, Own”
              <img
                src="/images/home/wall-of-love/title-squiggle.svg"
                width={500}
                height={120}
                className="wall-title-squiggle"
              />
            </span>
          </h2>
        </div>
        <div className="testimonials-wrapper">
          {tweets.length > 0 && <TestimonialSection testimonials={tweets} />}
          <img
            src="/images/home/wall-of-love/ellipse.svg"
            width={509}
            height={509}
            className="wall-ellipse"
          />
          <img
            src="/images/home/wall-of-love/heart01.svg"
            width={56}
            height={55}
            className="wall-ellipse-heart"
          />
          <img
            src="/images/home/wall-of-love/heart02.svg"
            width={56}
            height={55}
            className="wall-heart-1"
          />
          <img
            src="/images/home/wall-of-love/heart03.svg"
            width={56}
            height={55}
            className="wall-heart-2"
          />
          <img
            src="/images/home/wall-of-love/heart03.svg"
            width={56}
            height={55}
            className="wall-heart-3"
          />
        </div>
      </div>
    </section>
  );
};

export default WallOfLove;

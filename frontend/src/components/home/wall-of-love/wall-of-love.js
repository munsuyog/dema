'use client'
import React, { useState } from "react";
import "./wall-of-love.css";
import Image from "next/image";
import TestimonialSection from "./testimonial-section/testimonial-section";
import { useEffect } from "react";
import { getTweets } from "@/utils/strapi-cms";

const WallOfLove = () => {
  const [tweets, setTweets] = useState(null)
  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const fetchedTweets = await getTweets();
        const extractedData = fetchedTweets.data.map(item => ({
          size: item.attributes.size,
          tweetId: item.attributes.tweetId
      }));
        setTweets(extractedData);
      } catch (error) {
        console.error('Error fetching tweets:', error);
      }
    };

    fetchTweets();
  }, []);
  const testimonials = [
    {
      id: 1,
      name: "Jane Cooper",
      userID: "@janecooper",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      video: "/images/home/wall-of-love/testimonial.mp4",
      userImage: "/images/home/wall-of-love/userImage.png",
      size: "medium",
      likes: '3.2k',
      date: 'Aug 2, 2022'
    },
    {
      id: 2,
      name: "Jane Cooper",
      userID: "@janecooper",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      userImage: "/images/home/wall-of-love/userImage.png",
      size: "small",
      likes: '3.2k',
      date: 'Aug 2, 2022'
    },
    {
      id: 3,
      name: "Jane Cooper",
      userID: "@janecooper",
      content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut labor ncididunt ut labore eiusmod tempor incididunt ut labore eiusmod.",
      size: "large",
      userImage: "/images/home/wall-of-love/userImage.png",
      likes: '3.2k',
      date: 'Aug 2, 2022'
    },
    {
      id: 4,
      name: "Jane Cooper",
      userID: "@janecooper",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod tempor ",
      size: "extra-small",
      userImage: "/images/home/wall-of-love/userImage.png",
      likes: '3.2k',
      date: 'Aug 2, 2022'
    },
    {
      id: 5,
      name: "Jane Cooper",
      userID: "@janecooper",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod tempor ",
      size: "extra-small",
      userImage: "/images/home/wall-of-love/userImage.png",
      likes: '3.2k',
      date: 'Aug 2, 2022'
    },
    {
      id: 6,
      name: "Jane Cooper",
      userID: "@janecooper",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      size: "small",
      userImage: "/images/home/wall-of-love/userImage.png",
      likes: '3.2k',
      date: 'Aug 2, 2022'
    },
    {
      id: 7,
      name: "Jane Cooper",
      userID: "@janecooper",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      size: "medium",
      userImage: "/images/home/wall-of-love/userImage.png",
      likes: '3.2k',
      date: 'Aug 2, 2022'
    },
  ];
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
              <Image
                src="/images/home/wall-of-love/title-squiggle.svg"
                width={500}
                height={120}
                className="wall-title-squiggle"
              />
            </span>
          </h2>
        </div>
        <div className="testimonials-wrapper">
            <TestimonialSection testimonials={tweets} />
            <Image
                src="/images/home/wall-of-love/ellipse.svg"
                width={509}
                height={509}
                className="wall-ellipse"
              />
            <Image
                src="/images/home/wall-of-love/heart01.svg"
                width={56}
                height={55}
                className="wall-ellipse-heart"
              />
                          <Image
                src="/images/home/wall-of-love/heart02.svg"
                width={56}
                height={55}
                className="wall-heart-1"
              />
            <Image
                src="/images/home/wall-of-love/heart03.svg"
                width={56}
                height={55}
                className="wall-heart-2"
              />
                          <Image
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

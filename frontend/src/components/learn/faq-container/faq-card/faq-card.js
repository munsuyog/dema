import React from "react";
import "./faq-card.css";
import Image from "next/image";
import ButtonPrimary from "@/components/common/button-primary/button-primary";

const FaqCard = ({ tab, theme }) => {
  if (!tab) return null; // Return null if tab is not defined

  const wrapDema = (text) => {
    return text.replace(
      /\b(d)(e)(m)(a)\b/gi,
      '<span class="title-dema">$1<span class="title-blue">$2</span>$3$4</span>'
    );
  };

  return (
    <div
      className="learn-faq-card"
      style={{
        background: `${
          theme == "secondary"
            ? "linear-gradient(0deg, rgba(242, 251, 249, 0) 0%, rgb(218 255 247) 98.04%)" 
            : "linear-gradient(rgb(232 242 251) -18.12%, rgba(239, 247, 255, 0) 100%)"
        }`,
      }}
    >
      <h4
        className="learn-faq-card-title"
        dangerouslySetInnerHTML={{ __html: wrapDema(tab.title) }}
      ></h4>
      <p
        className="learn-faq-card-subtitle"
        dangerouslySetInnerHTML={{ __html: wrapDema(tab.description) }}
      ></p>
      <div className="learn-faq-card-image-container">
        {tab.image && (
          <Image
            src={`http://154.53.59.178:30002${tab.image.data.attributes.url}`}
            width={150}
            height={150}
            alt="card-image"
          />
        )}
        <img
          className="learn-faq-card-svg"
          style={{
            top: `${Math.random() * 20}%`,
            left: `${Math.random() * 10}%`,
          }}
          src={`/images/learn/learn-section/faq/vector-${
            Math.floor(Math.random() * 4) + 1
          }.svg`}
          alt="svg"
        />
        <img
          className="learn-faq-card-svg"
          style={{
            bottom: `${Math.random() * 20}%`,
            right: `${Math.random() * 10}%`,
          }}
          src={`/images/learn/learn-section/faq/vector-${
            Math.floor(Math.random() * 4) + 1
          }.svg`}
          alt="svg"
        />
      </div>
      <div className="learn-faq-card-button-wrapper">
        <ButtonPrimary text={tab.buttonText} fontSize="14px" width="90%" />
      </div>
    </div>
  );
};

export default FaqCard;

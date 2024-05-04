import React from "react";
import "./ReceiptCard.css";
import { color, motion } from "framer-motion";
import { CompareAnimationVectors } from "../../../../../constants/VectorSVGs";

const ReceiptCard = ({ company, scrollPercentage, receipt }) => {
  return (
    <motion.div
      initial={{
        transform: company == "uber" ? "rotate(10deg)" : "rotate(-20deg)",
        left: company == "uber" ? 40 : -40,
      }}
      whileInView={{
        transform: company == "uber" ? "rotate(0deg)" : "rotate(0deg)",
        left: company == "uber" ? 0 : 0,
      }}
      viewport={{amount: 0.8}}
      className="compare-card community"
    >
      <div className="community-receipt-logo-wrapper">
        <span
          className="community-receipt-logo"
          dangerouslySetInnerHTML={{
            __html:
              company == "uber"
                ? CompareAnimationVectors.uberLogo
                : CompareAnimationVectors.demaLogo,
          }}
        />
        <span
          className="community-receipt-tick"
          dangerouslySetInnerHTML={{
            __html:
              company == "uber"
                ? CompareAnimationVectors.redTick
                : CompareAnimationVectors.greenTick,
          }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: scrollPercentage >= receipt.cashIncentives.threshold ? 1 : 0,
        }}
        className="community-receipt-cash-incentives"
      >
        <p className="community-receipt-cash-incentives-title">
          {receipt.cashIncentives.title}
        </p>
        <p className="community-receipt-cash-incentives-number">
          {receipt.cashIncentives.cashIncentive}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: scrollPercentage >= receipt.networkSeeded.threshold ? 1 : 0,
        }}
        className="community-receipt-network"
      >
        <p className="community-receipt-network-title title-blue">
          {receipt.networkSeeded.title}
        </p>
        <div className="community-receipt-network-wrapper">
          <div className="community-receipt-network">
            <img
              className="community-receipt-network-image"
              src={receipt.networkSeeded.users.usersImage}
              alt="user-image"
            />
            <p className="community-receipt-network-number">
              {receipt.networkSeeded.users.users}
            </p>
          </div>
          <div className="community-receipt-network">
            <img
              className="community-receipt-network-image"
              src={receipt.networkSeeded.sellers.sellersImage}
              alt="user-image"
            />
            <p className="community-receipt-network-number">
              {receipt.networkSeeded.sellers.sellers}
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: scrollPercentage >= receipt.ownership.threshold ? 1 : 0,
        }}
        className="community-receipt-cash-incentives"
      >
        <p className="community-receipt-cash-incentives-title">
          {receipt.ownership.title}
        </p>
        <p
          className="community-receipt-cash-incentives-number"
          style={
            company == "uber"
              ? { color: "red" }
              : { color: "var(--primary-500)" }
          }
        >
          {receipt.ownership.ownership}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: scrollPercentage >= receipt.highlightText.threshold ? 1 : 0,
        }}
        className="community-receipt-cash-incentives"
      >
        <p
          className="community-receipt-cash-incentives-title title-green"
          style={
            company == "uber"
              ? { color: "red", fontWeight: 600 }
              : { color: "var(--primary-500)", fontWeight: 600 }
          }
        >
          {receipt.highlightText.text}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ReceiptCard;

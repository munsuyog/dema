import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./CompareCard.css";
import { CompareAnimationVectors } from "../../../../../constants/VectorSVGs";
import { useInView } from "react-intersection-observer";

const CompareCard = ({ company, receipts, scrollPercentage }) => {
  const [totalFees, setTotalFees] = useState(0);
  const [showOperations, setShowOperations] = useState(true);
  const [visibleOperations, setVisibleOperations] = useState([]);
  const [highlightText, setHighlightText] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [mainTitle, setMainTitle] = useState(null);
  const [hideCards, setHideCards] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  console.log(imageSrc);

  useEffect(() => {
    if (showOperations && inView) {
        if (
            scrollPercentage >= receipts.SellersPay.thresholdFrom &&
            scrollPercentage <= receipts.SellersPay.thresholdTo
        ) {
            const newVisibleOperations = receipts.SellersPay.elements.filter(
                (receipt) => scrollPercentage >= receipt.threshold
            );
            setVisibleOperations(newVisibleOperations);
            const newTotalFees = newVisibleOperations.reduce(
                (total, receipt) => total + receipt.percent,
                0
            );
            setTotalFees(newTotalFees);
            const newHighlightText = newVisibleOperations.length
                ? newVisibleOperations[newVisibleOperations.length - 1].highlight
                : null;
            setHighlightText(newHighlightText);
            setMainTitle(receipts.SellersPay.title);
            // Set imageSrc only if it falls within the SellersPay threshold
            if (
                scrollPercentage >= receipts.SellersPay.image.thresholdFrom &&
                scrollPercentage <= receipts.SellersPay.image.thresholdTo
            ) {
                setImageSrc(receipts.SellersPay.image.src);
            } else {
                setImageSrc(null); // Reset imageSrc if not within SellersPay threshold
            }
        } else if (scrollPercentage >= receipts.MarketPlace.threshold) {
            const newVisibleOperations = receipts.MarketPlace.elements.filter(
                (receipt) => scrollPercentage >= receipt.threshold
            );
            setVisibleOperations(newVisibleOperations);
            const newTotalFees = newVisibleOperations.reduce(
                (total, receipt) => total + receipt.percent,
                0
            );
            setTotalFees(newTotalFees);
            const newHighlightText = newVisibleOperations.length
                ? newVisibleOperations[newVisibleOperations.length - 1].highlight
                : null;
            setHighlightText(newHighlightText);
            setMainTitle(receipts.MarketPlace.title);
            // Set imageSrc only if it falls within the MarketPlace threshold
            if (
                scrollPercentage >= receipts.MarketPlace.image.thresholdFrom &&
                scrollPercentage <= receipts.MarketPlace.image.thresholdTo
            ) {
                setImageSrc(receipts.MarketPlace.image.src);
            } else {
                setImageSrc(null); // Reset imageSrc if not within MarketPlace threshold
            }
        }

        if (scrollPercentage >= 0.8) {
            setHideCards(true);
        } else {
            setHideCards(false);
        }
    }
}, [showOperations, inView, scrollPercentage, receipts]);


  return scrollPercentage >= 0.82 && company == "dema" ? (
    <motion.div
      key="large"
      className="compare-card dema-large-card"
      initial={{ transform: "translateY(50%)", opacity: 0 }}
      whileInView={{ transform: "translateY(0%)", opacity: 1 }}
    >
      <span
        className="compare-logo"
        dangerouslySetInnerHTML={{
          __html: CompareAnimationVectors.demaLogo,
        }}
      ></span>
      <div className="compare-selling-fees">
        <span
          className="compare-tick"
          dangerouslySetInnerHTML={{
            __html: CompareAnimationVectors.greenTick,
          }}
        ></span>
        <p className="selling-fees-text">Lower Fees</p>
        <p className="selling-fees-text">=</p>
        <h4 className="selling-fees-text title-blue">
          Lower prices for shoppers <br />
          & <br />
          Higher profits for sellers
        </h4>
        <img
          className="dema-large-image"
          src="/images/about/CardReveal/price.png"
          alt="price"
        />
      </div>
      <h4 className="selling-fees-text title-green">
        Dema = = Your Marketplace
      </h4>
    </motion.div>
  ) : (
    <motion.div
      className={hideCards ? "compare-card hide" : "compare-card"}
      initial={{
        left: company == "amazon" ? "10%" : "-10%",
        top: 0,
        position: "relative",
        transform: company == "amazon" ? "rotate(-20deg)" : "rotate(-10deg)",
      }}
      whileInView={{
        left: 0,
        top: 0,
        position: "relative",
        transform:
          company == "amazon"
            ? scrollPercentage >= 0.8
              ? "translateX(-50%) rotate(0deg)"
              : "rotate(0deg)"
            : scrollPercentage >= 0.8
            ? "translateX(50%) rotate(0deg)"
            : "rotate(0deg)",
        // transition: { duration: 0.5, delay: 1 },
        opacity:
          company == "amazon"
            ? scrollPercentage >= 0.8
              ? 0
              : 1
            : scrollPercentage >= 0.8
            ? 0
            : 1,
      }}
      ref={ref}
    >
      <span
        className="compare-logo"
        dangerouslySetInnerHTML={{
          __html:
            company === "amazon"
              ? CompareAnimationVectors.amazonLogo
              : CompareAnimationVectors.demaLogo,
        }}
      ></span>
      <div className="compare-selling-fees">
        <span
          className="compare-tick"
          dangerouslySetInnerHTML={{
            __html:
              company === "amazon"
                ? CompareAnimationVectors.redTick
                : CompareAnimationVectors.greenTick,
          }}
        ></span>
        <p className="selling-fees-text">Selling Fees</p>
        <motion.span
          key={totalFees}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="selling-fees-number"
        >
          {totalFees}%
        </motion.span>
      </div>
      <motion.p
        initial={{ opacity: 0, fontSize: 14 }} // Initial font size
        animate={{ opacity: 1, fontSize: 12 }}
        exit={{ fontSize: 14 }}
        transition={{ duration: 0.2 }}
        className="compare-marketplace-operations-head"
      >
        {mainTitle && mainTitle}
      </motion.p>
      <div className="compare-divider" />
      <div className="compare-marketplace-operations">
        {visibleOperations.map((receipt, index) => (
          <div
            className="compare-marketplace-operation opacityTransition"
            key={index}
            fadeOnScroll
            threshhold={0.2}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="compare-marketplace-title"
            >
              {receipt.title}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="compare-marketplace-percent"
            >
              {receipt.percent.toFixed(1)}%
            </motion.span>
          </div>
        ))}
        {imageSrc && (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={imageSrc}
            alt="image"
            className="operations-image"
          />
        )}
      </div>
      {highlightText && (
        <motion.div
          key={highlightText} // Ensure each highlightText has a unique key
          className="compare-marketplace-highlight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="compare-dotted-divider"></div>
          <motion.p className="compare-marketplace-highlight-text">
            {highlightText}
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CompareCard;

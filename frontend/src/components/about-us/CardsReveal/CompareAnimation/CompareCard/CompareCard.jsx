import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./CompareCard.css";
import { CompareAnimationVectors } from "../../../../../constants/VectorSVGs";
import { useInView } from "react-intersection-observer";

const CompareCard = ({ company, receipts }) => {
  const [totalFees, setTotalFees] = useState(0);
  const [showOperations, setShowOperations] = useState(false);
  const [visibleOperations, setVisibleOperations] = useState([]);
  const [highlightText, setHighlightText] = useState(null);
  const [isHeaderAnimating, setIsHeaderAnimating] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setShowOperations(true);
        setIsHeaderAnimating(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  useEffect(() => {
    if (showOperations && inView) {
      // Display operations one by one
      receipts.forEach((receipt, index) => {
        const timer = setTimeout(() => {
          setVisibleOperations((prev) => [...prev, receipt]);
          // Update totalFees as each operation is shown
          setTotalFees((prevTotal) => prevTotal + receipt.percent);
          setHighlightText(receipt.highlight);
        }, (index + 1) * 2000); // Delay each operation by 2 seconds
        return () => clearTimeout(timer);
      });
    }
  }, [showOperations, receipts]);

  useEffect(() => {
    if (isHeaderAnimating && inView) {
      // Set isHeaderAnimating to false after the animation duration
      setTimeout(() => setIsHeaderAnimating(false), 800);
    }
  }, [isHeaderAnimating]);

  return (
    <motion.div
      className="compare-card"
      initial={{ left: company == 'amazon' ? '10%' : '-10%', top: 0, position: "relative", transform: company == "amazon" ? "rotate(-20deg)" : "rotate(-10deg)" }}
      whileInView={{
        left: company == 'amazon' ? 0 : 0,
        top: 0,
        position: "relative",
        transform: "rotate(0deg)",
        transition: { duration: 0.5, delay: 1 },
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
        animate={{ opacity: isHeaderAnimating ? 0.5 : 1, fontSize: 12 }} // If isHeaderAnimating is true, reduce opacity and font size
        exit={{ fontSize: 14 }}
        transition={{ duration: 0.2 }}
        className="compare-marketplace-operations-head"
      >
        Marketplace operations
      </motion.p>
      <div className="compare-divider" />
      <div className="compare-marketplace-operations">
        {visibleOperations.map((receipt, index) => (
          <div className="compare-marketplace-operation" key={index}>
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
      </div>
      <AnimatePresence>
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
      </AnimatePresence>
    </motion.div>
  );
};

export default CompareCard;

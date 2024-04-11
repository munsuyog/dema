import React from 'react'
import './other-faqs.css'
import OtherFAQ from './faq/other-faq'
import {motion}  from 'framer-motion'

const OtherFAQs = ({faq}) => {
  return (
    <div className='learn-other-faqs' id='other-faqs'>
        <div className='learn-other-faqs-title-wrapper'>
        <h3>Other FAQs</h3>
        <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="50"
                viewBox="0 0 187 97"
                fill="none"
                className="other-faqs-squiggle"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  d="M4 30.8606C37.8142 110.659 127 37.7597 80 30.8606C33 23.9615 63 103.861 182 62.8605"
                  stroke="#22E393"
                  stroke-width="6"
                  stroke-linecap="round"
                ></motion.path>
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{once: true}}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1.6
                  }}
                  d="M169.433 55.4229C169.433 55.4229 181.518 59.0801
                    182.5 63.5C183.5 68 174.628 76.5121 174.628 76.5121"
                  stroke="#22E393"
                  stroke-width="6"
                  stroke-linecap="round"
                ></motion.path>
                <defs>
                  <lineargradient
                    id="paint0_linear_1_6137"
                    x1="191"
                    y1="42.3605"
                    x2="-10.5"
                    y2="42.4637"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.415" stop-color="#3830C9"></stop>
                    <stop offset="0.815" stop-color="#22E393"></stop>
                  </lineargradient>
                </defs>
        </motion.svg>
        </div>
        <div className='learn-other-faqs-container'>
        {faq && faq.length > 0 && faq.map((faq, index) => (
            <OtherFAQ key={index} faq={faq} />
        )) }
        </div>
    </div>
  )
}

export default OtherFAQs
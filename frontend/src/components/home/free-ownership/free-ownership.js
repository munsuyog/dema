'use client'
import React from "react";
import "./free-ownership.css";
import Image from "next/image";
import FeaturesAnimation from "@/components/common/features-animation/features-animation";
import SkewedButton from "@/components/common/skewed-button/skewed-button";
import { motion } from "framer-motion";

const FreeOwnership = () => {
  return (
    <section id="free-ownership">
      <div className="free-ownership section-padding">
        <div className="section-title-wrapper">
          <h4 className="section-subtitle">FREE OWNERSHIP</h4>
          <h2 className="free-ownership-title">
            help <span className="title-blue">build it </span> & get <br />
            to <span className="title-blue">own it for </span>{" "}
            <span className="title-free">
            <motion.svg class="inactive free-squiggle" xmlns="http://www.w3.org/2000/svg" width="190%" viewBox="0 0 156 82" fill="none" >
                                <motion.path initial={{pathLength: 0}} whileInView={{pathLength: 1}} viewport={{once: true}} transition={{duration: 2}} d="M142.408 59.1107C98.255 67.6411 8.94169 74.6452 4.91618 34.4178C1.93227 4.59936 58.5 2.45193 93.9999 4.9763C129.5 7.50067 148.505 22.5154 150.968 39.3737C154.996 66.9348 126.534 78.0488 116.708 77.1963" stroke="#3830C9" stroke-width="8" stroke-linecap="round"></motion.path>
                            </motion.svg>
              FREE<span className="title-blue">!</span>
            </span>
          </h2>
          <motion.svg width="219" height="119" viewBox="0 0 219 119" fill="none" xmlns="http://www.w3.org/2000/svg" className="free-ownership-squiggle">
<motion.path initial={{pathLength: 0}} whileInView={{pathLength: 1}} viewport={{once: true}} transition={{duration: 2}} d="M54.5 115.5L54.3267 112.505L54.5 115.5ZM199.779 97.9511C198.701 99.2097 196.807 99.3564 195.549 98.2788L175.039 80.7185C173.781 79.6409 173.634 77.7471 174.712 76.4885C175.789 75.23 177.683 75.0833 178.942 76.1609L197.172 91.77L212.782 73.5395C213.859 72.2809 215.753 72.1342 217.011 73.2118C218.27 74.2894 218.417 76.1832 217.339 77.4418L199.779 97.9511ZM3.50563 0.405185C23.9404 12.2624 60.4057 39.2792 80.2827 64.1955C85.2686 70.4456 89.3072 76.6805 91.768 82.6117C94.2199 88.5211 95.2241 94.4217 93.6897 99.8035C92.1235 105.297 88.0785 109.683 81.625 112.803C75.2438 115.887 66.3654 117.819 54.6733 118.495L54.3267 112.505C65.6346 111.851 73.6312 110.003 79.0136 107.401C84.3239 104.834 86.9312 101.625 87.9197 98.1584C88.94 94.5797 88.4012 90.1536 86.2261 84.9111C84.06 79.6904 80.3876 73.9483 75.5923 67.9373C56.3443 43.8093 20.5596 17.2376 0.49437 5.59482L3.50563 0.405185ZM54.6733 118.495C49.9009 118.771 45.952 118.379 42.8944 117.223C39.7498 116.035 37.4405 113.981 36.4055 111.049C35.4147 108.243 35.7751 105.139 36.8089 102.127C37.852 99.0866 39.6805 95.8388 42.0621 92.5179C51.5385 79.304 71.0796 63.1509 93.0905 51.4356C115.034 39.756 140.221 32.066 160.92 36.8104C171.39 39.2102 180.666 44.7876 187.639 54.4909C194.572 64.1381 199.089 77.6638 200.491 95.7683L194.509 96.2317C193.161 78.8362 188.865 66.4782 182.767 57.9923C176.709 49.5624 168.735 44.7571 159.58 42.6587C141.029 38.4068 117.466 45.2588 95.9095 56.7321C74.4204 68.1697 55.7115 83.7807 46.9379 96.0146C44.757 99.0556 43.273 101.775 42.4841 104.074C41.6858 106.401 41.6946 108.008 42.0632 109.052C42.3876 109.97 43.1487 110.905 45.0157 111.611C46.9699 112.349 49.9741 112.757 54.3267 112.505L54.6733 118.495Z" fill="#3830C9"/>
</motion.svg>

        </div>
        <div className="free-ownership-container">
            <div className="free-ownership-video-container">
                <div className="free-ownership-video">
                    <video className="video" src="/images/home/free-ownership/video.mp4" autoPlay muted loop />
                </div>
            </div>
            <div className="free-ownership-animation">
                <div>
                    <FeaturesAnimation />
                </div>
                <div className="free-ownership-skewed-btn">
                    <SkewedButton text="Even sellers can get in on the action" fontSize="14px" width="161px" height="60px" />
                </div>
                <Image src="/images/home/free-ownership/free-squiggle-sm.svg" width={56} height={21} className="free-squiggle-sm" />
            </div>
        </div>
      </div>
      <Image src="/images/home/free-ownership/flower01.svg" width={44} height={44} className="free-flower-top" />
      <Image src="/images/home/free-ownership/star01.svg" width={50} height={56} className="free-star-bottom" />
      <Image src="/images/home/free-ownership/star01.svg" width={50} height={56} className="free-star-bottom-right" />
    </section>
  );
};

export default FreeOwnership;

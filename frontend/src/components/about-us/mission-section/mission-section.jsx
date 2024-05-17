import React, { useEffect, useState } from "react";
import "./mission-section.css";
import { getMissions } from "../../../utils/strapi-cms";
import ButtonPrimary from "../../../components/common/button-primary/button-primary";
import { useDevice } from "../../../contexts/DeviceContext";
import StickyNote from "./StickyNote/StickyNote";
import { motion } from "framer-motion";
import MissionCard from "./MissionCard/MissionCard";
import CircleSquiggle from "../../common/SVGs/CircleSquiggle/CircleSquiggle";

const MissionSection = () => {
  const { device } = useDevice();
  const [missions, setMissions] = useState(null);
  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const data = await getMissions();
        setMissions(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMissions();
  }, []);

  const missionCards = [
    {
      title: `<span class="mission-title-highlight">Remove</span><br /> massive fees`,
      desc: "Removing excessive fees is essential for fairness and accessibility. These fees often create barriers, particularly for those with limited financial means. Eliminating them promotes equality and encourages innovation for more affordable services.",
    },
    {
      title: `Enable <br /><span class="mission-title-highlight">savings+</span><br/> on autopilot`,
      desc: 'Automate your savings with "Savings+" on autopilot, ensuring consistent contributions and optimizing your financial goals effortlessly. This feature streamlines the saving process and offers advanced functionalities for improved financial management, fostering better financial health and security.',
      background: "var(--primary-500)",
    },
    {
      title: `<span class="mission-title-highlight">Own & Govern</span><br/> by community`,
      desc: '"Own & Govern by community" signifies a model where communities collectively own and manage resources or institutions, ensuring democratic decision-making and shared benefits. This approach empowers participants to have a say in policies and fosters a sense of responsibility and solidarity, leading to more equitable and sustainable outcomes.',
      background: "var(--secondary-400)",
    },
    // {
    //   title: `<span class="mission-title-highlight">Long</span> term alignment`,
    //   desc: '"Long-term alignment" ensures consistent pursuit of overarching goals by harmonizing actions and resources over time, fostering organizational resilience and sustained impact. It aligns short-term tactics with long-term vision, facilitating adaptability and enduring success.',
    //   background: '#f3ef8e'
    // },
  ];
  const stickyNotes = [
    {
      subtitle: "Make it lean",
      note: "Remove massive fees",
      image: "/images/about/MissionSection/removeFees.png",
      background: "var(--primary-400)",
      delay: 0,
    },
    {
      subtitle: "No tricks, just savings",
      note: "Enable savings+ on autopilot",
      image: "/images/about/MissionSection/savings.png",
      color: "white",
      background: "var(--secondary-300)",
      delay: 0.3,
    },
    {
      subtitle: "Long term alignment",
      note: "Own & Govern by community",
      image: "/images/about/MissionSection/govern.png",
      background: "#EFEC9B",
      delay: 0.6,
    },
    {
      subtitle: "Familiar shopping, selling",
      note: "Remove friction = Easy transition",
      delay: 0.9,
    },
  ];
  return (
    <section id="mission-section">
      <div className="mission-section section-padding fixed-width">
        <div className="mission-title-section">
          <h1>
            Our <br />
            <span className="title-blue">Mission
            <CircleSquiggle
              width={"200%"}
              style={{ left: device == 'mobile' ? -10 : -20, top: -10, width: "120%" }}
              time="3s"
              d="M142.408 59.1107C98.255 67.6411 8.94169 74.6452 4.91618 34.4178C1.93227 4.59936 58.5 2.45193 93.9999 4.9763C129.5 7.50067 148.505 22.5154 150.968 39.3737C154.996 66.9348 126.534 78.0488 116.708 77.1963"
              viewBox="0 0 155 82"
              color="#3830C9"
            />
            </span>
          </h1>
        </div>
        <div className="missions-container">
          {missionCards &&
            missionCards.map((mission, index) => (
              <MissionCard mission={mission} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

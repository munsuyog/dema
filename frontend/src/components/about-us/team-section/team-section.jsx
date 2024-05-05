import React, { useEffect, useState } from "react";
import "./team-section.css";
import { motion } from "framer-motion";
import { getTeams } from "../../../utils/strapi-cms";
import TeamCard from "./team/team";
import CircleSquiggle from "../../common/SVGs/CircleSquiggle/CircleSquiggle";
import { useDevice } from "../../../utils/DeviceContext";

const TeamSection = () => {
  const {device} = useDevice();
  const [teams, setTeams] = useState(null);
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const data = await getTeams();
        setTeams(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTeams();
  }, []);
  return (
    <section id="team-section">
      <div className="team-section fixed-width section-padding">
        <div className="team-title-section">
          <h1>
            Our
            <br />
            <span className="title-green">
              Team
              <CircleSquiggle
                width={"200%"}
                style={{ left: -10, top: device == 'mobile' ? 0 : -5, width: "120%" }}
                time="3s"
                d="M142.408 59.1107C98.255 67.6411 8.94169 74.6452 4.91618 34.4178C1.93227 4.59936 58.5 2.45193 93.9999 4.9763C129.5 7.50067 148.505 22.5154 150.968 39.3737C154.996 66.9348 126.534 78.0488 116.708 77.1963"
                viewBox="0 0 155 82"
                color="#3830C9"
              />
            </span>
          </h1>
          {/* <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="50"
            viewBox="0 0 187 97"
            fill="none"
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
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 1.6,
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
          </motion.svg> */}
        </div>
        <div className="teams-container">
          {teams &&
            teams.map((team, index) => (
              <TeamCard
                info={team}
                key={index}
                secondary={index % 2 != 0 ? true : false}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

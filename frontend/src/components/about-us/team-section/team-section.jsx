import React, { useEffect, useState } from "react";
import "./team-section.css";
import { motion } from "framer-motion";
import { getTeams } from "../../../utils/strapi-cms";
import TeamCard from "./team/team";
import CircleSquiggle from "../../common/SVGs/CircleSquiggle/CircleSquiggle";
import { useDevice } from "../../../contexts/DeviceContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TeamSection = () => {
  const {device} = useDevice();
  const [teams, setTeams] = useState(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: device == 'mobile' ? 1 : 4,
    slidesToScroll: 1,
    arrows: device == 'mobile' ? false : true,
  };
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
        </div>
        <Slider {...settings} className="teams-container">
          {teams &&
            teams.map((team, index) => (
              <TeamCard
                info={team}
                key={index}
                secondary={index % 2 != 0 ? true : false}
              />
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default TeamSection;

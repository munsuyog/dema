import React, { useEffect, useState } from "react";
import "./ValuesSection.css";
import { getValues } from "../../../utils/strapi-cms";
import Value from "./Value/Value";
import { motion } from "framer-motion";

const ValuesSection = () => {
  // const [values, setValues] = useState(null);
  const values = [
    {
      title: "Removing Friction",
      content:
        "We empathize with our users and make sure there is minimal learning curve in all our products",
    },
    {
      title: "Focused Execution",
      content: "We get things done quickly. When we fail, we do it fast.",
    },
    {
      title: "Unbridled Passion",
      content: "We’re maniacal about removing intermediaries & cost.",
    },
    {
      title: "Intuitively Flexible",
      content: "We believe ideas and solutions come from everyone!",
    },
    {
      title: "Transparent Practices",
      content:
        "Clarity and transparency in everything we do, because trust is our currency.",
    },
    {
      title: "Resilient Infrastructure",
      content:
        "Our systems are built robust and adaptable to stand the test of time and scale.",
    },
    {
      title: "Practical Maximalism",
      content:
        "Embracing the best of decentralization pragmatically. We're integrating it sensibly, ensuring user-friendliness and cost-effectiveness lead the way.",
    },
    {
      title: "Merit-based Meritocracy",
      content: "Rewards aligned with contribution and network growth.",
    },
  ];

  // useEffect(() => {
  //     const fetchValues = async () => {
  //         try {
  //             const data = await getValues();
  //             setValues(data.data);
  //         } catch(error) {
  //             console.error(error);
  //         }
  //     }
  //     fetchValues();
  // },[])
  return (
    <motion.section id="values-section">
      <div className="values-section section-padding fixed-width">
        <div className="values-title-section">
          <h2>
            <span className="title-blue">We Care About...</span>
          </h2>
        </div>
        <div className="values-container">
          {/* {values && values.map((value, index) => (
            <div key={index} className="value">
                <img src={`http://154.53.59.178:30002${value.attributes.image.data.attributes.url}`} width={220} height={220} alt="value-image" className="value-image" />
                <p className="value-title">{value.attributes.title}</p>
                <p className="value-subtitle">{value.attributes.subtitle}</p>
            </div>
        ))} */}

          {values &&
            values.map((value, index) => (
              <Value value={value} key={index} index={index} />
            ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ValuesSection;

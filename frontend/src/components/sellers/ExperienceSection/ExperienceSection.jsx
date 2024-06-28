import React from "react";
import "./ExperienceSection.css";

const ExperienceSection = () => {
  return (
    <section className="soyou-changes pt pb">
      <div className="container-fluid">
        <h1 className="title1">
          <span>An experience built around the way you work!</span><br /> So you don’t
          have to make changes!
        </h1>
        <div className="soyou-changes-mainbox">
          <div className="sellers-box">
            <h5>Sellers</h5>
            <div className="shoppic">
              <img
                alt=""
                className="img-fluid"
                src="/images/sellers/experience-section/sellers.svg"
              />
            </div>
            <p>
              You don’t want another store to manage. We get it! What about when
              shoppers buy? Those orders get sent directly into your existing
              workflow management systems. We believe in “frictionless”! That
              way you don’t have to learn new tools.
            </p>
            <a className="readmore" href="/sellers#experience">
              read more
              <img
                alt=""
                className="img-fluid"
                src="/images/sellers/experience-section/arrow-right.svg"
              />
            </a>
          </div>

          <div className="sellers-box shoppers">
            <h5>Shoppers</h5>
            <div className="shoppic">
              <img
                alt=""
                className="img-fluid"
                src="/images/sellers/experience-section/shoppers.svg"
              />
            </div>
            <p>
              Changing habits can be stressful so we don’t ask you to. Shop the
              same sites you visit today & we come along to help you save. How?
              When you checkout and pay through&nbsp;
              <label className="demafont">dema</label>, you&nbsp;
              <strong>get a rebate</strong> on any price you see&nbsp;
              <strong>everytime!</strong> And you get to own&nbsp;
              <label className="demafont">dema</label> in the process.
            </p>
            <a className="readmore" href="/shoppers#shopper_experience">
              read more
              <img
                alt=""
                className="img-fluid"
                src="/images/sellers/experience-section/arrow-right.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

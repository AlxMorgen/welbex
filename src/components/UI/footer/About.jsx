import React from "react";
import AboutLinks from "./AboutLinks";
import FooterTitle from "./FooterTitle";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <FooterTitle title="О КОМПАНИИ" />
        <AboutLinks arrLinks={["Партнерская программа", "Вакансии"]} />
      </div>
    </div>
  );
};

export default About;

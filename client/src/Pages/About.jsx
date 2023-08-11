import React from "react";
import ContactSvg from "../Components/Layout/lottifilesSvg/AboutSvg.json";
import LottiLoding from "../Components/Layout/Loading/LottiLoding";
import "../Styles/About.css";

const About = () => {
  return (
    <div className="commonPadding about">
      <div className="about_hero">
        <LottiLoding SVGDATA={ContactSvg} />
      </div>
    </div>
  );
};

export default About;

import React from "react";
import ContactSvg from "../Components/Layout/lottifilesSvg/AboutSvg.json";
import LottiLoding from "../Components/Layout/Loading/LottiLoding";
import "../Styles/About.css";
import Section1 from "../Components/AboutComponent/Section1";
import Skilles from "../Components/AboutComponent/Skilles";
import Projects from "../Components/AboutComponent/Projects";

const About = () => {
  return (
    <div className="commonPadding about">
      <div className="about_hero">
        <LottiLoding SVGDATA={ContactSvg} />
      </div>
      {/* ======================= about_content  */}
      <Section1 />
      {/* ===================== Skills  */}
      <Skilles />
      {/* ==================== projects  */}
      <Projects />
    </div>
  );
};

export default About;

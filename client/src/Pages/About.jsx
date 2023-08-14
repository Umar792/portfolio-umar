import React from "react";
import "../Styles/About.css";
import Section1 from "../Components/AboutComponent/Section1";
import Skilles from "../Components/AboutComponent/Skilles";
import Projects from "../Components/AboutComponent/Projects";
import Workwith from "../Components/AboutComponent/Workwith";
import Layout from "../Components/Layout";
import LottiLoding from "../Components/Layout/Loading/LottiLoding";
import AboutSvg from "../Components/Layout/lottifilesSvg/AboutSvg.json";
import Findme from "../Components/AboutComponent/Findme";
import Education from "../Components/AboutComponent/Education";

const About = () => {
  return (
    <Layout>
      <div className="commonPadding about">
        <div className="about_hero">
          <LottiLoding SVGGET={AboutSvg} />
        </div>
        {/* ======================= about_content  */}
        <Section1 />

        {/* ===================== Skills  */}
        <Skilles />
        {/* ================================ eduction  */}
        <Education />
        {/* ==================== projects  */}
        <Projects />
        {/* ================= work with  */}
        <Workwith />
        {/* ========================== find me  */}
        <Findme />
      </div>
    </Layout>
  );
};

export default About;

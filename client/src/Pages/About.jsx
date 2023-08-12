import React from "react";
import "../Styles/About.css";
import Section1 from "../Components/AboutComponent/Section1";
import Skilles from "../Components/AboutComponent/Skilles";
import Projects from "../Components/AboutComponent/Projects";
import Workwith from "../Components/AboutComponent/Workwith";
import Layout from "../Components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="commonPadding about">
        <div className="about_hero"></div>
        {/* ======================= about_content  */}
        <Section1 />
        {/* ===================== Skills  */}
        <Skilles />
        {/* ==================== projects  */}
        <Projects />
        {/* ================= work with  */}
        <Workwith />
      </div>
    </Layout>
  );
};

export default About;

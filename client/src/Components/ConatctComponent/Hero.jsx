import React from "react";
import ConatctSvg from "../Layout/lottifilesSvg/contactSVG.json";
import LottiLoding from "../Layout/Loading/LottiLoding";
import "./Style/Hero.css";

const Hero = () => {
  return (
    <div className="conatct_hero">
      <LottiLoding SVGDATA={ConatctSvg} />
    </div>
  );
};

export default Hero;

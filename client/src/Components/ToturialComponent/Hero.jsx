import React from "react";
import "./Style/Hero.css";
import ToturialSVG from "../Layout/lottifilesSvg/ToturialSvg.json";
import LottiLoding from "../Layout/Loading/LottiLoding";

const Hero = () => {
  return (
    <div className="toturial_hero">
      <LottiLoding SVGGET={ToturialSVG} />
    </div>
  );
};

export default Hero;

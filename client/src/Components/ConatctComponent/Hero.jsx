import React from "react";
import "./Style/Hero.css";
import ConatctSVG from "../Layout/lottifilesSvg/contactSVG.json";
import LottiLoding from "../Layout/Loading/LottiLoding";

const Hero = () => {
  return (
    <div className="conatct_hero">
      <LottiLoding SVGGET={ConatctSVG} />
    </div>
  );
};

export default Hero;

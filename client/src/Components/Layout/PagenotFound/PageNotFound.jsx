import React from "react";
import notfoundSVG from "../lottifilesSvg/pagenotfound.json";
import LottiLoding from "../Loading/LottiLoding";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex justify-center place-items-center flex-col w-[100%] h-[100vh]">
      <LottiLoding SVGGET={notfoundSVG} />
      <NavLink to="/">
        <button className="button">Home</button>
      </NavLink>
    </div>
  );
};

export default PageNotFound;

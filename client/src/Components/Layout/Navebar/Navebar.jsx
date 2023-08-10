import React, { useState } from "react";
import { PiCodeLight } from "react-icons/pi";
import "./Navebar.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Navebar = () => {
  const [togglemenu, setToggleMenu] = useState(false);

  return (
    <div className="navebar sticky top-0 z-[99]  bg-[#1F2937] px-[30px] py-[10px] text-[white] flex justify-between place-items-center">
      {/* ======================= left Navebar  */}
      <div className="left_navebar">
        <LeftNavebar />
        <div className="burger">
          <IoIosMenu onClick={() => setToggleMenu(true)} />
        </div>
      </div>

      {/* ==================== right Navebar  */}
      <div className="left_navebar ">
        <RightNavebar togglemenu={togglemenu} setToggleMenu={setToggleMenu} />
      </div>
    </div>
  );
};

export default Navebar;

// ============================================= left Navebar

const LeftNavebar = () => {
  return (
    <motion.div
      className="left_navebar_component"
      initial={{
        y: -200, // Move up by 200 pixels
      }}
      animate={{
        y: 0, // Animate back to original position
      }}
      transition={{
        type: "spring",
        stiffness: 60,
        duration: 0.2,
      }}
    >
      <NavLink to="/">
        <h1 className="flex justify-center place-items-center text-2xl text-[#D8B4FE] cursor-pointer">
          <span className="mr-[7px] text-2xl">
            <PiCodeLight />
          </span>
          CodingGame
        </h1>
      </NavLink>
    </motion.div>
  );
};

// ==================================== right Navebar

const RightNavebar = ({ togglemenu, setToggleMenu }) => {
  return (
    <motion.div
      className={`${
        togglemenu
          ? "right_navebar_component"
          : "right_navebar_component mobile_navebar"
      } flex justify-center place-items-center`}
    >
      <div className="burger">
        <RxCross1 onClick={() => setToggleMenu(false)} />
      </div>
      <ul className="flex justify-center place-items-center">
        <li>
          <NavLink to="/"> Home </NavLink>
        </li>
        <li>
          <NavLink to="/about"> About </NavLink>
        </li>
        <li>
          <NavLink to="/contact"> Contact </NavLink>
        </li>
        <li>
          <NavLink to="/blogs"> Blogs </NavLink>
        </li>
        <li>
          <NavLink to="/toturials"> Tutorial </NavLink>
        </li>
      </ul>
      {/* ----------------- buttons  */}
      <button className="button">Login</button>
      <button className="button">SignUp</button>
    </motion.div>
  );
};

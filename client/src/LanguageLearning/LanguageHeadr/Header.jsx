import React from "react";
import "../Style/Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="Language_header">
      <div className="language_header_left">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="language_header_right">
        <ul>
          <li>
            <NavLink to="/toturial/html">HTML</NavLink>
          </li>
          <li>
            <NavLink to="/toturial/css">CSS</NavLink>
          </li>
          <li>
            <NavLink to="/toturial/jsvascript">JavaScript</NavLink>
          </li>
          <li>
            <NavLink to="/toturial/react">React.js</NavLink>
          </li>
          <li>
            <NavLink to="/toturial/tailwind">Tailwind Css</NavLink>
          </li>
          <li>
            <NavLink to="/toturial/nodejs">Node.js</NavLink>
          </li>
          <li>
            <NavLink to="/toturial/express">Express.js</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

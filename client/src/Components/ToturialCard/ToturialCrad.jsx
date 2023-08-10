import React from "react";
import "./ToturialCard.css";
import { NavLink } from "react-router-dom";

const ToturialCrad = ({ data }) => {
  return (
    <div className="toturialCrda">
      <div className="touturial_crda_child">
        {data &&
          data.map((item, index) => {
            return (
              <div className="card_map_box" key={index}>
                <div className="crad_map_box_child">
                  <img src={item.image} alt="" />
                  <h2>{item.title} Tutorial</h2>
                  <NavLink to={item.link}>
                    <button>Start Learning!</button>
                  </NavLink>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ToturialCrad;

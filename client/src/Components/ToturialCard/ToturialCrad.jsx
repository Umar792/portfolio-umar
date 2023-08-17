import React from "react";
import "./ToturialCard.css";

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
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <button>Start Learning!</button>
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ToturialCrad;

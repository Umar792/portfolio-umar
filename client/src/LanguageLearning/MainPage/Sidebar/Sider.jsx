import React, { useState } from "react";
import "../Style/Sidebar.css";

const Sider = ({ data, setCheckName }) => {
  return (
    <div className="sidebar_language">
      {data &&
        data.map((item, index) => (
          <div key={index}>
            {Object.keys(item).map((key) => {
              if (key === "id" || key === "language") {
                return null; // Skip id and language properties
              }
              return (
                <SidebarRiteData
                  key={key}
                  title={key.toUpperCase()} // Use the capitalized key as the title
                  data={item[key]}
                  setCheckName={setCheckName}
                />
              );
            })}
          </div>
        ))}
    </div>
  );
};

export default Sider;

// ---------------------- get data

const SidebarRiteData = ({ title, data, setCheckName }) => {
  const [active, setActive] = useState("");
  const sideliHandle = (item) => {
    setCheckName(item);
    setActive(item);
  };
  return (
    <div className="sidebar_data_content mb-3">
      <h2>{title}</h2>
      {data &&
        data.length &&
        data.map((item, index) => {
          return (
            <div key={index}>
              {/* <NavLink to={`/toturial/${name}/${item}`}> */}
              <li
                className={active === item ? "text-white" : "text-[gray]"}
                onClick={() => sideliHandle(item)}
              >
                {item}
              </li>
              {/* </NavLink> */}
            </div>
          );
        })}
    </div>
  );
};

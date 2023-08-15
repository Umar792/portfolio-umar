import React from "react";
import "../Style/Sidebar.css";

const Sider = ({ data }) => {
  console.log(data);

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

const SidebarRiteData = ({ title, data }) => {
  return (
    <div className="sidebar_data_content mb-3">
      <h2>{title}</h2>
      {data &&
        data.length &&
        data.map((item, index) => {
          return (
            <div key={index}>
              <li>{item}</li>
            </div>
          );
        })}
    </div>
  );
};

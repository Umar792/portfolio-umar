import React from "react";
import "../Style/Sidebar.css";

const Sider = ({ data }) => {
  console.log(data);

  return (
    <div className="sidebar_language">
      {/* =================== introduction  */}
      {data &&
        data.map((item, index) => {
          return (
            <div key={index}>
              <SidebarRiteData title="Introduction" data={item.introduction} />
            </div>
          );
        })}
      {/* ========================== basic_tag */}
      {data &&
        data.map((item, index) => {
          return (
            <div key={index}>
              <SidebarRiteData title="HTML BASIC TAGS" data={item.basic_tag} />
            </div>
          );
        })}
      {/* ========================== formatingTags */}
      {data &&
        data.map((item, index) => {
          return (
            <div key={index}>
              <SidebarRiteData
                title="HTML FORMATTING TAGS"
                data={item.formatingTags}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Sider;

// ---------------------- get data

const SidebarRiteData = ({ title, data }) => {
  return (
    <div className="sidebar_data_content">
      <h2>{title}</h2>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <li>{item}</li>
          </div>
        );
      })}
    </div>
  );
};

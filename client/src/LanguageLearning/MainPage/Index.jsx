import React, { useState } from "react";
import Sider from "./Sidebar/Sider";
import Contentbar from "./ContentBar/Contentbar";
import { useParams } from "react-router-dom";
import "./Style/Index.css";
import { sideArray } from "../LanguageStaticData/SidebarData/SidebarStaticData";
import Header from "../LanguageHeadr/Header";

const Index = () => {
  const { name } = useParams();
  const filterSidebar =
    sideArray && sideArray.filter((item, index) => item.language === name);

  const [checkName, setCheckName] = useState("");

  return (
    <>
      <Header setCheckName={setCheckName} />
      <div className="language_index">
        <div className="left_part">
          <Sider data={filterSidebar} setCheckName={setCheckName} />
        </div>
        {/* ---------------------  */}
        <div className="right_part">
          <Contentbar checkName={checkName} />
        </div>
      </div>
    </>
  );
};

export default Index;

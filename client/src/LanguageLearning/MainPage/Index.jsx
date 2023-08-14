import React from "react";
import Sider from "./Sidebar/Sider";
import Contentbar from "./ContentBar/Contentbar";
import { useParams } from "react-router-dom";
import "./Style/Index.css";

const Index = () => {
  const { name } = useParams();
  return (
    <>
      <div className="language_index">
        <div className="left_part">
          <Sider />
        </div>
        {/* ---------------------  */}
        <div className="right_part">
          <Contentbar />
        </div>
      </div>
    </>
  );
};

export default Index;

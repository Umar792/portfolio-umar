import React from "react";
import Hero from "../Components/ToturialComponent/Hero";
import Layout from "../Components/Layout";
import Section1 from "../Components/ToturialComponent/Section1";

const Toturial = () => {
  return (
    <Layout>
      <div className="commonPadding">
        <Hero />
        {/* ======================================  */}
        <Section1 />
      </div>
    </Layout>
  );
};

export default Toturial;

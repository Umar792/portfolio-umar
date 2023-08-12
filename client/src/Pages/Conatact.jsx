import React from "react";
import Hero from "../Components/ConatctComponent/Hero";
import Section1 from "../Components/ConatctComponent/Section1";
import Layout from "../Components/Layout";

const Conatact = () => {
  return (
    <Layout>
      <div className="commonPadding">
        <Hero />
        {/* -------------------- section 1 */}
        <Section1 />
      </div>
    </Layout>
  );
};

export default Conatact;

import React from "react";
import Hero from "../Components/HomeCompoenets/Hero/Hero";
import RecomemdedCourse from "../Components/HomeCompoenets/RecomamdedCourse/RecomemdedCourse";
import LatestBlog from "../Components/BlogComponent/Blogs/LatestBlog";

const Home = () => {
  return (
    <>
      <Hero />
      <RecomemdedCourse />
      <LatestBlog />
    </>
  );
};

export default Home;

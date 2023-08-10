import React from "react";
import Hero from "../Components/HomeCompoenets/Hero/Hero";
import RecomemdedCourse from "../Components/HomeCompoenets/RecomamdedCourse/RecomemdedCourse";
import LatestBlog from "../Components/BlogComponent/Blogs/LatestBlog";
import Testimonial from "../Components/Testimonials/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <RecomemdedCourse />
      <LatestBlog />
      <Testimonial />
    </>
  );
};

export default Home;

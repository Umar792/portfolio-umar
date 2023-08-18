import React from "react";
import Layout from "../Components/Layout";
import Hero from "../Components/BlogComponent/Hero";
import BlogCard from "../Components/BlogComponent/Blogs/BlogCard";
import { useSelector } from "react-redux";

const Blog = () => {
  const blogs = useSelector((state) => state.user.blogs);

  return (
    <Layout>
      <div className="commonPadding blogs">
        {/* ===================== hero */}
        <Hero />

        {/* ========================= blogs  */}
        <BlogCard data={blogs && blogs} />
      </div>
    </Layout>
  );
};

export default Blog;

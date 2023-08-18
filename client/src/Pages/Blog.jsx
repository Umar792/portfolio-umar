import React from "react";
import Layout from "../Components/Layout";
import Hero from "../Components/BlogComponent/Hero";
import BlogCard from "../Components/BlogComponent/Blogs/BlogCard";
import { useSelector } from "react-redux";

// const blogPosts = [
//   {
//     title: "Mastering React Hooks",
//     discription:
//       "A comprehensive guide to mastering React hooks for building dynamic and interactive web applications.",
//     image:
//       "https://images.pexels.com/photos/3098619/pexels-photo-3098619.jpeg?auto=compress&cs=tinysrgb&w=600",
//     author: "John Doe",
//     views: 1245,
//   },
//   {
//     title: "Getting Started with Python",
//     discription:
//       "A beginner's guide to kickstarting your journey with Python programming language.",
//     image:
//       "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600",
//     author: "Jane Smith",
//     views: 876,
//   },
//   {
//     title: "Designing User-Friendly Interfaces",
//     discription:
//       "Learn the principles of designing intuitive and user-friendly interfaces that enhance the user experience.",
//     image:
//       "https://images.pexels.com/photos/17609313/pexels-photo-17609313/free-photo-of-woman-using-a-laptop-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600",
//     author: "Alex Johnson",
//     views: 2050,
//   },
//   {
//     title: "Introduction to Machine Learning",
//     discription:
//       "Dive into the world of machine learning with this introductory guide, covering key concepts and algorithms.",
//     image:
//       "https://images.pexels.com/photos/3806690/pexels-photo-3806690.jpeg?auto=compress&cs=tinysrgb&w=600",
//     author: "Michael Brown",
//     views: 1789,
//   },
//   {
//     title: "Creating Stunning Visual Effects in CSS",
//     discription:
//       "Explore advanced CSS techniques to create stunning visual effects and animations on your website.",
//     image:
//       "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=600",
//     author: "Emily White",
//     views: 1567,
//   },
//   {
//     title: "The Art of Debugging",
//     discription:
//       "Master the art of debugging code efficiently and effectively, saving time and frustration in your development process.",
//     image:
//       "https://images.pexels.com/photos/768472/pexels-photo-768472.jpeg?auto=compress&cs=tinysrgb&w=600",
//     author: "William Green",
//     views: 982,
//   },
//   {
//     title: "Exploring Blockchain Technology",
//     discription:
//       "Uncover the revolutionary potential of blockchain technology and its applications across various industries.",
//     image:
//       "https://images.pexels.com/photos/6347919/pexels-photo-6347919.jpeg?auto=compress&cs=tinysrgb&w=600",
//     author: "Sophia Martinez",
//     views: 2365,
//   },
//   {
//     title: "Creating Engaging Content for Social Media",
//     discription:
//       "Learn strategies and techniques to craft compelling and shareable content for different social media platforms.",
//     image:
//       "https://images.pexels.com/photos/5076522/pexels-photo-5076522.jpeg?auto=compress&cs=tinysrgb&w=600",
//     author: "Daniel Lee",
//     views: 3149,
//   },
//   {
//     title: "Responsive Web Design Best Practices",
//     discription:
//       "Discover the best practices for designing responsive websites that adapt seamlessly to different screen sizes and devices.",
//     image:
//       "https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=600",
//     author: "Olivia Taylor",
//     views: 1985,
//   },
//   {
//     title: "Exploring the Cosmos: A Journey Through Astronomy",
//     discription:
//       "Embark on a cosmic journey through the fascinating world of astronomy, from stars to galaxies and beyond.",
//     image:
//       "https://images.pexels.com/photos/2850290/pexels-photo-2850290.jpeg?auto=compress&cs=tinysrgb&w=600",
//     author: "David Clark",
//     views: 4067,
//   },
// ];

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

import React from "react";
import BlogCard from "./BlogCard";
import { useSelector } from "react-redux";

// const data = [
//   {
//     id: 1,
//     author: "micle joun",
//     title: "How to Start a Blog in 2022: 5 Simple Steps",
//     image:
//       "https://websitesetup.org/wp-content/uploads/2023/03/Best-Website-Builders-March-2023.jpg",
//     views: 30,
//     discription:
//       "We recommend choosing a blog topic that you feel passionate about or interested in. It’s even better when you’re an expert at something, as this helps you to grow your blog through writing quality content to help others.Ask yourself the questions below and try listing at least 10 topic ideas.",
//   },
//   {
//     id: 2,
//     author: "jame neni",
//     title: "7 Best Blogging Platforms in 2023 — What Should You Choose?",
//     image:
//       "https://websitesetup.org/wp-content/uploads/2023/03/Best-Website-Builders-March-2023.jpg",
//     views: 50,
//     discription:
//       "We recommend choosing a blog topic that you feel passionate about or interested in. It’s even better when you’re an expert at something, as this helps you to grow your blog through writing quality content to help others.Ask yourself the questions below and try listing at least 10 topic ideas.",
//   },
//   {
//     id: 3,
//     author: "micle joun",
//     title: "How to Start a Blog in 2022: 5 Simple Steps",
//     image:
//       "https://websitesetup.org/wp-content/uploads/2023/03/Best-Website-Builders-March-2023.jpg",
//     views: 30,
//     discription:
//       "We recommend choosing a blog topic that you feel passionate about or interested in. It’s even better when you’re an expert at something, as this helps you to grow your blog through writing quality content to help others.Ask yourself the questions below and try listing at least 10 topic ideas.",
//   },
//   {
//     id: 4,
//     author: "micle joun",
//     title: "How to Start a Blog in 2022: 5 Simple Steps",
//     image:
//       "https://websitesetup.org/wp-content/uploads/2023/03/Best-Website-Builders-March-2023.jpg",
//     views: 30,
//     discription:
//       "We recommend choosing a blog topic that you feel passionate about or interested in. It’s even better when you’re an expert at something, as this helps you to grow your blog through writing quality content to help others.Ask yourself the questions below and try listing at least 10 topic ideas.",
//   },
//   {
//     id: 5,
//     author: "micle joun",
//     title: "How to Start a Blog in 2022: 5 Simple Steps",
//     image:
//       "https://websitesetup.org/wp-content/uploads/2023/03/Best-Website-Builders-March-2023.jpg",
//     views: 30,
//     discription:
//       "We recommend choosing a blog topic that you feel passionate about or interested in. It’s even better when you’re an expert at something, as this helps you to grow your blog through writing quality content to help others.Ask yourself the questions below and try listing at least 10 topic ideas.",
//   },
// ];

const LatestBlog = () => {
  const blogs = useSelector((state) => state.user.blogs);
  const data = blogs && blogs.slice(0, 6);

  return (
    <div className="commonPadding">
      <h2 className="h2">Latest Blogs.</h2>
      <BlogCard data={data} />
    </div>
  );
};

export default LatestBlog;

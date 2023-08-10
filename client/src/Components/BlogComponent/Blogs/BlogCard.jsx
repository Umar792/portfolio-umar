import React from "react";
import "../Style/BlogCard.css";

const BlogCard = ({ data }) => {
  return (
    <div className="blog_card">
      {data &&
        data.map((item, index) => {
          return (
            <div className="blog_card_box" key={index}>
              <div className="blog_card_box_child">
                <img src={item.image} alt="" />
                <h2>{item.title && item.title.slice(0, 100)}..</h2>
                <p>{item.discription && item.discription.slice(0, 100)}..</p>
                <div className="blog_author flex justify-between place-items-center my-2">
                  <span>
                    Author: {item.author && item.author.slice(0, 20)}..
                  </span>
                  <span>Views :{item.views}</span>
                </div>
                <button className="whitebtn">Learn more..</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BlogCard;

import React from "react";
import "../Style/BlogCard.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingBar from "../../Layout/Loading/LoadingBar";

const BlogCard = ({ data }) => {
  const Loading = useSelector((state) => state.user.isLoading);

  return (
    <>
      {Loading ? (
        <LoadingBar />
      ) : (
        <div className="blog_card">
          {data &&
            data.map((item, index) => {
              return (
                <div className="blog_card_box" key={index}>
                  <NavLink to={`/blogs/${item._id}`}>
                    <div className="blog_card_box_child">
                      <img
                        src={item && item.BlogImage && item.BlogImage.url}
                        alt=""
                      />
                      <h2>{item.title && item.title.slice(0, 100)}..</h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            item.description && item.description.slice(0, 150),
                        }}
                      />

                      <div className="blog_author flex justify-between place-items-center my-2">
                        {/* <span>
                    Author: {item.owner && item.owner.slice(0, 20)}..
                  </span> */}
                      </div>
                      <button className="whitebtn">Learn more..</button>
                    </div>
                  </NavLink>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default BlogCard;

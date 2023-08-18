import React, { useEffect } from "react";
import Layout from "../../Layout";
import "../Style/Singleblog.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetSingleBlog } from "../../../Redux/Action/UserAction";
import LoadingBar from "../../Layout/Loading/LoadingBar";

const SingleBlog = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const SingleBlog = useSelector((state) => state.user.SingleBlog);
  const loading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    dispatch(GetSingleBlog(id));
  }, []);

  return (
    <>
      {loading ? (
        <LoadingBar />
      ) : (
        <Layout>
          <div className="commonPadding">
            <div className="w-[100%] h-[400px] single_blog_image">
              <img
                className="h-[100%] w-[100%] object-contain"
                src={
                  SingleBlog && SingleBlog.BlogImage && SingleBlog.BlogImage.url
                }
                alt=""
              />
            </div>
            {/* ========================= */}
            <div className="Single_blog">
              <h1>{SingleBlog && SingleBlog.title && SingleBlog.title}</h1>
              {/* <p className="text-[gray] mb-3">
                Author Name : Muhammad Umar Yousaf.
              </p> */}
              <p>
                <font className="text-3xl font-bold text-[#581C87]">
                  Blog Details.
                </font>
                <br />
                <br />
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      SingleBlog &&
                      SingleBlog.description &&
                      SingleBlog.description,
                  }}
                />
              </p>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default SingleBlog;

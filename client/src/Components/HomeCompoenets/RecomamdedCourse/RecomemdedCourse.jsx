import React from "react";
import "../Style/RecommendCourse.css";
import ToturialCrad from "../../ToturialCard/ToturialCrad";
import reactimg from "../../../Assets/Languageimg/reactjs.webp";
import js from "../../../Assets/Languageimg/js.webp";
import html from "../../../Assets/Languageimg/html.webp";
import css from "../../../Assets/Languageimg/css.webp";

const Carddata = [
  {
    id: 1,
    title: "HTML",
    image: html,
    link: "/toturial/html",
  },
  {
    id: 2,
    title: "CSS",
    image: css,
    link: "/toturial/css",
  },
  {
    id: 3,
    title: "JavaScript",
    image: js,
    link: "/toturial/jsvascript",
  },
  {
    id: 4,
    title: "React.js",
    image: reactimg,
    link: "/toturial/react",
  },
  // {
  //   id: 5,
  //   title: "Python",
  //   image: python,
  //   link: "/toturial/python",
  // },
];

const RecomemdedCourse = () => {
  return (
    <div className="recomemeded_courses commonPadding">
      <div className="recommend_content">
        <h2 className="h2 my-[10px]">Recommended For You.</h2>
        <p>
          Hello and welcome! If you want to start learning programming, you're
          in the right spot. The roadmap below is really useful for beginners
          diving into programming. If you like what you see, please give my
          website a thumbs up. Thanks and good luck with your coding journey!
        </p>
      </div>
      <ToturialCrad data={Carddata} />
    </div>
  );
};

export default RecomemdedCourse;

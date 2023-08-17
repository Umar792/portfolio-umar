import React from "react";
import "../Style/RecommendCourse.css";
import ToturialCrad from "../../ToturialCard/ToturialCrad";
import reactimg from "../../../Assets/Languageimg/reactjs.webp";
import js from "../../../Assets/Languageimg/js.webp";
import html from "../../../Assets/Languageimg/html.webp";
import css from "../../../Assets/Languageimg/css.webp";
import python from "../../../Assets/Languageimg/python.webp";

const Carddata = [
  {
    id: 1,
    title: "HTML",
    image: html,
    link: "https://overapi.com/html",
  },
  {
    id: 2,
    title: "CSS",
    image: css,
    link: "https://overapi.com/css",
  },
  {
    id: 3,
    title: "JavaScript",
    image: js,
    link: "https://overapi.com/javascript",
  },
  {
    id: 4,
    title: "React.js",
    image: reactimg,
    link: "https://react.dev/learn",
  },
  {
    id: 5,
    title: "Python",
    image: python,
    link: "https://overapi.com/python",
  },
  {
    id: 6,
    title: "Node.js",
    image: "./media/Skilles/node.png",
    link: "https://overapi.com/nodejs",
  },
  {
    id: 6,
    title: "Express.js",
    image: "./media/Skilles/express.png",
    link: "https://overapi.com/express",
  },
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

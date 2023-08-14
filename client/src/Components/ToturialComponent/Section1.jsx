import React from "react";
import ToturialCrad from "../ToturialCard/ToturialCrad";

const Carddata = [
  {
    id: 1,
    title: "HTML",
    image: "https://www.codewithharry.com/img/notes/html.webp",
    link: "/toturial/html",
  },
  {
    id: 2,
    title: "CSS",
    image: "https://www.codewithharry.com/img/notes/css.webp",
    link: "/toturial/css",
  },
  {
    id: 3,
    title: "JavaScript",
    image: "https://www.codewithharry.com/img/notes/js.webp",
    link: "/toturial/jsvascript",
  },
  {
    id: 3,
    title: "Tailwind Css",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.Y-BbFmqRsIQWzX5BWC4mNQHaHa&pid=Api&P=0&h=220",
    link: "/toturial/tailwind",
  },
  {
    id: 4,
    title: "React.js",
    image: "https://www.codewithharry.com/img/notes/reactjs.webp",
    link: "/toturial/react",
  },
  {
    id: 5,
    title: "Python",
    image: "https://www.codewithharry.com/img/notes/python.webp",
    link: "/toturial/python",
  },
  {
    id: 6,
    title: "C",
    image: "https://www.codewithharry.com/img/notes/c.webp",
    link: "/toturial/C",
  },
  {
    id: 7,
    title: "C++",
    image: "https://www.codewithharry.com/img/notes/cpp.webp",
    link: "/toturial/C++",
  },
  {
    id: 7,
    title: "Node.js",
    image: "./media/Skilles/node.png",
    link: "/toturial/nodejs",
  },
  {
    id: 7,
    title: "Express.js",
    image: "./media/Skilles/express.png",
    link: "/toturial/express",
  },
];

const Section1 = () => {
  return (
    <div>
      <h2 className="h2 my-3">Want to Learn?</h2>
      <ToturialCrad data={Carddata} />
    </div>
  );
};

export default Section1;

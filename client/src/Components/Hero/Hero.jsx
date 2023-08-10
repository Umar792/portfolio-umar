import React from "react";
import "../../Styles/Hero.css";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_box">
        <h2>
          Welcome to
          <font>
            {" "}
            <Typewriter
              words={[" CodingGame."]}
              loop={1}
              cursor
              cursorStyle=""
              typeSpeed={50}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </font>
        </h2>
        <p className="text-xl typing">
          I am
          <span className="font-bold text-[#9333EA]">
            <Typewriter
              words={[
                " a React.js Developer",
                " a Next.js Developer",
                " a Wordpress Desinger",
                " a Node.js Developer",
                " a Express.js Developer",
                " using Mongodb DataBse",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </span>
        </p>
        <p className="w-[600px] py-[10px] text-[gray] paragraph">
          Experienced MERN stack developer adept at creating robust and
          interactive web applications. Proficient in leveraging MongoDB,
          Express.js, React, and Node.js to build seamless user interfaces and
          dynamic functionality.Let's transform your ideas into impactful
          digital solutions
        </p>
        <div>
          <button className="whitebtn">Hire me</button>
          <button className="whitebtn">Explore Blog</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

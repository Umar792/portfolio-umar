import React from "react";

const Section1 = () => {
  return (
    <div className="">
      <section className="text-white body-font">
        <div className="container mx-auto flex py-9 md:flex-col lg:flex-row flex-col justify-between">
          <div className="lg:flex-grow md:w-full lg:pr-[30px] flex-col  md:pr-[20px]  md:items-start md:text-left mb-16 md:mb-0 items-center text-left">
            <h1 className="h2 title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed">
              Hello, I'm Muhammad Umar Yousaf, a passionate MERN Stack developer
              and Next.js enthusiast. I have a strong foundation in web
              development and a keen interest in building modern, user-friendly
              applications. With a focus on clean code and innovative solutions,
              I strive to create seamless and engaging and experiences for
              users. My journey in software development has equipped me with
              valuable problem-solving skills, enabling me to tackle challenges
              and collaborate effectively within diverse teams. I'm dedicated to
              staying up-to-date with the latest industry trends and
              technologies, continuously expanding my skill set to deliver
              cutting-edge solutions that leave a lasting impact.
            </p>
          </div>
          {/* <div className="lg:max-w-lg lg:w-full md:w-full">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://www.artificialintelligence-news.com/wp-content/uploads/sites/9/2019/11/ai-software-development-artificial-intelligence-developer-here.jpg"
            />
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Section1;

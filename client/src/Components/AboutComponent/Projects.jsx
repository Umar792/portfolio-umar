import React from "react";
import { AiOutlineGlobal, AiFillGithub } from "react-icons/ai";

const data = [
  {
    title: "E-COMMERCE WEBSITE",
    image: "./p1.png",
    subtitle: "Live",
    discription:
      "Hi, i build this E-commerce website with the help of MERN Stack with all functionality,",
    link: "https://clickordernow.com/",
    github: "https://github.com/Umar792/Complete-Ecommerce-MERN",
  },
  {
    title: "Service Base Website",
    image: "./p3.png",
    subtitle: "Live",
    discription: " Hi, i build this  website with the help of wordpress.",
    link: "https://nixxesolutions.com/",
    // github: "https://github.com/Umar792/Multi-Vindor-Ecommerce",
  },
  {
    title: "Xperthousetechnology",
    image: "https://umarfolio.netlify.app/exp.PNG",
    subtitle: "Live",
    discription:
      "Hi, i build this React website for Xperthousetechnology,i build this React.js with the help of React.js Node.js it also mobile responsive",
    link: "https://xpertshousetech.net/",
    // github: "/",
  },
  {
    title: "Ecommerce Website",
    image: "./p2.png",
    subtitle: "Live",
    discription:
      " Hi, i build this E-commerce website with the help of MERN Stack with all functionality,",
    link: "https://yoursshop.netlify.app/",
    github: "https://github.com/Umar792/Multi-Vindor-Ecommerce",
  },
  {
    title: "Note WEBSITE",
    image: "https://umarfolio.netlify.app/note.PNG",
    subtitle: "Live",
    discription:
      " Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    link: "https://mern3noteapp.netlify.app/",
    github: "https://github.com/Umar792/NoteApp",
  },

  {
    title: "Inventory App",
    image: "https://umarfolio.netlify.app/sinp.PNG",
    subtitle: "Live",
    discription:
      "Hi, i build this Inventory website with the help of MERN Stack with full functionality",
    // link: "/",
    github: "https://github.com/Umar792/MERN-Inventory-App",
  },
  {
    title: "HTML, CSS , JAVASCRIPT",
    image: "https://umarfolio.netlify.app/jav.PNG",
    subtitle: "Live",
    discription:
      "Hi, i build this billing app with the help of html , css and javascript",
    link: "https://umarproject16.netlify.app/",
  },
  {
    title: "messanger",
    image: "https://umarfolio.netlify.app/mes.PNG",
    subtitle: "Live",
    discription:
      "Hi, i build this billing messanger with the help of html , css and javascript",
    link: "https://umarproject14.netlify.app/",
  },
  {
    title: "SV Maker",
    image: "https://umarfolio.netlify.app/cv.PNG",
    subtitle: "Live",
    discription:
      "Hi, i build this billing cv maker with the help of html , css and javascript",
    link: "https://umarproject13.netlify.app/",
  },
  {
    title: "React.js website",
    image: "https://umarfolio.netlify.app/ho.PNG",
    subtitle: "Live",
    discription: "Hi, i build this website with the help of React.js",
    link: "https://umarproject11.netlify.app/",
  },
  {
    title: "Todo App",
    image: "https://umarfolio.netlify.app/to.PNG",
    subtitle: "Live",
    discription: "Hi, i build this todo app with the help of React.js",
    link: "https://umarproject10.netlify.app/",
  },
  {
    title: "Kepp you note",
    image: "https://umarfolio.netlify.app/ke.PNG",
    subtitle: "Live",
    discription: "Hi, i build this Note app with the help of React.js",
    link: "https://umarproject6.netlify.app/",
  },
  {
    title: "i build this first portfolio",
    image: "https://umarfolio.netlify.app/port.PNG",
    subtitle: "Live",
    discription: "Hi, i build this portfolio app with the help of React.js",
    link: "https://umarproject3.netlify.app/",
  },
  {
    title: "i build templete",
    image: "https://umarfolio.netlify.app/so.PNG",
    subtitle: "Live",
    discription: "Hi, i build this templete website with the help of React.js",
    link: "https://umarproject2.netlify.app/",
  },
  {
    title: "Portfolio templete",
    image: "https://umarfolio.netlify.app/port2.PNG",
    subtitle: "Live",
    discription:
      "Hi, i build this Portfolio templete website with the help of React.js",
    link: "https://umarproject1.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col  w-full mb-20">
            <h1 className="h2 sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Projects
            </h1>
            <p className="lg:w-2/3 leading-relaxed ">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {data &&
              data.map((item, index) => {
                return (
                  <div className="lg:w-1/3 sm:w-1/2 p-4" key={index}>
                    <div className="flex relative">
                      <img
                        alt="gallery"
                        className="absolute inset-0 w-full h-[300px] object-cover object-center"
                        src={item.image}
                      />
                      <div className="px-8 h-[300px] py-10 relative z-10 w-full border-2 border-[gray] bg-[#111827] opacity-[0.9] transition-all duration-200 hover:!opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                          {item.subtitle}
                        </h2>
                        <h1 className="title-font text-lg font-medium text-white mb-3">
                          {item.title}
                        </h1>
                        <p className="leading-relaxed text-white">
                          {item.discription}
                        </p>
                        <div className="m-3 w-full flex justify-center place-items-center">
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <AiFillGithub className="mr-4 text-4xl text-white cursor-pointer" />
                            </a>
                          )}
                          {item.github && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <AiOutlineGlobal className="mr-4 text-4xl text-white cursor-pointer" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

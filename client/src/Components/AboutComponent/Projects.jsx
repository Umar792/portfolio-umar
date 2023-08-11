import React from "react";
import { AiOutlineGlobal, AiFillGithub } from "react-icons/ai";

const data = [
  {
    title: "Ecommerce Website",
    image:
      "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600",
    subtitle: "Live",
    discription:
      " Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    link: "/",
    github: "/",
  },
  {
    title: "Ecommerce Website",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
    subtitle: "Live",
    discription:
      " Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    link: "/",
    github: "/",
  },
  {
    title: "Ecommerce Website",
    image:
      "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=600",
    subtitle: "Live",
    discription:
      " Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    link: "/",
    github: "/",
  },
  {
    title: "Ecommerce Website",
    image:
      "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600",
    subtitle: "Live",
    discription:
      " Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    link: "/",
    github: "/",
  },
  {
    title: "Ecommerce Website",
    image:
      "https://images.pexels.com/photos/3584998/pexels-photo-3584998.jpeg?auto=compress&cs=tinysrgb&w=600",
    subtitle: "Live",
    discription:
      " Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    link: "/",
    github: "/",
  },
  {
    title: "Ecommerce Website",
    image:
      "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600",
    subtitle: "Live",
    discription:
      " Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    link: "/",
    github: "/",
  },
];

const Projects = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col  w-full mb-20">
            <h1 class="h2 sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Projects
            </h1>
            <p class="lg:w-2/3 leading-relaxed ">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            {data &&
              data.map((item, index) => {
                return (
                  <div class="lg:w-1/3 sm:w-1/2 p-4" key={index}>
                    <div class="flex relative">
                      <img
                        alt="gallery"
                        class="absolute inset-0 w-full h-full object-cover object-center"
                        src={item.image}
                      />
                      <div class="px-8 py-10 relative z-10 w-full border-2 border-[gray] bg-[#111827] opacity-0 transition-all duration-1000 hover:opacity-100">
                        <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                          {item.subtitle}
                        </h2>
                        <h1 class="title-font text-lg font-medium text-white mb-3">
                          {item.title}
                        </h1>
                        <p class="leading-relaxed">{item.discription}</p>
                        <div className="m-3 w-full flex justify-center place-items-center">
                          <a href={item.link} target="_blank">
                            <AiFillGithub className="mr-4 text-4xl text-white cursor-pointer" />
                          </a>
                          <a href={item.link} target="_blank">
                            <AiOutlineGlobal className="mr-4 text-4xl text-white cursor-pointer" />
                          </a>
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

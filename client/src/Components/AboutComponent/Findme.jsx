import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Findme = () => {
  return (
    <div>
      <h2 className="h2 my-5">Findme on SocialMedia🏅</h2>
      {/* ===================================  */}
      <div className="fid_me flex w-full justify-start place-items-center my-2 text-8xl flex-wrap">
        <a href="https://github.com/Umar792" target="_blank" rel="noreferrer">
          <AiFillGithub className="cursor-pointer mx-2 border-2 rounded-full p-3 bg-[#1E293B] text-[#a343ec] " />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-umar-yousaf-0aa9a722b/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="cursor-pointer mx-2 border-2 rounded-full p-3 bg-[#1E293B] text-[#a343ec] " />
        </a>
      </div>
    </div>
  );
};

export default Findme;

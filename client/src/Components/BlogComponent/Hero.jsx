import React from "react";
import "./Style/Hero.css";

const Hero = () => {
  return (
    <div className="blog_hero w-full h-[300px] border-b-2 flex justify-center place-items-center border-[gray]">
      <div className="blog_hero_content">
        <h2>Welcome to My Blogs</h2>
        <p>
          Discover a treasure trove of knowledge in our blog, where coding
          expertise meets engaging narratives. Uncover coding tips, stay updated
          with the latest industry trends, and ignite your curiosity with
          thought-provoking discussions. Your journey to becoming a coding
          maestro starts here.
        </p>
      </div>
    </div>
  );
};

export default Hero;

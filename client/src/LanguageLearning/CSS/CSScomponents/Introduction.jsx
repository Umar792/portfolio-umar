import React from "react";
import withoutcss from "../media/Without.webp";
import withcss from "../media/aftercss.png";

const Introduction = () => {
  return (
    <div className="introduction_html">
      <h2 className="mb-4 text-3xl font-bold ">Information & History</h2>
      <p className="p_html max-w-[800px]">
        Have you ever wondered about the websites you interact with daily basis,
        how do they look without any styling? Well, without Cascading Style
        Sheets (CSS) this is what this website looks like.
      </p>
      <h2 className="html_h2">With out CSS</h2>
      <img
        src={withoutcss}
        alt=""
        className="w-[100%] mb-4 mt-3 h-[500px] object-contain"
      />
      {/* ==============================  */}
      <h2 className="html_h2">With CSS</h2>
      <img
        src={withcss}
        alt=""
        className="w-[100%] mb-4 mt-3 h-[500px] object-contain"
      />
      {/* ========================  */}
      <h2 className="html_h2">History</h2>
      <p className="p_html">
        CSS was created by Håkon Wium Lie to allow web designers to change their
        website's layout, colours, and fonts. Originally, websites were meant to
        be used by researchers only, so the decoration did not matter. However,
        the need to make them look nice grew when websites became widespread.
      </p>
      {/* =========================== */}
      <h2 className="html_h2">Why the word “Cascade”?</h2>
      <p className="p_html">
        The Cascade determines which CSS rules will be applied when multiple
        rules for an item are contradicting in the style sheet.
      </p>
      {/* ========================  */}
      <h2 className="html_h2">Key features of CSS</h2>
      <p className="p_html">1. Used to style and layout webpages</p>
      <p className="p_html">2. Written in HTML and XML</p>
      <p className="p_html">
        3. The last version was CSS 2.1, but seeing the scope everything now
        comes under the umbrella of CSS without any version number.
      </p>
      <p className="p_html">
        4. Reusability of the same rules for multiple HTML documents.
      </p>
      {/* ===========================  */}
      <h2 className="html_h2">Why learn CSS?</h2>
      <p className="p_html">
        CSS though optional, adds beauty to a website. It helps the user to
        design a majestic website according to their own liking. So without
        wasting any time let’s start with your first CSS website.
      </p>
    </div>
  );
};

export default Introduction;

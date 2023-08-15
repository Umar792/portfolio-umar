import React from "react";
import "../Styles/Introhtml.css";

const Introduction = () => {
  return (
    <>
      <h2 className=" text-4xl mb-3">. HTML Introduction</h2>
      <h2 className="html_h2">What is HTML?</h2>
      <li className="p_html">
        HTML is an initialism for "HyperText Markup Language.
      </li>
      <li className="p_html">It is the language of the web.</li>
      <li className="p_html">It is used to create websites.</li>
      <li className="p_html">
        It is used to define a page layout, meaning it is a barebone page
        structure.
      </li>
      <li className="p_html">
        HTML is used for making pages of the website also called webpages that
        we see on the internet
      </li>
      <li className="p_html">It consists of a set of tags. </li>
      <li className="p_html">This set of tags is written in HTML Document. </li>
      <li className="p_html">
        <strong className="!text-white">".html" </strong>or{" "}
        <strong className="!text-white">".htm"</strong> is the extension.{" "}
      </li>
      <li className="p_html">
        " There are so many versions of HTML but HTML5 is the latest version.{" "}
      </li>
      {/* =============================================================================  */}
      <h2 className="html_h2">Features of HTML</h2>
      <li className="p_html">It is platform-independent.</li>
      <li className="p_html">
        Images, videos, and audio can be added to a web page.
      </li>
      <li className="p_html">Hypertext can be added to the text.</li>
      <li className="p_html">It is a markup language.</li>
      <li className="p_html">It is interpreted language</li>
      <li className="p_html">It consists of a set of tags. </li>
      <li className="p_html">This set of tags is written in HTML Document. </li>
      <li className="p_html">
        It can be integrated with other languages like CSS, JavaScript etc.
      </li>
      <li className="p_html">Semantic Structure.</li>
      <li className="p_html">
        Slocal Storage & Indexed DB – Client-side data storage.
      </li>
      <li className="p_html">
        Offline Capabilities (PWA) with Cache API & Service Workers.
      </li>
      {/* =====================================  */}
      <h2 className="html_h2">Why the word HyperText & Markup Language</h2>
      <p className="p_html">
        The word hypertext markup language comprises the words “hypertext” and
        “markup language”. The term "hypertext" refers to the linking of text
        with other documents and “markup language” refers to a language that
        uses a set of tags. So, HTML is the linking of text with other documents
        using some set of tags.
      </p>
      <p className="p_html">
        <font className="text-[red] mr-2">Note:</font>
        Tags refer to some meaningful texts enclosed in angle braces
        &#60;...&#62;. For example, &#60;head&#62;. Each tag has a different
        meaning and importance in building an HTML page, which can affect the
        web page in its own ways.
      </p>
      {/* ========================================================================  */}
      <h2 className="html_h2">A beautiful analogy to understand HTML:</h2>
      <img
        src="https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/html-home/Analogy.png"
        alt=""
        className="p-4 w-full h-[300px] object-contain"
      />
      <p className="p_html">
        Here in the explanation for the above analogy, the car skeleton refers
        to HTML with the page body. When that skeleton is painted it the car
        gets CSS and after all that car is provided with some functionalities
        like engine, etc (which refers to JavaScript), the car gets life and can
        run. Similarly, when we develop our websites we need HTML for the
        structure and if we want our website to look good and prettier we need
        CSS and if we want to add functionalities to our webpage we need
        JavaScript.
      </p>
      {/* ========================================  */}
      <p className="html_h2">History of HTML:</p>
      <li className="p_html">
        In 1989, <font className="text-[orange]">Tim Berners Lee</font>{" "}
        established www and created <font className="text-[orange]">HTML</font>{" "}
        in 1991.{" "}
      </li>
      <li className="p_html">
        From 1995 to 1997, he started working on versions of HTML.
      </li>
      <li className="p_html">
        In 1999, a committee was organized that made HTML4.0 a standard.
      </li>
      <li className="p_html">
        HTML4.0 is used by many, even today. However, the stable version of HTML
        is 5.0 also known as HTML5.
      </li>
    </>
  );
};

export default Introduction;

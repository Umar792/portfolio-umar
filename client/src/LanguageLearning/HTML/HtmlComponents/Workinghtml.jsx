import React from "react";
import "../Styles/Introhtml.css";

const Workinghtml = () => {
  return (
    <div>
      <h2 className="text-4xl mb-3 mt-3">HTML Working</h2>
      <p className="p_html">
        When we want to access any information on the internet we search that on
        a web browser. The web browser gets all the content from the web
        servers. This content is stored in the webservers in the form of an HTML
        document. An HTML document is first written with some tags in any code
        editor or your choice of a text editor and then saved with the “ .html ”
        extension. After this, the browser interprets the HTML document, reads
        it, and renders a web page.
      </p>
      <img
        className="w-[90%] m-auto h-[300px] object-contain"
        src="https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/how-html-works/Htmlworks.png"
        alt=""
      />
      <p className="p_html">
        In the above figure, we open a simple text editor, then the basic
        structure is to be written. Now, this file is to be saved with the
        "index.html" filename. After saving this file, open this file in your
        web browser. After opening our webpage will look like as the output.
        Below we'll discuss this line briefly.
      </p>
      {/* ========================================================  */}
      <h2 className="html_h2 mb-2">How does HTML Works?</h2>
      <h2 className="html_h2">HTML Document:</h2>
      <p className="p_html">
        It's a text document saved with the extension .html or .htm that
        contains texts and some tags written between "&lt; &gt;" which give the
        instructions needed to configure the web page. These tags are fixed and
        definite. About the structure of html document is explained further.
      </p>
      {/* ==============================================  */}
      <h2 className="html_h2">Browser:</h2>
      <li className="p_html">
        A browser is an application that reads HTML documents and renders the
        webpage.
      </li>
      <li className="p_html">
        They cannot read the content directly where it is stored. To settle this
        conflict servers are used.
      </li>
      <li className="p_html">
        A server acts like an intermediate, it patiently listens to the
        browser's request and executes it.
      </li>
      <li className="p_html">Now the document is delivered to the browser.</li>
      <li className="p_html">
        Browsers support two parts now: parsing and rendering.
      </li>
      <li className="p_html">
        When the browser is in the parsing stage, it receives raw bytes which
        are converted into characters and these characters are then converted
        into tokens after that tokens are converted into nodes. Then these nodes
        are linked in a tree data structure known as DOM(Document Object Model).
      </li>
      <li className="p_html">
        when the DOM tree structure has been constructed, the browser starts its
        rendering. Now each node in the DOM tree will be rendered and displayed.
      </li>
      {/* =======================================  */}
      <h2 className="html_h2">Rendered Page:</h2>
      <p className="p_html">
        The rendered page is the output screen of our HTML Document which is the
        page displayed on the browser{" "}
      </p>
      {/* =========================================  */}
      <h2 className="html_h2">How does the basic website work?</h2>
      <p className="p_html">Web Browser(client) requests</p>
      <p className="p_html">
        Webserver in return sends HTML, CSS, and JS files to it.
      </p>
      <p className="p_html">
        HTML, JS, and CSS files are parsed by a web browser and show you a
        beautiful website.
      </p>
    </div>
  );
};

export default Workinghtml;

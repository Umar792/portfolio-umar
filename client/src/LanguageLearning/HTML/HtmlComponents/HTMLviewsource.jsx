import React from "react";

const HTMLviewsource = () => {
  return (
    <div>
      <h2 className="text-4xl mb-4xl">HTML View Source</h2>
      {/* ----------------------------------------  */}
      <h2 className="html_h2">
        How to view the page source of the loaded HTML page?
      </h2>
      <p className="p_html">
        Sometimes we want HTML content or view-source of someone’s website and
        to view that there is a simple technique which is provided by the
        windows.
        <br />
        . Go to that website.
        <br />
        . Click the right mouse button.
        <br />
        . Select the option View Page Source.
        <br />
        . A new tab with view-source will appear on your screen.
        <br />
      </p>
      <img
        className="max-w-[80%] h-[400px] object-contain m-auto"
        src="https://www.lifewire.com/thmb/X91m2FV2LeIRobuvzYsIqy23BuQ=/1250x0/filters:no_upscale():max_bytes(150000):strip_icc()/002_view-html-source-in-chrome-3466725-5bef1cdd46e0fb0026a96f2f.jpg"
        alt=""
      />
      {/* ==========================  */}
      <h2 className="html_h2">How to inspect the HTML element?</h2>
      <p className="p_html">
        Sometimes we want to inspect the HTML element of someone’s website and
        to do that there is a simple technique which is provided by windows.
        <br />
        . Go to that website.
        <br />
        . Click the right mouse button.
        <br />
        . Select the option Inspect.
        <br />
        . Now developer tool is opened on your screen.
        <br />
      </p>
      <img
        className="max-w-[80%] h-[400px] object-contain m-auto"
        src="https://media.geeksforgeeks.org/wp-content/uploads/20191023122339/inspect1111.png"
        alt=""
      />
      <p className="p_html">
        <font className="text-[red] mr-1 font-bold">NOTE:</font>
        You are permitted to temporarily edit/change CSS or HTML elements on any
        website utilizing this developer tool.
      </p>
    </div>
  );
};

export default HTMLviewsource;

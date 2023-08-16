import React from "react";

const HTMLeditior = () => {
  return (
    <div>
      <h2 className="text-4xl mb-4xl">HTML Editors</h2>
      {/* ---------------------------  */}
      <h2 className="html_h2">HTML using Notepad:</h2>
      <p>
        Step1: Go to notepad <br />
        Step2: Write HTML code in it
        <br />
        Step3: Save with ".html" extension
        <br />
        Step4: Open this file in the browser
        <br />
      </p>
      <img
        className="max-w-[100%] m-auto h-[500px] object-contain"
        src="https://renato.athaydes.com/images/how-to/web/vscode.png"
        alt=""
      />
      <h2 className="html_h2">RHTML using Visual studio code:</h2>
      Step1: Go to vs code
      <br />
      Step2: Write HTML code in it
      <br />
      Step3: Save with ".html" extension
      <br />
      Step4: Open this file in the browser
      <br />
      <p className="p_html">
        <font className="text-[red] font-bold mr-1">NOTE:</font>
        In our tutorials, we are going to use VS code editor with a live server
        extension installed.{" "}
      </p>
      <img
        className="max-w-[80%] m-auto h-[400px] object-contain"
        src="https://www.freecodecamp.org/news/content/images/2020/10/4-2.png"
        alt=""
      />
    </div>
  );
};

export default HTMLeditior;

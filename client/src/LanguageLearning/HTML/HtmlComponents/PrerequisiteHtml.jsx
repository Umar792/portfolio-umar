import React from "react";

const PrerequisiteHtml = () => {
  return (
    <div>
      <h2 className="text-4xl mb-3">HTML Prerequisite</h2>
      <h2 className="html_h2">Tools needed to make an HTML page:</h2>
      <p className="p_html">
        1) HTML Editors: It is a simple tool in which every piece of HTML
        content has to be written. We can use any text editor as per our choice.
        Here we are using Visual studio code because it is lightweight and
        open-source.
        <br />
        Commonly used editors:
      </p>
      <img
        className="w-full h-[300px] object-contain"
        src="https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/html-prerequisite/Editors.png"
        alt=""
      />
      <p className="p_html">
        <font className="text-[red] font-bold">NOTE:</font> You can write HTML
        even in a Notepad. Text editors like VS code make these things easier.
      </p>
      {/* =================================================================  */}
      <h2 className="html_h2">Installation of Visual Studio Code:</h2>
      <li className="p_html">Go to Google</li>
      <li className="p_html">Type Visual studio code download</li>
      <li className="p_html">
        Click on download and install it as per your OS
      </li>
      {/* =====================  */}
      <p className="p_html">
        2) Browser: HTML tags are not displayed by browsers, but are read and
        interpreted by them. In a web browser, HTML structures are rendered into
        a styled and pretty form. Here we are using google chrome. Commonly used
        browsers:
      </p>
      <img
        className="w-full h-[300px] object-contain"
        src="https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/html-prerequisite/Browsers.png"
        alt=""
      />
      <p className="p_html">
        Using any editor and any browser, we will be able to render pages.
      </p>
      <p className="p_html">
        <font className="text-[red] font-bold">NOTE:</font> In addition, we are
        installing a live server extension in our Vscode editor to view live
        reload pages. live server extension is used to launch a local
        development server with a live reload feature for HTML pages.
      </p>
    </div>
  );
};

export default PrerequisiteHtml;

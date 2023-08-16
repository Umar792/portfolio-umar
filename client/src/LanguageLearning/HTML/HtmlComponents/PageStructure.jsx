import React from "react";
import CodeSyntexView from "../../CodeSyntexView/CodeSyntexView";

const code1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <h1>This is our first heading</h1>
    <p>This is our latest paragraph</p>
</body>
</html>`;

const PageStructure = () => {
  return (
    <div>
      <h2 className="text-4xl mb-4">HTML Page Structure</h2>
      {/* --------------------------  */}
      <h2 className="html_h2">A basic HTML document:</h2>
      <CodeSyntexView language={"html"} code={code1} />
      {/* ===============================  */}
      <h2 className="html_h2">Visualization of this HTML document:</h2>
      <img
        className="max-w-[80%] h-[350px] object-contain m-auto"
        src="https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/html-page-structure/HTML_Pagestructure.png"
        alt=""
      />
      {/* ==========================================  */}
      <h2 className="html_h2">Display of this content on a web browser:</h2>
      <img
        className="max-w-[80%] h-[350px] object-contain m-auto"
        src="https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/html-page-structure/HTML_Pagestructure2.png"
        alt=""
      />
      <p className="p_html">
        In the browser's title bar, all content of the &lt;head&gt; section will
        be displayed, while on the white background of the browser, all content
        of the &lt;body&gt; section will be displayed.
      </p>
      {/* =========================  */}
    </div>
  );
};

export default PageStructure;

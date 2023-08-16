import React from "react";
import CodeSyntexView from "../../CodeSyntexView/CodeSyntexView";

const Horizontalline = () => {
  return (
    <div>
      <h2 className="html_h2">Horizontal Line Tag</h2>
      <p className="p_html">
        For horizontal line use &lt;hr/&gt; tag on your HTML page.
      </p>
      <img
        className="w-[90%] m-auto h-[300px] object-contain"
        src="https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/html-horizontal-line-tag/Horizontaltag.png"
        alt=""
      />
      {/* ====================== */}
      <h2 className="html_h2">
        &lt;hr&gt; tag: “defines a horizontal line on an HTML page”
      </h2>
      <p className="text-[#9c49db]">Syntax:</p>
      <CodeSyntexView language={"html"} code={`<hr />`} />
      <p className="text-[gray] p_html">
        The &lt;hr&gt; tag is also known as the empty tag where a closing tag is
        not needed. This tag is a self-closing tag. A horizontal line tag is
        used to break your documents visually by adding a horizontal line in
        your document.
      </p>
    </div>
  );
};

export default Horizontalline;

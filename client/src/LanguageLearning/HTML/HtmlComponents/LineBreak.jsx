import React from "react";
import CodeSyntexView from "../../CodeSyntexView/CodeSyntexView";

const LineBreak = () => {
  return (
    <div>
      <h2 className="html_h2">Line Break Tag</h2>
      <p className="p_html">
        For line break use &lt;hr/&gt; tag on your HTML page.
      </p>
      <img
        className="w-[90%] m-auto h-[300px] object-contain"
        src="https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/html-line-break-tag/Centertag.png"
        alt=""
      />
      {/* ====================== */}
      <h2 className="html_h2">
        &lt;br/&gt; tag: “used to break two lines or paragraph on an HTML page”
      </h2>
      <p className="text-[#9c49db]">Syntax:</p>
      <CodeSyntexView language={"html"} code={`<hr />`} />
      <p className="text-[gray] p_html">
        The &lt;br/&gt; tag is also known as the empty tag where a closing tag
        is not needed. This tag is a self-closing tag. A line break tag is used
        to break down your line or a paragraph. When the&lt;br/&gt; tag is used
        it automatically breaks the paragraph into a new line.
      </p>
    </div>
  );
};

export default LineBreak;

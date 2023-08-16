import React from "react";
import CodeSyntexView from "../../CodeSyntexView/CodeSyntexView";

const HTMLparagra = () => {
  return (
    <div>
      <h2 className="html_h2">Paragraph Tag</h2>
      <p className="p_html">
        For paragraphs use &lt;p&gt; tag on your HTML page.
      </p>
      <img
        className="w-[90%] m-auto h-[300px] object-contain"
        src="https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/html-paragraph-tag/Paragraphtag.png"
        alt=""
      />
      {/* ====================== */}
      <h2 className="html_h2">
        &lt;p&gt; “defines a paragraph on an HTML page”
      </h2>
      <p className="text-[#9c49db]">Syntax:</p>
      <CodeSyntexView
        language={"html"}
        code={`<p>
        //paragraph content
</p>`}
      />
      <p className="text-[gray] p_html">
        The &lt;p&gt; tag is to show text or content in a paragraph on your HTML
        page. &lt;p&gt; tag also has its corresponding &lt;/p&gt; tag. &lt;p&gt;
        tag automatically adds empty line space above and below your paragraph.
      </p>
    </div>
  );
};

export default HTMLparagra;

import React from "react";
import CodeSyntexView from "../../CodeSyntexView/CodeSyntexView";

const Centeradiv = () => {
  return (
    <div>
      <h2 className="html_h2">Center Tag</h2>
      <p className="p_html">
        To put content in the center use &lt;hr/&gt; tag on your HTML page.
      </p>
      <img
        className="w-[90%] m-auto h-[300px] object-contain"
        src="https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/html-line-break-tag/Centertag.png"
        alt=""
      />
      {/* ====================== */}
      <h2 className="html_h2">
        &lt;center/&gt; tag: “used to put content in the center on an HTML page”
      </h2>
      <p className="text-[#9c49db]">Syntax:</p>
      <CodeSyntexView
        language={"html"}
        code={`<center>
//content
</center>`}
      />
      <p className="text-[gray] p_html">
        The &lt;center&gt; tag is used to put your content in the center of your
        HTML page. You can use this tag in your table also. Sometimes we need
        our text to be in the center for that this&lt;center/&gt; tag is used.
        This tag has both an opening and a closing tag. It is not an empty tag.
      </p>
    </div>
  );
};

export default Centeradiv;

import React from "react";
import CodeSyntexView from "../../CodeSyntexView/CodeSyntexView";

const AcronymTag = () => {
  return (
    <div>
      <h2 className="mb-3 font-bold text-4xl">Acronym Tag</h2>
      <p className="p_html">
        For acronym text use &lt;acronym&gt; tag on your HTML page.
      </p>
      <img
        className="w-[90%] m-auto h-[300px] object-contain"
        src="https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/html-acronym-tag/small.png"
        alt=""
      />
      {/* ====================== */}
      <h2 className="html_h2">
        &lt;acronym”&gt; tag: “used to define acronym”
      </h2>
      <p className="text-[#9c49db]">Syntax:</p>
      <CodeSyntexView
        language={"html"}
        code={`<acronym”>
        //paragraph content
</acronym”>`}
      />
      <p className="text-[gray] p_html">
        Using this &lt;acronym&gt; tag we can define an acronym text.
        &lt;acronym&gt; tag has also its corresponding &lt;/acronym&gt; tag.
      </p>
    </div>
  );
};

export default AcronymTag;

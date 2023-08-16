import React from "react";
import CodeSyntexView from "../../CodeSyntexView/CodeSyntexView";

const TextAbrivation = () => {
  return (
    <div>
      <h2 className="mb-3 font-bold text-4xl">Text Abbreviation Tag</h2>
      <p className="p_html">
        For text abbreviation use &lt;abbr&gt; tag on your HTML page.
      </p>
      <img
        className="w-[90%] m-auto h-[300px] object-contain"
        src="https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/html-text-abbreviation-tag/small.png"
        alt=""
      />
      {/* ====================== */}
      <h2 className="html_h2">
        &lt;abbr&gt; tag: “used to define abbreviation form of an element” page”
      </h2>
      <p className="text-[#9c49db]">Syntax:</p>
      <CodeSyntexView
        language={"html"}
        code={`<abbr>
        //paragraph content
</abbr>`}
      />
      <p className="text-[gray] p_html">
        Using this &lt;abbr&gt; tag we can abbreviate a text. &lt;abbr&gt; tag
        has also its corresponding &lt;/abbr&gt; tag.
      </p>
    </div>
  );
};

export default TextAbrivation;

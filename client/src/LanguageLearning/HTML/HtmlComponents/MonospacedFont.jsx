import React from "react";
import CodeSyntexView from "../../CodeSyntexView/CodeSyntexView";

const MonospacedFont = () => {
  return (
    <div>
      <h2 className="mb-3 font-bold text-4xl">Monospaced Font</h2>
      <p className="p_html">
        For monospaced font use &lt;tt&gt; tag on your HTML page.
      </p>
      <img
        className="w-[90%] m-auto h-[300px] object-contain"
        src="https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/html-paragraph-tag/Paragraphtag.png"
        alt=""
      />
      {/* ====================== */}
      <h2 className="html_h2">
        &lt;tt&gt; tag: “used to display each letter with same width on an HTML
        page”
      </h2>
      <p className="text-[#9c49db]">Syntax:</p>
      <CodeSyntexView
        language={"html"}
        code={`<tt>
        //paragraph content
</tt>`}
      />
      <p className="text-[gray] p_html">
        Using this &lt;tt&gt; tag we can display each letter with the same
        width. &lt;tt&gt; tag has also its corresponding &lt;/tt&gt; tag. Each
        letter of an alphabet has different widths like ‘w’ is wider than ‘i’ so
        to overcome this we can use a monospaced font. The monospaced font
        displays each letter with the same width.
      </p>
      <p className="p_html">
        <font className="font-bold mr-1 text-[red]">Note:</font>
        According to HTML5, this tag has been deprecated and is now obsolete.
        We'll learn more about deprecated tags in the upcoming tutorial.
      </p>
    </div>
  );
};

export default MonospacedFont;

import React from "react";
import CodeSyntexView from "../../CodeSyntexView/CodeSyntexView";

const HTMLelement = () => {
  return (
    <div>
      <h2 className="text-4xl mb-4xl">HTML Elements</h2>
      <h2 className="html_h2">What is an HTML Element?</h2>
      <p className="p_html">
        HTML Element is a combination of the start tag, content, and end tag.
        <br />
        <font className="text-[#9c49db]">
          HTML Element = Start tag + Content + End tag
        </font>
        <br />
        For example:
        <br />
      </p>
      <CodeSyntexView
        language={"html"}
        code={` <h1> This is our first heading </h1>`}
      />
      <p className="text-[gray]"> This is a heading element.</p>
      {/* ===================================================== */}
      <h2 className="html_h2">What is a Nested HTML Element?</h2>
      <p className="p_html">
        Nested HTML Element is the elements in which one HTML element are
        followed by another HTML element.
        <br />
        <font className="text-[#9c49db]">
          Nested HTML Element = One HTML element inside another HTML element
        </font>
        <br />
        For example:
        <br />
      </p>
      <CodeSyntexView
        language={"html"}
        code={`<h1><b> This is our first heading </b></h1>`}
      />
      <p className="text-[gray]"> This is a heading element.</p>
      {/* ===================================================== */}
      <h2 className="html_h2">What is an Empty HTML Element?</h2>
      <p className="p_html">
        Empty HTML Element is the element in which tags do not have any content.
        <br />
        <font className="text-[#9c49db]">
          Empty HTML Element = Tags with no content
        </font>
        <br />
        For example:
        <br />
      </p>
      <CodeSyntexView language={"html"} code={`<br/>`} />
      <p className="text-[gray]"> This is a heading element.</p>
    </div>
  );
};

export default HTMLelement;

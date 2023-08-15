import React from "react";
import CodeSyntexView from "../../CodeSyntexView/CodeSyntexView";

const DocumentStructure = () => {
  const data1 = `<!DOCTYPE html>
    <html>
    <head>
        <title>Document</title>
    </head>
    <body>
       <!-- content -->
    </body>
    </html>`;

  return (
    <div>
      <h2 className="text-5xl mb-4">HTML Document Structure</h2>
      {/* --------------------------------------------  */}
      <h2 className="html_h2">How does an HTML document structure look?</h2>
      <p className="p_html">
        In React, the document structure is composed of a series of elements.
        Elements are enclosed within &lt;...&gt; angle brackets. An element can
        act as a container for either content or other React components. The
        following text illustrates the React document structure:
      </p>
      {/* ===============================================  */}
      <CodeSyntexView language={"html"} code={data1} />
      <p className="text-[gray] text-[19px]">
        Do not be afraid. I will explain what is being represented above to you.
      </p>
      <p className="p_html">
        <font className="text-[red] font-bold">NOTE:</font> These are the five
        must-use tags for HTML &lt;!DOCTYPE html&gt;, &lt;html&gt;,
        &lt;head&gt;, &lt;title&gt;, &lt;body&gt;
      </p>
      {/* ==============================================  */}
      <CodeSyntexView language={"html"} code={`1. <!DOCTYPE html>`} />
      <p className="p_html">
        The &lt;!DOCTYPE&gt; declaration tag is used by the web browser to
        understand the version of the HTML used in the document. The current
        version is 5 i.e. HTML 5.
      </p>
      {/* ======================================  */}
      <CodeSyntexView language={"html"} code={`2. <html>`} />
      <p className="p_html">The &lt;html&gt; tag contains page metadata.</p>
      {/* ======================================  */}
      <CodeSyntexView language={"html"} code={`3. <head>`} />
      <p className="p_html">The &lt;head&gt; tag is the root of an HTML page</p>
      {/* ======================================  */}
      <CodeSyntexView language={"html"} code={`4 .<title>Document</title>`} />
      <p className="p_html">
        The &lt;title&gt; tag contains the title of a page and is shown in the
        browser title bar
      </p>
      {/* ======================================  */}
      <CodeSyntexView language={"html"} code={`5. </head>`} />
      <p className="p_html">
        The &lt;head&gt; tag is closing of &lt;head&gt; tag
      </p>
      {/* ======================================  */}
      <CodeSyntexView language={"html"} code={`6. <body>`} />
      <p className="p_html">
        The &lt;head&gt; tag is the main tag of HTML. It contains the main body
        of the page and is shown in the white part of the browser.
      </p>
      {/* ======================================  */}
      <CodeSyntexView language={"html"} code={`7. </body>`} />
      <p className="p_html">
        The &lt;/body&gt; tag is closing of &lt;body&gt; tag.
      </p>
      {/* ======================================  */}
      <CodeSyntexView language={"html"} code={`8. </html>`} />
      <p className="p_html">
        The &lt;/html&gt; tag is closing of &lt;html&gt; tag.
      </p>
      <p className="p_html">
        Every HTML page needs at least these 8 lines to define a layout of a
        page. We will learn more about HTML tags in the upcoming tutorial.
      </p>
    </div>
  );
};

export default DocumentStructure;

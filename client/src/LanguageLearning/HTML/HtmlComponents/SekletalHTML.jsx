import React from "react";
import CodeSyntexView from "../../CodeSyntexView/CodeSyntexView";

const SekletalHTML = () => {
  return (
    <div>
      <h2 className="html_h2">Skeletal Tags</h2>
      <p className="p_html">
        Some basic tags and their meanings are discussed below:
      </p>
      <img
        className="w-[90%] m-auto h-[300px] object-contain"
        src="https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/html-basic-tags/Skeletaltag.png"
        alt=""
      />
      {/* ===============================  */}
      <p className="p_html">
        These three tags are known as “skeletal tags”. <br /> &lt;html&gt; tag :
        “root of an HTML page” <br /> Syntax:
      </p>
      <CodeSyntexView
        language={"html"}
        code={`<html>
        //content
</html>`}
      />
      <p className="p_html">
        As discussed above, all the contents are wrapped in between the opening
        tag &lt;html&gt; and the closing tag &lt;/html&gt;. In between
        &lt;html&gt; and &lt;/html&gt; tag, our content contains two parts i.e.
        a header section i.e. &lt;head&gt;... &lt;/head&gt; and a body section
        i.e. &lt;body&gt;... &lt;/body&gt;.
      </p>
      {/* ===========================  */}
      <p className="p_html">
        <br /> &lt;head&gt; tag : “header part of an HTML page” <br /> Syntax:
      </p>
      <CodeSyntexView
        language={"html"}
        code={`<head>
        //head content
</head>`}
      />
      <p className="p_html">
        Our header section starts from &lt;head&gt; and closes at &lt;/head&gt;
        tag. It defines the head of a document. This tag contains meta tags i.e.
        &lt;meta&gt;.... &lt;/meta&gt; and a title tag i.e. &lt;title &gt;...
        &lt;/title&gt;. The title is shown in the top tab of your browser but
        metadata is not displayed anywhere, it is generally used for SEOs and
        contains information about the document.
      </p>
      {/* ===========================  */}
      <p className="p_html">
        <br /> &lt;title&gt; tag : “title part of an HTML page” <br /> Syntax:
      </p>
      <CodeSyntexView
        language={"html"}
        code={`<title>
        //any title name
</title>`}
      />
      <p className="p_html">
        Our title section starts from &lt;title&gt; and closes at &lt;/title&gt;
        tag. It defines the title of a document.
      </p>
      {/* ===========================  */}
      <p className="p_html">
        <br /> &lt;body&gt; tag : “body part of an HTML page” <br /> Syntax:
      </p>
      <CodeSyntexView
        language={"html"}
        code={`<body>
        //body content
</body>`}
      />
      <p className="p_html">
        Our body section starts from &lt;body&gt; and closes at &lt;/body&gt;
        tag. It defines the body of a document. This tag contains various other
        tags. All the contents in between this tag are displayed on a web
        browser
      </p>
      {/* ===========================  */}
      <p className="p_html">
        The below image shows the skeletal tags and must needed tags to define
        the layout of the webpage
      </p>
      <img
        className="w-[90%] m-auto h-[300px] object-contain"
        src="https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/html-basic-tags/Untitled1.png"
        alt=""
      />
    </div>
  );
};

export default SekletalHTML;

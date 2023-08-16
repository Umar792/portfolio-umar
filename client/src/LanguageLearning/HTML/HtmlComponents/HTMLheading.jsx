import React from "react";
import CodeSyntexView from "../../CodeSyntexView/CodeSyntexView";

const HTMLheading = () => {
  return (
    <div>
      <h2 className="html_h2">Heading Tags</h2>
      <p className="p_html">
        For any headlines use these heading tags on your HTML page.
      </p>
      <img
        className="w-[90%] m-auto h-[300px] object-contain"
        src="https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/html-heading-tags/Headingtag.png"
        alt=""
      />
      {/* ====================== */}
      <h2 className="html_h2">
        &lt;h1&gt; tag: “define heading of an HTML page but with first level”
      </h2>
      <p className="text-[#9c49db]">Syntax:</p>
      <CodeSyntexView
        language={"html"}
        code={`<h1>
//heading content
</h1>`}
      />
      <p className="text-[gray] p_html">
        The &lt;h1&lgt; tag is the first level heading tag. It also has its
        corresponding close &lt;/h1&gt; tag. &lt;h1&gt; tag shows the biggest
        and the boldest heading from all the six-level heading tags. Font-size
        are predefined in this tag.
      </p>
      {/* ================== */}
      <h2 className="html_h2">
        &lt;h2&gt; tag: “define heading of an HTML page but with second level”
      </h2>
      <p className="text-[#9c49db]">Syntax:</p>
      <CodeSyntexView
        language={"html"}
        code={`<h2>
        //heading content
</h2>`}
      />
      <p className="text-[gray] p_html">
        The &lt;h2&gt; tag is the second-level heading tag. It also has its
        corresponding close &lt;/h2&gt; tag. &lt;h2&gt; tag comes after the
        &lt;h1&gt; tag i.e. Font-size is a little bit smaller than &lt;h1&gt;
        tag..
      </p>
      {/* ================== */}
      <h2 className="html_h2">
        &lt;h3&gt; tag: “define heading of an HTML page but with third level”
      </h2>
      <p className="text-[#9c49db]">Syntax:</p>
      <CodeSyntexView
        language={"html"}
        code={`<h3>
        //heading content
</h3>`}
      />
      <p className="text-[gray] p_html">
        The &lt;h3&gt; tag is the second-level heading tag. It also has its
        corresponding close &lt;/h3&gt; tag. &lt;h3&gt; tag comes after the
        &lt;h2&gt; tag i.e. Font-size is a little bit smaller than &lt;h2&gt;
        tag..
      </p>
      {/* ================== */}
      <h2 className="html_h2">
        &lt;h4&gt; tag: “define heading of an HTML page but with fourth level”
      </h2>
      <p className="text-[#9c49db]">Syntax:</p>
      <CodeSyntexView
        language={"html"}
        code={`<h4>
        //heading content
</h4>`}
      />
      <p className="text-[gray] p_html">
        The &lt;h4&gt; tag is the second-level heading tag. It also has its
        corresponding close &lt;/h4&gt; tag. &lt;h4&gt; tag comes after the
        &lt;h3&gt; tag i.e. Font-size is a little bit smaller than &lt;h3&gt;
        tag..
      </p>
      {/* ================== */}
      <h2 className="html_h2">
        &lt;h5&gt; tag: “define heading of an HTML page but with fifth level”
      </h2>
      <p className="text-[#9c49db]">Syntax:</p>
      <CodeSyntexView
        language={"html"}
        code={`<h5>
        //heading content
</h5>`}
      />
      <p className="text-[gray] p_html">
        The &lt;h5&gt; tag is the second-level heading tag. It also has its
        corresponding close &lt;/h5&gt; tag. &lt;h5&gt; tag comes after the
        &lt;h4&gt; tag i.e. Font-size is a little bit smaller than &lt;h4&gt;
        tag..
      </p>
      {/* ================== */}
      <h2 className="html_h2">
        &lt;h6&gt; tag: “define heading of an HTML page but with sixth level”
      </h2>
      <p className="text-[#9c49db]">Syntax:</p>
      <CodeSyntexView
        language={"html"}
        code={`<h6>
        //heading content
</h6>`}
      />
      <p className="text-[gray] p_html">
        The &lt;h6&gt; tag is the second-level heading tag. It also has its
        corresponding close &lt;/h6&gt; tag. &lt;h6&gt; tag comes after the
        &lt;h5&gt; tag i.e. Font-size is a little bit smaller than &lt;h5&gt;
        tag..
      </p>
      {/* ================== */}
      <img
        className="w-[90%] m-auto h-[300px] object-contain"
        src="https://idfive.com/wp-content/uploads/2020/08/HTML-Headings-1024x451.jpg"
        alt=""
      />
    </div>
  );
};

export default HTMLheading;

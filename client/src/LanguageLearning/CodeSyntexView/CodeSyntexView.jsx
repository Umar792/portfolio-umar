import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { AiFillCopy, AiOutlineCheck } from "react-icons/ai";

const CodeSyntexView = ({ language, code }) => {
  const [copucode, setCopyCode] = useState(false);
  const codeString = code;
  return (
    <div className=" max-w-[90%] bg-[#1E293B]" style={{ margin: "20px 0px" }}>
      <div className="flex justify-end place-items-center gap-1 p-2">
        {copucode ? (
          <p className="flex justify-end place-items-center gap-1">
            <AiOutlineCheck /> <span className="cursor-pointer">Copied!.</span>{" "}
          </p>
        ) : (
          <p
            className="flex justify-end place-items-center gap-1"
            onClick={() => {
              navigator.clipboard.writeText(code);
              setCopyCode(true);
              setTimeout(() => {
                setCopyCode(false);
              }, 3000);
            }}
          >
            <AiFillCopy className="cursor-pointer" />
            <span className="cursor-pointer">Copy Code.</span>{" "}
          </p>
        )}
      </div>
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        customStyle={{
          padding: "20px",
          fontSize: "19px",
        }}
        wrapLongLines={true}
        // showLineNumbers={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSyntexView;

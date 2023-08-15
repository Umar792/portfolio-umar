import React from "react";
import Introduction from "../../HTML/HtmlComponents/Introduction";
import IntroductionCSS from "../../CSS/CSScomponents/Introduction";
import Workinghtml from "../../HTML/HtmlComponents/Workinghtml";
import PrerequisiteHtml from "../../HTML/HtmlComponents/PrerequisiteHtml";

const Contentbar = ({ checkName }) => {
  let content = null;

  if (checkName === "HTML Introduction") {
    content = <Introduction />;
  } else if (checkName === "HTML Working") {
    content = <Workinghtml />;
  } else if (checkName === "HTML Prerequisite") {
    content = <PrerequisiteHtml />;
  } else if (checkName === "Information & History") {
    content = <IntroductionCSS />;
  } else if (checkName === "React Home") {
    content = "React";
  }

  return (
    <div className="pt-3 pb-3 pl-1 pr-1">
      {content ? (
        content
      ) : (
        <p className="w-full h-[80vh] text-2xl max-w-[500px] m-auto text-center text-[gray] flex justify-center place-items-center">
          Want to Learn Programing then you are on right place.WELCOME 😊.
        </p>
      )}
    </div>
  );
};

export default Contentbar;

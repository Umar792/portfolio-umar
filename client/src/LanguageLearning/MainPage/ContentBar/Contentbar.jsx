import React from "react";
import Introduction from "../../HTML/HtmlComponents/Introduction";
import IntroductionCSS from "../../CSS/CSScomponents/Introduction";
import Workinghtml from "../../HTML/HtmlComponents/Workinghtml";
import PrerequisiteHtml from "../../HTML/HtmlComponents/PrerequisiteHtml";
import DocumentStructure from "../../HTML/HtmlComponents/DocumentStructure";
import PageStructure from "../../HTML/HtmlComponents/PageStructure";
import HTMLeditior from "../../HTML/HtmlComponents/HTMLeditior";
import HTMLviewsource from "../../HTML/HtmlComponents/HTMLviewsource";
import HTMLtags from "../../HTML/HtmlComponents/HTMLtags";
import HTMLelement from "../../HTML/HtmlComponents/HTMLelement";
import VsCodeInstall from "../../HTML/HtmlComponents/VsCodeInstall";
import SekletalHTML from "../../HTML/HtmlComponents/SekletalHTML";

const Contentbar = ({ checkName }) => {
  let content = null;

  if (checkName === "HTML Introduction") {
    content = <Introduction />;
  } else if (checkName === "HTML Working") {
    content = <Workinghtml />;
  } else if (checkName === "HTML Prerequisite") {
    content = <PrerequisiteHtml />;
  } else if (checkName === "HTML Document Structure") {
    content = <DocumentStructure />;
  } else if (checkName === "HTML Page Structure") {
    content = <PageStructure />;
  } else if (checkName === "HTML Editors") {
    content = <HTMLeditior />;
  } else if (checkName === "HTML View Source") {
    content = <HTMLviewsource />;
  } else if (checkName === "HTML Tags") {
    content = <HTMLtags />;
  } else if (checkName === "HTML Elements") {
    content = <HTMLelement />;
  } else if (checkName === "VS Code Installation") {
    content = <VsCodeInstall />;
  } else if (checkName === "Skeletal Tags") {
    content = <SekletalHTML />;
  }
  // ===================================
  else if (checkName === "Information & History") {
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

import React from "react";
import Lottie from "lottie-react";

const LottiLoding = ({ SVGGET }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: "80svh",
      }}
    >
      <Lottie
        animationData={SVGGET}
        loop={true}
        style={{ width: "300px", height: "300px" }}
        className="svges"
      />
    </div>
  );
};

export default LottiLoding;

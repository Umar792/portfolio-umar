import React from "react";
import Lottie from "lottie-react";

const LottiLoding = ({ SVGDATA }) => {
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
        animationData={SVGDATA}
        loop={true}
        style={{ width: "280px", height: "300px" }}
        className="svges"
      />
    </div>
  );
};

export default LottiLoding;

import React, { useMemo } from "react";
import Lottie from "lottie-react";
import SVGGET from "../lottifilesSvg/loading.json";

const LoadingBar = () => {
  const Memozation = useMemo(() => {
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
  }, [SVGGET]);

  return Memozation;
};

export default LoadingBar;

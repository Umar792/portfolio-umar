import React from "react";

const Education = () => {
  return (
    <div>
      <h2 className="h2">Education</h2>
      {/* ===================================  */}
      <div class="timeline-caption-outer">
        <div class="timeline-caption !text-black">
          🎓 <span>Education</span>
        </div>
      </div>
      <div class="timeline row">
        <div
          class="col-xl-6 col-lg-6 col-md-6 col-sm-12 timeline-item clip-animation from-top"
          data-duration="1.5"
          data-delay=".5"
        >
          <div class="timeline-outer">
            <span class="mini-text">2015 - 2017</span>
            <h5>Matric</h5>
            <p class="little-p">
              I pass the Metriculation from Superior Science college jhung, i
              got 83% marks in Matric.
            </p>
          </div>
        </div>
        <div
          class="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6 col-md-6 offset-md-6 col-sm-12 timeline-item clip-animation from-top"
          data-duration="1.5"
          data-delay=".7"
        >
          <div class="timeline-outer">
            <span class="mini-text">2017 - 2019</span>
            <h5>Intermadiate</h5>
            <p class="little-p">
              I pass the Inter from Superior Science college jhung, i got 89%
              marks in Intermadiate.
            </p>
          </div>
        </div>
        <div
          class="col-xl-6 col-lg-6 col-md-6 col-sm-12 timeline-item clip-animation from-top"
          data-duration="1.5"
          data-delay="1"
        >
          <div class="timeline-outer">
            <span class="mini-text">2019 - 2023 </span>
            <h5>BSCS</h5>
            <p class="little-p">
              I passout the BSCS from Ripha University town ship campus.
            </p>
          </div>
        </div>
        <div
          class="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6 col-md-6 offset-md-6 col-sm-12 timeline-item clip-animation from-top"
          data-duration="1.5"
          data-delay="1.2"
        >
          <div class="timeline-outer">
            <span class="mini-text">2021</span>
            <h5>MERN Stack Course</h5>
            <p class="little-p">
              I pass the complete MERN Stack course from ZAFF institude,there i
              learn many this about programming now ALLHAMDULLIAH i am a full
              stack web developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

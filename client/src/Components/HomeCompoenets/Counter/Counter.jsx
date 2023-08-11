import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { AiOutlineProject } from "react-icons/ai";
import { FaStreetView } from "react-icons/fa";

const Counter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // This will trigger the animation only once
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }
  return (
    <div className="counter commonPadding">
      <h2 className="h2">About My Working</h2>
      {/* ===============================  */}
      <div className="counter_box_main" ref={ref}>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-9 mx-auto">
            <div className="flex justify-center place-items-center flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/2 lg:w-1/4 xl:w-1/4 sm:w-1/2 w-full ">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <AiOutlineProject className="text-indigo-500 text-6xl w-full pb-1" />

                  <h2 className="title-font font-medium text-3xl text-white">
                    {hasAnimated && <CountUp start={0} end={20} duration={6} />}
                  </h2>
                  <p className="leading-relaxed">Projects</p>
                </div>
              </div>
              <div className="p-4 md:w-1/2 lg:w-1/4 xl:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-white">
                    {hasAnimated && <CountUp start={0} end={50} duration={6} />}
                  </h2>
                  <p className="leading-relaxed">Total Verify User Here</p>
                </div>
              </div>
              <div className="p-4 md:w-1/2 lg:w-1/4 xl:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <FaStreetView className="text-indigo-500 text-6xl w-full pb-1" />
                  <h2 className="title-font font-medium text-3xl text-white">
                    {hasAnimated && (
                      <CountUp start={0} end={1000} duration={6} />
                    )}
                  </h2>
                  <p className="leading-relaxed">Vister</p>
                </div>
              </div>
              <div className="p-4 md:w-1/2 lg:w-1/4 xl:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-white">
                    {hasAnimated && <CountUp start={0} end={2} duration={3} />}
                  </h2>
                  <p className="leading-relaxed">Year of working</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Counter;

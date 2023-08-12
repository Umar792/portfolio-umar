import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Style/styles.css";

const Workwith = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const company = [
    {
      id: 1,
      name: "Xperthouse tech.",
      skill: "React.js Developer",
      discrption:
        "Hi, i am a mern stack developer in Xperthousetech here i lern meny thing new.",
      image:
        "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=900",
      duration: "2022/14/3 to 2022/21/10",
    },

    {
      id: 3,
      name: "Forword Solution.",
      skill: "React.js Developer",
      discrption:
        "Hi, i am a mern stack developer in Xperthousetech here i lern meny thing new.",
      image:
        "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=900",
      duration: "2022/24/10 to 2023/22/2",
    },
    {
      id: 2,
      name: "Nixxe Solution LLC.",
      skill: "junior MERN Stack Developer",
      discrption:
        "Hi, i am a mern stack developer in Xperthousetech here i lern meny thing new.",
      image:
        "https://images.pexels.com/photos/3184429/pexels-photo-3184429.jpeg?auto=compress&cs=tinysrgb&w=900",
      duration: "2023/25/2 to go on",
    },
  ];

  return (
    <div className="work_with">
      <h2 className="h2">Work with Companies</h2>
      {/* ===================== slides  */}
      <div className="swiper_main">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {company &&
            company.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="swiper_content">
                    <img src={item?.image} alt="" />
                    <div className="swiper_content_child">
                      <h2>{item?.name}</h2>
                      <p>{item.discrption}</p>
                      <p>{item.skill}</p>
                      <p>{item.duration}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Workwith;

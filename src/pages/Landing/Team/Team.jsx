import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import Section from "../../../components/Section/Section";
import useSwiperRef from "../../../hooks/useSwiperRef";

const teamMembers = [
  {
    img: "/assets/imgs/team-mem-1.png",
  },
  {
    img: "/assets/imgs/team-mem-2.png",
  },
  {
    img: "/assets/imgs/team-mem-3.png",
  },
  {
    img: "/assets/imgs/team-mem-1.png",
  },
  {
    img: "/assets/imgs/team-mem-2.png",
  },
  {
    img: "/assets/imgs/team-mem-3.png",
  },
];

const Team = () => {
  const [nextEl, nextRef] = useSwiperRef();
  const [prevEl, prevRef] = useSwiperRef();

  return (
    <Section id="landing-team">
      <div className="main">
        <div className="left">
          <h2>
            Our Team <span className="text-primary">Member</span>
          </h2>
          <p className="mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="right">
          <img
            className="arrow prev"
            src="/assets/imgs/slider-arrow-2.png"
            alt="arrow"
            ref={prevRef}
          />
          <img
            className="arrow next"
            src="/assets/imgs/slider-arrow-2.png"
            alt="arrow"
            ref={nextRef}
          />
        </div>
      </div>

      <div className="slider mt-5">
        <div className="slider-main">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              900: {
                slidesPerView: 2,
              },
              1100: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={28}
            // slidesPerView={3}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl,
              nextEl,
            }}
          >
            {teamMembers.map((el, idx) => {
              return (
                <SwiperSlide key={"swiper-teamn" + idx}>
                  <div className="card-wrap">
                    <div className="card">
                      <div className="img">
                        <img src={el.img} alt="name" />
                      </div>
                      <h5 className="mt-5 mb-4">Member Name Goes Here</h5>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>

                      <div className="social">
                        <img
                          src="/assets/imgs/logo-linkedin.png"
                          alt="linkedin"
                        />
                        <img
                          src="/assets/imgs/logo-discord.png"
                          alt="discord"
                        />
                        <img
                          src="/assets/imgs/logo-telegram.png"
                          alt="telegram"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </Section>
  );
};

export default Team;

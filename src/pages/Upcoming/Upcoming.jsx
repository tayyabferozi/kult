import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useTimer } from "react-timer-hook";

import Button from "../../components/Button/Button";
import Section from "../../components/Section/Section";
import useSwiperRef from "../../hooks/useSwiperRef";

const time = new Date();
time.setSeconds(time.getSeconds() + 600000); // 10 minutes timer

const Upcoming = () => {
  const [nextEl, nextRef] = useSwiperRef();
  const [prevEl, prevRef] = useSwiperRef();
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: time,
  });

  return (
    <Section id="landing-upcoming">
      <div className="section-container">
        <h2 className="text-center">
          Upcoming <span className="text-primary">H.V.D</span>
        </h2>
        <p className="mt-4 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

      <div className="upcoming-slider-wrap">
        <img
          src="/assets/imgs/slider-arrow.png"
          alt="slider-arrow"
          className="arrow prev"
          ref={prevRef}
        />
        <img
          src="/assets/imgs/slider-arrow.png"
          alt="slider-arrow"
          className="arrow next"
          ref={nextRef}
        />

        <div className="upcoming-slider">
          <Swiper
            spaceBetween={28}
            slidesPerView={3}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: prevEl,
              nextEl: nextEl,
            }}
          >
            {new Array(7).fill(0).map((el, idx) => {
              return (
                <SwiperSlide key={"slide-upcoming" + idx}>
                  <div className="slide-bg">
                    <div className="slide-wrap">
                      <div className="slide-main">
                        <div className="img">
                          <div className="title">Galatic Superman</div>
                          <img
                            src="/assets/imgs/upcoming-slide-img.png"
                            alt="img"
                          />
                          <div className="timer">
                            {days}d : {hours}h : {minutes}m : {seconds}s
                          </div>
                        </div>

                        <div className="share">
                          <img src="/assets/imgs/share-globe.png" alt="globe" />
                          <img
                            src="/assets/imgs/share-discord.png"
                            alt="discord"
                          />
                          <img
                            src="/assets/imgs/share-twitter.png"
                            alt="twitter"
                          />
                          <img src="/assets/imgs/share-insta.png" alt="insta" />
                          <img
                            src="/assets/imgs/share-twitch.png"
                            alt="twitch"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div className="mt-5 d-flex justify-content-center">
        <Button primary>View More</Button>
      </div>
    </Section>
  );
};

export default Upcoming;

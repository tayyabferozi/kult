import clsx from "clsx";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import useSwiperRef from "../../../hooks/useSwiperRef";
import Button from "../../../components/Button/Button";
import Section from "../../../components/Section/Section";

const tabs = [
  "Virtual World",
  "Music",
  "Building",
  "Art",
  "Trading Card",
  "Hot",
  "View More",
];

const Explore = () => {
  const [tabState, setTabState] = useState("Art");
  const [nextEl, nextRef] = useSwiperRef();
  const [prevEl, prevRef] = useSwiperRef();

  return (
    <Section id="landing-explore">
      <div className="section-container">
        <h2>
          Explore NFT <span className="text-primary">Marketplace</span>
        </h2>
        <p className="mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

      <div className="tabs">
        {tabs.map((el, idx) => {
          return (
            <button
              className={clsx("tab", tabState === el && "active")}
              key={el}
            >
              {el}
            </button>
          );
        })}
      </div>

      <div className="slides">
        <img
          ref={prevRef}
          src="/assets/imgs/slider-arrow-2.png"
          className="arrow prev"
          alt="slier-arrow"
        />
        <img
          ref={nextRef}
          src="/assets/imgs/slider-arrow-2.png"
          className="arrow next"
          alt="slier-arrow"
        />
        <div className="cards pt-5">
          <Swiper
            breakpoints={{
              1230: {
                slidesPerView: 3,
              },
              900: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            spaceBetween={28}
            slidesPerView={3}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl,
              nextEl,
            }}
          >
            {new Array(9).fill(0).map((el, idx) => {
              return (
                <SwiperSlide>
                  <div className="card">
                    <div className="img">
                      <img src="/assets/imgs/caravan.png" alt="caravan" />
                    </div>
                    <div className="text">
                      <h4>NFT Name Goes Here</h4>

                      <div className="price-container mt-3">
                        <div>
                          <div className="small">Current Price</div>

                          <h5 className="text-primary mt-3">0.25 ETH</h5>
                        </div>
                        <Button primary>Bid Now</Button>
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

export default Explore;

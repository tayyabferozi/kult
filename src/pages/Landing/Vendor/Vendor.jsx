import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import GridContainer from "../../../components/GridContainer";

import Section from "../../../components/Section/Section";

const Vendor = () => {
  return (
    <Section id="landing-vendor">
      <div className="section-container">
        <h2>
          Top Vendor In <span className="text-primary">A Week</span>
        </h2>
        <p className="mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

      <div className="cards">
        <div className="slider">
          <Swiper spaceBetween={28}>
            {new Array(5).fill(0).map((el, idx) => {
              return (
                <SwiperSlide key={"wender" + idx}>
                  <GridContainer>
                    {new Array(9).fill(0).map((el, idx2) => {
                      return (
                        <div
                          className="col-lg-4"
                          key={"vendor-card" + idx + idx2}
                        >
                          <div className="card">
                            <div className="main">
                              <div className="img">
                                <img
                                  src="/assets/imgs/vendor.png"
                                  alt="vendor"
                                />
                              </div>
                              <div className="text">
                                <div className="left">
                                  <h5>Lilly Smith</h5>
                                  <p className="mt-2 small">Artwork Creator</p>
                                </div>
                                <div className="right text-end">
                                  <div className="text-green fs-12">
                                    +880.01%
                                  </div>
                                  <div className="fs-12 d-flex align-items-center mt-2">
                                    <img
                                      className="me-2"
                                      src="/assets/imgs/eth.png"
                                      alt="eth"
                                    />{" "}
                                    8,134.21
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </GridContainer>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </Section>
  );
};

export default Vendor;

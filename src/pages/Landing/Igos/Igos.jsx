import clsx from "clsx";
import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import GridContainer from "../../../components/GridContainer";

import Section from "../../../components/Section/Section";

const tabs = [
  {
    label: "Ongoing",
  },
  {
    label: "Upcoming",
  },
  {
    label: "Ended",
  },
];

const Igos = () => {
  const [tabState, setTabState] = useState("Upcoming");

  return (
    <Section id="landing-igos">
      <div className="section-container">
        <h2>
          Kult <span className="text-primary">IGOS</span>
        </h2>
        <p className="mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

      <div className="btn-tabs">
        {tabs.map((el, idx) => {
          return (
            <button
              key={"btn-tab" + idx}
              className={clsx("tab", el.label === tabState && "active")}
            >
              {el.label}
            </button>
          );
        })}
      </div>

      <div className="my-5">
        <div className="cards">
          <GridContainer>
            {new Array(6).fill(0).map((el, idx) => {
              return (
                <div className="col-lg-6">
                  <div className="card-wrap">
                    <div className="card">
                      <div className="main">
                        <img src="/assets/imgs/coin.png" alt="coin" />
                        <div className="text">
                          <div className="social">
                            <div className="left">
                              <img
                                src="/assets/imgs/logo-linkedin.png"
                                alt="linkedin"
                              />
                              <img
                                src="/assets/imgs/logo-bing.png"
                                alt="bing"
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
                            <div className="right">Kult | IGO</div>
                          </div>

                          <h5 className="mt-4">IGOS Name Goes Here</h5>

                          <p className="mt-3 fs-12">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s
                            when an unknown printer took a galley of type and
                            scrambled it to make.
                          </p>
                        </div>
                      </div>

                      <div className="tags my-3">
                        <div className="tag">Total Raise : 150k</div>
                        <div className="tag">Valuation : 150k</div>
                        <div className="tag">Base Allo : $00</div>
                      </div>

                      <Button primary>Explore More</Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </GridContainer>
        </div>
      </div>
    </Section>
  );
};

export default Igos;

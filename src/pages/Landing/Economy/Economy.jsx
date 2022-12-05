import React from "react";
import Button from "../../../components/Button/Button";
import GridContainer from "../../../components/GridContainer";

import Section from "../../../components/Section/Section";

const Economy = () => {
  return (
    <Section id="landing-economy">
      <div className="section-container">
        <h2>
          Be Part Of The Open{" "}
          <span className="text-primary">Economy Of The Future</span>
        </h2>
        <p className="mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

      <div className="mt-5">
        <GridContainer className="cards">
          <div className="col-lg-5">
            <div className="card one">
              <h5>Interchain Account</h5>

              <div className="sundi-1 mt-5">
                <img src="/assets/imgs/sundi-1.png" alt="sundi" />
              </div>

              <h3 className="text-primary mt-3">
                One Secure Account For All Your Digital Assets
              </h3>

              <h6 className="mt-3">Comming Soon</h6>
            </div>
          </div>
          <div className="col-lg-7 d-flex flex-column justify-content-between">
            <div className="card two">
              <div className="text">
                <h5 className="mb-5">Decentralized Exchange</h5>

                <h3 className="text-primary mt-3">
                  Swape Token &amp; Collectibles
                </h3>

                <h6 className="mt-5">Comming Soon</h6>
              </div>

              <div className="img">
                <img src="/assets/imgs/sundi-2.png" alt="sundi-2" />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="card three">
                  <div className="text">
                    <strong>Liquidity Pools</strong>

                    <h4 className="text-primary my-4">
                      Provide Liquidity Earn Rewards.
                    </h4>

                    <h6 className="mt-3">Comming Soon</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card four">
                  <div className="text">
                    <strong>Wrapped ETH / BTC</strong>

                    <h4 className="text-primary my-4">
                      +Ethereum <br /> +Bitcoin
                    </h4>

                    <h6 className="mt-3">Comming Soon</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GridContainer>

        <div className="d-flex justify-content-center mt-5">
          <Button primary>Powerful Features</Button>
        </div>
      </div>
    </Section>
  );
};

export default Economy;

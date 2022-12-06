import React from "react";

import Section from "../../../components/Section/Section";
import GridContainer from "../../../components/GridContainer";
import Button from "../../../components/Button/Button";

const Hero = () => {
  return (
    <Section id="landing-hero">
      <GridContainer>
        <div className="col-lg-6">
          <h6 className="text-primary">NFT Market Place!</h6>
          <h2 className="mt-4">
            The Most Interesting Digital In The{" "}
            <u className="text-primary underlined">World</u>
          </h2>
          <p className="mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry lorem Ipsum has been the industry's standard dummy text.
          </p>

          <div className="d-flex align-items-center gap-10 flex-sm-row flex-column">
            <Button primary className="mt-5">
              Explore Now
            </Button>
            <Button className="mt-5">
              <img src="/assets/imgs/play.png" alt="play" /> Watch Now
            </Button>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="right">
            <img src="/assets/imgs/hero-right.png" alt="right" />
          </div>
        </div>

        <div className="social-share">
          <img src="/assets/imgs/logo-vintage.png" alt="vintage" />
          <img src="/assets/imgs/logo-binance.png" alt="binance.png" />
          <img src="/assets/imgs/logo-camfire.png" alt="vintage" />
          <img src="/assets/imgs/logo-metamask.png" alt="vintage" />
          <img src="/assets/imgs/logo-paypal.png" alt="vintage" />
          <img src="/assets/imgs/logo-stonetech.png" alt="vintage" />
        </div>
      </GridContainer>
    </Section>
  );
};

export default Hero;

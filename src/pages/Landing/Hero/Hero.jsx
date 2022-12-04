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

          <div className="d-flex align-items-center gap-10">
            <Button primary className="mt-5">
              Explore Now
            </Button>
            <Button className="mt-5">
              <img src="/assets/imgs/play.png" alt="play" /> Watch Now
            </Button>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="right">
            <img src="/assets/imgs/hero-right.png" alt="right" />
          </div>
        </div>
      </GridContainer>
    </Section>
  );
};

export default Hero;
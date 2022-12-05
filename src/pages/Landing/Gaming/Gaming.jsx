import React from "react";
import Button from "../../../components/Button/Button";

import Section from "../../../components/Section/Section";

const items = [
  {
    title: "Purchase $Fund Token",
    btnText: "Buy $ Fund",
  },
  {
    title: "Stoke Or Form Your $Fund",
    btnText: "Start Now",
  },
  {
    title: "Complete KYC",
    btnText: "Complete KYC",
  },
  {
    title: "You’re All Set!",
  },
];

const Gaming = () => {
  return (
    <Section id="landing-gaming">
      <div className="main">
        <div className="left">
          <h2>
            How To Join{" "}
            <span className="text-primary">The Blockchain Gaming</span>{" "}
            Revolution <span className="text-primary">With Us</span>
          </h2>
          <p className="mt-5">
            Lorem Ipsum is simply dummy text of the printing & typesetting
            industry lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        <div className="right">
          {items.map((el, idx) => {
            return (
              <div className="item" key={"gam-item" + idx}>
                <div className="icon">
                  <img src="/assets/imgs/gaming-icon.png" alt="gaming-icon" />
                </div>
                <div className="text">
                  <h5>{el.title}</h5>
                  <p className="mt-4">
                    Lorem Ipsum is simply dummy text of the printing &
                    typesetting industry lorem Ipsum has been the.
                  </p>

                  {el.btnText && (
                    <Button className="mt-4" primary>
                      {el.btnText}
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Gaming;

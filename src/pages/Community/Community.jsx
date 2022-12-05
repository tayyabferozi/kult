import React from "react";
import GridContainer from "../../components/GridContainer";
import Section from "../../components/Section/Section";

const Community = () => {
  return (
    <Section id="landing-community">
      <div className="section-container">
        <h2>
          Join Our <span className="text-primary">Commnunity</span>
        </h2>

        <p className="mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

      <div className="cards">
        <GridContainer>
          <div className="col-lg-4">
            <div className="card">
              <img src="/assets/imgs/com-telegram.png" alt="telegram" />
              <div className="text">
                <h3>Telegram</h3>
                <div className="small">Join the community</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img src="/assets/imgs/com-discord.png" alt="discord" />
              <div className="text">
                <h3>Discord</h3>
                <div className="small">Join the community</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img src="/assets/imgs/com-twitter.png" alt="twitter" />
              <div className="text">
                <h3>Twitter</h3>
                <div className="small">Join the community</div>
              </div>
            </div>
          </div>
        </GridContainer>
      </div>
    </Section>
  );
};

export default Community;

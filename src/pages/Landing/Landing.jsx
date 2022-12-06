import React from "react";

import Hero from "./Hero/Hero";
import Upcoming from "./Upcoming";
import Economy from "./Economy";
import Explore from "./Explore/Explore";
import Gaming from "./Gaming/Gaming";
import FAQ from "./FAQ/FAQ";
import Artist from "./Artist/Artist";
import Team from "./Team/Team";
import Igos from "./Igos/Igos";
import Vendor from "./Vendor/Vendor";
import Community from "./Community";
import MainLayout from "../../layout/MainLayout/MainLayout";

const Landing = () => {
  return (
    <MainLayout>
      <div id="landing">
        <Hero />
        <Upcoming />
        <Economy />
        <Explore />
        <Gaming />
        <FAQ />
        <Artist />
        <Team />
        <Igos />
        <Vendor />
        <Community />
      </div>
    </MainLayout>
  );
};

export default Landing;

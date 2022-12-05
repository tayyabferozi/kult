import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const MainLayout = ({ children }) => {
  return (
    <div id="main-layout">
      <Navbar />

      <img className="bg-top" src="/assets/imgs/bg-top.png" alt="top" />

      <div className="layout-main-content">
        <img
          className="navbar-left"
          src="/assets/imgs/navbar-left.png"
          alt="navbar-left"
        />
        <img
          className="navbar-right"
          src="/assets/imgs/navbar-right.png"
          alt="navbar-right"
        />

        {children}
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;

import { useEffect, useState } from "react";
import clsx from "clsx";

import Button from "../components/Button/Button";

import Section from "../components/Section";
const links = [
  {
    label: "HOME",
    to: "#0",
    active: true,
  },
  {
    label: "IGO",
    to: "#0",
  },
  {
    label: "GAMES",
    to: "#0",
  },
  {
    label: "PARTY",
    to: "#0",
  },
  {
    label: "GUILDS",
    to: "#0",
  },
  {
    label: "NFT",
    to: "#0",
  },
  {
    label: "STAKING",
    to: "#0",
  },
  {
    label: "EARN",
    to: "#0",
  },
  {
    label: "INSIGHT",
    to: "#0",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive((prevState) => !prevState);
  };

  useEffect(() => {
    const ev = (e) => {
      if (window.pageYOffset > 0) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", ev);

    return () => {
      window.removeEventListener("scroll", ev);
    };
  }, []);

  return (
    <Section id="navbar" className={clsx(isScrolled && "scrolled")}>
      <div className="navbmar-main">
        <a href="#0">
          <img className="logo" src="/assets/imgs/logo.png" alt="logo" />
        </a>
        <div className="hamburger" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={clsx("links", isSidebarActive && "active")}>
          <img
            src="/assets/imgs/close.png"
            alt="close"
            className="close"
            onClick={toggleSidebar}
          />
          {links.map((el, idx) => {
            return (
              <a className={clsx(el.active && "active")} href={el.to}>
                {el.label}
              </a>
            );
          })}
          <Button primary>Connect Wallet</Button>
        </div>
      </div>
    </Section>
  );
};

export default Navbar;

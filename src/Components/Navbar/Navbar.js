import React, { useState, useEffect } from "react";
import "./Navbar.scss";

import HamburgerMenu from "react-hamburger-menu";

function Navbar({pageTitle}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hamburgerHeight, setHamburgerHeight] = useState(0);
  const [hamburgerWidth, setHamburgerWidth] = useState(0);

  const setHamburgerSize = (height, width) => {
    console.log("called2");
    console.log("width", width);
    if (width > 840) {
      setHamburgerHeight(18);
      setHamburgerWidth(12);
    } else if (width > 660) {
      setHamburgerHeight(11);
      setHamburgerWidth(8);
    } else {
      console.log("here");
      setHamburgerHeight(10);
      setHamburgerWidth(7);
    }
  };

  const getWindowDimensions = () => {
    console.log("called");
    console.log(window.innerWidth);
    setHamburgerSize(window.innerHeight, window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", getWindowDimensions);
    getWindowDimensions();
  });

  const toggleMenu = () => {
    if (menuOpen) {
      document.getElementById("menu").style.width = "0px";
      setMenuOpen(false);
    } else {
      document.getElementById("menu").style.width = "20.313em";
      setMenuOpen(true);
    }
  };

  const scrollIntoView = id => {
    toggleMenu();
    const el = document.getElementById(id);
    el.scrollIntoView(true);
    document.getElementById(id).scrollTop += 50;
  };

  const mapSelector = () => {
    const onIOS =
      navigator.platform.indexOf("iPhone") !== -1 ||
      navigator.platform.indexOf("iPad") !== -1 ||
      navigator.platform.indexOf("iPod") !== -1;

    const address = "7671 Northwoods Blvd H, North Charleston, SC 29406";
    const link = "://maps.google.com/maps/dir/?q=";

    if (onIOS) {
      window.open(`maps${link}${address}}`);
    } else {
      window.open(`https${link}${address}`);
    }
  };

  return (
    <div className="Navbar">
      <div className="flex-container">
        <div className="left-side">
          <div className="hamburger">
            <HamburgerMenu
              isOpen={menuOpen}
              menuClicked={() => toggleMenu()}
              animationDuration={0.3}
              width={hamburgerHeight}
              height={hamburgerWidth}
            />
          </div>
          <div><h2 className="page-title">{pageTitle}</h2></div>
          
        </div>

        <div className="right-side">
          <div>
            <div className="phone">
              <div className="phone-link">
                <a href="tel:843-608-8727">
                  <div className="phone-logo">
                    <img
                      src={process.env.PUBLIC_URL + "/assets/images/phone-icon.svg"}
                      alt="Call Tick-Tock Jiu-Jitsu"
                    />
                  </div>
                  Call Now
                </a>
              </div>
            </div>
            <div className="directions" onClick={() => mapSelector()}>
              <div className="directions-logo">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/directions-icon.svg"}
                  alt="Directions to Tick-Tock Jiu-Jitsu"
                />
              </div>
              <div className="directions-link">Get Directions</div>
            </div>
          </div>
        </div>
      </div>
      <div id="menu">
        <div className="flex-container">
          <div className="nav-item" onClick={() => scrollIntoView("top-anchor")}>
            Home
          </div>
          {/* <div className="nav-item" onClick={() => scrollIntoView("Updates")}>
            Updates
          </div>
          <div className="nav-item" onClick={() => scrollIntoView("Testimonials")}>
            Testimonials
          </div>
          <div className="nav-item" onClick={() => scrollIntoView("Gallery")}>
            Gallery
          </div> */}
          <div className="nav-item" onClick={() => scrollIntoView("contact-anchor")}>
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

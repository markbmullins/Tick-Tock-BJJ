import React, { useState } from "react";
import "./Navbar.scss";

import HamburgerMenu from "react-hamburger-menu";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
              width={18}
              height={12}
            />
          </div>
          <div className="page-title">Tick-Tock Jiu-Jitsu</div>
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
          <div className="nav-item" onClick={() => scrollIntoView("anchor")}>
            Home
          </div>
          <div className="nav-item" onClick={() => scrollIntoView("Updates")}>
            Updates
          </div>
          <div className="nav-item" onClick={() => scrollIntoView("Testimonials")}>
            Testimonials
          </div>
          <div className="nav-item" onClick={() => scrollIntoView("Gallery")}>
            Gallery
          </div>
          <div className="nav-item" onClick={() => scrollIntoView("Contact")}>
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

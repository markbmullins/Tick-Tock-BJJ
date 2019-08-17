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
      document.getElementById("menu").style.width = "250px";
      setMenuOpen(true);
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
          <div className="phone">Call Now</div>
          <div className="directions">Get Directions</div>
        </div>
      </div>
      <div id="menu">
        <div onClick={() => toggleMenu()}>X</div>
        test
      </div>
    </div>
  );
}

export default Navbar;

import React, { useState } from "react";
import "./Navbar.scss";

import HamburgerMenu from "react-hamburger-menu";

function Navbar() {
  const [hamburgerOpen, sethamburgerOpen] = useState(false);

  return (
    <div className="Navbar sticky">
      <div className="hamburger">
        <HamburgerMenu
          isOpen={hamburgerOpen}
          menuClicked={() => sethamburgerOpen(!hamburgerOpen)}
          animationDuration={0.3}
          width={18}
          height={23}
        />
      </div>
      <div className="page-title">Tick-Tock Jui-Jitsu</div>

      <div className="phone">Call Now</div>
      <div className="directions">Get Directions</div>
    </div>
  );
}

export default Navbar;

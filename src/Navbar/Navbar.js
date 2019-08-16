import React, { Component } from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar sticky">
      <div className="left-side">
        <span className="hamburger">||||||</span>
        <span className="page-title">Tick-Tock Jui-Jitsu</span>
      </div>

      <div className="right-side">
        <span className="phone">Call Now</span>
        <span className="directions">Get Directions</span>
      </div>
    </div>
  );
};

export default Navbar;

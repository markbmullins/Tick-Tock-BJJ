import React, { Component } from "react";
import "./Home.scss";
import frontPic from "../../Assets/images/ttjj-banner-image.jpg";

const Home = () => {
  return (
    <div className="Home" id="Home">
      <div className="flex-container">
        <div className="top-half">
          <div id="anchor" />
          <div className="title">Tick-Tock Jiu-Jitsu</div>
          <div className="subtitle">
            <div>Martial Arts School in North Charleston</div>
            <div>Opening at 10:00 AM tomorrow</div>
          </div>
          <div className="call-container">
            <div className="call-link">
              <a className="call-text" href="tel:843-608-8727">
                CALL (843) 608-8727
              </a>
            </div>
          </div>
        </div>
        <div className="banner-image">
          <img src={frontPic} alt="Tick-Tock Jiu-Jitsu" />
        </div>
      </div>
    </div>
  );
};

export default Home;

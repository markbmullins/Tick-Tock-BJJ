import React, { Component } from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <div className="top-half">
        <div className="title">Tick-Tock Jiu-Jitsu</div>
        <div className="subtitle">
          <div>Martial Arts School in North Charleston</div>
          <div>Opening at 10:00 AM tomorrow</div>
        </div>
        <div className="call-container">
          <div className="call-link">
            <div className="call-text">CALL (843) 608-8727</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

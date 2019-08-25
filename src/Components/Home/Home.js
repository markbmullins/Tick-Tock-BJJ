import React from 'react';
import './Home.scss';

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
              <div className="call-text">
                <a href="tel:843-608-8727">CALL (843) 608-8727</a>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-image">
          <img
            src={
              process.env.PUBLIC_URL + '/assets/images/ttjj-banner-image.jpg'
            }
            alt="Tick-Tock Jiu-Jitsu"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

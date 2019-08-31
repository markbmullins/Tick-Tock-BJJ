import React from 'react';
import './Home.scss';
import Section from '../Section/Section';
import Button from '../Button/Button';

const Home = ({ title, subtitle }) => {
  return (
    <Section>
      <div id="flex-container">
          <h1 id="title">Tick-Tock Jiu-Jitsu</h1>
          <div id="subtitle">
            <div>Martial Arts School in North Charleston</div>
            <div>Opening at 10:00 AM</div>
          </div>
          <div id="call-button">
            <Button>
                <a href="tel:843-608-8727">CALL (843) 608-8727</a>
            </Button>
          </div>
        <div id="banner-image">
          <img
            src={
              process.env.PUBLIC_URL + '/assets/images/ttjj-banner-image.jpg'
            }
            alt="Tick-Tock Jiu-Jitsu"
          />
        </div>
      </div>
    </Section>
  );
};

export default Home;

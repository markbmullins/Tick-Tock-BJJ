import React from 'react';
import './Home.scss';
import Section from '../Section/Section';
import Button from '../Button/Button';

const title = <div id="title">Tick-Tock Jiu-Jitsu</div>;

const subtitle = (
  <div id="subtitle">
    <div>Martial Arts School in North Charleston</div>
    <div>Opening at 10:00 AM</div>
  </div>
);

const callButton = (
  <div id="call-button">
    <Button>
      <a href="tel:843-608-8727">CALL (843) 608-8727</a>
    </Button>
  </div>
);

const bannerImage = (
  <div id="banner-image">
    <img
      src={process.env.PUBLIC_URL + '/assets/images/ttjj-banner-image.jpg'}
      alt="Tick-Tock Jiu-Jitsu"
    />
  </div>
);

const Home = () => {
  return (
    <Section>
      <div id="flex-container">
        {title}
        {subtitle}
        {callButton}
        {bannerImage}
      </div>
    </Section>
  );
};

export default Home;

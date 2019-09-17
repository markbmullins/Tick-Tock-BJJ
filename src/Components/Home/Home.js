import React from 'react';
import Section from '../Section/Section';
import Button from '../Button/Button';
import './Home.scss';
import { PHONE_NUMBER } from '../../vars';

const pub = process.env.PUBLIC_URL;
const bannerImgSrc = pub + '/assets/images/ttjj-banner-image.jpg';

const title = <div id="home-title">Tick-Tock Jiu-Jitsu</div>;

const subtitle = (
  <div id="home-subtitle">
    <div>Martial Arts School in North Charleston</div>
    <div>Opening at 10:00 AM</div>
  </div>
);

const callButton = (
  <div id="home-call-button">
    <Button>
      <a href={`tel:${PHONE_NUMBER}`}>CALL {PHONE_NUMBER}</a>
    </Button>
  </div>
);

const bannerImage = (
  <div id="home-banner-image">
    <img src={bannerImgSrc} alt="Tick-Tock Jiu-Jitsu" />
  </div>
);

const Home = () => {
  return (
    <Section>
      <div id="home-items-container">
        {title}
        {subtitle}
        {callButton}
        {bannerImage}
      </div>
    </Section>
  );
};

export default Home;

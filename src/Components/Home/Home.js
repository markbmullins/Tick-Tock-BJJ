import React from 'react';
import Section from '../Section/Section';
import Button from '../Button/Button';
import './Home.scss';
import { PHONE_NUMBER, BANNER_IMAGE, PAGE_TITLE, SUBTITLES } from '../../vars';

const title = <div id="home-title">{PAGE_TITLE}</div>;

const subtitle = (
  <div id="home-subtitle">
    {SUBTITLES.map((sub, index) => (
      <div key={sub + index}>{sub}</div>
    ))}
  </div>
);

const callButton = (
  <div id="home-call-button" className="flex-center">
    <Button href={`tel:${PHONE_NUMBER}`} customId="home-call-button-link">
      CALL {PHONE_NUMBER}
    </Button>
  </div>
);

const bannerImage = (
  <div id="home-banner-image">
    <img src={BANNER_IMAGE} alt={PAGE_TITLE} />
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

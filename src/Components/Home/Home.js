import React from 'react';
import Section from '../Section/Section';
import Button from '../Button/Button';
import './Home.scss';
import {
  PHONE_NUMBER,
  BANNER_IMAGE,
  PAGE_TITLE,
  SUBTITLES
} from '../../vars';

const title = <div id="home-title">{PAGE_TITLE}</div>;

const subtitle = (
  <div id="home-subtitle">
    {SUBTITLES.map(sub => <div>{sub}</div>)}
  </div>
);

const callButton = (
  <div id="home-call-button">
    <Button>
      <a id="home-call-button-link" href={`tel:${PHONE_NUMBER}`}>CALL {PHONE_NUMBER}</a>
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

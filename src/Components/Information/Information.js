import React from 'react';
import './Information.scss';
import Button from '../Button/Button';
import { mapSelector } from '../../helpers';
import { PHONE_NUMBER, MULTI_LINE_ADDRESS, HOURS } from '../../vars';

const buttonWidth = '19 vw';

const contact = (
  <div className="info-column">
    <div className="bold">Contact</div>
    <div className="info-button">
      <Button width={buttonWidth}>
        <a className="full-height-width" href={`tel:${PHONE_NUMBER}`}>
          Call Now
        </a>
      </Button>
    </div>
    <div>{PHONE_NUMBER}</div>
  </div>
);

const directions = (
  <div className="info-column">
    <div className="bold">Address</div>
    <div className="info-button">
      <Button width={buttonWidth} handleClick={mapSelector}>
        <div id="button-text">Get Directions</div>
      </Button>
    </div>
    <div className="nowrap">
      {MULTI_LINE_ADDRESS.map(line => (
        <div>{line}</div>
      ))}
    </div>
  </div>
);

const buildDay = (day, hours) => {
  return (
    <div className="day">
      <span className="day-name">{day}</span>
      {hours.map(hour => {
        return <span>{hour}</span>;
      })}
    </div>
  );
};

const buildDays = () => {
  for (var day in HOURS) {
    buildDay(day, HOURS[day]);
  }
};

const hours = (
  <div className="info-column">
    <div className="bold">Business Hours</div>
    <div>
      <div id="days-container">{buildDays()}</div>
    </div>
  </div>
);

const Info = () => {
  return (
    <div id="info">
      {contact}
      {directions}
      {hours}
    </div>
  );
};

export default Info;

import React from 'react';
import './Information.scss';
import Button from '../Button/Button';
import { mapSelector } from '../../helpers';
import { PHONE_NUMBER, MULTI_LINE_ADDRESS, HOURS } from '../../vars';

const buttonWidth = '19 vw';

const contact = (
  <div id="contact-column" className="info-column">
    <div id="contact-column-heading" className="bold">
      Contact
    </div>
    <div id="contact-column-phone-link" className="info-button">
      <Button
        width={buttonWidth}
        href={`tel:${PHONE_NUMBER}`}
        customId="contact-call-button"
      >
        Call Now
      </Button>
    </div>
    <div id="contact-column-phone-text">{PHONE_NUMBER}</div>
  </div>
);

const directions = (
  <div id="directions-column" className="info-column">
    <div id="directions-column-heading" className="bold">
      Address
    </div>
    <div id="directions-column-map-link" className="info-button">
      <Button width={buttonWidth} handleClick={mapSelector}>
        <div id="button-text">Get Directions</div>
      </Button>
    </div>
    <div id="directions-column-address-text" className="nowrap">
      {MULTI_LINE_ADDRESS.map((line, index) => (
        <div key={line + index}>{line}</div>
      ))}
    </div>
  </div>
);

const buildDay = (day, hours) => {
  return (
    <div key={day} id={`${day}-line`} className="day">
      <span id={day} className="day-name">
        {day}
      </span>
      {hours.map((hour, index) => {
        return (
          <span key={hour + index} id={`${day}-hours`}>
            {hour}
          </span>
        );
      })}
    </div>
  );
};

const buildDays = () => {
  let days = [];
  for (var day in HOURS) {
    days.push(buildDay(day, HOURS[day]));
  }
  return days;
};

const hours = (
  <div id="hours-column" className="info-column">
    <div id="hours-column-hours" className="bold">
      Business Hours
    </div>
    <div>
      <div id="days-container">{buildDays()}</div>
    </div>
  </div>
);

const Info = () => {
  return (
    <div id="info-section">
      {contact}
      {directions}
      {hours}
    </div>
  );
};

export default Info;

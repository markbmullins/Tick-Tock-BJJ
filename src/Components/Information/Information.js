import React from 'react';
import './Information.scss';
import Button from '../Button/Button';
import { mapSelector } from '../../helpers';
import { PHONE_NUMBER } from '../../vars';

const contact = (
  <div className="info-column">
    <div className="bold">Contact</div>
    <div className="info-button">
      <Button width="19 vw">
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
      <Button width="19 vw" handleClick={mapSelector}>
        <div id="button-text">Get Directions</div>
      </Button>
    </div>
    <div className="nowrap">
      <div>7671 Northwoods Blvd Unit H</div>
      <div>North Charleston, SC 29406</div>
      <div>United States</div>
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

const hours = (
  <div className="info-column">
    <div className="bold">Business Hours</div>
    <div>
      <div id="days-container">
        {buildDay('Mon: ', ['10:00 AM – 1:00 PM, ', '6:00 – 8:30 PM'])}
        {buildDay('Tue: ', ['10:00 AM – 1:00 PM, ', '5:00 – 8:00 PM'])}
        {buildDay('Wed: ', ['10:00 AM – 1:00 PM, ', '5:00 – 8:00 PM'])}
        {buildDay('Thu: ', ['10:00 AM – 1:00 PM, ', '5:00 – 8:00 PM'])}
        {buildDay('Fri: ', ['10:00 AM – 12:00 PM, ', '6:00 – 8:00 PM'])}
        {buildDay('Sat: ', ['10:00 AM – 1:00 PM '])}
        {buildDay('Sun: ', ['10:00 AM – 11:00 AM '])}
      </div>
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

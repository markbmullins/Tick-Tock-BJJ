import React from 'react';
import './Information.scss';
import DirectionButton from '../DirectionButton/DirectionButton';
import Button from '../Button/Button';

const Info = () => {
    
  return (
    <div id="info">
      <div id="info-contact">
        <div id="info-contact-title">Contact</div>
        <Button width="22vh">
            <a id="phone-link" href="tel:843-608-8727">Call Now</a>
        </Button>
        <div>(843) 608-8727</div>
      </div>

      <div id="info-address">
        <div id="info-address-title">Address</div>
        <DirectionButton />

        <div id="text-address">
          <div>7671 Northwoods Blvd Unit H</div>
          <div>North Charleston, SC 29406</div>
          <div>United States</div>
        </div>
      </div>

      <div id="info-hours">
        <div id="info-hours-title">Business Hours</div>
        <div>
          <div id="days-container">
            <div className="day">
              <span className="day-name">Mon: </span>
              <span className="hours1">10:00 AM – 1:00 PM, </span>
              <span className="hours2">6:00 – 8:30 PM</span>
            </div>
            <div className="day">
              <span className="day-name">Tue: </span>
              <span className="hours1">10:00 AM – 1:00 PM, </span>
              <span className="hours2">5:00 – 8:00 PM</span>
            </div>
            <div className="day">
              <span className="day-name">Wed: </span>
              <span className="hours1">10:00 AM – 1:00 PM, </span>
              <span className="hours2">5:00 – 8:00 PM</span>
            </div>
            <div className="day">
              <span className="day-name">Thu: </span>
              <span className="hours1">10:00 AM – 1:00 PM, </span>
              <span className="hours2">5:00 – 8:00 PM</span>
            </div>
            <div className="day">
              <span className="day-name">Fri: </span>
              <span className="hours1">10:00 AM – 12:00 PM, </span>
              <span>6:00 – 8:00 PM</span>
            </div>
            <div className="day">
              <span className="day-name">Sat: </span>
              <span className="hours1">10:00 AM – 1:00 PM</span>
            </div>
            <div className="day">
              <span className="day-name">Sun: </span>
              <span className="hours1">10:00 – 11:00 AM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

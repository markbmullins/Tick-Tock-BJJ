import React from 'react';
import './Contact.scss';
const url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.3891899178307!2d-80.05053068481385!3d32.940732680922785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe637b874630df%3A0xbce47f921f239b88!2sTick-Tock%20Jiu-Jitsu!5e0!3m2!1sen!2sus!4v1566626932028!5m2!1sen!2sus";
const Contact = () => {
  return (
    <div className="Contact" id="Contact">
      <div>
        <hr className="accent-bar" />
        <div className="title">Contact Us</div>
      </div>
      <div className="map">
        <iframe
          title="map"
          src={url}
          width="950"
          height="700"
          frameborder="0"
          style={{ border: '0' }}
          allowfullscreen=""
        />
      </div>

      <div id="info">
        <div id="info-contact">
          <div id="info-contact-title">Contact</div>
          <div>
            <div>Call Now</div>
          </div>
          <div>(843) 608-8727</div>
        </div>

        <div id="info-address">
          <div id="info-address-title">Address</div>
          <div>
            <div>GET DIRECTIONS</div>
          </div>
          <div>
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
                <div className="day-name">Mon:</div>
                <div  className="hours1">10:00 AM – 1:00 PM, </div>
                <div className="hours2">6:00 – 8:30 PM</div>
              </div>
              <div className="day">
                <div className="day-name">Tue:</div>
                <div className="hours1">10:00 AM – 1:00 PM, </div>
                <div className="hours2">5:00 – 8:00 PM</div>
              </div>
              <div className="day">
                <div className="day-name">Wed:</div>
                <div className="hours1">10:00 AM – 1:00 PM, </div>
                <div className="hours2">5:00 – 8:00 PM</div>
              </div>
              <div className="day">
                <div className="day-name">Thu:</div>
                <div className="hours1">10:00 AM – 1:00 PM, </div>
                <div className="hours2">5:00 – 8:00 PM</div>
              </div>
              <div className="day">
                <div className="day-name">Fri:</div>
                <div className="hours1">10:00 AM – 12:00 PM, </div>
                <div className="hours2">6:00 – 8:00 PM</div>
              </div>
              <div className="day">
                <div className="day-name">Sat:</div>
                <div className="hours1">10:00 AM – 1:00 PM</div>
              </div>
              <div className="day">
                <div className="day-name">Sun:</div>
                <div className="hours1">10:00 – 11:00 AM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

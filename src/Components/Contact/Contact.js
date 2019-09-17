import React from 'react';
import Section from '../Section/Section';
import Information from '../Information/Information';
import SectionHeader from '../SectionHeader/SectionHeader';
import './Contact.scss';
const url =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.3891899178307!2d-80.05053068481385!3d32.940732680922785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe637b874630df%3A0xbce47f921f239b88!2sTick-Tock%20Jiu-Jitsu!5e0!3m2!1sen!2sus!4v1566626932028!5m2!1sen!2sus';

const Contact = () => {
  return (
    <Section>
        <div id="contact-anchor" />
        <SectionHeader name="Contact Us"/>
        <div id="contact-map">
          <iframe
            title="map"
            src={url}
            width="100%"
            height="100%"
            style={{ border: '0' }}
          />
        </div>
        <Information />
    </Section>
  );
};

export default Contact;

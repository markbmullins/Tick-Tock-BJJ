import React from 'react';
import Section from '../Section/Section';
import Information from '../Information/Information';
import SectionHeader from '../SectionHeader/SectionHeader';
import './Contact.scss';
import { GOOGLE_MAPS_URL } from '../../vars';

const Contact = () => {
  return (
    <Section>
      <div id="contact-anchor" />
      <SectionHeader name="Contact Us" />
      {/* Google Maps iFrame */}
      <div id="contact-map">
        <iframe
          title="map"
          src={GOOGLE_MAPS_URL}
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

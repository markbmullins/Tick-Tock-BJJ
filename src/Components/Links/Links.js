import React from 'react';
import './Links.scss';
import SectionHeader from '../SectionHeader/SectionHeader';

const Links = () => {
  return (
    <div id="links-box" className="shadow-box">
      <SectionHeader name="Links" />
      <div id="links-container">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ticktockbjj.sites.zenplanner.com/freeTrial.cfm"
        >
          Sign up for a Free Class
        </a>
        <div>Already a member?</div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ticktockbjj.sites.zenplanner.com/login.cfm?message=RequireLogin"
        >
          Sign In Here
        </a>
      </div>
    </div>
  );
};

export default Links;

import React from 'react';
import './Links.scss';
import SectionHeader from '../SectionHeader/SectionHeader';

const freeTrialLink = (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://ticktockbjj.sites.zenplanner.com/freeTrial.cfm"
  >
    Sign up for a Free Class
  </a>
);

const memberLink = (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://ticktockbjj.sites.zenplanner.com/login.cfm?message=RequireLogin"
  >
    Sign In Here
  </a>
);

const Links = () => {
  return (
    <div className="shadow-box">
      <SectionHeader name="Links" />
      <div id="links-container">
        {freeTrialLink}
        <div>Already a member?</div>
        {memberLink}
      </div>
    </div>
  );
};

export default Links;

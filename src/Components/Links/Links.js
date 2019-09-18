import React from 'react';
import './Links.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import { FREE_TRIAL_LINK, FREE_TRIAL_TEXT, MEMBER_LINK } from '../../vars';

const freeTrialLink = (
  <a id="free-trial-link" target="_blank" rel="noopener noreferrer" href={FREE_TRIAL_LINK}>
    {FREE_TRIAL_TEXT}
  </a>
);

const memberLink = (
  <a id="member-link" target="_blank" rel="noopener noreferrer" href={MEMBER_LINK}>
    Sign In Here
  </a>
);

const Links = () => {
  return (
    <div id="links-shadow-box" className="shadow-box">
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

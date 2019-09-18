import React from 'react';
import './Links.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import { FREE_TRIAL_LINK, FREE_TRIAL_TEXT, MEMBER_LINK } from '../../vars';

const freeTrialLink = (
  <a target="_blank" rel="noopener noreferrer" href={FREE_TRIAL_LINK}>
    {FREE_TRIAL_TEXT}
  </a>
);

const memberLink = (
  <a target="_blank" rel="noopener noreferrer" href={MEMBER_LINK}>
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

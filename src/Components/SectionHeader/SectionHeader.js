import React from 'react';
import './SectionHeader.scss';

const SectionHeader = ({ name }) => {
  return (
    <div>
      <hr id="accent-bar" />
      <div id="section-header-title">{name}</div>
    </div>
  );
};

export default SectionHeader;

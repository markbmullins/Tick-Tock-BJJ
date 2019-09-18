import React from 'react';
import './SectionHeader.scss';

const SectionHeader = ({ name }) => {
  return (
    <div id={`section-header-${name}`}>
      <hr id="accent-bar" />
      <div id="section-header-title">{name}</div>
    </div>
  );
};

export default SectionHeader;

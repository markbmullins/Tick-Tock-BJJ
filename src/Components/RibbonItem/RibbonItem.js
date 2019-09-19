import React from 'react';
import './RibbonItem.scss';

const RibbonItem = ({ text, href, handleClick, icon }) => {
  const item = (
    <div className="bottom-ribbon-item">
      <div>{icon}</div>
      <div className="bottom-ribbon-text">{text}</div>
    </div>
  );
  if (href) {
    return <a href={href}>{item}</a>;
  } else if (handleClick) {
    return <div onClick={() => handleClick()}>{item}</div>;
  } else {
    return { item };
  }
};

export default RibbonItem;

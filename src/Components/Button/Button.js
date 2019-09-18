import React from 'react';
import './Button.scss';

const Button = ({href, customId, handleClick, children}) => {
  return (
    <a id={customId} href={href}>
    <div id="button" onClick={handleClick}>
      <div id="button-child">{children}</div>
    </div>
    </a>
  );
};

export default Button;

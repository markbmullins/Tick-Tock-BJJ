import React from 'react';
import './Button.scss';

const Button = props => {
  return (
    <div id="Button" onClick={props.handleClick}>
      <div id="child">{props.children}</div>
    </div>
  );
};

export default Button;

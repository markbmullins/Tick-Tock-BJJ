import React from 'react';
import './Button.scss';

const Button = props => {
  return (
    <div id="button" onClick={props.handleClick}>
      <div id="button-child">{props.children}</div>
    </div>
  );
};

export default Button;

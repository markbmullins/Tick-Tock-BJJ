import React from 'react';
import './Button.scss';

const Button = props => {

    const styles = {width:props.width, ...props.styles};
  return (
    <div id="Button" style = {styles}>
      <div id="child">{props.children}</div>
    </div>
  );
};

export default Button;

import React from 'react';
import './DirectionButton.scss';
import Button from '../Button/Button';

const DirectionButton = props => {
  const mapSelector = () => {
    const onIOS =
      navigator.platform.indexOf('iPhone') !== -1 ||
      navigator.platform.indexOf('iPad') !== -1 ||
      navigator.platform.indexOf('iPod') !== -1;

    const address = '7671 Northwoods Blvd H, North Charleston, SC 29406';
    const link = '://maps.google.com/maps/dir/?q=';

    if (onIOS) {
      window.open(`maps${link}${address}}`);
    } else {
      window.open(`https${link}${address}`);
    }
  };
  return (
    <div id="DirectionButton" onClick={() => mapSelector()}>
      <Button width={props.width || "22vh"}>
        <div id="button-text">Get Directions</div>
      </Button>
    </div>
  );
};

export default DirectionButton;

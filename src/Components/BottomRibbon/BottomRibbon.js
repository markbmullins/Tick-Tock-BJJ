import React from 'react';
import NavBarIcon from '../NavBarIcon/NavBarIcon';
import RibbonItem from '../RibbonItem/RibbonItem';
import './BottomRibbon.scss';
import { PHONE_NUMBER, PHONE_ICON, DIRECTIONS_ICON } from '../../vars';
import { mapSelector } from '../../helpers';

const BottomRibbon = () => {
  return (
    <div id="bottom-ribbon" className="flex-center">
      <RibbonItem
        text="Call Now"
        icon={<NavBarIcon imgSource={PHONE_ICON} />}
        href={`tel:${PHONE_NUMBER}`}
      />
      <RibbonItem
        text="Get Directions"
        icon={<NavBarIcon imgSource={DIRECTIONS_ICON} />}
        handleClick={mapSelector}
      />
    </div>
  );
};

export default BottomRibbon;

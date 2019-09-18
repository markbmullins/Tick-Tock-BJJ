import React from "react";
import NavBarIcon from "../NavBarIcon/NavBarIcon";
import "./BottomRibbon.scss";
import { PHONE_NUMBER, PHONE_ICON, DIRECTIONS_ICON } from "../../vars";

const ribbonItems = [
  {
    icon: <NavBarIcon imgSource={PHONE_ICON} />,
    text: "Call Now"
  },
  {
    icon: <NavBarIcon imgSource={DIRECTIONS_ICON} />,
    text: "Get Directions"
  }
];

const BottomRibbon = () => {
  return (
    <div id="bottom-ribbon" className="flex-center">
      {ribbonItems.map(item => {
        return (
          <div>
            <div>{item.icon}</div>
            <div>{item.text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BottomRibbon;

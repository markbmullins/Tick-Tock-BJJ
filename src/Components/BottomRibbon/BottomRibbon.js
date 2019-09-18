import React from "react";
import NavBarIcon from "../NavBarIcon/NavBarIcon";
import "./BottomRibbon.scss";
import { PHONE_NUMBER, PHONE_ICON, DIRECTIONS_ICON } from "../../vars";
import { mapSelector } from "../../helpers";

const ribbonItems = [
  {
    icon: <NavBarIcon imgSource={PHONE_ICON} />,
    text: "Call Now",
    href: `tel:${PHONE_NUMBER}`
  },
  {
    icon: <NavBarIcon imgSource={DIRECTIONS_ICON} />,
    text: "Get Directions",
    onClick: mapSelector
  }
];

const BottomRibbon = () => {
  return (
    <div id="bottom-ribbon" className="flex-center">
      {ribbonItems.map(item => {
        return (
          <a href={item.href}>
            <div
              className="bottom-ribbon-item"
              onClick={() => {
                if (item.onClick) {
                  item.onClick();
                }
              }}>
              <div>{item.icon}</div>
              <div className="bottom-ribbon-text">{item.text}</div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default BottomRibbon;

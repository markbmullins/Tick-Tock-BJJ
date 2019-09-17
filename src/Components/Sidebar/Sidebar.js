import React from 'react';
import './Sidebar.scss';
import { scrollIntoView } from '../../helpers';
import { ANCHORS } from '../../vars';

const Sidebar = ({ toggleMenu }) => {
  const sideBarItemClicked = anchor => {
    toggleMenu();
    scrollIntoView(anchor);
  };

  return (
    <div id="menu">
      <div id="menu-container">
        <div
          className="nav-item"
          onClick={() => sideBarItemClicked(ANCHORS.HOME)}
        >
          Home
        </div>
        <div
          className="nav-item"
          onClick={() => sideBarItemClicked(ANCHORS.CONTACT)}
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

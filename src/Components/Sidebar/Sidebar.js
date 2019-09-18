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
    <div id="sidebar">
      <div id="sidebar-container">
        <div id="sidebar-item-home"
          className="nav-item"
          onClick={() => sideBarItemClicked(ANCHORS.HOME)}
        >
          Home
        </div>
        <div id="sidebar-item-contact"
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

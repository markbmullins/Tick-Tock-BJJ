import React from 'react';
import './Sidebar.scss';
import { scrollIntoView } from '../../helpers';
import { Anchors } from '../../vars';

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
          onClick={() => sideBarItemClicked(Anchors.HOME)}
        >
          Home
        </div>
        <div
          className="nav-item"
          onClick={() => sideBarItemClicked(Anchors.CONTACT)}
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

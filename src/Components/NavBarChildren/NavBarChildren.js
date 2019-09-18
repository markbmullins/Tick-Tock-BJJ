import React from 'react';
import Hamburger from '../Hamburger/Hamburger';
import NavBarIcon from '../NavBarIcon/NavBarIcon';
import { mapSelector } from '../../helpers';
import './NavBarChildren.scss';
import { PHONE_NUMBER, PHONE_ICON, DIRECTIONS_ICON } from '../../vars';

const navBarLeft = (pageTitle, toggleMenu, menuOpen) => {
  return (
    <div id="navbar-left" className="flex-center">
      <div id="hamburger-container">
        <Hamburger isOpen={menuOpen} menuClicked={toggleMenu} />
      </div>
      <div>
        <div id="navbar-page-title">{pageTitle}</div>
      </div>
    </div>
  );
};

const navBarRight = () => {
  return (
    <div id="navbar-right">
        <div id="phone-container" className="flex-center">
          <NavBarIcon imgSource={PHONE_ICON} />
          <a id="phone-link" href={`tel:${PHONE_NUMBER}`}>
            Call Now
          </a>
        </div>
        <div id="directions-link" onClick={() => mapSelector()} className="flex-center">
          <NavBarIcon imgSource={DIRECTIONS_ICON} />
          <div id="directions-text" >
            Get Directions
          </div>
        </div>
    </div>
  );
};

const NavBarChildren = ({ pageTitle, toggleMenu, menuOpen }) => {
  return (
    <div id="navbar-children-container">
      {navBarLeft(pageTitle, toggleMenu, menuOpen)}
      {navBarRight()}
    </div>
  );
};

export default NavBarChildren;

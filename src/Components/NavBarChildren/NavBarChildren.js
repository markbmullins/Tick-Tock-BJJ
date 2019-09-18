import React from 'react';
import Hamburger from '../Hamburger/Hamburger';
import NavBarIcon from '../NavBarIcon/NavBarIcon';
import { mapSelector } from '../../helpers';
import './NavBarChildren.scss';
import { PHONE_NUMBER, PHONE_ICON, DIRECTIONS_ICON } from '../../vars';

const navBarRight = () => {
  return (
    <div id="navbar-right">
      <div>
        <div id="phone-container">
          <div className="float-right">
            <NavBarIcon imgSource={PHONE_ICON} />
            <a id="phone-link" href={`tel:${PHONE_NUMBER}`}>
              Call Now
            </a>
          </div>
        </div>
        <div id="directions-link" onClick={() => mapSelector()}>
          <NavBarIcon imgSource={DIRECTIONS_ICON} />
          <div id="directions-text" className="float-right">
            Get Directions
          </div>
        </div>
      </div>
    </div>
  );
};

const navBarLeft = (pageTitle, toggleMenu, menuOpen) => {
  return (
    <div id="navbar-left">
      <div id="hamburger-container">
        <Hamburger isOpen={menuOpen} menuClicked={toggleMenu} />
      </div>
      <div>
        <h2 id="navbar-page-title">{pageTitle}</h2>
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

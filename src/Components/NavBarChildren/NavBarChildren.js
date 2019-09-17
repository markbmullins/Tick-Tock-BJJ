import React from 'react';
import Hamburger from '../Hamburger/Hamburger';
import NavBarIcon from '../NavBarIcon/NavBarIcon';
import { mapSelector } from '../../helpers';
import './NavBarChildren.scss';

const phoneIconImgSource =
  process.env.PUBLIC_URL + '/assets/images/phone-icon.svg';
const directionsIconImgSource =
  process.env.PUBLIC_URL + '/assets/images/directions-icon.svg';

const navBarRight = () => {
  return (
    <div id="navbar-right">
      <div>
        <div id="phone-container">
          <div id="phone-link-container">
            <NavBarIcon imgSource={phoneIconImgSource} />
            <a href="tel:843-608-8727">Call Now</a>
          </div>
        </div>
        <div id="directions-container" onClick={() => mapSelector()}>
          <NavBarIcon imgSource={directionsIconImgSource} />
          <div id="directions-link-container">Get Directions</div>
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
        <h2 id="page-title">{pageTitle}</h2>
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

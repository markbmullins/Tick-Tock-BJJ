import React from 'react';
import './NavBarIcon.scss';

const NavBarIcon = ({ imgSource }) => {
  return (
    <div className="navbar-icon">
      <img src={imgSource} alt="Call Tick-Tock Jiu-Jitsu" />
    </div>
  );
};

export default NavBarIcon;

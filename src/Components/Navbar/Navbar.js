import React from 'react';
import './Navbar.scss';
import Sidebar from '../Sidebar/Sidebar';
import NavBarChildren from '../NavBarChildren/NavBarChildren';

function Navbar({ menuOpen, toggleMenu }) {
  return (
    <div className="Navbar">
      <NavBarChildren toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <div id="menu">
        <Sidebar toggleMenu={toggleMenu} menuOpen={menuOpen} />
      </div>
    </div>
  );
}

export default Navbar;

import React from 'react';
import './Navbar.scss';
import Sidebar from '../Sidebar/Sidebar';
import NavBarChildren from '../NavBarChildren/NavBarChildren';

function Navbar({ pageTitle, menuOpen, toggleMenu }) {
  return (
    <div className="Navbar">
      <NavBarChildren
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
        pageTitle={pageTitle}
      />
      <Sidebar toggleMenu={toggleMenu} menuOpen={menuOpen} />
    </div>
  );
}

export default Navbar;

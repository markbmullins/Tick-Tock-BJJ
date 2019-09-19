import React, { useState } from 'react';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import Links from '../Links/Links';
import BottomRobbon from '../BottomRibbon/BottomRibbon';
import './App.scss';
import { openSidebar, closeSidebar } from '../../helpers';
import { PAGE_TITLE } from '../../vars';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    menuOpen ? closeSidebar() : openSidebar();
    setMenuOpen(!menuOpen);
  };

  return (
    <React.StrictMode>
      <div className="App">
        <div id="top-anchor" />
        <Navbar
          pageTitle={PAGE_TITLE}
          toggleMenu={toggleMenu}
          menuOpen={menuOpen}
        />
        <div id="page-content">
          <Home id="Home" />
          <Links id="Links" />
          <Contact id="Contact" />
        </div>
        <BottomRobbon />
      </div>
    </React.StrictMode>
  );
}

export default App;

import React, { useState } from 'react';
import './App.scss';

// import About from "../About/About";
import Contact from '../Contact/Contact';
// import Gallery from "../Gallery/Gallery";
import Home from '../Home/Home';
// import Testimonials from "../Testimonials/Testimonials";
// import Updates from "../Updates/Updates";
import Navbar from '../Navbar/Navbar';
import Links from '../Links/Links';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    if (menuOpen) {
      document.getElementById('menu').style.width = '0px';
      setMenuOpen(false);
    } else {
      document.getElementById('menu').style.width = '20.313em';
      setMenuOpen(true);
    }
  };

  return (
    <div className="App">
      <div id="top-anchor" />
      <Navbar
        pageTitle="Tick-Tock Jiu-Jitsu"
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
     />
      <div className="content">
        <Home id="Home" />
        <Links id="Links" />
        <Contact id="Contact" />
      </div>
    </div>
  );
}

export default App;

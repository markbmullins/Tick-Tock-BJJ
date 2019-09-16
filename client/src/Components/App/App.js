import React from "react";
import "./App.scss";

// import About from "../About/About";
import Contact from "../Contact/Contact";
// import Gallery from "../Gallery/Gallery";
import Home from "../Home/Home";
// import Testimonials from "../Testimonials/Testimonials";
// import Updates from "../Updates/Updates";
import Navbar from "../Navbar/Navbar";
import Links from "../Links/Links";

function App() {
  return (
    <div className="App">
      <div id="top-anchor" />
      <Navbar pageTitle="Tick-Tock Jiu-Jitsu" />
      <div className="content">
        <Home id="Home" />
        {/* <Updates id="Updates" /> */}
        {/* <Testimonials id="Testimonials" /> */}
        {/* <About id="About" /> */}
        {/* <Gallery id="Gallery" /> */}
        <Links id="Links" />
        <Contact id="Contact" />
      </div>
    </div>
  );
}

export default App;

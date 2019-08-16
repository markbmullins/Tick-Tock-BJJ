import React from "react";
import "./App.scss";

import About from "../About/About";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import Home from "../Home/Home";
import Testimonials from "../Testimonials/Testimonials";
import Updates from "../Updates/Updates";
import Navbar from "../Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Home />
      <Updates />
      <Testimonials />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;

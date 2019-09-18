import React from "react";
import PropTypes from "prop-types";
import "./Hamburger.scss";

const Hamburger = ({ isOpen, menuClicked }) => {
  const openClass = isOpen ? "open" : "";

  return (
    <div id="burger-flex-box" className="burger-flex-box">
      <div id="sidebar-button" className={"menu-btn " + openClass} onClick={() => menuClicked()}>
        <div className="menu-btn-burger"></div>
      </div>
    </div>
  );
};

Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  menuClicked: PropTypes.func.isRequired
};
export default Hamburger;

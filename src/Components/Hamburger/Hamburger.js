import React from "react";
import PropTypes from "prop-types";
import "./Hamburger.scss";

const Hamburger = ({ isOpen, menuClicked }) => {
  const openClass = isOpen ? "open" : "";

  return (
    <div className="burger-container">
      <div className={"menu-btn " + openClass} onClick={() => menuClicked()}>
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

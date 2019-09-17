import React from 'react';
import Hamburger from '../Hamburger/Hamburger';
import { mapSelector } from '../../helpers';
import "./NavBarChildren.scss"

const NavBarChildren = ({pageTitle, toggleMenu, menuOpen}) => {
  return (
    <div className="flex-container">
      <div className="left-side">
        <div className="hamburger">
          <Hamburger isOpen={menuOpen} menuClicked={toggleMenu} />
        </div>
        <div>
          <h2 className="page-title">{pageTitle}</h2>
        </div>
      </div>

      <div className="right-side">
        <div>
          <div className="phone">
            <div className="phone-link">
              <a href="tel:843-608-8727">
                <div className="phone-logo">
                  <img
                    src={
                      process.env.PUBLIC_URL + '/assets/images/phone-icon.svg'
                    }
                    alt="Call Tick-Tock Jiu-Jitsu"
                  />
                </div>
                Call Now
              </a>
            </div>
          </div>
          <div className="directions" onClick={() => mapSelector()}>
            <div className="directions-logo">
              <img
                src={
                  process.env.PUBLIC_URL + '/assets/images/directions-icon.svg'
                }
                alt="Directions to Tick-Tock Jiu-Jitsu"
              />
            </div>
            <div className="directions-link">Get Directions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarChildren;

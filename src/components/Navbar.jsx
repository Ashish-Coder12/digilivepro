import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaFingerprint ,FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import Logo from '../Images/2.png';
import { Button } from "../Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {/* <FaFingerprint/>
             DigiLivePro */}
              <img classname='Digi' src={Logo} alt=""/>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-items">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-btn" onClick={closeMobileMenu}>
              {button ? (
                <Link
                  to="contact"
                  className="btn-link"
                  onClick={closeMobileMenu}
                >
                  <Button buttonStyle="btn--outline">Contact Us</Button>
                </Link>
              ) : (
                <Link
                  to="contact"
                  className="btn-link"
                  onClick={closeMobileMenu}
                >
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    Contact Us
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

import React from "react";
import "./Navbar.css";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div id="navback">
      <div className="sangam">
        <div className="navbarl">
          <div className="logo">
            <Logo />
          </div>
          <nav>
            <ul className="navbarlul">
              <li>
                <NavLink
                  exact
                  activeClassName="NavLink1"
                  className="NavLink"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName="NavLink1"
                  className="NavLink"
                  to="/AboutUs"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName="NavLink1"
                  className="NavLink "
                  to="/Plants"
                >
                  Plants
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName="NavLink1"
                  className="NavLink "
                  to="ContactUs"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="bannerheading1">Nirvani</div>
          <div id="bannerheading2">
            Flowers always make people better, happier, and more helpful; they
            are sunshine, food and medicine for the soul.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./Navbar.css";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-img">
      <div className="navbarl">
        <Logo />
        <nav>
          <ul>
            <li>
              <NavLink
                exact
                activeClassName="NavLink1"
                className="NavLink"
                to="/Home"
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
                className="NavLink"
                to="/Plants"
              >
                Plants
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="NavLink1"
                className="NavLink"
                to="ContactUs"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

import "./Footer.css";

import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div id="Maindiv">
      <div id="seconddiv">
        <div id="font-link">Nirvani Gardens</div>
      </div>
      <div id="font-link2">Bhaktapur-Naya Themi, Nepal</div>
      <div id="navbarl">
        <nav>
          <ul id="navbarul">
            <li>
              <NavLink className="NavLinkk" to="/AboutUs">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink className="NavLinkk" to="ContactUs">
                Contact Us
              </NavLink>
            </li>

            <li>
              <NavLink className="NavLinkk" to="/Plants">
                Our Vision
              </NavLink>
            </li>

            <li>
              <NavLink className="NavLinkk" to="/Plants">
                Our Plants
              </NavLink>
            </li>

            <li>
              <NavLink className="NavLinkk" to="ContactUs">
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink className="NavLinkk" to="/Plants">
                FAQs
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div id="icon">
        <ul id="iconul">
          <li>facebook</li>
          <li>insta</li>
          <li>twitter</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

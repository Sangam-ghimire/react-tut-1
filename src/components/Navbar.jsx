import React from "react";
import './Navbar.css'
import { ReactComponent as Logo } from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <div className="bg-img">

    <div className="navbarl">
      <Logo />
      <nav>
        <ul>
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/AboutUs">About Us</a>
          </li>
          <li>
            <a href="/Plants">Plants</a>
          </li>
          <li>
            <a href="ContactUs">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
    </div>
  );
};

export default Navbar;

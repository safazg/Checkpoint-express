import React, { useState } from "react";
import logo from "../../default-white.png";
import "./Nav.css";

function Nav() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="logo">
            <a href="#">
              {" "}
              <img src={logo} width="198" height="60" />
            </a>
          </div>
          <div
            id="mainListDiv"
            className={isActive ? "main_list show_list" : "main_list"}
          >
            <ul className="navlinks">
              <li>
                <a href="#">Home</a>
              </li>

              <li id="portfolio">
                <a href="./#home">About</a>
                <ul id="slim">
                  <li>
                    <a href="#">Information</a>
                  </li>
                  <li>
                    <a href="#">Why choose us?</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Offers</a>
              </li>
              <li>
                <a href="#">Agents</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <span
            className={isActive ? "navTrigger active" : "navTrigger"}
            onClick={() => setIsActive(!isActive)}
          >
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

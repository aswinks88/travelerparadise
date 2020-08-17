import React from "react";
import logo from "../img/logo.png";
export default function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="logo">
          <img
            src={logo}
            width="120px"
            height="120px"
            alt="logo"
            className="logo"
          />
        </div>
        <ul className="nav_list">
          <li className="nav_list-item">
            <a href="/" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav_list-item">
            <a href="/about" className="nav__link">
              About
            </a>
          </li>
          <li className="nav_list-item">
            <a href="/github" className="nav__link">
              Check this project on GitHub <i class="fab fa-github"></i>
            </a>
          </li>
        </ul>
        <div className="hamburger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      {/* <div className="weather">
        <div className="weather__icon">
          <i class="fas fa-cloud"></i>
        </div>
        <p className="weather_info">
          current weather <span>-7c </span>
        </p>
        <p className="weather_info">
          recent rain <span>10cm</span>
        </p>
      </div> */}
    </header>
  );
}

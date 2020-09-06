import React, { useEffect, useState } from "react";
import logo from "../img/logo.png";
export default function Header() {
  const [showMenu, setMenu] = useState(false);
  const [classes, setClasses] = useState({
    navbarLinks: "",
    close: "",
  });
  const toggleHamburger = () => {
    console.log(1);
    if (!showMenu) {
      setClasses({
        navbarLinks: "active",
        close: "closeham",
      });
      setMenu(true);
    } else {
      setClasses({
        navbarLinks: "",
        close: "",
      });
      setMenu(false);
    }
    // const burger = document.querySelector(".hamburger");
    // const nav = document.querySelector(".navbar-links");
    // // const navLinks = document.querySelectorAll(".nav_list-item");
    // burger.addEventListener("click", () => {
    //   nav.classList.toggle("active");
    //   console.log("clicked");
    //   //   navLinks.forEach((link, index) => {
    //   //     link.style.animation = `navLink 0.5s ease forwards ${index / 7 + 2}s`;
    //   //   });
    // });
  };

  return (
    <header>
      <div className={`hamburger ${classes.close}`} onClick={toggleHamburger}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className="menu">
        <div className="logo">
          <img src={logo} width="120px" height="120px" alt="logo" />
        </div>
        <div className={`navbar-links ${classes.navbarLinks}`}>
          <ul className="nav_list">
            <li className="nav_list-item">
              <a href="/" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav_list-item">
              <a href="/search" className="nav__link">
                Search
              </a>
            </li>
            <li className="nav_list-item">
              <a href="/about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav_list-item">
              <a
                href="https://github.com/aswinks88/travelerparadise"
                className="nav__link"
              >
                Check this project on GitHub <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
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

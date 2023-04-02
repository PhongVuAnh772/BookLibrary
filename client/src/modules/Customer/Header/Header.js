import {React, useState} from 'react'

import './Header.css'

function Header() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="#3" className="nav__brand">
        herdoy
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#5" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#6" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#7" className="nav__link">
            Portfolio
          </a>
        </li>
        <li className="nav__item">
          <a href="#7" className="nav__link">
            Skills
          </a>
        </li>
        <li className="nav__item">
          <a href="#1" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Header
import React, { useState } from "react";
import "./Header.scss";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const [show, setShow] = useState(false);
  const onBurgerClickHandler = () => {
    setShow(!show);
  };
  return (
    <>
      <header>
        <div className="logo">
          <a href="#main">
            <img src="/logo.png" alt="Montroe Mave" />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#main">Strona główna</a>
            </li>
            <li>
              <a href="#offer">Oferta</a>
            </li>
            <li>
              <a href="#about"> O nas</a>
            </li>
            <li>
              <a href="#contact">Kontakt</a>
            </li>
          </ul>
        </nav>
        <div className="burger" onClick={onBurgerClickHandler}>
          <a href="#main">
            <GiHamburgerMenu />
          </a>
        </div>
      </header>
      <nav className={`mobile_nav ${show ? "show" : ""}`}>
        <ul>
          <li>
            <a href="#main">Strona główna</a>
          </li>
          <li>
            <a href="#offer">Oferta</a>
          </li>
          <li>
            <a href="#about"> O nas</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;

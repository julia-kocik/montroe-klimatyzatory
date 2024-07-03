import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/logo.png" alt="Montroe Mave" />
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
    </header>
  );
};

export default Header;

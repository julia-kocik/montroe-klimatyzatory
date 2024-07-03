import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div id="main" className="hero_container">
      <div className="hero_content">
        <h1>Kompleksowa techniczna obsługa budynków</h1>
        <button>
          <a href="#offer">Poznaj naszą ofertę</a>
        </button>
      </div>
    </div>
  );
};

export default Hero;

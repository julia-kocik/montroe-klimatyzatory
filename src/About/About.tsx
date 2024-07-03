import React from "react";
import "./About.scss";
import { MdWorkOutline } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { LiaHandshake } from "react-icons/lia";
const About = () => {
  return (
    <div id="about" className="about_container">
      <div className="about_content">
        <p>
          Profesjonalni specjaliści z wieloletnim doświadczeniem
          <span>
            <MdWorkOutline />
          </span>
        </p>
        <p>
          Działamy w województwie mazowieckim, śląskim i opolskim
          <span>
            <FiMapPin />
          </span>
        </p>
        <p>
          Kompleksowe rozwiązania dopasowane do potrzeb klientów
          <span>
            <LiaHandshake />
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;

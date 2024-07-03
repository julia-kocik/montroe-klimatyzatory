import React from "react";
import "./Offer.scss";

const Offer = () => {
  return (
    <div id="offer" className="offer_container">
      <div className="offer_content">
        <ul>
          <li>
            Konserwacja, przeglądy i naprawy urządzeń i instalacji
            elektrycznych, grzewczych, gazowych, wentylacji, chłodu,
            klimatyzacji i kontroli dostępu
          </li>
          <li>Obsługa BMS.</li>
          <li>Przeglądy i naprawy systemu CCTV.</li>
          <li>Kontrola systemów ppoż. oraz SAP.</li>
          <li>Serwis Klimatyzacji.</li>
          <li>Prowadzenie dokumentacji UDT.</li>
        </ul>
      </div>
    </div>
  );
};

export default Offer;

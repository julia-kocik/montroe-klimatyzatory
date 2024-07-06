import React from "react";
import "./Offer.scss";

const Offer = () => {
  return (
    <div id="offer" className="offer_container">
      <div className="offer_content">
        <h1>
          Świadczymy usługi obsługi technicznej budynków. Nasi technicy dbają o
          bezpieczeństwo Państwa nieruchomości. Stały serwis i konserwacja
          instalacji budynkowych.
        </h1>
        <h2> Wykonujemy konserwację oraz przeglądy:</h2>
        <div className="offer_lists">
          <ul>
            <li>
              urządzeń i instalacji niskiego (do 1 KV) i średniego napięcia (do
              20 KV).
            </li>
            <li>
              urządzeń i instalacji zasilania gwarantowanego (UPS) oraz
              agregatów prądotwórczych.
            </li>
            <li>urządzeń i instalacji grzewczej.</li>
            <li>instalacji gazowej.</li>
            <li>urządzeń i instalacji wentylacji.</li>
          </ul>

          <ul>
            <li>urządzeń i instalacji klimatyzacji.</li>
            <li>urządzeń i instalacji kanalizacji.</li>
            <li>systemu CCTV.</li>
            <li>BMS.</li>
            <li>urządzeń i instalacji kontroli dostępu.</li>
            <li>systemów ppoż. oraz SAP.</li>
            <li>urządzeń i instalacji chłodu.</li>
          </ul>
        </div>
        <div className="offer_more">
          <h2> Ponadto świadczymy usługi:</h2>
          <ul>
            <li>„złotej rączki”</li>
            <li>Kontrola stanu budynków</li>
            <li>Prowadzenie ksiąg obiektów budowlanych</li>
            <li>Prowadzenie dokumentacji UDT</li>
            <li>Nadzór nad pracami remontowo – budowlanymi</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Offer;

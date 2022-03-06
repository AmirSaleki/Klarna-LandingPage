import React from "react";
import "./KlarnaApp.scss";
import appImage from "../../resources/icons/KlarnaApp.jpeg";
import qr from "../../resources/icons/qr.png";

const KlarnaApp = () => {
  return (
    <div className="app-container">
      <div className="left-side">
        <img src={appImage} alt="klarna-app" />
      </div>
      <div className="right-side">
        <h3>Die Klarna App</h3>
        <h1>Erlebe Smoooth Shopping.</h1>
        <h2>
          Hol dir jetzt die neue Klarna App und shoppe, wie und was du liebst.
        </h2>
        <ul>
          <li>Entdecke, speichere und teile deine Lieblingsartikel.</li>
          <li>
            Bezahle mit 1-Klick, verwalte deine Einkäufe und melde Retouren an.
          </li>
          <li>Hol dir Top Deals und bekomme Sale Alerts.</li>
        </ul>
        <img src={qr} alt="qr-code" />
      </div>
    </div>
  );
};

export default KlarnaApp;

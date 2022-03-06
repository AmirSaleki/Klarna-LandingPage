import React from "react";
import "./Banner.scss";
import qrCode from "../../resources/images/QR.png";
import downIcon from "../../resources/icons/arrow-down.gif";

const Banner = () => {
  return (
    <div className="bannerContainer">
      <div className="text">
        <div className="text-style">
          <h1>Bezahle überall mit Klarna.</h1>
          <h2>
            Mit unserem Shopping-Browser kannst du nach jeder Marke suchen und
            deine Lieblingsartikel in bis zu 14 Tagen bezahlen.
          </h2>
          <p>Hol dir die kostenlose App direkt auf dein Handy:</p>
          <img src={qrCode} alt="QR-Code" />
        </div>
      </div>
      <div className="image"></div>
      <img className="qr" src={downIcon} alt="arrow-down" />
    </div>
  );
};

export default Banner;

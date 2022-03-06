import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../resources/images/klarna-vector-logo.png";
import navIcon from "../../resources/icons/navbar-hm.png";
import navIcon1 from "../../resources/icons/navbar-zara.png";
import navIcon2 from "../../resources/icons/navbar-asos.png";
import navIcon3 from "../../resources/icons/navbar-spotify.png";
import qrCode from "../../resources/icons/QR-navbar.jpg";
import Modal from "../UI/Modal";

const Navbar = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [downloadApp, setDownloadApp] = useState(false);

  window.onscroll = () => {
    if (window.scrollY !== 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
      props.scrolledToTop();
    }
    window.scrollY >= 170 && props.isScrolled();
    window.scrollY >= 3500 && props.isScrolledCard();

    return () => {
      window.onscroll = null;
    };
  };

  const downloadAppHandler = () => {
    setDownloadApp(true);
  };

  const closeAppDownloadHandler = () => {
    setDownloadApp(false);
  };

  return (
    <div className={`navbar ${isScrolled && "bg-white"}`}>
      <div className="links">
        <img src={logo} alt="klarna-logo" />
        <a className="shop" href="/">
          Shoppe
          <div className="shop-list">
            <span>
              <ul className="shop-list-1">
                <li>So funktionert's</li>
                <li>Deals</li>
                <li>Trends</li>
                <li>Klarna Shops</li>
                <li>Browsererweiterung</li>
                <li>Extra O Blog</li>
                <li>Financial Wellness</li>
              </ul>
            </span>
            <span>
              <ul className="shop-list-2">
                <p>Kategorien</p>
                <li>Beauty</li>
                <li>Elektronik</li>
                <li>Entertainment</li>
                <li>Gesundheit & Ernährung</li>
                <li>Luxus</li>
                <li>Model</li>
                <li>Möbel</li>
                <li>Reisen</li>
                <li>Sport</li>
                <p>Alle anzeigen</p>
              </ul>
            </span>
            <span>
              <ul className="shop-list-3">
                <p>Hervorgehobene Shops</p>
                <li>
                  <img src={navIcon} alt="nav-logo" />
                  <p>H&M</p>
                </li>
                <li>
                  <img src={navIcon1} alt="nav-logo1" />
                  <p>Zara</p>
                </li>
                <li>
                  <img src={navIcon2} alt="nav-logo2" />
                  <p>Asos</p>
                </li>
                <li>
                  <img src={navIcon3} alt="nav-logo3" />
                  <p>Spotify</p>
                </li>
              </ul>
            </span>
          </div>
        </a>

        <a href="/">App</a>
        <a href="/">Klarna Card</a>
        <a href="/">Festgeldkonto</a>
        <a href="/">Bankkonto</a>
        <a className="dealer" href="/">
          Für Händler
          <div className="dealer-list">
            <span>
              <p className="dealer-title">Klarna für Händler</p>
            </span>
            <span>
              <ul>
                <p>Lösungen</p>
                <li>Rechnung</li>
                <li>Ratenkauf</li>
                <li>Sofort bezahlen</li>
                <li>Abo-Zahlungen</li>
                <li>Checkout</li>
                <li>In-store</li>
                <li>Klarna Open Banking</li>
              </ul>
            </span>
            <span>
              <ul>
                <p>Ressourcen</p>
                <li>Händlersupport</li>
                <li>Referenzen</li>
                <li>Demo Store</li>
                <li>Entwicklerseite</li>
                <li>Marketing Toolbox</li>
                <li>Klarna Partner</li>
              </ul>
            </span>
          </div>
        </a>
        <a className="help" href="/">
          Hilfe
          <ul className="help-list">
            <li>Kundenservice</li>
            <li>Händlersupport</li>
            <li>Betriebsstatus</li>
          </ul>
        </a>
      </div>
      <div className="buttons">
        <span>Login</span>
        <span className="download" onClick={downloadAppHandler}>
          Hol dir die App
        </span>
      </div>
      {downloadApp && (
        <Modal>
          <div className="modal">
            <h3 className="close-button" onClick={closeAppDownloadHandler}>
              X
            </h3>
            <img src={qrCode} alt="qr-code-navbar" />
            <section className="right-side">
              <h1>Alle deine Einkäufe in einer App.</h1>
              <p>
                Gleich ist es soweit. Du bist nur noch wenige Schritte davon
                entfernt, personalisierte Inspiration und Sonderangebote zu
                bekommen. Hol dir jetzt die Klarna App und eröffne dir eine
                ganze neue Shopping-Welt.
              </p>
            </section>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Navbar;

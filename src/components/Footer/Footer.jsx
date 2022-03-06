import React from "react";
import "./Footer.scss";
import logo from "../../resources/images/Klarna-white.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="s1">
        <img src={logo} alt="white-logo" />
      </section>
      <section className="s2">
        <ul>
          <p>Klarna</p>
          <li>Über uns</li>
          <li>Karriere</li>
          <li>Presse</li>
          <li>Datenschutz</li>
          <li>Anti-Geldwäsche</li>
          <li>Impressum</li>
          <li>Nachhaltigkeit</li>
        </ul>
      </section>
      <section className="s3">
        <ul>
          <p>Privat</p>
          <li>Mit Klarna einkaufen</li>
          <li>Klarna Shops</li>
          <li>Kundenservice</li>
          <li>Einloggen</li>
          <li>Feedback und Beschwerden</li>
          <li>Festgeld</li>
          <li>Extra O Blog</li>
          <li>Unser Versprechen</li>
        </ul>
      </section>
      <section className="s4">
        <ul>
          <p>Business</p>
          <li>Mit Klarna verkaufen</li>
          <li>Händlersupport</li>
          <li>Plattformen und Partner</li>
          <li>Entwicklerseite</li>
          <li>Händlerportal</li>
          <li>Betriebsstatus</li>
          <li>Klarna Open Banking</li>
          <li>On-site Messaging</li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;

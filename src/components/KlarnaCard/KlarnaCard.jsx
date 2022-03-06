import React, { useState, useEffect } from "react";
import "./KlarnaCard.scss";
import cardImage from "../../resources/icons/klarna-card.jpeg";

const KlarnaCard = (props) => {
  const [isScrolledHere, setIsScrolledHere] = useState(false);
  useEffect(() => {
    props.isScrolledToCard && setIsScrolledHere(true);
    props.backToTop === false && setIsScrolledHere(false);
    console.log(isScrolledHere);
  }, [props, isScrolledHere]);
  return (
    <div className="klarnaCard-container">
      <div className="flex">
        <div className="left-side">
          <img src={cardImage} alt="klarna-card" />
        </div>
        <div className={`right-side ${isScrolledHere && "start-animation"}`}>
          <h1>Setze auf die smarte Karte.</h1>
          <p>
            Klarna App und Klarna Card gehören zusammen wie Hemd und Kragen,
            Salz und Wasser, Yin und Yang,... Du verstehst schon. Mit der Klarna
            Card kannst du nicht nur online, sondern auch in Geschäften mit
            Klarna bezahlen. Setze auf die smarten Karten und erlebe, was in
            diesem Power-Paar steckt.
          </p>
          <a href="/">Mehr zur Klarna Card</a>
        </div>
      </div>
    </div>
  );
};

export default KlarnaCard;

import React, { useState, useEffect } from "react";
import "./Deals.scss";
import deals1 from "../../resources/icons/deals-1.jpeg";
import deals2 from "../../resources/icons/deals-2.jpeg";
import deals3 from "../../resources/icons/deals-3.jpeg";
import deals4 from "../../resources/icons/deals-4.jpeg";
import rightArrow from "../../resources/icons/right-arrow.png";
import Carousel from "../Carousel/Carousel";

const Deals = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    props.isScrolled === true && setIsScrolled(true);
    props.backToTop === false && setIsScrolled(false);
  }, [props]);
  return (
    <div className="dealerContainer">
      <h3>Deals</h3>

      <div className={`deals ${isScrolled && "animated"}`}>
        <section className="deal-1">
          <img src={deals1} alt="deals-1" />
          <h4>Trage sportlich-lässige Looks</h4>
          <p>JD Sports</p>
        </section>
        <section className="deal-2">
          <img src={deals2} alt="deals-2" />
          <h4>Styles für den Frühling</h4>
          <p>H&M</p>
        </section>
        <section className="deal-3">
          <img src={deals3} alt="deals-3" />
          <h4>Erreiche dein volles Potenzial</h4>
          <p>Nike</p>
        </section>
        <section className="deal-4">
          <img src={deals4} alt="deals-4" />
          <h4>Feiere deinen Style</h4>
          <p>Dress-for-less</p>
        </section>
      </div>
      <section className="link">
        <h3>Alle Deals and Gutscheine</h3>
        <img src={rightArrow} alt="rightArrow-icon" />
      </section>

      <h2>Unsere Top Shops</h2>
      <Carousel />
    </div>
  );
};

export default Deals;

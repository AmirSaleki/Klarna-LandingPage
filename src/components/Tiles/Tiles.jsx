import React from "react";
import "./Tiles.scss";
import first1 from "../../resources/icons/tiles-1-1.jpeg";
import first2 from "../../resources/icons/tiles-1-2.png";
import first3 from "../../resources/icons/tiles-1-3.jpeg";
import first4 from "../../resources/icons/tiles-1-4.jpeg";
import first5 from "../../resources/icons/tiles-1-5.jpeg";
import first6 from "../../resources/icons/tiles-1-6.png";
import first7 from "../../resources/icons/tiles-1-7.jpeg";
import first8 from "../../resources/icons/tiles-1-8.jpeg";
import second1 from "../../resources/icons/tiles-2-1.jpeg";
import second2 from "../../resources/icons/tiles-2-2.jpeg";
import second3 from "../../resources/icons/tiles-2-3.jpeg";
import second4 from "../../resources/icons/tiles-2-4.jpeg";
import second5 from "../../resources/icons/tiles-2-5.jpeg";
import second6 from "../../resources/icons/tiles-2-6.jpeg";
import second7 from "../../resources/icons/tiles-2-7.jpeg";
import second8 from "../../resources/icons/tiles-2-8.png";

const Tiles = () => {
  return (
    <div className="tiles-container">
      <p>Mode</p>
      <div className="first-tiles">
        <img src={first1} alt="first-tiles" />
        <img src={first2} alt="first-tiles" />
        <img src={first3} alt="first-tiles" />
        <img src={first4} alt="first-tiles" />
        <img src={first5} alt="first-tiles" />
        <img src={first6} alt="first-tiles" />
        <img src={first7} alt="first-tiles" />
        <img src={first8} alt="first-tiles" />
      </div>
      <h4>Zeige mehr Shops in der Kategorie Mode</h4>

      <p>Wir präsentieren: Female Founders</p>
      <div className="second-tiles">
        <img src={second1} alt="second-tiles" />
        <img src={second2} alt="second-tiles" />
        <img src={second3} alt="second-tiles" />
        <img src={second4} alt="second-tiles" />
        <img src={second5} alt="second-tiles" />
        <img src={second6} alt="second-tiles" />
        <img src={second7} alt="second-tiles" />
        <img src={second8} alt="second-tiles" />
      </div>
      <h4>Noch mehr Shops</h4>
    </div>
  );
};

export default Tiles;

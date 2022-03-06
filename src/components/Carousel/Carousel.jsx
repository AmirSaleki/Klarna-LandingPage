import React, { useState } from "react";
import "./Carousel.scss";
import img1 from "../../resources/icons/car-1.jpeg";
import img2 from "../../resources/icons/car-2.jpeg";
import img3 from "../../resources/icons/car-3.jpeg";
import img4 from "../../resources/icons/car-4.jpeg";
import img5 from "../../resources/icons/car-5.jpeg";
import img6 from "../../resources/icons/car-6.jpeg";
import img7 from "../../resources/icons/car-7.jpeg";
import img8 from "../../resources/icons/car-8.png";
import img9 from "../../resources/icons/car-9.jpeg";
import rightArrow from "../../resources/icons/right-arrow.png";
import leftArrow from "../../resources/icons/left-arrow.png";

const Carousel = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const previousHandler = () => {
    pageNumber > 0 && setPageNumber(pageNumber - 1);
  };
  const nextHandler = () => {
    pageNumber < 2 && setPageNumber(pageNumber + 1);
  };
  return (
    <div className="carousel-container">
      <section className="buttons">
        <img src={leftArrow} alt="left-arrow" onClick={previousHandler} />
        <img src={rightArrow} alt="right-arro" onClick={nextHandler} />
      </section>
      <div className="carousel">
        {pageNumber === 0 && (
          <section>
            <img src={img1} alt="carousel-img1" />
            <img src={img2} alt="carousel-img2" />
            <img src={img3} alt="carousel-img3" />
          </section>
        )}
        {pageNumber === 1 && (
          <section>
            <img src={img4} alt="carousel-img4" />
            <img src={img5} alt="carousel-img5" />
            <img src={img6} alt="carousel-img6" />
          </section>
        )}
        {pageNumber === 2 && (
          <section>
            <img src={img7} alt="carousel-img7" />
            <img src={img8} alt="carousel-img8" />
            <img src={img9} alt="carousel-img9" />{" "}
          </section>
        )}
      </div>
    </div>
  );
};

export default Carousel;

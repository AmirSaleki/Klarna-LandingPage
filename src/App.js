import "./App.scss";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Deals from "./components/Deals/Deals";
import KlarnaApp from "./components/KlarnaApp/KlarnaApp";
import Tiles from "./components/Tiles/Tiles";
import KlarnaCard from "./components/KlarnaCard/KlarnaCard";
import Footer from "./components/Footer/Footer";

function App() {
  const [isScrolledToDeal, setIsScrolledToDeal] = useState(false);
  const [isScrolledToCard, setIsScrolledToCard] = useState(false);

  const isScrolled = () => {
    setIsScrolledToDeal(true);
  };
  const isScrolledCard = () => {
    setIsScrolledToCard(true);
  };
  const scrolledToTop = () => {
    setIsScrolledToDeal(false);
    setIsScrolledToCard(false);
  };

  return (
    <>
      <Navbar
        isScrolled={isScrolled}
        isScrolledCard={isScrolledCard}
        scrolledToTop={scrolledToTop}
      />
      <div className="container">
        <Banner />
        <Deals isScrolled={isScrolledToDeal} backToTop={isScrolledToDeal} />
        <KlarnaApp />
        <Tiles />
        <KlarnaCard
          isScrolledToCard={isScrolledToCard}
          backToTop={isScrolledToCard}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;

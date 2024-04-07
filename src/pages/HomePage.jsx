// src/pages/HomePage.jsx

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div>
      <div className="card-container">
        <Link to="/beers">
          <img
            className="card-image"
            src="/src/assets/beers.png"
            alt="All Beers"
          />
          <div className="card-content">
            <h3>ALL BEERS</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
              similique placeat exercitationem necessitatibus, accusantium
              cupiditate iusto labore adipisci quos magni. Aliquam iusto
              assumenda molestias quod voluptatem quasi corporis nihil
              quibusdam.
            </p>
          </div>
        </Link>
        <Link to="/beers">
          <img
            className="card-image"
            src="/src/assets/random-beer.png"
            alt="All Beers"
          />
          <div className="card-content">
            <h3>RANDOM BEER</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
              similique placeat exercitationem necessitatibus, accusantium
              cupiditate iusto labore adipisci quos magni. Aliquam iusto
              assumenda molestias quod voluptatem quasi corporis nihil
              quibusdam.
            </p>
          </div>
        </Link>
        <Link to="/beers">
          <img
            className="card-image"
            src="/src/assets/new-beer.png"
            alt="All Beers"
          />
          <div className="card-content">
            <h3>NEW BEER</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
              similique placeat exercitationem necessitatibus, accusantium
              cupiditate iusto labore adipisci quos magni. Aliquam iusto
              assumenda molestias quod voluptatem quasi corporis nihil
              quibusdam.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default HomePage;

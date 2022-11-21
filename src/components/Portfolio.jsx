import React from "react";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  return (
    <div>
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="portfolio-container">
        <div>
          <div className="e-commerce-container">
            <h3>E-commerce</h3>
            <a
              href="https://stunning-vacherin-d5764e.netlify.app/"
              target="_blank"
            >
              {" "}
              <img
                className="img-portfolio"
                src="https://github.com/Eltinchoo/my-portfolio/blob/main/src/assets/e-commerce.png"
                alt=""
              />{" "}
            </a>
          </div>

          <div className="pokedex-container">
            <h3>Pokedex</h3>
            <a
              href="https://sparkling-dieffenbachia-719213.netlify.app/"
              target="_blank"
            >
              <img
                className="img-portfolio"
                src="https://github.com/Eltinchoo/my-portfolio/blob/main/src/assets/pokedex.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div>
          <div className="weatherapp-container">
            <h3>Weather-app</h3>
            <a
              href="https://guileless-sfogliatella-73f652.netlify.app/"
              target="_blank"
            >
              <img
                className="img-portfolio"
                src="https://github.com/Eltinchoo/my-portfolio/blob/main/src/assets/weather-app.png"
                alt=""
              />
            </a>
          </div>

          <div className="crud-container">
            <h3>Rick And Morty</h3>
            <a href="https://joyful-scone-2f84e4.netlify.app/" target="_blank">
              <img
                className="img-portfolio"
                src="https://github.com/Eltinchoo/my-portfolio/blob/main/src/assets/rick-and-morty.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

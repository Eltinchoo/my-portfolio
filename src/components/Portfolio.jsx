import React from "react";
import e_commerce from '../assets/img/e-commerce.png'
import rick_and_morty from '../assets/img/rick-and-morty.png'
import pokedex from '../assets/img/pokedex.png'
import weatherapp from '../assets/img/weather-app.png'


const Portfolio = () => {
  return (
    <div>
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="portfolio-container">
        <div>
          <div className="e-commerce-container">
            <h3 className="app-title">E-commerce</h3>
            <a
              href="https://stunning-vacherin-d5764e.netlify.app/"
              target="_blank"
            >
              {" "}
              <img
                className="img-portfolio"
                src={e_commerce}
                alt="e_commerce imagen"
              />{" "}
            </a>
          </div>

          <div className="pokedex-container">
            <h3 className="app-title">Pokedex</h3>
            <a
              href="https://sparkling-dieffenbachia-719213.netlify.app/"
              target="_blank"
            >
              <img
                className="img-portfolio"
                src={pokedex}
                alt="pokedex imagen"
              />
            </a>
          </div>
        </div>
        <div>
          <div className="weatherapp-container">
            <h3 className="app-title">Weather-app</h3>
            <a
              href="https://guileless-sfogliatella-73f652.netlify.app/"
              target="_blank"
            >
              <img
                className="img-portfolio"
                src={weatherapp}
                alt="weather app imagen"
              />
            </a>
          </div>

          <div className="rick-and-morty-container">
            <h3 className="app-title">Rick And Morty</h3>
            <a href="https://martin-paredes-rick-and-morty-wiki.netlify.app/" target="_blank">
              <img
                className="img-portfolio"
                src={rick_and_morty}
                alt="rick and morty imagen"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

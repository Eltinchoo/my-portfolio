import React from "react";
import martin from "../assets/img/martin.png";

const Home = () => {
  return (
    <div className="presentation">
      <div className="martin-container">
        <div className="tech-container">
          <h1 className="name">Hi! I'm Martin</h1>
          <h2 className="occupation">Front-end Web Developer</h2>
        </div>
        <div className="circle-img">
          <img className="martin-img" src={martin} alt="Martin Paredes" />
        </div>
        <p className="text-presentation">
          I love developing web applications and I love solving problems with a
          computer and a cup of coffee. I'm continually learning new technology
          and applying my new skills. It will be a pleasure to work together.
        </p>
        <a className="download-cv-btn" href="./cv.pdf" download>
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Home;

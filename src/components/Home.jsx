import React from "react";



const Home = () => {

  return (
    <div className="presentation">
      <div className="martin-container">
        
        <div className="tech-container">
          <h1 className="name">Martin Paredes</h1>
          <h2 className="occupation">Front-end Web Developer</h2>
          <p className="text-presentation">"Hi! I love programming and i love solving problems with a computer and a cup of coffee"</p>
          <a  className="download-cv-btn" href="./cv.pdf" download >Download CV</a>
        </div>
        <div className="circle-img">
          <img
            className="martin-img"
            src='https://github.com/Eltinchoo/my-portfolio/blob/main/src/assets/IMG-8934-removebg-preview.png'
            alt="Martin Paredes"
          />
        </div>
      </div>
     
     
    </div>
  );
};

export default Home;
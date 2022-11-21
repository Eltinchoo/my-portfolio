import React from "react";
import { Link } from "react-router-dom";


const MyNavBar = () => {
  return (
    <div className="nav-bar">
      <ul>
      <Link to="/"><li>Home</li></Link>  
      <Link to="/portfolio-martin-paredes"><li>Portfolio</li></Link>  
      <Link to="/about-me"><li>About me</li></Link>  
      </ul>
    </div>
  );
};

export default MyNavBar;

 import React from "react";
import "./Hero.css";
import handicon from "../../assets/Handicon.webp";
import arrow_icon from "../../assets/arrow_icon.webp";
import girl from "../../assets/girl_img.webp";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>

        <div className="hero-hand-icon">
          <p>new</p>
          <img src={handicon} alt="" height="60px" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
        <div className="hero-latest-btn">
          <div>Latest collections</div>
          <img src={arrow_icon} alt="" height="20px" />
        </div>
      </div>

      <div className="hero-right">
        <img src={girl} alt="" height="450px" />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import "./Home.css";
import woman from "../images/home/sunset1.jpg";
import man from "../images/home/sunset2.jpg";
import halfmoon from "../images/home/halfmoon.svg";
import squiggly from "../images/organic_3_squiggly.svg";
import green_curve from "../images/home/green_curve.svg";
import curve from "../images/home/curve.svg";
import dot from "../images/home/dot.svg";
import orange from "../images/home/orange_star.svg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-main">
        <div className="image-main">
          <div className="grid-cont">
            <div className="main-grid-item">
              <img
                className="purple-graphic"
                alt="purple graphic"
                src={halfmoon}
              />
            </div>
            <div className="main-grid-item">
              <img className="curve" alt="purple graphic" src={curve} />
            </div>
            <div className="main-grid-item">
              <img
                className="hiker"
                alt="a female hiker sitting on top of mountain and staring in the distance"
                src={woman}
              />
            </div>

            <div className="main-grid-item">
              <img className="hiker" alt="purple graphic" src={man} />
            </div>

            <div className="main-grid-item">
              <img
                className="purple-graphic"
                alt="purple graphic"
                src={green_curve}
              />
            </div>

            <div className="main-grid-item">
              <img
                className="purple-graphic"
                alt="purple graphic"
                src={squiggly}
              />
            </div>
            <div className="main-grid-item">
              <img className="purple-graphic" alt="purple graphic" src={dot} />
            </div>
          </div>
        </div>
        <div className="text-main">
          <div className="grid-cont">
            <div className="intro-item">
              <p>Prep for the adventure of your life</p>
            </div>

            <div className="intro-item">
              <img
                className="purple-graphic"
                alt="purple graphic"
                src={orange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

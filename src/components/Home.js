import React from "react";
import "./Home.css";
import woman from "../images/home/sunset1.jpg";
import man from "../images/home/sunset2.jpg";
import halfmoon from "../images/halfmoon.svg";
import blue from "../images/dot.svg";
import rainbow from "../images/rainbow.svg";
import squiggly from "../images/organic_3_squiggly.svg";
import yellow_tear from "../images/home/yellow_tear.svg";
import green_curve from "../images/green_curve.svg";
import curve from "../images/curve.svg";

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
              <img className="purple-graphic" alt="purple graphic" src={blue} />
            </div>
          </div>
        </div>
        <div className="text-main">
          <div className="grid-cont">
            <div className="intro-item">
              <p>Prep for the adventure of your life.</p>
            </div>
            <div className="intro-item">
              <img
                className="purple-graphic"
                alt="purple graphic"
                src={yellow_tear}
              />
            </div>
            <div className="intro-item">
              <img className="purple-graphic" alt="purple graphic" src={blue} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

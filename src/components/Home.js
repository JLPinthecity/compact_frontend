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
import Camping from "./CampingSVG";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-main">
        <div className="left">
          <div className="grid-cont">
            <div className="main-grid-item">
              <img
                className="graphic"
                alt="navy blue graphic shaped like half moon"
                src={halfmoon}
              />
            </div>
            <div className="main-grid-item">
              <img
                className="graphic"
                alt="dark yellow shaped noodle shape"
                src={curve}
              />
            </div>
            <div className="main-grid-item">
              <img
                className="hiker"
                alt="a female hiker sitting on top of mountain and staring in the distance"
                src={woman}
              />
            </div>
            <div className="main-grid-item">
              <img
                className="hiker"
                alt="male hiker staring off cliff during sunset"
                src={man}
              />
            </div>
            <div className="main-grid-item">
              <img className="graphic" alt="green blob" src={green_curve} />
            </div>
            <div className="main-grid-item">
              <img
                className="graphic"
                alt="blue squiggly line"
                src={squiggly}
              />
            </div>
            <div className="main-grid-item">
              <img className="purple-graphic" alt="purple graphic" src={dot} />
            </div>
          </div>

          <div className="text-section">testtesttest</div>
        </div>
        <div className="right">
          <div className="grid-cont">
            <div className="intro-item">
              <h3>Prep for the adventure of your life</h3>
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

      <div className="svg-section">
        <div className="svg-item">
          <Camping />;
        </div>
        <div className="svg-item">test</div>
        <div className="svg-item">test</div>
      </div>
    </div>
  );
};
export default Home;

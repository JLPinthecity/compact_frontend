import React from "react";
import woman from "../images/home/sunset1.jpg";
import man from "../images/home/sunset2.jpg";
import halfmoon from "../images/home/halfmoon.svg";
import squiggly from "../images/organic_3_squiggly.svg";
import green_curve from "../images/home/green_curve.svg";
import curve from "../images/home/curve.svg";
import dot from "../images/home/dot.svg";
import orange from "../images/home/orange_star.svg";
import Camping from "./SVGs/CampingSVG";
import Walking from "./SVGs/WalkingSVG";
import Explore from "./SVGs/ExploreSVG";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-main">
        <div className="home-left">
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
        </div>
        <div className="home-right">
          <div className="title-container">
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

      <div className="how-to-use">
        <p>
          Use Compact to calculate the weight of your backpack for day treks,
          overnight camping trips, and thru hikes.
        </p>
      </div>

      <div className="svg-section">
        <div className="svg-container">
          <div className="svg-item">
            <Camping />
          </div>
          <div className="compact-use">
            To calculate your base weight, start with the big three (backpack,
            sleeping bag and shelter). Be sure to include the weight of your
            ground insulation layer (sleeping pad), blanket, and clothes you'll
            be wearing to sleep.
          </div>
        </div>
        <div className="svg-container">
          <div className="svg-item">
            <Walking />
          </div>
          <div className="compact-use">
            What else to include? Add anything you'll be carrying in your pack
            including clothing, cooking essentials if you're bringing a portable
            stove and fuel, food, and water treatment supplies (filter).
          </div>
        </div>
        <div className="svg-container">
          <div className="svg-item">
            <Explore />
          </div>
          <div className="compact-use">
            Don't forget batteries, first-aid, and hygiene supplies. Once you
            know your base weight, tack on the likely weight of water you'll
            carry between water sources.
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="home-credits">
        <p>
          <b>IMAGE CREDITS</b>
        </p>
        <p>Hikers: Lane Smith/Unsplash</p>
        <p>SVGs: Undraw</p>
        <p>Orange heart: freepix</p>
      </div>
    </div>
  );
};
export default Home;

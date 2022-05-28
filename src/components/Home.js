import React from "react";
import "./Home.css";
import woman from "../images/home/sunset1.jpg";
import man from "../images/home/sunset2.jpg";
import comb from "../images/home/organic_1.svg";
import yellow_drop from "../images/yellow.svg";
import orange_squiggly from "../images/organic_2_squiggly.svg";
import corner_piece from "../images/organic_5_squiggly.svg";
import pink_drop from "../images/pink drop.svg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-main">
        <div className="horizontal-section">
          <div className="image-main">
            <div className="main-grid-item">
              <img
                className="female-hiker-image"
                alt="a female hiker sitting on top of mountain and staring in the distance"
                src={woman}
              />
            </div>
            <div className="main-grid-item">
              <img className="purple-graphic" alt="purple graphic" src={man} />
            </div>
            <div className="main-grid-item">
              <img className="purple-graphic" alt="purple graphic" src={comb} />
            </div>
            <div className="main-grid-item">
              <img
                className="purple-graphic"
                alt="purple graphic"
                src={pink_drop}
              />
            </div>
          </div>

          <div className="intro">test</div>
        </div>
      </div>
    </div>
  );
};
export default Home;

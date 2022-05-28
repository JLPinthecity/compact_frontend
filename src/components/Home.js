import React from "react";
import "./Home.css";
import woman from "../images/sunset1.jpg";
// import man from "../images/sunset2.jpg";
// import comb from "../images/organic_1.svg";
// import yellow from "../images/yellow.svg";
// import curl from "../images/ curl.svg";

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
              <img
                className="purple-graphic"
                alt="purple graphic"
                src={woman}
              />
            </div>
            <div className="main-grid-item"></div>
            <div className="main-grid-item"></div>
          </div>

          <div className="intro">test</div>
        </div>
      </div>
    </div>
  );
};
export default Home;

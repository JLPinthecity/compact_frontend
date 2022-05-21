import React from "react";
import "./About.css";
import tent from "../images/tent.jpg";
import pinkcurve from "../images/pink_curve.svg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-main">
        <div className="column left">
          <div className="grid-container">
            <img
              className="grid-item"
              alt="tent opening to trees in during daytime"
              src={tent}
            />

            <img
              className="grid-item"
              alt="tent opening to trees in during daytime"
              src={pinkcurve}
            />
          </div>
        </div>

        <div className="column right">
          <div className="about-statement">
            <h3>
              Think of Compact as the
              <i> first</i> stop on your epic journey.
            </h3>
            <p>
              Compact is a gear list planner built for thru-hikers and
              backpackers, built with React and Redux with a Rails API backend.
            </p>

            <p>
              Long-distance trails such as the Pacific Crest Trail, the
              Appalachian Trail, and the Continental Divide Trail span thousands
              of miles and take several months to walk end to end.{" "}
            </p>

            <p>
              Careful planning of survival gear and supplies is quintessential
              to survival. The ultimate goal of <i>Compact</i> is offer users an
              easy way to digitally track items in their pack, filter by what
              has been purchased, and view the overall weight of their pack.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

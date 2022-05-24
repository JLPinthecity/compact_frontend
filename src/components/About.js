import React from "react";
import "./About.css";
import tent from "../images/tent.jpg";
import mountain from "../images/mountain.jpg";
import pinkcurve from "../images/pink_curve.svg";
import squiggly from "../images/yellow_squiggly.svg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-main">
        <div className="column left">
          {/* SECTION 1 */}
          <div className="grid-container">
            <img
              className="grid-item"
              alt="tent opening to trees in during daytime"
              src={tent}
            />

            <img className="grid-item" alt="pink graphic" src={pinkcurve} />
          </div>

          {/* BACKGROUND IMG CONTAINER */}
          <div className="background-img-container">
            {/* SECTION 2 */}

            <div className="guide">
              <h3>What is thru hiking?</h3>

              <p className="content">
                Thru-hiking is the act of backpacking across a long-distance
                trail. In the U.S., the most renowned long trails include the
                Pacific Crest Trail (2,650 miles running from the Mexican border
                to the Canadian border), the Continental Divide Trail (3,028
                miles through New Mexico, Colorado, Wyoming, Idaho and Montana),
                and the Appalachian Trail (2,185 miles from Georgia to Maine).
                Thru-hikers typically carry everything they need from food and
                water, clothes, and supplies for days-long stints until they
                reach their next milestone or local town to rest and reload on
                supplies for their next stretch.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="column right">
          {/* SECTION 1 */}
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

          <div className="grid-container-right">
            <img
              className="grid-item-right"
              alt="a woman from behind with mountains in her foreground"
              src={mountain}
            />

            <img
              className="grid-item-right"
              alt="pink graphic"
              src={squiggly}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

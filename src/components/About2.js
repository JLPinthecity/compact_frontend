import React from "react";
import "./About.css";
import tent from "../images/tent.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-main">
        <div className="background-img-container">
          <div className="row one">
            <div className="column image-container">
              <img alt="tent opening to trees in during daytime" src={tent} />
            </div>

            <div className="column right">
              Bibendum enim facilisis gravida neque convallis a cras semper
              auctor.
            </div>

            <div className="row two">
              <div className="column background"></div>
            </div>

            <div className="row three">
              <div className="column left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>

              <div className="column right">
                Bibendum enim facilisis gravida neque convallis a cras semper
                auctor. Velit aliquet sagittis id consectetur purus ut. Sed
                velit dignissim sodales ut. Lorem ipsum dolor sit amet
                consectetur.
              </div>
            </div>

            <div className="row bottom">
              <div className="column_1">
                <h3>Best reasons start a thru hike</h3>
              </div>

              <div className="column_2">
                <p>
                  <b>01.</b> You'll break out of every personal rut—whether it's
                  your 9-to-5 or rinse-and-repeat daily routine. Get ready for
                  new sights, sounds, and unexpected splendor at every turn of
                  the trail.
                </p>
                <span>02.</span>
                <p>
                  2. You can say you walked across part of you country. Epic
                  party stories, anyone?
                </p>
                <p>
                  You need some alone time to heal, think, and be one with
                  nature.
                </p>
                <p>
                  You never considered yourself an outdoor person. It's time to
                  prove yourself wrong.
                </p>
                <p>
                  You love Lord of the Rings and, hey, it's the closest thing to
                  Frodo and Samwise's epic journey.
                </p>
                <p>The longtime friends you'll make along the way.</p>
                <p>Snacks galore!</p>
              </div>
            </div>

            <div className="row prompt">
              <h3>how to prep for a thru hike section </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

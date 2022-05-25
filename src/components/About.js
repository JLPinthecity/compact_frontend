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
                <br></br>
                <br></br>
                Thru-hikers typically carry everything they need from food and
                water, clothes, and supplies for days-long stints until they
                reach their next milestone or local town to rest and reload on
                supplies for their next stretch.
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

      <div className="row bottom">
        <div className="column_1">
          <h3>Reasons to commit to a thru hike:</h3>
        </div>

        <div className="column_2">
          <p>
            <sup>01.</sup>
            You'll break out of every personal rut—whether it's your 9-to-5 or
            rinse-and-repeat daily routine. Get ready for new sights, sounds,
            and unexpected splendor at every turn of the trail.
          </p>

          <p>
            <sup>02.</sup>
            You can say you walked across part of you country. Epic party
            stories, anyone?
          </p>
          <p>
            <sup>03.</sup>
            You need some alone time to heal, think, and be one with nature.
          </p>
          <p>
            <sup>04.</sup>
            You never considered yourself an outdoor person. It's time to prove
            yourself wrong.
          </p>
          <p>
            <sup>05.</sup>
            You love Lord of the Rings and, hey, it's the closest thing to Frodo
            and Samwise's epic journey.
          </p>
          <p>
            <sup>06.</sup>The longtime friends you'll make along the way.
          </p>
          <p>
            <sup>07.</sup>The snacks!
          </p>
        </div>
      </div>

      <div className="title">
        <h3>Guide to picking your first thru-hike</h3>
      </div>

      <div className="about-main">
        <div className="section one">
          <sup>(1.) Consider the distance</sup>
          <p>
            Picking a thru hike will likely depend on a mix of your experience
            level, physicality, savings (consider the cost of backpacking
            essentials and resupplies) and time you can afford to take off work.
          </p>
        </div>
        <div className="section two">
          <sup>(2.) Make the time work</sup>
          <p>
            Once you have an idea of which thru hike you want to do, check the
            official trail website for information about open dates for applying
            to permits and when you'll be potentially starting.
          </p>
        </div>
        <div className="section three">
          <sup>(3.) Find your idols</sup>
          <p>
            There’s plenty of vlog-style videos from thru-hikers on nearly every
            trail. Find someone you relate to (a fellow she-hiker, an
            ex-corporate person, first-time thru-hiker) and follow their journey
            on the trail. You’ll learn countless tips about the trail you want
            to finish. There’s no better way to get a feel for whether one trail
            is right for you.
          </p>
        </div>
      </div>
      <div>test test</div>
    </div>
  );
};

export default About;

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
              <div className="spacer"></div>
            </div>

            <div className="column right">
              Bibendum enim facilisis gravida neque convallis a cras semper
              auctor. Velit aliquet sagittis id consectetur purus ut. Sed velit
              dignissim sodales ut. Lorem ipsum dolor sit amet consectetur.
              Nullam vehicula ipsum a arcu cursus. Sed lectus vestibulum mattis
              ullamcorper velit sed ullamcorper morbi. Vestibulum sed arcu non
              odio euismod lacinia. Nisi quis eleifend quam adipiscing vitae
              proin. Sed arcu non odio euismod lacinia. Urna molestie at
              elementum eu. Quis enim lobortis scelerisque fermentum dui
              faucibus. Ipsum dolor sit amet consectetur adipiscing elit
              pellentesque habitant morbi. Suspendisse interdum consectetur
              libero id faucibus nisl. Sed viverra tellus in hac habitasse
              platea dictumst vestibulum rhoncus. Eget duis at tellus at urna
              condimentum mattis pellentesque id. Tellus in hac habitasse
              platea. Dolor sed viverra ipsum nunc aliquet. Pretium fusce id
              velit ut. Ullamcorper dignissim cras tincidunt lobortis.
            </div>
          </div>

          <div className="row two">
            <div className="column background"></div>
          </div>

          <div className="row three">
            <div className="column left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Natoque penatibus et magnis dis parturient. Ipsum faucibus vitae
              aliquet nec ullamcorper sit amet risus nullam. Mi bibendum neque
              egestas congue quisque egestas diam. Quis viverra nibh cras
              pulvinar mattis nunc sed. Curabitur vitae nunc sed velit. Vitae
              justo eget magna fermentum iaculis. Duis tristique sollicitudin
              nibh sit amet commodo nulla facilisi. Vitae turpis massa sed
              elementum tempus egestas sed sed risus. Amet facilisis magna etiam
              tempor orci eu. Facilisi cras fermentum odio eu feugiat. Pulvinar
              mattis nunc sed blandit libero volutpat sed cras ornare. Tellus
              molestie nunc non blandit massa enim. Sit amet mauris commodo quis
              imperdiet.`
            </div>

            <div className="column right">
              Bibendum enim facilisis gravida neque convallis a cras semper
              auctor. Velit aliquet sagittis id consectetur purus ut. Sed velit
              dignissim sodales ut. Lorem ipsum dolor sit amet consectetur.
              Nullam vehicula ipsum a arcu cursus. Sed lectus vestibulum mattis
              ullamcorper velit sed ullamcorper morbi. Vestibulum sed arcu non
              odio euismod lacinia. Nisi quis eleifend quam adipiscing vitae
              proin. Sed arcu non odio euismod lacinia. Urna molestie at
              elementum eu. Quis enim lobortis scelerisque fermentum dui
              faucibus. Ipsum dolor sit amet consectetur adipiscing elit
              pellentesque habitant morbi. Suspendisse interdum consectetur
              libero id faucibus nisl. Sed viverra tellus in hac habitasse
              platea dictumst vestibulum rhoncus. Eget duis at tellus at urna
              condimentum mattis pellentesque id. Tellus in hac habitasse
              platea. Dolor sed viverra ipsum nunc aliquet. Pretium fusce id
              velit ut. Ullamcorper dignissim cras tincidunt lobortis.
            </div>
          </div>

          <div className="row bottom">
            <div className="column_1">
              <h3>Best reasons start a thru hike</h3>
            </div>

            <div className="column_2">
              <ul>
                <li>
                  You'll break out of every personal rut—whether it's your
                  9-to-5 or rinse-and-repeat daily routine. Get ready for new
                  sights, sounds, and unexpected splendor at every turn of the
                  trail.
                </li>
                <li>
                  2. You can say you walked across part of you country. Epic
                  party stories, anyone?
                </li>
                <li>
                  You need some alone time to heal, think, and be one with
                  nature.
                </li>
                <li>
                  You never considered yourself an outdoor person. It's time to
                  prove yourself wrong.
                </li>
                <li>
                  You love Lord of the Rings and, hey, it's the closest thing to
                  Frodo and Samwise's epic journey.
                </li>
                <li>The longtime friends you'll make along the way.</li>
                <li>Snacks!</li>
              </ul>
            </div>
          </div>

          <div className="row prompt">
            <h3>how to prep for a thru hike section </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-column">
          <h3>
            Take a hike. <i>Adventure awaits.</i>
          </h3>
        </div>
        <div className="footer-column">
          <h3 className="footer-menu-item">LINK TK</h3>
        </div>
        <div className="footer-column">
          <h3 className="footer-menu-item">LINK TK</h3>
        </div>
        <div className="footer-column">
          <h3 className="footer-menu-item">LINK TK</h3>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="copyright">© 2022, Compact </span>
      </div>
    </div>
  );
};

export default Footer;

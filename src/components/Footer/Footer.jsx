import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-copyright">
        &copy; 2025 Anjali. All rights reserved.
      </p>

      <div className="footer-links">
        <a href="https://wa.me/7622818504">
          <img className="path-to-footer-link" src={assets.whatsapp} />
        </a>{" "}
        |
        <a href="https://instagram.com/oz_a_njali">
          <img src={assets.instagram} className="path-to-footer-link" />
        </a>{" "}
        |
        <a href="https://github.com/OzAnjali">
          <img src={assets.github} className="path-to-footer-link" />
        </a>
      </div>

      <p className="footer-msg">
        Turning ideas into code, and dreams into design.
        <br />
        Let's build something extraordinary together.
      </p>
    </div>
  );
};

export default Footer;

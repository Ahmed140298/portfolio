import React from "react";
import "./Footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="logo">
        Ahmed Mahamed
      </a>
      <ul className="links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer-socials">
        <a href="https://www.instagram.com/typeerror_/">
          <AiFillInstagram />
        </a>
        <a href="https://www.facebook.com/ahmed.miraafmohamed">
          <AiFillFacebook />
        </a>
      </div>
      <div className="copy-right">
        <small>&copy; Ahmed Mahamed. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;

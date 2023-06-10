import React from "react";
import "./Home.css";
import CV from "../Assets/CV.pdf";
import HomeImg from "../Assets/about.png";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Home = () => {
  return (
    <div>
      <header>
        <section className="container header" id="home">
          <h1 className="stroke-text">Hello There!</h1>
          <h5>I'm Ahmed Mahamed</h5>
          <h5 className="text-light">Frontend Developer</h5>
          <div className="cta">
            <a className="btn" href={CV} download>
              Download CV
            </a>
            <a className="btn primary-btn" href="#contact">
              Get in touch
            </a>
          </div>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/ahmed-sharif-mahamed-031984261/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://twitter.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter />
            </a>
            <a
              href="https://github.com/Ahmed140298"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
          </div>
          <div className="home-img">
            <img src={HomeImg} alt="" />
          </div>
          <a href="#contact" className="scroll-down">
            Scroll Down
          </a>
        </section>
      </header>
    </div>
  );
};

export default Home;

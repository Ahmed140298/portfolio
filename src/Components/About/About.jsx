import React from "react";
import "./About.css";
import AboutImg from "../Assets/home.png";
import { AiFillHtml5 } from "react-icons/ai";
import { ImCss3 } from "react-icons/im";
import { BsFillBootstrapFill } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { SiJquery } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About Me</h2>
      <div className="container about">
        <div className="about-img">
          <div className="img">
            <img
              src={AboutImg}
              style={{ width: "22.5rem", height: "22.5rem" }}
              alt=""
            />
          </div>
        </div>
        <div className="about-content">
          <h1 className="stroke-text">Technical Skills</h1>
          <div className="cards">
            <article className="card">
              <AiFillHtml5 className="icons"/>
              <ImCss3 className="icons"/>
              <small>HTML5</small>
              <small> CSS3</small>
            </article>
            <article className="card">
              <SiJquery className="icons"/>
              <BsFillBootstrapFill className="icons"/>
              <small>jQuery</small>
              <small> Bootstrap</small>
            </article>
            <article className="card">
              <IoLogoJavascript className="icons"/>
              <FaReact className="icons"/>
              <small>JavaScript</small>
              <small> React</small>
            </article>
          </div>
          <article className="about-text">
            <p>
              I’m an aspiring front-end web developer. I graduate from a 16-week
              developer bootcamp where I have worked on two major projects
              coding in JavaScript ES6, HTML, CSS, Bootstrap, jQuery and react.
              I also code in my spare time to further my knowledge of coding. I
              am a positive, can-do person and I enjoy finding ways to make
              things run more efficiently in all aspects of life. I enjoy and
              take pride in overcoming challenges.
            </p>
            <a href="#contact" className="btn primary-btn">
              Get In Touch
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;

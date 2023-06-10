import React from "react";
import "./About.css";
import AboutImg from "../Assets/home.png";
import { AiFillHtml5 } from "react-icons/ai";
import { ImCss3 } from "react-icons/im";
import { BsFillBootstrapFill } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { SiJquery } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import {IoLogoNodejs} from 'react-icons/io';

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
          <p>
            Through my studies, I've gained a solid understanding of computer science concepts. 
            In addition I have dedicated a lot of my free time to learn modern web development 
            concepts and general porgramming skills.
            As a self-motivated learner, I've explored a variety of online resources, including Edx skills bootcamp. 
            First I started with The Web Development Bootcamp that gave me all the skills I need to 
            start building websites from scratch. From there, I went on to complete the Modern React 
            with Redux course that helped me master all the fundamental concepts behind React and Redux 
            applications.
          </p>
          <div className="cards">
            <article className="card">
              <AiFillHtml5 className="icons"/>
              <ImCss3 className="icons"/>
              <IoLogoNodejs className="icons"/>
              <small>HTML5</small>
              <small> CSS3</small><br />
              <small>NodeJs</small>
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

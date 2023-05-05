import React from "react";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact">
        <div className="contact-options">
          <article className="contact-option">
            <AiOutlineMail className="contact-icons"/>
            <h4>Email</h4>
            <h5>amahamed666@gmail.com</h5>
            <a
              href="mailto: amahamed666@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact-icons"/>
            <h4>WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone+447493395462"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact-option">
            <AiFillLinkedin className="contact-icons"/>
            <h4>LinkedIn</h4>
            <h5>Connect with me</h5>
            <a
              href="https://www.linkedin.com/in/ahmed-sharif-mahamed-031984261/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="Full name" required />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            required
          />
          <textarea
            name="message"
            id="message"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" className="btn primaty-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

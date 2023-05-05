import React, { useState } from "react";
import "./header.css";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { FcBusinessContact } from "react-icons/fc";

const Header = () => {
  const [active, setActive] = useState("#");

  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <FaUserAlt />
      </a>
      <a
        href="#projects"
        onClick={() => setActive("#projects")}
        className={active === "#projects" ? "active" : ""}
      >
        <GrProjects />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <FcBusinessContact />
      </a>
    </nav>
  );
};

export default Header;

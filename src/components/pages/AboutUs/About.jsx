import React from "react";
import Hero from "../../Hero";
import Svga from "./4.svg";

import "./About.css";
import { AboutObjTwo } from "./AboutData";

function About() {
  return (
    <>
      <div className="AboutUs">
        <h1>About Us</h1>
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odit
          commodi voluptates ducimus in fugiat maiores, totam, dicta consequatur
          minus enim. Nihil, officia adipisci."
        </p>
      </div>
      <Hero img={Svga} {...AboutObjTwo} />
    </>
  );
}

export default About;

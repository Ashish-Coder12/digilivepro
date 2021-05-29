import React from "react";
import Hero from "../../Hero";
import Cardsec from "../CardSec/Cardsec";
import Tax from "../../tax/Tax";
import { homeObjOne, homeObjTwo } from "./Data";
import Svga from "../../../Images/1.1.jpg";
import Svgb from "./Images/2.svg";

function Home() {
  return (
    <>
      <Hero img={Svga} {...homeObjOne} />
      <Tax/>
      <Cardsec />
    </>
  );
}

export default Home;

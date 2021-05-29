import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import "./Hero.css";

const Hero =({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  desceription,
  buttonLable,
  img,
  alt,
  imageStart,
  links,
}) => {
  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imageStart === "start" ? "row-reverse " : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtite dark"
                  }
                >
                  {desceription}
                </p>
                <Link to={links}>
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    {buttonLable}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

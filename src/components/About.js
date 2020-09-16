import React from "react";
import avatar from "../images/avatar.svg";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="lg:flex lg:flex-no-wrap justify-center object-center">
      <h1 className="text-3xl text-center pt-32">About me</h1>
      <Fade>
        <div className="mt-64 lg:w-4/12">
          <p className="lg:text-justify p-4 text-justify">
            Hello! I'm Pedro, a software engineer based in Chicago,IL.
            <br />
            <br />I graduated as an Electronic Engineer in Venezuela, since then
            I worked more that 6 years in infrastructure as a Backup Engineer and IT
            support.
          </p>
        </div>
      </Fade>
      <Fade top>
        <img className="lg:mt-64" src={avatar} alt="avatar" />
      </Fade>
    </div>
  );
};

export default About;

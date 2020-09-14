import React from "react";
import avatar from "../images/avatar.svg";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="flex flex-wrap lg:flex-no-wrap justify-center object-center">
      <Fade>
        <div className="mt-64 w-4/12">
          <p className="text-justify">
            Hello! I'm Pedro, a software engineer based in Chicago,IL.
            <br />
            <br />I graduated as an Electronic Engineer in Venezuela, since then
            I worked more that 6 years in infrastructure as a Backup Engineer and IT
            support.
          </p>
        </div>
      </Fade>
      <Fade>
        <img className="mt-64" src={avatar} alt="avatar" />
      </Fade>
    </div>
  );
};

export default About;

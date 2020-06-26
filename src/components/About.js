import React from "react";
import avatar from "../images/avatar.svg";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="flex flex-wrap lg:flex-no-wrap justify-center object-center">
      <Fade right>
        <div className="mt-64 w-3/6 text-justify">
          <p>
            Hello! I'm Pedro, a software engineer based in Chicago,IL.
            <br /><br />I enjoy creating things that live on the internet, whether
            that be websites, applications, or anything in between. My goal is
            to always build products that provide pixel-perfect, performant
            experiences.
          </p>
        </div>
      </Fade>
      <Fade right>
        <img className="mt-64" src={avatar} alt="avatar" />
      </Fade>
    </div>
  );
};

export default About;

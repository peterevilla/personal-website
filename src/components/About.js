import React from "react";
import avatar from "../images/avatar.svg";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="lg:flex lg:flex-no-wrap justify-center object-center">
      <Fade>
        <div className=" mt-64 lg:w-2/5">
          <h1 className="text-3xl pr-8 pl-4">About me</h1>
          <p className="lg:text-justify p-4 text-justify">
            Hello, I am Pedro, I am a software Engineer based in Chicago, IL.
            <br/>
            <br/>
            I enjoy creating things that live on the Internet. I love to develop
            design-driven applications and explore new technologies. <br/><br/>
            I graduated
            from Electronic Engineering and after 6 year experience in IT and
            infrastructure I decided to make a turn in my career path adding
            real value experience to my career as a developer.
          </p>
        </div>
      </Fade>
      <img className="lg:mt-64" src={avatar} alt="avatar" />
    </div>
  );
};

export default About;

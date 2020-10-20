import React from "react";
import avatar from "../images/avatar.svg";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="lg:flex lg:flex-no-wrap justify-center object-center">
      <Fade>
        <div className=" mt-56 lg:w-2/5">
          <h1 className="text-3xl pr-8 pl-4">About me</h1>
          <p className="lg:text-justify p-4 text-justify">
            Hello, I am Pedro, I am a software Engineer based in Chicago, IL.
            <br/>
            <br/>
            I enjoy creating things that live on the Internet. I love to develop
            design-driven applications and explore new technologies. I graduated
            from Electronic Engineering and after 6 year experience in IT and
            infrastructure I decided to make a turn in my career path adding
            real value experience to my career as a developer.<br/><br/>
            Here are a few technologies I've been working with recently:<br/><br/>
            <div className="flex">
            <ul className="mr-8">
              <li>JavaScript</li>
              <li>React</li>
              <li>AWS</li>
            </ul>
            <ul className="mx-8">
              <li>Graphql</li>
              <li>Node.js</li>
              <li>Redux</li>
            </ul>
            </div>
          </p>
        </div>
      </Fade>
      <img className="lg:mt-64" src={avatar} alt="avatar" />
    </div>
  );
};

export default About;

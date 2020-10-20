import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Typical from "react-typical";
import GithubIcon from "./components/icons/GithubIcon.js";
import InstagramIcon from "./components/icons/InstagramIcon.js";
import LinkedInIcon from "./components/icons/LinkedInIcon.js";
import avatar2 from "./images/avatar2.svg";

const bg = require("./bg/bg.svg");


function App() {
 
  return (
    <div className="font-light font-montserrat">
      <div
        
        className="h-screen bg-opacity-25 bg-no-repeat  bg-bottom"
        style={{ backgroundImage: "url(" + bg + ")"}}
      >
        <div className="lg:flex  mt-16 ">
          <div className="lg:mr-64 lg:w-1/4 ml-16 ">
            <div className="font-bold">
              <Typical
                steps={["Hi,", 1000, "Hi, I am Pedro Revilla", 500]}
                wrapper="p"
              />
            </div>

            <h2 className=" text-indigo-500 text-bold">Software Engineer</h2>
            {/* <h2 className="italic text-gray-800">Full Stack Developer</h2> */}
          </div>
          <div>
            <NavBar />
            <ul className="ml-32 mt-64 lg:ml-16 lg:mt-16 ">
              <a href="mailto:peterevilla@gmail.com.com">peterevilla@gmail.com</a>
              <div className="flex lg:justify-center p-2">
                <a href="https://github.com/peterevilla" className="m-2">
                  <GithubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/pedro-revilla/"
                  className="m-2"
                >
                  <LinkedInIcon />
                </a>
                <a href="https://www.instagram.com/peterx22/" className="m-2">
                  <InstagramIcon />
                </a>
              </div>
            </ul>
          </div>
          
        </div>
        
      </div>

      <section className="h-screen mb-64" id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section className="h-screen" id="projects">
        <Projects />
        <div className="flex mt-40  flex-col items-center">
        <img className="lg:mt-8" src={avatar2} alt="avatar2" />
        <h2>Let's grab a virtual coffee</h2>
        <div className="flex justify-center mb-8 p-4">
          <a href="https://github.com/peterevilla" className="m-2">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/pedro-revilla/" className="m-2">
            <LinkedInIcon />
          </a>
          <a href="https://www.instagram.com/peterx22/" className="m-2">
            <InstagramIcon />
          </a>
        </div>
      </div>
      </section>
     
    </div>
  );
}

export default App;

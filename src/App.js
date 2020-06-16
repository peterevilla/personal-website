import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Typical from "react-typical";
import GithubIcon from "./components/icons/GithubIcon.js";
import InstagramIcon from "./components/icons/InstagramIcon.js";
import LinkedInIcon from "./components/icons/LinkedInIcon.js";

// const bg = require('./bg/bg.png')
// style={{ backgroundImage: "url("+bg+")" }}
function App() {
  return (
    <div>
      <div className="h-screen">
        <div className="lg:flex  mt-16 ">
          <div className="lg:mr-64 lg:w-1/4 ml-16 ">
            <div className="font-bold">
              <Typical
                steps={["Hi,", 1000, "Hi, I am Pedro Revilla", 500]}
                wrapper="p"
              />
            </div>

            <h2 className="text-blue-700 text-bold">Software Engineer</h2>
            {/* <h2 className="italic text-gray-800">Full Stack Developer</h2> */}
          </div>
          <div>
            <NavBar />
            <ul className="ml-32 mt-32 lg:ml-16 lg:mt-16">
              <a href="mailto:webmaster@example.com">peterevilla@gmail.com</a>
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

      <section className="h-screen" id="about">
        <About />
      </section>
      <section className="h-screen" id="skills">
        <Skills />
      </section>
      <section className="h-screen" id="projects">
        <Projects />
      </section>
      <footer className="flex flex-col items-center">
        <h2>Let's grab a coffee</h2>
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
      </footer>
    </div>
  );
}

export default App;

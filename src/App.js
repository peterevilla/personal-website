import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Typical from "react-typical";

function App() {
  return (
    <div>
      <div className="h-screen">
        <div className="lg:flex  text-md mt-16 ml-16">
          <div className="lg:mr-64 lg:w-1/4 text-lg">
          <Typical
              steps={["Hi,", 1000, "Hi, my name is Pedro Revilla", 500]}
              loop={Infinity}
              wrapper="p"
            />

            <h2 className=" text-gray-700 italic  ">Full Stack Developer</h2>
            {/* <h2 className="italic text-gray-800">Full Stack Developer</h2> */}
            
          </div>
          <div className="ml-32 mt-16 lg:ml-64 lg:mt-0">
            <NavBar />
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
    </div>
  );
}

export default App;

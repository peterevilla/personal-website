import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Typical from "react-typical";
import Scrollchor from "react-scrollchor";

// const bg = require('./bg/bg.png')
// style={{ backgroundImage: "url("+bg+")" }}
function App() {
  return (
    <div>
      <div className="h-screen bg-auto bg-no-repeat  bg-bottom" >
        <div className="lg:flex  text-md mt-16 ">
          <div className="lg:mr-64 lg:w-1/4 ml-16  text-lg">
          <Typical
              steps={["Hi,", 1000, "Hi, my name is Pedro Revilla", 500]}
              wrapper="p"
            />

            <h2 className=" font-bold italic" >Full Stack Developer</h2>
            {/* <h2 className="italic text-gray-800">Full Stack Developer</h2> */}
            
          </div>
          <div>
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
      <Scrollchor to="#about">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.969 14.469C7.03867 14.3992 7.12143 14.3437 7.21255 14.3059C7.30367 14.2681 7.40135 14.2487 7.5 14.2487C7.59865 14.2487 7.69633 14.2681 7.78745 14.3059C7.87857 14.3437 7.96133 14.3992 8.031 14.469L12 18.4395L15.969 14.469C16.1098 14.3282 16.3008 14.2491 16.5 14.2491C16.6992 14.2491 16.8902 14.3282 17.031 14.469C17.1718 14.6098 17.2509 14.8008 17.2509 15C17.2509 15.1992 17.1718 15.3902 17.031 15.531L12.531 20.031C12.4613 20.1008 12.3786 20.1563 12.2874 20.1941C12.1963 20.2319 12.0986 20.2513 12 20.2513C11.9013 20.2513 11.8037 20.2319 11.7125 20.1941C11.6214 20.1563 11.5387 20.1008 11.469 20.031L6.969 15.531C6.89915 15.4613 6.84374 15.3786 6.80593 15.2874C6.76812 15.1963 6.74866 15.0986 6.74866 15C6.74866 14.9013 6.76812 14.8037 6.80593 14.7125C6.84374 14.6214 6.89915 14.5387 6.969 14.469Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.75C12.1989 3.75 12.3897 3.82902 12.5303 3.96967C12.671 4.11032 12.75 4.30109 12.75 4.5V18C12.75 18.1989 12.671 18.3897 12.5303 18.5303C12.3897 18.671 12.1989 18.75 12 18.75C11.8011 18.75 11.6103 18.671 11.4697 18.5303C11.329 18.3897 11.25 18.1989 11.25 18V4.5C11.25 4.30109 11.329 4.11032 11.4697 3.96967C11.6103 3.82902 11.8011 3.75 12 3.75Z" fill="black"/>
</svg>

            </Scrollchor>
    </div>
  );
}

export default App;

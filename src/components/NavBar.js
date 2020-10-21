import React, { useState } from "react";
import Scrollchor from "react-scrollchor";
import Fade from "react-reveal/Fade";
import resume from '../documents/resume.pdf';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.addEventListener("scroll", (event) => {
    if (window.scrollY > 250) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <div>
      
        <Fade top >
          <ul className="ml-32 mt-16 lg:ml-16 lg:mt-0">
            <Scrollchor to="#about">
              <h3 className="transition duration-500 ease-in-out hover:text-indigo-500 transform hover:-translate-y-1 hover:scale-80">
                About
              </h3>
            </Scrollchor>

            <Scrollchor to="#skills">
              <h3 className="transition duration-500 ease-in-out hover:text-indigo-500 transform hover:-translate-y-1 hover:scale-80">
                Skills
              </h3>
            </Scrollchor>
            <Scrollchor to="#projects">
              <h3 className="transition duration-500 ease-in-out hover:text-indigo-500 transform hover:-translate-y-1 hover:scale-80">
                Projects
              </h3>
            </Scrollchor>
            <a href = {resume} >
              <h3 className="transition duration-500 ease-in-out hover:text-indigo-500 transform hover:-translate-y-1 hover:scale-80">
                Resume
              </h3>
              </a>
           
          </ul>
        </Fade>
    {isScrolled &&
        <Fade>
          <nav className=" flex z-10 px-12  bg-orange-400 lg:ml-12 fixed  lg:bg-transparent top-0  lg:flex-col lg:fixed lg:inset-y-0 lg:right-0 lg:mr-16  lg:justify-center">
            <Scrollchor to="#about">
              <h3 className="  mx-2 transition duration-500 ease-in-out hover:text-indigo-500 transform hover:-translate-y-1 hover:scale-80">
                About
              </h3>
            </Scrollchor>
            <Scrollchor to="#skills">
              <h3 className="  mx-2 transition duration-500 ease-in-out hover:text-indigo-500 transform hover:-translate-y-1 hover:scale-80">
                Skills
              </h3>
            </Scrollchor>
            <Scrollchor to="#projects">
              <h3 className="  mx-2 transition duration-500 ease-in-out hover:text-indigo-500 transform hover:-translate-y-1 hover:scale-80">
                Projects
              </h3>
            </Scrollchor>
            <a href = {resume} >
              <h3 className="  mx-2 transition duration-500 ease-in-out hover:text-indigo-500 transform hover:-translate-y-1 hover:scale-80">
                Resume
              </h3>
            </a>
          </nav>
        </Fade>
}
    </div>
  );
};

export default NavBar;

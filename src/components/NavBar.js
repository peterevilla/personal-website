import React, { useState } from "react";
import Scrollchor from "react-scrollchor";
import Fade from "react-reveal/Fade";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.addEventListener("scroll", (event) => {
    if (window.scrollY !== 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <div>
      {!isScrolled ? (
        <Fade top >
          <ul className="ml-32 mt-16 lg:ml-64 lg:mt-0">
            <Scrollchor to="#about">
              <h3 className="text-gray-800 text-lg hover:text-green-600 transition ease-in duration-500">
                About
              </h3>
            </Scrollchor>

            <Scrollchor to="#skills">
              <h3 className="text-gray-800 text-lg hover:text-green-600 transition ease-in duration-500">
                Skills
              </h3>
            </Scrollchor>
            <Scrollchor to="#projects">
              <h3 className="text-gray-800 text-lg hover:text-green-600 transition ease-in duration-500">
                Projects
              </h3>
            </Scrollchor>
            <Scrollchor to="#resume">
              <h3 className="text-gray-800 text-lg hover:text-green-600 transition ease-in duration-500">
                Resume
              </h3>
            </Scrollchor>
          </ul>
        </Fade>
      ) : (
        <Fade bottom cascade>
          <nav className="flex fixed top-0 bg-white bg-opacity-75 justify-around">
            <Scrollchor to="#about">
              <h3 className="text-gray-800 text-lg mx-2 hover:text-green-600 transition ease-in duration-500">
                About
              </h3>
            </Scrollchor>
            <Scrollchor to="#skills">
              <h3 className="text-gray-800 text-lg mx-2 hover:text-green-600 transition ease-in duration-500">
                Skills
              </h3>
            </Scrollchor>
            <Scrollchor to="#projects">
              <h3 className="text-gray-800 text-lg mx-2 hover:text-green-600 transition ease-in duration-500">
                Projects
              </h3>
            </Scrollchor>
            <Scrollchor to="#resume">
              <h3 className="text-gray-800 text-lg mx-2 hover:text-green-600 transition ease-in duration-500">
                Resume
              </h3>
            </Scrollchor>
          </nav>
        </Fade>
      )}
    </div>
  );
};

export default NavBar;

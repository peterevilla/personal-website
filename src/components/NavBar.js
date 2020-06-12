import React from 'react'
import Scrollchor from 'react-scrollchor';


const NavBar = () => {
    return (
        <ul>
            <Scrollchor to='#about' ><h3 className="text-gray-800 text-lg">About</h3></Scrollchor>
            <Scrollchor to='#skills' ><h3 className="text-gray-800 text-lg">Skills</h3></Scrollchor>
            <Scrollchor to='#projects' ><h3 className="text-gray-800 text-lg">Projects</h3></Scrollchor>
            <Scrollchor to='#resume' ><h3 className="text-gray-800 text-lg">Resume</h3></Scrollchor>
        </ul>
    )
}

export default NavBar;

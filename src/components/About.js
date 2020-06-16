import React from 'react'
import avatar from '../images/avatar.svg'
import Fade from "react-reveal/Fade";

const About = () => {
    return (
        <div className='flex flex-wrap lg:flex-no-wrap justify-center object-center'>
            <Fade right>
            <div className='mt-64'><h1>Some Text about me</h1></div>
            </Fade>
            <Fade right>
            <img className='mt-64' src={avatar} alt="avatar"/>
            </Fade>
        </div>
    )
}

export default About;

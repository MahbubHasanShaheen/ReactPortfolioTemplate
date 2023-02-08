import "./Pages.css";
import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import Footer from '../components/Footer';
import AboutContent from '../components/AboutContent';

//import IntroImg from "../assets/project-bg.jpg";




const About = () => {
  return (
    
    <div>
        <Navbar />
         <HeroImg2 heading="ABOUT" text="I am friendly front-end full stack developer"/>
         <AboutContent />
        <Footer />
    </div>
  )
}

export default About
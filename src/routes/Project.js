import "./Pages.css";
import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import Footer from '../components/Footer';
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";
//import IntroImg from "../assets/project-bg.jpg";



const Project = () => {
  return (
    
    <div>
        <Navbar />
         <HeroImg2 heading="Project." text="Some of my most recent work" />
         <Work />
         <PricingCard />
        <Footer />
    </div>
  )
}

export default Project
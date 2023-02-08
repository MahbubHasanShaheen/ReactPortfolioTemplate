import "./Pages.css";
import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import Footer from '../components/Footer';
import { ContactForm } from "../components/ContactForm";
//import IntroImg from "../assets/project-bg.jpg";

const Contact = () => {
  return (
    
    <div>
        <Navbar />
         <HeroImg2 heading="CONTACT." text="Cell: +8801760002135, Email: shaheen.dms.bd@gmail.com" />
         <ContactForm />
        <Footer />
    </div>
  )
}

export default Contact
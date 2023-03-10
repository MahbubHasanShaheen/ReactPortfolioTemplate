import "./HeroImgStyle.css";
import React from 'react';
import IntroImg from "../assets/bg.jpg";
import { Link } from "react-router-dom";

 const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>

        <div className="content">
           <p>HI, I AM A FREELANCER</p>
           <h1>Web Developer</h1>
           <div>
             <Link to="/project" className="btn">Project</Link>
             <Link to="/contact" className="btn btn-light">Contact</Link>

           </div>
        </div>
    </div>
  )
}
export default HeroImg

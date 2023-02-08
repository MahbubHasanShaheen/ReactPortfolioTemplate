import "./AboutContentStyle.css";

import React from 'react'
import { Link } from "react-router-dom";
import React1 from "../assets/pro1.png";
import React2 from "../assets/pro2.png"

 const AboutContent = () => {
  return (
    <div className="about">
        <div className="about-left">
          <h2>Who I am</h2>
          <p>I am a Full Stack Web Developer. I create responsive, secure and winsome view web site for my clients</p>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
     </div>

        <div className="about-right">
           <div className="img-container">
             <div className="img-stack top">
               <img src={React1} alt="true" className="img" />
             </div>

              <div className="img-stack bottom">
               <img src={React2} alt="true" className="img" />
             </div>
           </div>
        </div>
    </div>
  )
}

export default AboutContent

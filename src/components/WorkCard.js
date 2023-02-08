import "./WorkCardStyle.css";

import React from 'react'
//import pro1 from "../assets/pro1.png";
//import pro2 from "../assets/pro2.png";
//import pro3 from "../assets/pro3.jpeg";
//import pro4 from "../assets/pro4.png";
//import pro5 from "../assets/pro5.png";
//import pro6 from "../assets/pro6.jpg";
import { NavLink } from "react-router-dom";

 const WorkCard = (props) => {
  return (
        <div>
           <div className="project-card">
             <img src={props.imgsrc} alt="images" />
             <h2 className="project-title">{props.title}</h2>
             <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                   <NavLink to={props.view} className="btn">View</NavLink>
                   <NavLink to="url.com" className="btn">Source</NavLink>
                </div>
             </div>
           </div> 
        </div>
       
  )
}

export default WorkCard

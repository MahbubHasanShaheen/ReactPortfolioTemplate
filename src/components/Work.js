import "./WorkCardStyle.css";

import React from 'react'
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData"
//import pro1 from "../assets/pro1.png";
//import pro2 from "../assets/pro2.png";
//import pro3 from "../assets/pro3.jpeg";
//import pro4 from "../assets/pro4.png";
//import pro5 from "../assets/pro5.png";
//import pro6 from "../assets/pro6.jpg";
//import { NavLink } from "react-router-dom";


 const Work = () => {
  return (
    <div className="work-container">
        <h2 className="project-heading">Projects</h2>
        <div className="project-container">
          {WorkCardData.map((val, index) =>{
             return(
                <WorkCard
                 key={index}
                 imgsrc ={val.imgsrc}
                 title ={val.title}
                 text ={val.text}
                 view ={val.view}
                 />
             )
          } )}
           
        </div>
    </div>
  )
}

export default Work

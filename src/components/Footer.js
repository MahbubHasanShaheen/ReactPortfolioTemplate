import "./FooterStyle.css";

import React from 'react';

import { FaFacebook, FaHome,  FaLinkedin, FaMailBulk, FaInstagram, FaPhone, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="footer-left">
                <div className="location">
                    <FaHome size={20} 
                    style={{ color:"#fff", marginRight:"2em" }}/>
                    <div>
                        <p>210, Air Manson</p>
                        <p>Dhaka-1206,Bangladesh</p>
                    </div>
                </div>
                 <div className="phone">
                    <FaPhone size={20} 
                    style={{ color:"#fff", marginRight:"2em" }}/>
                    <div>
                        <p>+8801760002135,</p>
                        
                    </div>
                </div>

                 <div className="email">
                    <FaMailBulk size={20} 
                    style={{ color:"#fff", marginRight:"2em" }}/>
                    <div>
                        <p>shaheen.dms.bd@gmail.com,</p>
            
                    </div>
                </div>
            </div>
            <div className="footer-right">
                <h4>About Me</h4>


                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature. from 45 BC. </p>


              <div className="social">
                  <FaFacebook size={20} 
                    style={{ color:"#fff", marginRight:"1rem" }}/>

                    <FaLinkedin size={20} 
                    style={{ color:"#fff", marginRight:"1rem" }}/>

                     <FaInstagram size={20} 
                    style={{ color:"#fff", marginRight:"1rem" }}/>

                    <FaTwitter size={20} 
                    style={{ color:"#fff", marginRight:"1rem" }}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;

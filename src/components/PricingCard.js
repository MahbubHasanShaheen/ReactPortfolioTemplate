import "./PricingCardStyle.css";
import React from 'react';
import { Link } from "react-router-dom";

 const PricingCard = () => {
  return (
    <div className="pricing">
        <h2>Pricing Card</h2>
        <div className="card-container">

           <div className="card">
             <h3>- Basic -</h3>
             <span className="bar"></span>
             <span className="btc">$ 100</span>
             <p>- 3 Days -</p>
             <p>- 3 Pages -</p>
             <p>- Featured -</p>
             <p>- Responsive Design -</p>
             <Link to="/contact" className="btn">
                PURCHASE NOW
             </Link>
           </div>


                       
           <div className="card">
             <h3>- Premium -</h3>
             <span className="bar"></span>
             <span className="btc">$ 200</span>
             <p>- 2 Days -</p>
             <p>- 5 Pages -</p>
             <p>- Featured -</p>
             <p>- Responsive Design -</p>
             <Link to="/contact" className="btn">
                PURCHASE NOW
             </Link>
           </div>


                       
           <div className="card">
             <h3>- Business -</h3>
             <span className="bar"></span>
             <span className="btc">$ 300</span>
             <p>- 5 Days -</p>
             <p>- 8 Pages -</p>
             <p>- Featured -</p>
             <p>- Responsive Design -</p>
             <Link to="/contact" className="btn">
                PURCHASE NOW
             </Link>
           </div>

           
        </div>
    </div>
  )
}

export default PricingCard

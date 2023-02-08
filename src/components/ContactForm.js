import "./ContactFormStyle.css";

import React from 'react'

export const ContactForm = () => {
  return (
    <div className="contact">
        <div className="contact-form">
            <div className="form-container">
             <h2>Fill Up Form and Contact me</h2>

              <form>
                <div className="form-group">
                <label className="form-label">Your name</label>
                <input type="text" name="name" className="form-control" />
                </div>

                <div className="form-group">
                <label className="form-label">Email</label>
                <input type="text" name="name" className="form-control" />
                </div>

                <div className="form-group">
                <label className="form-label">Phone No</label>
                <input type="text" name="name" className="form-control" />
                </div>

                <div className="form-group">
                <label className="form-label">Address</label>
                <input type="text" name="name" className="form-control" />
                </div>

                <div className="form-group">
                <label className="form-label">Details</label>
                <textarea type="text" name="name" row="10" className="form-control"></textarea>
                </div>
                <button className="btn">Submit</button>
              </form>
            </div>
        </div>
    </div>
  )
}

import React from "react";
import Content from "../EbookDetail/Content";



export default function Contact (){
    return <div className="contactpage" >
       <div className="contact" >
       <h1 >
        Contact Us
      </h1>
      <img src="images\contact.png" />
       </div>
        
            <form className="form">
                <input type="text" required="required" placeholder="Enter Your Name"/>
                <input type="tel" required="required" placeholder="Enter Your Phone Number"/>
                <input type="email" required="required"  placeholder="Enter Your Email"/>
                <textarea className="textmessage" rows="4" required="required" type="message" placeholder="Enter Your Message" />
                <button type="submit" >Send Message</button>
                

            </form>

            <Content />
            
          </div>
}



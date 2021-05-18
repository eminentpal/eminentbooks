import React from "react";
import { Link } from "react-router-dom";


function MobileHeader (){
    const [click, setClick] = React.useState(false)
   

    function clickedOn () {
        
        setClick (true)
        
    }
    
    function clickedOn1 () {
        //if you dont put ! to show its important,it wont work
        setClick (!click)
    }
    
    //alternative code and shorter 
    // function clickedOn () {
        
    //     setClick ((prevClick => {
    //         return !prevClick;
    //     }))
        
    // }
    

   return <div>


<img   className="toggle" onClick={clickedOn} onClick = {clickedOn1} src= "images\menu.png"/> 
   <div className="forMobile"  >
   
   <ul style={{display: click? "inline-block" : "none"}}   >
     
               <Link to="/">
                <li>Home</li>
                </Link>

                <Link to="/ebooks">
                <li>Ebooks</li>
                </Link>
              
                <Link to="/about">
                <li>About Us</li>
                </Link>
                <Link to="/contact">
                <li>Contact Us</li>
                </Link>

                
   </ul>
    </div>
    </div>
}

export default MobileHeader;
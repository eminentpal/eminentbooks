import React from "react";
import { Link } from "react-router-dom";
import MobileHeader from "./MobileHeader";
import { makeStyles } from '@material-ui/core/styles';


function Header (){

 

  return (
           <div>

         
            <nav className = "contain" >
                <h1   > Eminent Media NG</h1>
                <div  className="forDesktop">
                <ul  >
                
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
               
            </nav>
            
            <div>
          <MobileHeader />

          </div> 
            </div>
         )
       
}

function Hr (){
    return <hr/>
}





const useStyles = makeStyles((theme) => ({
 
  [ theme.breakpoints.down("sm")]:{
   image:{
     width: "100%",
     height:"100",
     maxWidth: 600,
     
 },
  }
}));






function Slide(props){

  const classes = useStyles ()

const [ mouseOver, setMouseOver] = React.useState(false)

function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }


 return <div> 
 
 
        <div className = "slide">
                
                <img src={props.image} className = "slideimage"   />
            <div className="slide1">
            <h1>{props.title}</h1>
            <p>{props.detail}</p>
             <Link  to='/ebooks'><button style={{background: mouseOver? "pink" : "white"}} onMouseOver ={handleMouseOver} onMouseOut = {handleMouseOut}  >{props.shop}</button></Link>  
            </div>

           
            
         </div>
        
         <div className = "slidee">
                
            <div className="slide2">
            <h1>{props.title}</h1>
            <p>{props.detail}</p>
             <Link  to='/ebooks'><button style={{background: mouseOver? "pink" : "white"}} onMouseOver ={handleMouseOver} onMouseOut = {handleMouseOut}  >{props.shop}</button></Link>  
            </div>

           
            
         </div>
            </div>
}

export default  Header ;
export {Hr, Slide};


// import React, { useState } from "react";

// function App() {
//   const [headingText, setHeadingText] = useState("Hello");
//   const [isMousedOver, setMouseOver] = useState(false);

//   function handleClick() {
//     setHeadingText("Submitted");
//   }

//   function handleMouseOver() {
//     setMouseOver(true);
//   }

//   function handleMouseOut() {
//     setMouseOver(false);
//   }

//   return (
//     <div className="container">
//       <h1>{headingText}</h1>
//       <input type="text" placeholder="What's your name?" />
//       <button
//         style={{ backgroundColor: isMousedOver ? "black" : "white" }}
//         onClick={handleClick}
//         onMouseOver={handleMouseOver}
//         onMouseOut={handleMouseOut}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }

// export default App;



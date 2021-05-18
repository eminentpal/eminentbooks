import React from  "react";
import StarIcon from '@material-ui/icons/Star';


const Testimonial = (props)=>{
    return (
        <div className="mainT">
            <div className="testimony1">
            <img src={props.image}/>
            <h2>{props.title}</h2>
            <p>{props.comment}</p>
            <div >
            <StarIcon style={{color:"goldenrod"}} />
            <StarIcon style={{color:"goldenrod"}}/>
            <StarIcon style={{color:"goldenrod"}}/>
            <StarIcon style={{color:"goldenrod"}} />
            <StarIcon style={{color:"goldenrod"}} />
            </div>
            
           </div>
        </div>
    )
}


export default Testimonial;


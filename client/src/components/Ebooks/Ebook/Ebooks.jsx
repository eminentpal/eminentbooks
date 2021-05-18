import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@material-ui/core";
import React from "react"
import { Link } from "react-router-dom";
import useStyles from "./ebookStyles"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';



function Ebook ({book}){

    // const big = 30

    const classes = useStyles()
   
    //className = "ebooks"
   
    return ( <div >
               <Card className={classes.root} >
               <Link className={classes.link} to={`/ebooks/${book._id}`} > 
                   <img src= {book.selectedFile} className={classes.media}  />
                   </Link>  
                   <CardContent>
                   <div  className={classes.cardContent}>
                   
                   <Link className={classes.link} to={`/ebooks/${book._id}`} > 
                   <Typography  className={classes.title} variant="h6" gutterBottom contained  >
                   {book.title.substring(0, 35)}
                   </Typography>
                 
                  <Typography  className={classes.pric} variant="h6"  >
                      ₦{book.price}
                    </Typography>
                    </Link>  
                   </div>
                   
              <Typography variant="body2" className={classes.body} >{book.content.substring(0, 60)}...</Typography>
                   </CardContent>
                   
               </Card>

            </div>
            )
            
}

export default Ebook;


{/* <div className = "ebooks">
             <img src= {book.selectedFile} className="image"/>
                <h2 className="title">
                <Link to= {'/ebooks/' + book._id}>
                {book.title}
               </Link>
                </h2>

                
                <p className="content">{book.content.substring(0, 50)}</p> 
            </div> */}
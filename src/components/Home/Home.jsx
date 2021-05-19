import React from "react";
import books, { Testimonies } from "../../books";
import {Hr, Slide} from "../Header";
import Ebooks from "../Ebooks/Ebook/Ebooks";

import Testimonial from "../Testimonies/Testimonial";
import { useSelector } from "react-redux";
import './styles.css';
import useStyles from './styles';
import { Card, Button, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import SwipeableTextMobileStepper from "../Slide/SwipeableTextMobileStepper";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";


// function createBook (book){
//   return (<Ebooks key = {book.id}
//           img = {book.img}
//           title = {book.title}
//           content = {book.content.substring(0, 150)}
//        /> )
// }

//For Testimonial

function createTestimony (Testimonies){
  return (<Testimonial key = {Testimonies.id}
          image = {Testimonies.image}
          title = {Testimonies.title}
          comment = {Testimonies.comment.substring(0, 200)}
       /> )
}


function Home(){


  const posts = useSelector(state => state.posts)
 const  classes = useStyles()
    return (
        <div>
         {/* <div >
            <Typography>HIGHLY TRUSTED ONLINE BOOK STORE</Typography>
            <p>We sell most valuable digital books. Our books are impactful and educative.</p>
             <Link  to='/ebooks'><button   >Shop</button></Link>  
            </div>  */}
        
         <Card  className={classes.card}  >
         <Slide image = "images\background.png" shop = "Shop Now " title= "HIGHLY TRUSTED ONLINE BOOK STORE" detail = "We sell most valuable digital books. Our books are impactful and educative."/>
        
        <Hr />
        <Grid  className={classes.cardmiddle} >
          <Grid className={classes.container}>
          <Grid  >
          <img src="/images/about.png" className={classes.image} />
          </Grid>
          <Grid className={classes.grid} >
          
            <Typography className={classes.title} variant="h3" gutterbottom >Why Us?</Typography>
            <Typography className={classes.content}  gutterbottom>EminentBooks is 
Your #1 Online Book Store. We sell life changing ebooks you can ever find. We offer the cheapest ebook online. If you are looking to start a new career or change your career and you are looking for a career book, then you are at the right.</Typography>
          </Grid>
          </Grid>
        <div className={classes.hr}><Hr /></div>  
          <Grid className= {classes.mainGrid}  >

          <div className= {classes.contain1} >
         <img src="/images/pic-1.png" className={classes.image2} />
          <CardContent className={classes.cardcontent} >
            <Typography  className={classes.title2} variant="h5">Learn Anywhere</Typography>
            <Typography className={classes.content2}>You can download our ebooks at a go and learn anywhere</Typography>
          </CardContent>
         </div>
        
         <div className= {classes.contain1} >
         <img src="/images/pic-2.png" className={classes.image2} />
          <CardContent className={classes.cardcontent} >
            <Typography  className={classes.title2} variant="h5">Impactful Book</Typography>
            <Typography className={classes.content2}>You can download our ebooks at a go and learn anywhere</Typography>
          </CardContent>
       <Link to="/ebooks"><Button className={classes.button} variant="contained" size="large" type="button">Start Now</Button></Link> 
         </div>

         <div className= {classes.contain1} >
         <img src="/images/pic-3.png" className={classes.image2} />
          <CardContent className={classes.cardcontent} >
            <Typography  className={classes.title2} variant="h5">Best Books</Typography>
            <Typography className={classes.content2}>You can download our ebooks at a go and learn anywhere</Typography>
          </CardContent>
         </div>
        
        
    
          </Grid>
          <Grid className={classes.container1}>
          <Grid>
          <img src="/images/course.png" className={classes.image} />
          </Grid>
          <Grid className={classes.grid2} >
          
            <Typography className={classes.title} variant="h3" gutterbottom >Browse our Courses</Typography>
          
          <Typography className={classes.content}  gutterbottom>EminentBooks offer varieties of books at a relatively cheap price which you cannot find in any other online book store. Start your career today or acquire new skill or knowledge through buying and reading our ebook.</Typography>
          <Link to="/ebooks"><Button className={classes.button} variant="contained" size="large" type="button">Browse Now</Button></Link>
          </Grid>
          </Grid>
          <div className={classes.hr3}><Hr /></div>
          <div className={classes.hr2}><Hr /></div>

         
         <SwipeableTextMobileStepper />
          
         </Grid>
         </Card>
        
    <Footer />

        </div>
        
    )
}



export default Home;
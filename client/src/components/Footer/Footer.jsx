import React from "react"
import {AppBar, Toolbar, IconButton, Grid, Badge, MenuItem, Menu,Typography, MenuList, Tab} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';


  import useStyles from "./styles";
import { Link, useLocation } from 'react-router-dom';

function Footer (props){

 const classes = useStyles();


    return (
       <footer className={classes.root}>
          

   
        <>
            <AppBar position="relative" className={classes.appBar} color="inherit" >
              <Toolbar  className={classes.foot}>
             
               <div className={classes.col1}   >
               <h2>EminentBooks</h2>
              <Typography >Eminentbooks is an independent online book   store  offering variety of books ranging from inspirational,financial books, career  books,   skill acquisition books.</Typography> 
               </div>
               <div className={classes.col3}>
                <h2 className={classes.title} > Contact Us</h2>
                
                <Typography>Jos, Nigeria</Typography>
                    <Typography>mobile: +2348140035918</Typography>
                    <Typography>email: eminentpal180@gmail.com</Typography>
                    <Typography>www.eminentbook.com</Typography>
               
            </div>
              <div className={classes.col3}>
                <h2 className={classes.title} > Useful links</h2>
                
                <Typography>Terms and Condition</Typography>
                    <Typography>Privacy Policy</Typography>
                    <Typography>About</Typography>
                    <Typography>Ebooks</Typography>
               
            </div>
          
            
            {/* <hr styles={{color:"white"}}  className={classes.hr}/> */}
          
           <div className={classes.col4}>
                <h2 className={classes.title} > Follow Us</h2>
               
                <FacebookIcon  className={classes.social} />
                    <Typography className={classes.text} > Facebook</Typography> 
                    <InstagramIcon className={classes.social}  /> 
                    <Typography className={classes.text} >Instagram</Typography>
                    <YouTubeIcon className={classes.social} />
                    <Typography className={classes.text} >Youtube</Typography>
                    <TwitterIcon className={classes.social} />
                    <Typography className={classes.text} >Twitter</Typography>
                
            </div>
          
  
  
              </Toolbar>
              <Typography className={classes.Copyright} >Copyright 2020 - EminentBooks</Typography>
            </AppBar>
        </>
        
       </footer>
    )
}


export default Footer;
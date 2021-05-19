import React from "react"
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu,Typography, MenuList, Tab} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";


  import useStyles from "./styles";
import { Link, useLocation } from 'react-router-dom';

function Footer (props){

 const classes = useStyles();


    return (
       <footer className={classes.root}>
          

   
        <>
            <AppBar position="relative" className={classes.appBar} color="inherit" >
              <Toolbar  className={classes.foot}>
             
               
              <div className={classes.col3}>
                <h3 className={classes.title} > Useful links</h3>
              
                    <Typography>About</Typography>
                    <Typography>Contact</Typography>
                    <Typography>Ebooks</Typography>
                    <Typography>WhatsApp</Typography>
               
            </div>
          
            
            <hr  className={classes.hr}/>
          
           <div className={classes.col4}>
                <h3 className={classes.title} > Follow Us</h3>
               
               
                    <Typography>Facebook</Typography>
                    <Typography>Twitter</Typography>
                    <Typography>Instagram</Typography>
                    <Typography>Youtube</Typography>
                
            </div>
          
  
  
              </Toolbar>
              <Typography className={classes.Copyright} >Copyright 2020 - EminentBooks</Typography>
            </AppBar>
        </>
        
       </footer>
    )
}


export default Footer;
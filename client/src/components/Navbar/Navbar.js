import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './styles';
import Nav from './Nav';

const Navbar = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge color="secondary">
            <ShoppingCart />
             
          </Badge>
          
        </IconButton>
         
        <p>Cart</p>
       
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="relative" className={classes.appBar} color="inherit">
        
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} >
            <img src="images\background.png" alt="commerce.js" height="25px" className={classes.image} /> EminentBooks
          </Typography>
   
            <Nav />
            
          <div className={classes.grow} />
           
          {location.pathname === '/' && (
          <div className={classes.button}>
            <IconButton className={classes.cart} component={Link} to="/cart" aria-label="Show cart items"   >
              <Badge   >
                <ShoppingCart color="blue"/>
           
              </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
          
      </AppBar>
      
      {renderMobileMenu}
    </>
  );
};

export default Navbar;

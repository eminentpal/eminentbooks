import React  from "react";
import Ebooks from "./Ebook/Ebooks"
import books  from "../../books";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useStyles from "./EbookpageStyles";
import SearchIcon from '@material-ui/icons/Search';
import { Button, CircularProgress, Grid, TextField  } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import Nav from "../Navbar/Nav";



// function createBook (book){
//     return (<Ebooks key = {book.id}
//             img = {book.img}
//             title = {book.title}
//             content = {book.content.substring(0, 200)}
//          /> )
//   }

function EbookPage (){
const classes = useStyles()
   const posts = useSelector(state => state.posts)
 
   // if (!posts) {
   //    return (
   //      <h1>Loading...</h1>
   //    )
   //  }

   return (
      !posts.length ? <CircularProgress  /> : ( 
<main  >

   <div className={classes.searchbar} >
      {/* <h1  style={{background: "none"}} >Search</h1> */}
     
      <TextField name="search"  
        id="uncontrolled"
        InputProps={{ classes: { underline: classes.greenUnderline } }}
      hover
    label="Search"
     className={classes.search}  />
      <Button  className={classes.searchicon}> <SearchIcon   /> </Button>
   </div>

 <div className={classes.content} >
    {/* <div className={classes.loading}> <RingLoader color="red" loading={loading} size={60} /></div> */}
    <div className={classes.toolbar}/>
    <Grid container justify="flex-start" spacing={4} >
       {posts.map( (book) => (
         <Grid item key={book._id} xs={12} sm={6} md={4} lg={3}>
             <Ebooks book={book}  />
         </Grid>
       ))}
    </Grid>
    </div>
</main> )
   ) 
}




export default EbookPage;

{/* <div>
       <dl className="books">{ posts.map((book)=> {
    return (
    <Ebooks  key = {book.id}
      
     book={book}
       />
      );
  })}</dl>
   <Footer  copyright = "Copyright @ 2021 | Eminent Media NG" />
   </div> */}
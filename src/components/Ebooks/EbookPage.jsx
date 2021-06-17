import React ,{useState , useEffect} from "react";
import Ebooks from "./Ebook/Ebooks"
import books  from "../../books";
import ChipInput from 'material-ui-chip-input';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useStyles from "./EbookpageStyles";
import SearchIcon from '@material-ui/icons/Search';
import { Button, Paper, CircularProgress, Grid, TextField  } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import Nav from "../Navbar/Nav";
import Pagination from './Pagination'
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getPostsBySearch, getPosts  } from '../../actions/posts';





// function createBook (book){
//     return (<Ebooks key = {book.id}
//             img = {book.img}
//             title = {book.title}
//             content = {book.content.substring(0, 200)}
//          /> )
//   }

function useQuery() {
   return new URLSearchParams(useLocation().search);
 }

function EbookPage (){

const classes = useStyles()
// const posts = useSelector(state => state.posts)
const {posts} = useSelector((state )=> state.posts)
const history = useHistory();
const dispatch = useDispatch();
const location = useLocation();

console.log(posts)
//search
const query = useQuery();
const page = query.get('page') || 1;
const searchQuery = query.get('searchQuery');
const [search , setSearch] = useState("")
const [ tags, setTags] = useState([])
 
   // if (!posts) {
   //    return (
   //      <h1>Loading...</h1>
   //    )
   //  }

const searchPost = () => {
   if (search.trim() || tags){
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      history.push('/');
    }
}



// useEffect(() => {
//   if (!search || !tags){
//  dispatch(getPosts())
//   }


// }, [dispatch]);


const handleKeyPress = (e) => {
   // this refers to the enter key on the keyboard
   if (e.keyCode === 13) {
     searchPost();
   }
 };

const handleAddChip = (tag) => setTags([...tags, tag]);
const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !==chipToDelete))


   return (
      !posts?.length ? <CircularProgress  /> : ( 
<main  >

   <div className={classes.searchbar} >
      {/* <h1  style={{background: "none"}} >Search</h1> */}
     
      <TextField name="search"  
        id="uncontrolled"
        InputProps={{ classes: { underline: classes.greenUnderline } }}
      hover
    label="Search Book"
     className={classes.search} 
     onKeyDown={handleKeyPress}
     value={search} 
     onChange={(e) => setSearch(e.target.value) }
      />
      <Button className={classes.searchicon}  onClick={searchPost} > <SearchIcon   /> </Button>
   {/* <ChipInput
     value={tags}
     onAdd={(chip) => handleAddChip(chip)}
     onDelete={(chip) => handleDeleteChip(chip)}
     label="Search Tags"
  
   style={{ margin: '10px 0' }}
    />
    <Button  className={classes.searchicon} onClick={searchPost}  >  <SearchIcon   /> </Button> */}
  
    
  
   </div>

 <div className={classes.content} >
    {/* <div className={classes.loading}> <RingLoader color="red" loading={loading} size={60} /></div> */}
    <div className={classes.toolbar}/>
    <Grid container justify="flex-start" spacing={4} >
       {posts.map( (book) => {
     return   ( <Grid item key={book._id} xs={12} sm={6} md={4} lg={3}>
             <Ebooks book={book}  />
         </Grid>)
       })}
          
    </Grid>
   

    </div>
    {(!searchQuery && !tags.length) && (
              <Paper className={classes.pagination} elevation={6}>
                <Pagination page={page} />
              </Paper>
            )}
</main> )
   ) 
}




export default EbookPage;


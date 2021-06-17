import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import books from "../../books";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { findPost } from "../../actions/posts";
import { Button, Card, Divider, CardMedia, Grid, Typography } from "@material-ui/core";
import useStyles from "./contentStyles";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


function Content(match) {



  
    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(false)
    const [ full, setFull] = useState(false);
    const [content, setContent] = useState(true)

   const classes = useStyles()
  const history = useHistory()
   const {id} = useParams()

   console.log(id)

    const url = 'https://eminentbookserver.herokuapp.com/posts';
        // const id= '60781b17703dcc1e40db2192'
    // fetchPosts = () => axios.get(url);
      const fetchp = async (id)=>{
      
        //   setLoading(true)

const {data} = await axios.get(`${url}/${id}`)
          //  console.log(data)
           setDetail(data)
      }

   const fullClick = (()=>{
     setFull((prevFull) =>{
       return !prevFull
     })
     setContent((prevFull) =>{
      return !prevFull
    })

   })


  //  function clickedOn () {
        
  //   //     setClick ((prevClick => {
  //   //         return !prevClick;
  //   //     }))

   const dispatch = useDispatch()

 
      
      useEffect(() =>{
        // const id= window.location.pathname.split("/")
        // fetchp(id[2]);
//   const new1 =  dispatch(findPost(id[2]))
fetchp(id)
dispatch(findPost(id))
       console.log(match)
      }, [id]); 


const {post, posts} = useSelector(state => state.posts)
// const {post} = useSelector(state => state.posts)

console.log (post)
const recommended= posts?.filter(({_id}) => _id !== detail._id )

const cut = 4
const recommendedPosts = recommended?.slice(0, cut)
console.log(recommendedPosts)



const openPost = (_id) =>
  history.push(`/ebooks/${_id}`)


if (!detail.selectedFile) {
  return (
    <h1>Loading...</h1>
  )
}

  // const Fullt = () => {
  //   // console.log (detail.content.length)
  //     if (detail.content.length > 200) {
  //    return   (
  //    <Button variant="contained" size="small" color="white" type="button" onClick={fullClick} >  <AddCircleOutlineIcon /> </Button>
  //    )
  //     } else {
  //       return (
  //         <h1>wow</h1>
  //       )
  //     } 
      
  //  }
   
     
   return(
       <div>
         <Card className={classes.card} >
         <Grid className={classes.content} >
         
         <Grid className={classes.mainMedia} >
         <img className={classes.media} src={detail.selectedFile}/>
         <CardMedia className={classes.medi} image= {detail.selectedFile}   />
         </Grid>
         
         <Grid  className={classes.typo}>
         <div className={classes.titl} >  <Typography className={classes.title} variant="h3" gutterbottom>{detail.title}</Typography> </div>
           <Typography className={classes.price} variant="h5" gutterbottom>₦{detail.price}</Typography>
           <Typography className={classes.body}  guttertop variant="body">
           {
            full ? detail.content: detail.content.substring(0, 390) 
            } ... 
             </Typography>  { detail.content.length > 390 ?  content ? <ExpandMoreIcon onClick={fullClick} className={classes.button2}  /> : <ExpandLessIcon onClick={fullClick}   className={classes.button2} /> : null } 
            
            <br/>
            <br/>
            <br/>
            <br/>
             <Button  className={classes.button} variant="contained" color="primary" size="large" type="button" ><a  className={classes.a}  href= {`https://wa.me/2348134807598?text=Hello i want to buy ${detail.title} ₦${detail.price}`}>Buy Now<WhatsAppIcon className={classes.whatsapp} /></a></Button>
             <Link className={classes.back}   to="/ebooks" ><ArrowBackIcon /></Link>
         </Grid>
   
          
        
         </Grid>
        
         <Grid></Grid>
         
       
         </Card> 

       <Card  className={classes.card2}>


          {!!recommendedPosts?.length && (
        <div className={classes.section}>
           <Divider />
          <Typography gutterBottom variant="h4">You might also like:</Typography>
         
          <div className={classes.recommendedPosts}>
            {recommendedPosts?.map(({ title, name, message, likes, selectedFile, _id }) => (
              <div className={classes.grid}  style={{ cursor: 'pointer' }} onClick={() => openPost(_id)} key={_id}>
                
                <Grid  >
                <Grid>
               <img src = {selectedFile}  className={classes.selectedFile} />
               </Grid>

                <Grid>
                <Typography className={classes.typo1} variant="h6">{title}</Typography>
                </Grid>
                
     
               
                </Grid>
                
   

                {/* <img src={selectedFile} width="200px" /> */}
              </div>
            ))}
          </div>
        </div>
      )}


      </Card>
         {/* <Fullt /> */}
       </div>
   )
}


export default Content;

//  {/* {  items.map((item) =>{
//             <h3>{console.log(item.title)}</h3>
//            }) } */}
          
//            {detail.title}
//            <img  src={detail.selectedFile}/>

 //     //   const {name, price, media, quantity, description} =data
    //     //   console.log(name, price, media, quantity, description)
    //     //  setDetail(
    //     //     {id,
    //     //     name, 
        //     quantity,
        //     description,
        //     src: media.source,
        //     price : price.formatted_with_symbol,}
        //  )
        //  setLoading(false)
    //   }
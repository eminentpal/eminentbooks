import { Button, ButtonBase, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@material-ui/core";
import React from "react"
import { Link, useHistory } from "react-router-dom";
import useStyles from "./ebookStyles"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';



function Ebook ({book}){

    // const big = 30

  const history = useHistory()


    const classes = useStyles()
   


    const openPost = () =>{
      history.push(`/ebooks/${book._id}`)
    }
   
    return ( < >
              <Card className={classes.card} raised elevation={6}>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
      >
        <CardMedia className={classes.media} image={book.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={book.title} />
        <div className={classes.overlay}>
          <Typography variant="h6">book</Typography>
          <Typography variant="body2">16pm</Typography>
        </div>
       
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{`#${book.price} `}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{book.title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{book.content.split(' ').splice(0, 20).join(' ')}...</Typography>
        </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" >
         Like
        </Button>
       
      </CardActions>
    </Card> 
            </>
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
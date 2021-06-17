import React from "react"
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import useStyles from "./styles";
import { useDispatch } from "react-redux";


const Post = ({post, setCurrentId}) => {
    const classes = useStyles();

    const dispatch = useDispatch()
  
    return (
       <Card className= {classes.card }>
        <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
        <div className={classes.overlay} >
            <Typography variant="h6" >{post.creator}</Typography>
            <Typography variant ='body2'>{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.details}>
         <Typography variant="body" color="textSecondary">{post.tags.map((tag) =>`#${tag} `)}</Typography>
         
        </div>
        <Typography className={classes.title} variant="h5" gutterBottom >{post.title}</Typography> 
        <CardContent>
        <Typography variant="body2" color="textSecondary" component='p' >{post.content}</Typography>
        </CardContent>

       </Card> 
    )
}

export default Post
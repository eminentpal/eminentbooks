import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'
import { Grid, CircularProgress } from '@material-ui/core'
import useStyles from "./styles";



const Posts = () => {
  const classes = useStyles()
    const posts = useSelector(state => state.posts)
    const post = useSelector(state => state.post)
 
    console.log(posts)
    return (
        !posts.length ? <CircularProgress className={classes.circular} /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              {posts.map((post) => (
                <Grid key={post.id} item xs={12} sm={6}> 
                  <Post  post={post} />
               </Grid>
              ))}
            </Grid>
        )
        
    )
}

export default Posts

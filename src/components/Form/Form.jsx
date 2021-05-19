import { Paper, Typography , TextField, Button} from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from './styles'
import FileBase from 'react-file-base64';

import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/posts'

const Form = () => {

    const classes = useStyles();

    const [postData, setPostData] = useState({
        title: '',
        content:'',
        price: '',
        selectedFile: '',
        category:'',
        tags:'',

    })

 const dispatch = useDispatch()

const handleSubmit = (e) => {
   e.preventDefault()
   dispatch(createPost(postData))
}

const clear = () => {

}
    return (
        <>
        <Paper className={classes.paper}>
        <form onSubmit={handleSubmit} autoComplete= "off" noValidate className={`${classes.form} ${classes.root}`} >
           <Typography>Create Post</Typography>
         <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData,  title:e.target.value})}   />
         <TextField name="content" variant="outlined" label="Content" fullWidth value={postData.content} onChange={(e) => setPostData({ ...postData,  content: e.target.value})}   />
         <TextField name="price" type="number" variant="outlined" label="Price" fullWidth value={postData.price} onChange={(e) => setPostData({ ...postData, price: e.target.value})}   />
         <TextField name="category" variant="outlined" label="Category" fullWidth value={postData.category} onChange={(e) => setPostData({ ...postData,  category: e.target.value})}   />
         <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData,  tags: e.target.value})}   />
        
         <div className={classes.fileInput} >
           <FileBase 
              type="file"
              multiple={false} 
              onDone={({base64}) => setPostData({... postData, selectedFile: base64})}
           />

           
           </div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
          <Button  variant="contained" color="secondary" size="large" onClick={clear} fullWidth >Clear</Button>
        
        </form>
         
        </Paper>
        </>
    )
}

export default Form

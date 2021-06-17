import express from 'express'
import {getPosts, createPost,getPostsBySearch, findPost} from '../controllers/posts.js'

const router = express.Router();
router.get('/', getPosts)
router.post('/', createPost);
router.get('/search', getPostsBySearch)
router.get('/:id', findPost);



export default router;
import mongoose from 'mongoose';

import postContent from '../models/postContent.js';


 export const getPosts = async (req, res) =>  {
    const { page } = req.query;
    
    try {
        const LIMIT = 6;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page

        const total = await postContent.countDocuments({});
        const posts = await postContent.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}





// {
//     try {
//         const postContents = await postContent.find()
//         res.status(200).json(postContents);
//     } catch (error) {
//         res.status(401).json({message:error});
//     }
// }


export const createPost = async (req, res) => {
    const post = req.body;
        const newPost = new postContent(post);
    
    try {
        
       await newPost.save()
       res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message:error});
    }
}

export const findPost = async (req, res) => {
    const {id }= req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send('No post with that id');
    }

    else {
        const postId = await postContent.findById(id)
       // when you are looking for a post always save the post found in a const then store it in res.json(foundpost) just like below else when
       //you try to fetch the post it wont work.
    res.json(postId)
    console.log('found') 
}

}


//SEARCH POSTS

export const getPostsBySearch = async (req, res) => {


    const { searchQuery, tags } = req.query;
    
    try{

   const title = new RegExp(searchQuery, "i");
   
   const posts = await postContent.find({$or : [{title}, {tags: {$in: tags.split(',')}}]})
   res.json({ data: posts });

   console.log("find")

    } catch (error) {
    res.status(404).json({message:error.message});
    console.log("not found")
    }
}


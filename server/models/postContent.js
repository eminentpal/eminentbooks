import mongoose from 'mongoose';


const postSchema = mongoose.Schema({
    title: String,
    content: String,
    price : Number,
    selectedFile: String,
    category: String,
    tags:[String],
    createdAt:{
        type: Date,
        default: new Date()
    },

}) 

const postContent = mongoose.model('postContent',postSchema);

export default postContent;
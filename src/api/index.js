import axios from 'axios';

const url = 'https://eminentbookserver.herokuapp.com/posts';

// export const fetchPosts = () => axios.get(url);

export const fetchPosts = (page) => axios.get(`${url}?page=${page}`);
export const createPost = (newPost) => axios.post(url, newPost);
export const fetchPost = (id) => axios.get(`${url}/${id}`);
export const fetchPostsBySearch = (searchQuery) => axios.get(`http://localhost:4000/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);



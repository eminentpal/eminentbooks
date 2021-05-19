import * as api from '../api';
import { CREATE, FETCH_ALL, FIND } from '../constants/actionTypes';


export const getPosts = () => async (dispatch) => {
    try {
       const {data} = await api.fetchPosts();
       dispatch ({type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
    const {data} = await api.createPost(post)
    dispatch({type: CREATE, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const findPost = (id) => async (dispatch) => {
    try {
     await api.fetchPost(id);
       dispatch ({type: FIND, payload: id});
    } catch (error) {
        console.log(error)
    }
}
import * as api from '../api';
import { CREATE, FETCH_ALL, FIND, START_LOADING, END_LOADING , FETCH_BY_SEARCH} from '../constants/actionTypes';


export const getPosts = (page) => async (dispatch) => {
   
   
   try {
    // dispatch({ type: START_LOADING });
    const { data: { data, currentPage, numberOfPages } } = await api.fetchPosts(page);

    dispatch({ type: FETCH_ALL, payload: { data, currentPage, numberOfPages } });
    console.log(data)
    
    // dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
    // try {
    //    const {data} = await api.fetchPosts();
    //    dispatch ({type: FETCH_ALL, payload: data});
    // } catch (error) {
    //     console.log(error)
    // }
}


export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
    //   dispatch({ type: START_LOADING });
      const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
  
      dispatch({ type: FETCH_BY_SEARCH, payload:  data });
      console.log(data)
    //   dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };

// export const getPostsBySearch = (searchQuery) => async (dispatch) => {
//     try {
//         // dispatch({ type: START_LOADING });
//         const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
//          console.log(data)
//         // dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
//         // dispatch({ type: END_LOADING });
//       } catch (error) {
//         console.log(error);
//         console.log("not seen")
//       }
// }


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
    const {data} = await api.fetchPost(id);
       dispatch ({type: FIND, payload: data});
       console.log (data)
    } catch (error) {
        console.log(error)
    }
}
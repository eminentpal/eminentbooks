
import { CREATE, FETCH_ALL, FIND ,FETCH_BY_SEARCH,} from "../constants/actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return { ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      }
           case FETCH_BY_SEARCH:
           return {...state, posts: action.payload}
        case FIND:
            return  {...state, post:action.payload};

            case CREATE:
                return [...state, action.payload]
    
        default:
            return state;
    }
}



// import { CREATE, FETCH_ALL, FIND ,FETCH_BY_SEARCH,} from "../constants/actionTypes";

// export default (posts = [], action) => {
//     switch (action.type) {
//         case FETCH_ALL:
//            
//       return   action.payload,
//       
//            case FETCH_BY_SEARCH:
//            return action.payload;
//         case FIND:
//             return action.payload;

//             case CREATE:
//                 return [...posts, action.payload]
    
//         default:
//             return posts;
//     }
// }
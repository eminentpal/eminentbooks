
import { CREATE, FETCH_ALL, FIND } from "../constants/actionTypes";

export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case FIND:
            return action.payload;

            case CREATE:
                return [...posts, action.payload]
    
        default:
            return posts;
    }
}
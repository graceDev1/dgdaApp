import { GET_FORUM, POST_FORUM } from '../actions/types';

const initialState = {
    forums: [],
    forum: {}
}


export default function(state=initialState, action){
    switch(action.type){
        case GET_FORUM:
            return{
                ...state,
                forums: action.payload
            }
        case POST_FORUM:
            return{
                ...state,
                forum: [...state.forums, action.payload]
            }
        default:
            return state;
    }
}
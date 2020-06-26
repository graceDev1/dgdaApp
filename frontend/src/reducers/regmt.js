import {GET_POST, POST_USER} from "../actions/types.js";


const initialState ={
    posts: [],
    users : []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_POST:
            return {
                ...state,
                posts: action.payload
            }
        case POST_USER:
        return{
            ...state,
            users : [...state.users, action.payload]
        }
            default:
                return state;
    }
}
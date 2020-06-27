import {GET_POST} from "../actions/types.js";


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
       
            default:
                return state;
    }
}
import axios from 'axios';

import { GET_FORUM, POST_FORUM} from './types';


export const getForum = () => dispatch=>{
    axios.get('/forum/')
    .then(res => {
        dispatch({
            type: GET_FORUM,
            payload: res.data
        })
    })
    .catch(err => console.log(err));
}


export const postForum = (title,content,user) => dispatch=>{
      // headers
      const config = {
        headers:{
            'Content-type': 'application/json'
        }
    }
    const body = JSON.stringify({title,content,user});
    axios.post('/forum/',body,config)
    .then(res => {
        dispatch({
            type: POST_FORUM,
            payload: res.data
        })
    })
    .catch(err=> console.log(err));
}
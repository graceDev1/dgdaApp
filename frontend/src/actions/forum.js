import axios from 'axios';

import { GET_FORUM, POST_FORUM} from './types';


export const getForum = () => dispatch=>{
    axios.get('/api/forum/')
    .then(res => {
        dispatch({
            type: GET_FORUM,
            payload: res.data
        })
    })
    .catch(err => console.log(err));
}


export const postForum = (title,content) => dispatch=>{
      // headers
      const config = {
        headers:{
            'Content-type': 'application/json'
        }
    }
    const body = JSON.stringify({title,content});
    axios.post('/api/forum/',body,config)
    .then(res => {
        dispatch({
            type: POST_FORUM,
            payload: res.data
        })
    })
    .catch(err=> console.log(err));
}
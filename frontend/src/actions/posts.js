import axios from 'axios';

import { GET_POST } from './types';

// GET POST

export const getPost = ()=> dispatch=>{
    axios.get('/api/regl/')
    .then(res =>{
        dispatch({
            type: GET_POST,
            payload: res.data
        })
    })
    .catch(err=>console.log(err));
}




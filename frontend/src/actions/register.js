import axios from 'axios';

import { POST_USER} from './types';

export const addUser = (user)=> dispatch=>{
    axios.get('/api/regl/')
    .then(res =>{
        dispatch({
            type: POST_USER,
            payload: res.data
        })
    })
    .catch(err=>console.log(err));
}

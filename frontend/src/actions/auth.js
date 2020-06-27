import axios from 'axios';

import {USER_LOADED, USER_LOADING,AUTH_ERROR} from './types';
import { returnErrors } from './messages';

// CHECK THE TOKEN AND LOAD USER

export const loadUser = () =>( dispatch, getState)=>{
    // user loading
    dispatch({type: USER_LOADING});

    //Get token from state
    const token = getState().auth.token;

    // headers
    const config = {
        headers:{
            'Content-type': 'application/json'
        }
    }
    // if token , add to headers config
    if(token){
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios.get('/api/auth/user',config)
    .then(res=>{
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.respnse.status));
        dispatch({
            type: AUTH_ERROR
        })
    }) 
}
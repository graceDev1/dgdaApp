import axios from 'axios';

import {
    USER_LOADED, 
    USER_LOADING,
    AUTH_ERROR, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
    } from './types';

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

    axios.get('/users/',config)
    .then(res=>{
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR
        })
    }) 
}


// login user

export const loginUser = (username, password) =>dispatch=>{
   
    // headers
    const config = {
        headers:{
            'Content-type': 'application/json'
        }
    }
    
    // request body
    const body = JSON.stringify({username, password})
    // axios http request
    axios.post('/token/login/',body,config)
    .then(res=>{
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.respnse.status));
        dispatch({
            type: LOGIN_FAIL
        })
    }) 
}

// USER LOG OUT

export const logout = () =>( dispatch, getState)=>{
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

    axios.post('/token/logout/',null,config)
    .then(res=>{
        dispatch({
            type: LOGOUT_SUCCESS,
            payload: res.data
        });
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
    }) 
}




// login user

export const register = ({email,username,password,re_password}) =>dispatch=>{
   
    // headers
    const config = {
        headers:{
            'Content-type': 'application/json'
        }
    }
    
    // request body
    const body = JSON.stringify({email,username,password,re_password})
    axios.post('/users/',body,config)
    .then(res=>{
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: REGISTER_FAIL
        })
    }) 
}



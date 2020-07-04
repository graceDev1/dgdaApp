import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';


import Header from './layout/Header';
import Post from './pages/Post';
import Home from './pages/Home'
import Forum from './pages/Forum';
import Login from './Auth/Login';
import Register from './Auth/Register';
import PrivateRoute from './common/PrivateRoute';
import PostForum from './pages/PostForum';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';




// alert options 
const alertOption = {
    timeOut: 3000,
    position: 'top center'
}

class App extends Component{

  
    componentDidMount() {
        store.dispatch(loadUser());
      }

    render(){
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOption}>
                    <Router>
                    <Header/>
                    <div className="container mt-4">
                        <Switch> 
                            <Route exact path="/" component={Home}/>
                            <PrivateRoute exact path="/post" component={Post}/>
                            <PrivateRoute exact path="/forum" component={Forum}/>
                            <PrivateRoute exact path="/addForum" component={PostForum}/>
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/login" component={Login}/>
                        </Switch>
                        
                    </div>
                    </Router>
                </AlertProvider>
            </Provider>
            
        
        )
    }
}

//https://www.valentinog.com/blog/drf/
ReactDOM.render(<App/>, document.getElementById('app'));
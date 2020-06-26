import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Header from './layout/Header';
import Post from './pages/Post';
import { Provider } from 'react-redux';
import store from '../store';
import Alert from './layout/Alert';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// alert options 
const alertOption = {
    timeOut: 3000,
    position: 'top center'
}

class App extends Component{
    render(){
        return (
            <Provider store={store}>
                    <Router>
                    <React.Fragment>
                    <Header/>
                    <div className="container mt-4">
                    
                    <Post/>
                    </div>
                    </React.Fragment>
                    </Router>
                
            </Provider>
            
        
        )
    }
}

//https://www.valentinog.com/blog/drf/
ReactDOM.render(<App/>, document.getElementById('app'));
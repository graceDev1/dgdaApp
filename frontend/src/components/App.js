import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Home from './pages/Home';
import Forum from './pages/Forum';
import Post from './pages/Post';
import { Provider } from 'react-redux';
import store from '../store';
class App extends Component{
    render(){
        return (
            <Provider store={store}>
                <React.Fragment>
                <Header/>
                <div className="container"> 
                <Home/>
                <Forum/>
                <Post/>
                </div>
                </React.Fragment>
            </Provider>
            
        
        )
    }
}

//https://www.valentinog.com/blog/drf/
ReactDOM.render(<App/>, document.getElementById('app'));
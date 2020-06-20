import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Home from './pages/Home';
import Forum from './pages/Forum';
import Post from './pages/Post';
class App extends Component{
    render(){
        return (
            <React.Fragment>
                <Header/>
                <div className="container"> 
                <Home/>
                <Forum/>
                <Post/>
                </div>
            </React.Fragment>
        
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
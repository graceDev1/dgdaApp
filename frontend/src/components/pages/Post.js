import React, { Component, Fragment } from 'react'
import  { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPost } from '../../actions/posts';



export class Post extends Component {
    static propTypes ={
        posts : PropTypes.array.isRequired
    }

    componentDidMount(){
        this.props.getPost();
    }

   
    render() {
        return (
            <Fragment>
                <h2>Les textes reglementaire disponible</h2>
                <table className="table tables-triped">
                <thead>
                </thead>
                <tbody>
                    {this.props.posts.map(posts =>(
                        <tr key={posts.id}>
                            <td> Publier le {posts.date_post}</td>
                            <td>{posts.content}</td>
                            <td><button to={posts.file} className="btn btn-primary btn-sm">
                                Telecharger le PDF</button></td>
                        </tr>
                    ))}
                </tbody>        
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state =>({
    posts : state.posts.posts
});


export default connect(mapStateToProps, { getPost })(Post); 

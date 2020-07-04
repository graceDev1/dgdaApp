import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { postForum } from '../../actions/forum';
import PropTypes from 'prop-types';


export class PostForum extends Component {

    state = {
        title:'',
        message:'',
    }
    onChange = (e) => this.setState({[e.target.name]: [e.target.value]});

    onSubmit = (e) =>{
        e.preventDefault();
        console.log("add forum")
    }


    render() {
        return (
            <Fragment>
                <h2 className="mb-6"> Ajouter vos Discution ici</h2>
                <form onSubmit={this.onSubmit} className="form">
                    <div className="form-group">
                        <input name="title" value={title} onChange={this.onChange} className="form-control" placeholder="Le titre de votre post"/>
                    </div>
                    <div className="form-group">
                        <textarea name="message" value={message} onChange={this.onChange}  className="form-control" placeholder="contenu"></textarea>
                    </div>
                    <button type="submit" className="btn btn-success">Poster</button>
                </form>
            </Fragment>
        )
    }
}

export default connect(null,{ postForum })(PostForum)

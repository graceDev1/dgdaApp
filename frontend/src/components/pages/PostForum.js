import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { postForum } from '../../actions/forum';
import PropTypes from 'prop-types';


export class PostForum extends Component {

    state = {
        title:'',
        message:''
    }
    static propTypes = {
        postForum: PropTypes.func.isRequired
    }
    onChange = (e) => this.setState({[e.target.name]: [e.target.value]});

    onSubmit = (e) =>{
        e.preventDefault();
        let newpost = {
            title,
            message
        }
        this.props.postForum(newpost);
       
    }


    render() {
        const { title, message} = this.state;
        if(this.props.postForum){
            return <Redirect to="/forum"/>
        }

        return (
            <Fragment>
                <h2 className="mb-6"> Ajouter vos Discution ici</h2>
                <form onSubmit={this.onSubmit} className="form">
                    <div className="form-group">
                        <input name="title" value={title} onChange={this.onChange} className="form-control" placeholder="Le titre de votre message"/>
                    </div>
                    <div className="form-group">
                        <textarea name="message" value={message} onChange={this.onChange}  className="form-control" placeholder="Message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-success">Ajouter discussion</button>
                </form>
            </Fragment>
        )
    }
}

export default connect(null,{ postForum })(PostForum)

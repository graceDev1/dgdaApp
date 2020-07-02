import React, {Component} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {register} from '../../actions/auth';
import { createMessage } from '../../actions/messages';
import { Link } from 'react-router-dom';


export class Register extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        password2: '' 
    }

    static propTypes = {
        register : PropTypes.func.isRequired,  
        isAuthenticated: PropTypes.bool,
        createMessage: PropTypes.func.isRequired
    }

    
    onSubmit = e => {
        e.preventDefault();
        const { password, password2} = this.state;
        if(password !== password2){
            this.props.createMessage({passwordNotMatch: 'password do not match'});
            console.log("is not matched ")
        }
        else{
            console.log("alert ");
        let newuser = {
            username,
            email,
            password,
        };
        this.props.register(newuser);
            
        }
        
        onChange = e => this.setState({[e.target.name]: e.target.value});
        
    }

    render() {
        const {username, email, password,password2} = this.state;
        return (
            <div className="col-md-6 m-auto">
            <div className="card card-body mt-5">
                <h2>Inscrivez-vous ici</h2>
                <form onSubmit={
                    this.onSubmit
                }>
                    <div className="form-group">
                        <input className="form-control" type="text" value={username} name="username" onChange={this.onChange} placeholder="Votre nom d'utilisateur"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="email" value={email} name="email" onChange={this.onChange}  placeholder="Votre Adresse E-mail"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" value={password} name="password" onChange={this.onChange}  placeholder="Votre Mot de passe"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" value={password2} name="password2" onChange={this.onChange}  placeholder="Confirmer le mot de passe"/>
                    </div>
                    <p>Deja un inscrit? <Link to="/login">Connectez-vous</Link></p>
                        <button className="btn btn-primary rounded" type="submit">Inscrit</button>
                       
                </form>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state=>({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {register, createMessage})(Register);

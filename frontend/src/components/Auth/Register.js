import React, {Component} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addUser} from '../../actions/register';


export class Register extends Component {

    state = {
        nom: '',
        prenom: '',
        email: '',
        password: ''
    }

    static propTypes = {
        addUser : PropTypes.func.isRequired,  
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();

        const {nom, prenom, email, password} = this.state;
        let user = {
            nom,
            prenom,
            email,
            password
        };
        this.props.addUser(user);
    }

    render() {
        const {nom, prenom, email, password} = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Inscrivez-vous ici</h2>
                <form onSubmit={
                    this.onSubmit
                }>
                    <div className="form-group">
                        <input className="form-control" type="text" value={nom} name="name" placeholder="Votre nom"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" value={prenom} name="prenom" placeholder="Votre prenom"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="email" value={email} name="email" placeholder="Votre Adresse E-mail"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" value={password} name="password" placeholder="Votre Mot de passe"/>
                    </div>
                        <button className="btn btn-primary" type="submit" name="register">Inscrit</button>
                </form>
            </div>
        )
    }
}



export default connect(null, {addUser})(Register);

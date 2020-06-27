import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Login extends Component {
    state = {
        username:'',
        password:''
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});


    render() {
        const { username, password } = this.state
        return (
            <div className="col-md-6 m-auto" >
                <div className="card card-body mt-5">
                    <h2>Connectez Vous Ici </h2>
                    <form className="form" action="">
                        <div className="form-group">
                            <input type="text" name="username" value={username} onChange={this.onChange} placeholder="Nom d'utilisateur" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" value={password} onChange={this.onChange} placeholder="Mot de passe" className="form-control"/>
                        </div>
                        <p>
                            Avez-vous Compte?<Link to="/register">S'inscrire</Link>
                        </p>
                        <button type="submit" className="btn btn-primary rounded">Connection</button>
                       
                    </form>
                </div>
            </div>
        )
    }
}

export default Login

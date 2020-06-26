import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Login extends Component {
    state = {
        email:'',
        password:''
    }


    render() {
        return (
            <div>
                <div className="card card-body">
                    <form className="form">
                        <div className="form-control">
                            <input type="text" name="email"/>
                        </div>
                        <div className="form-control">
                            <input type="password" name="passowrd"/>
                        </div>
                        <button className="btn btn-primary">Connection</button>
                        <div>
                            Avez-vous Compte?<Link to="/register">S'inscrire</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login

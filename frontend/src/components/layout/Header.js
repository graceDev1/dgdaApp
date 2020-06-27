import React, {Component} from 'react'
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-10">
                
                <Link className="navbar-brand" to="/">DGDA FORUM</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Accueil
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/post">Reglement</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/forum">Forum</Link>
                        </li>
                    </ul>

                </div>
                
            </nav>
        )
    }
}

export default Header

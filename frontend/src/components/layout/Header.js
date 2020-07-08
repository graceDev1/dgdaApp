import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { logout } from '../../actions/auth'

export class Header extends Component {

    static propTypes = {
        auth : PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }
    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks  = (
            <ul className="navbar-nav ml-auto">
                <span className="navbar-text mr-3">
                    <strong>{user ? `Welcome ${this.props.user.username}` : ''}</strong>
                </span>
            <li className="nav-item active">
                 <button onClick={this.props.logout} className="nav-link btn btn-info btn-sm text-light">
                     Deconnecter
                 </button>
            </li>
        </ul>
        );

        const authLog  = (
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                 <Link className="nav-link btn btn-info btn-sm text-light" to="/login">
                     Connecter
                 </Link>
            </li>
        </ul>
        );
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
                    { isAuthenticated ? authLinks : authLog }
                </div>
                
            </nav>
        )
    }
}

const mapStateToProps = state =>({
    auth : state.auth,
    user : state.user
})
export default connect(mapStateToProps,{ logout })(Header);

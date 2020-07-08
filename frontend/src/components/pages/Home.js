import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom';

export class Home extends Component {
    render() {
        return (
            <Fragment>
                <main role="main" className="container mt-4">
                    <div className="jumbotron">
                        <h1>Bienvenu sur le site de Text reglement de la DGDA </h1>
                        <p className="lead">Une site qui va permettre aux agents et aux utilisateur de se connecter et consulter le text reglementaire selon, ce qu'il recherche. le Forum du site permet aux utilisateurs de poster l
                        eurs points de vue sur tels ou tel autres texte reglementaire poster. </p>
                        <Link className="btn btn-lg btn-primary" to="/login" role="button">Aller sur le site &raquo;</Link>
                    </div>
                </main>
            </Fragment>
        )
    }
}

export default Home

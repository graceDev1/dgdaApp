import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom';

export class Home extends Component {
    render() {
        return (
            <Fragment>
                <main role="main" className="container mt-4">
                    <div className="jumbotron">
                        <h1>Bienvenu sur le site de Text reglement de la DGDA </h1>
                        <p className="lead">This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.</p>
                        <Link className="btn btn-lg btn-primary" to="/login" role="button">Go to Blopost &raquo;</Link>
                    </div>
                </main>
            </Fragment>
        )
    }
}

export default Home

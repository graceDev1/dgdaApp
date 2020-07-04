import React, { Component,Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getForum } from './../../actions/forum';

export class Forum extends Component {
    render() {
        return (
           <Fragment>
               <h2 className="mb-4 mt-4">Bienvenue sur votre forum <Link to='/addForum' className="btn btn-primary round float-right">Ajouter discution</Link></h2> 
                <table className="table tables-triped">
                <thead>
                </thead>
                <tbody>
                  
                </tbody>        
                </table>
           </Fragment>
        )
    }
}

export default connect() (Forum);

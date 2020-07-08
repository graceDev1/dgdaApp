import React, { Component,Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getForum } from './../../actions/forum';
import PropTypes from 'prop-types';

export class Forum extends Component {
    
    static propTypes = {
        getForum : PropTypes.func.isRequired,
        forums : PropTypes.array.isRequired

    }

    componentDidMount(){
        this.props.getForum();
    }

    render() {
        return (
           <Fragment>
               <h2 className="mb-4 mt-4">Bienvenue sur votre forum <Link to='/addForum' className="btn btn-primary round float-right">Ajouter discution</Link></h2> 
                <table className="table tables-triped">
                <thead>
                </thead>
                <tbody>
                {this.props.forums.map(forum =>(
                      <tr key={forum.id}>
                          <td><strong>{forum.subject}</strong>
                          <p>{forum.message}</p>
                          </td>
                      </tr>
                  ))}
                </tbody>        
                </table>
           </Fragment>
        )
    }
}

const mapSateToProps = (state) =>{
    return {
        forums : state.forums.forums
    }
}

export default connect(mapSateToProps,{ getForum }) (Forum);

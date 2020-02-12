import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Movie extends Component {

  /*control over prop types*/
  static propTypes = {
    /*shape() allows to pass in an object in which we can define the props and their types*/
    movie: PropTypes.shape({
      /* is Required will ensure that the prop value be supplied*/
      title: PropTypes.string.isRequired,

    })
  }

  /*in case the props is not supplied (and not required) the default prop vaule should be set*/
  // static defaultProps = {
  //   desc: 'Description not available'
  // }

  render(){
    return (
      <div>
        <h3>{this.props.movie.title}</h3>

      </div>
    )
  }
}

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// export default class SavedList extends Component {
//   constructor(props) {
//     super(props);
//   }
const SavedList = props => {
  // render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {/* {this.props.list.map(movie => ( */}
        {props.list.map(movie => (
          <NavLink to={`/movies/${movie.id}`}>
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        ))}
        <div className="home-button"><NavLink to="/">Home</NavLink></div>
      </div>
    );
  // }
}

export default SavedList;
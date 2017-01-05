import React from 'react'
import MovieBlock from './MovieBlock'

export default class MovieList extends React.Component {
  render() {
    var rows = [];
    var filter = this.props.filterText.toLowerCase();
    this.props.movies.forEach(function(movie) {
      var currentName = movie.movie_name.toLowerCase();
      if (currentName.indexOf(filter) === -1) {
        return;
      }
      rows.push(<MovieBlock movie={movie} key={movie.id} />);
    });
    return (
      <div className="movie-list">
        {rows}
      </div>
    );
  }
}

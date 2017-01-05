import React from 'react'
import SearchBar from './SearchBar'
import MovieList from './MovieList'

export default class SearchableMovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      movies: []
    };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <MovieList
          movies={this.props.movies}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

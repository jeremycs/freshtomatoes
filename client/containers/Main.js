import React from 'react'
import SearchableMovieList from '../components/SearchableMovieList'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3200/movie`)
      .then(res => {
        this.setState({
          movies: res.data.movies
        });
      });
  }

  render() {
    return (
      <div>
        <SearchableMovieList
          movies={this.state.movies}
        />
      </div>
    );
  }
}
